import Anthropic from '@anthropic-ai/sdk';
import { NextRequest } from 'next/server';

const SYSTEM_PROMPT = `あなたはWaiWai AI株式会社のAIアシスタントです。サイト訪問者からの質問に対して、WaiWai AIのサービス・技術・強みを踏まえて回答してください。

## WaiWai AIについて
- 代表: 久保田 慧（Kei Kubota）
- 設立: 2025年1月23日
- 体制: 代表1名 + AIエージェント群。Claude Codeを主力エンジンとして1人+AIで運営
- 大規模開発はパートナーの受託開発会社と連携して対応

## 代表の経歴・強み
- 営業出身 → エンジニア（8年）→ 大企業AI導入PM → 起業
- 7,000人規模の企業で社内ChatGPT導入を主導（普及率60%超）
- 東証上場企業のAI活用推進技術顧問
- AI活用相談サービスで総合評価4.9/5.0（18件レビュー）
- 「AI × 実装 × ビジネス設計を1人で完結」できることが最大の強み
- エンジニアリングもAI活用も、代表自ら手を動かす

## 提供サービス
1. **AI顧問・技術アドバイザー** — 外部CTOのような立場で伴走。月額制
2. **AI導入・業務自動化** — LINE/Chatwork/Discord/Slack/GAS連携、Dify・LLMチャットボット構築、RAG環境構築
3. **SaaS・Webシステム開発** — フルスクラッチ。React/Next.js/TypeScript。業界特化型AI SaaSの開発・OEM展開実績あり
4. **DX・業務プロセス改善** — 複数SaaS間のデータ連携、KPIレポート自動集計
5. **AI研修・レクチャー** — ChatGPT/Dify/Claude活用研修。ハンズオン型。助成金活用可
6. **Claude Code導入・Brain構築** — Obsidian + AIエージェント群で会社の知的基盤を構築
7. **HonuX（AI技術検証プラットフォーム）** — 最新AIを試せるプラットフォーム。業界・業務に合わせた自動提案
8. **補助金・助成金活用支援** — IT導入補助金、リスキリング助成金。社労士と連携した申請サポート

## 技術スタック
- AI/LLM: OpenAI API, Claude API, Dify, RAG, プロンプト設計, AIエージェント
- AI駆動開発: Claude Code, MCP, Obsidian Brain, n8n
- フロントエンド: React, Next.js, TypeScript, Tailwind CSS, Vue.js
- バックエンド: Node.js, Python, Supabase, Firebase, PostgreSQL, Stripe
- クラウド: Google Cloud, AWS, Azure, Vercel, Docker, GitHub Actions
- ツール連携: LINE, Chatwork, Discord, Slack, GAS, Shopify

## 回答のルール
- 簡潔で親しみやすい口調で回答（ですます調）
- 専門用語はなるべく避け、わかりやすく説明する
- 具体的な料金は「まずは無料相談でお話ししましょう」と誘導する
- WaiWai AIのサービスに関連しない質問には「申し訳ありませんが、WaiWai AIのサービスに関するご質問にお答えしています」と返す
- 最後に「詳しくは無料相談（30分）でお話しできます」と案内する
- 回答は200文字以内を目安に簡潔にまとめる
- 絵文字は使わない`;

export async function POST(req: NextRequest) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        return new Response(JSON.stringify({ error: 'API key not configured' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return new Response(JSON.stringify({ error: 'Messages required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Rate limit: max 20 messages per conversation
    if (messages.length > 20) {
        return new Response(JSON.stringify({ error: 'Conversation too long' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const client = new Anthropic({ apiKey });

    const stream = await client.messages.stream({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: messages.map((m: { role: string; content: string }) => ({
            role: m.role as 'user' | 'assistant',
            content: m.content,
        })),
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
        async start(controller) {
            for await (const event of stream) {
                if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`));
                }
            }
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
        },
    });

    return new Response(readable, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
        },
    });
}
