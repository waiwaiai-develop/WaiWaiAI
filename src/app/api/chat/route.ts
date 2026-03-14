import Anthropic from '@anthropic-ai/sdk';

const COMPANY_KNOWLEDGE = `## WaiWai AI について
- AIネイティブ開発会社。2025年1月設立。代表: 久保田 慧
- 所在地: 東京都渋谷区
- ミッション: 「AIを味方に、未来を豊かに。」
- 社名の由来: ハワイ語で「豊かさ」を意味する

## 提供サービス
1. **カスタマーサポート完全無人化** - 自律型AIエージェント構築。月間最大200時間のコスト削減
2. **フルスクラッチ自動化システム開発** - 最速1週間でMVP提供。React/Next.js等のモダン技術
3. **DX自動化・RPA** - SaaS間データ同期、定型業務自動化。作業時間90%削減
4. **AI/ITコンサルティング** - 経営層向け。無駄なITコスト削減、数百万〜数千万の利益改善

## 料金感（概算目安）
- AIチャットボット導入: 月額10万円〜
- 業務自動化（RPA）: 50万円〜
- Webシステム開発: 100万円〜
- AIシステム開発: 200万円〜
- コンサルティング: 月額20万円〜
※正式な見積もりは個別ヒアリング後に提示

## 実績
- コンサルティング会社: 月200時間の対応コスト削減
- 人材マッチング企業: 成約率250%向上
- 月間50,000件以上の処理実績
- データ入力ミス0件達成`;

function buildSystemPrompt(context?: ChatContext): string {
    const { attribute, painPoint, industry, mode } = context || {};

    if (mode === 'empathy') {
        return `あなたはWaiWai AI株式会社の最強の営業AIです。

${COMPANY_KNOWLEDGE}

## あなたの役割
お客様が選んだ「お悩み」に対して、共感し、実績ベースの事例をチラ見せして「もっと知りたい」と思わせること。

## お客様情報
- 属性: ${attribute || '不明'}
- お悩み: ${painPoint || '不明'}

## 対話ルール
- 最初の一文で「あー、それめちゃくちゃ多い相談なんですよ」的に共感する
- 次に、関連する実績を1つだけ具体的に出す（数字付き）
- 最後に「もうちょっと詳しくお話できますよ」的に興味を引く
- 全体で2〜3文。短くインパクト重視
- フレンドリーだけどプロフェッショナル。軽すぎず重すぎず
- 絶対に売り込まない。「すごい実績あるんですよ」ではなく「こういう結果が出たケースがあります」`;
    }

    if (mode === 'proposal') {
        return `あなたはWaiWai AI株式会社の最強の営業AIです。

${COMPANY_KNOWLEDGE}

## あなたの役割
お客様の情報をもとに、パーソナライズされた提案サマリーをJSON形式で出力すること。

## お客様情報
- 属性: ${attribute || '不明'}
- お悩み: ${painPoint || '不明'}
- 業種: ${industry || '不明'}

## 出力ルール
以下のJSON形式のみを出力してください。それ以外のテキストは一切不要です。
\`\`\`json
{
  "challenge": "お客様の課題を1文で要約",
  "solution": "提案するソリューション名（サービス名）",
  "solutionDetail": "ソリューションの具体的な内容を1〜2文で",
  "estimatedSaving": "見込まれるコスト削減・効果（例: 月150時間の工数削減）",
  "timeline": "導入目安期間（例: 最短2週間）",
  "caseResult": "類似事例の実績数値（例: 成約率250%向上）",
  "estimatedCost": "概算費用レンジ（例: 月額10万円〜）"
}
\`\`\`

## 重要
- 実績データは上記の会社実績を参考に、お客様の業種・課題に合わせてカスタマイズ
- 費用は料金感を参考に現実的な金額を提示
- 大げさにしすぎず、信頼感のある数字を出す`;
    }

    // Default: chat mode (free conversation)
    return `あなたはWaiWai AI株式会社の営業AIアシスタントです。
フレンドリーかつプロフェッショナルに対応します。

${COMPANY_KNOWLEDGE}

## お客様情報
${attribute ? `- 属性: ${attribute}` : ''}
${painPoint ? `- お悩み: ${painPoint}` : ''}
${industry ? `- 業種: ${industry}` : ''}

## 対話ルール
- 日本語で丁寧かつフランクに対応
- 課題をヒアリングし、最適なソリューションを提案
- 概算見積もりを聞かれたら料金感を参考に回答（あくまで目安と伝える）
- 具体的な商談が必要な場合は無料相談の予約を案内
- 回答は簡潔に。1回の返答は3〜5文程度に収める
- 技術的な質問にも答えられるが、競合他社の批判はしない
- 不明なことは正直に「詳しくはお問い合わせください」と案内
- 最強の営業マンとして、自然にクロージング（無料相談予約）に持っていく`;
}

interface ChatContext {
    attribute?: string;
    painPoint?: string;
    industry?: string;
    mode?: 'empathy' | 'proposal' | 'chat';
}

export async function POST(req: Request) {
    try {
        const apiKey = process.env.ANTHROPIC_API_KEY;
        if (!apiKey) {
            return new Response(
                JSON.stringify({ error: 'AIアシスタントは現在準備中です' }),
                { status: 503, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const { messages, context } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return new Response(
                JSON.stringify({ error: 'メッセージが不正です' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const systemPrompt = buildSystemPrompt(context as ChatContext | undefined);
        const client = new Anthropic({ apiKey });

        const stream = await client.messages.stream({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1024,
            system: systemPrompt,
            messages: messages.map((m: { role: string; content: string }) => ({
                role: m.role as 'user' | 'assistant',
                content: m.content,
            })),
        });

        const encoder = new TextEncoder();
        const readableStream = new ReadableStream({
            async start(controller) {
                for await (const event of stream) {
                    if (event.type === 'content_block_delta') {
                        const delta = event.delta;
                        if ('text' in delta) {
                            controller.enqueue(
                                encoder.encode(`data: ${JSON.stringify({ text: delta.text })}\n\n`)
                            );
                        }
                    }
                }
                controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                controller.close();
            },
        });

        return new Response(readableStream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                Connection: 'keep-alive',
            },
        });
    } catch (error) {
        console.error('Chat API error:', error);
        return new Response(
            JSON.stringify({ error: 'エラーが発生しました' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
