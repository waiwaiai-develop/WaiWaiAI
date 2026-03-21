'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

const knowledgeBase = [
  {
    keywords: ['料金', '価格', '費用', 'いくら', '見積', 'コスト'],
    answer:
      'サービス料金の目安です：\n\n🤖 AIエージェント構築：30万円〜\n⚙️ フルスクラッチ開発：30万円〜\n🔄 DX/RPA自動化：15万円〜\n💡 AI/ITコンサルティング：5万円〜\n\n要件に応じて詳細なお見積もりをご提示します。まずはお気軽にご相談ください！',
  },
  {
    keywords: ['サービス', '何ができる', 'できること', '事業', '提供'],
    answer:
      'WaiWai AIでは以下のサービスを提供しています：\n\n🤖 AI導入コンサル — 最適なAIツールの選定から社内浸透まで\n⚙️ 業務自動化 — 繰り返し作業をAIとRPAで効率化\n💻 AIシステム開発 — 御社専用のAIシステムをスピーディに開発\n🎯 AI顧問パック — 専属のAI専門家が継続的に支援\n\n詳しくはサービスページをご覧ください！',
  },
  {
    keywords: ['会社', '概要', '誰', 'どんな会社', 'WaiWai', 'について'],
    answer:
      'WaiWai AI 株式会社は、AIネイティブ開発会社です。\n\n📍 所在地：東京都渋谷区\n🎯 事業：AIシステム開発・導入コンサルティング・DX推進\n💪 強み：アドバイスだけでなく、AIエージェントによる実装までワンストップで対応\n\n「AIを味方に、未来を豊かに。」をビジョンに掲げています。',
  },
  {
    keywords: ['実績', '事例', '導入', '成果', '効果'],
    answer:
      '導入企業様での実績をご紹介します：\n\n📊 問い合わせ対応工数 80%削減（月200時間の余白創出）\n📈 月間成約率 250%向上\n✅ データ入力ミス 0件化\n\nコンサルティング、士業、人材、不動産、製造業など幅広い業種で実績があります。',
  },
  {
    keywords: ['期間', 'どのくらい', 'いつ', '納期', 'スケジュール'],
    answer:
      '導入までの目安期間です：\n\n🤖 AIエージェント構築：2〜4週間\n🔄 DX/RPA自動化：1〜2週間\n💻 フルスクラッチ開発：1〜3ヶ月\n\nMVP（プロトタイプ）は最速1週間で提供可能なケースもあります！',
  },
  {
    keywords: ['セキュリティ', '安全', '情報漏洩', 'データ', '保護'],
    answer:
      'セキュリティには万全の対策を講じています：\n\n🔒 Azure OpenAIやAWSの閉域網で運用\n🛡️ 社外秘情報の漏洩防止ガードレールを厳密に設計\n📄 RAGシステムでは社内ドキュメントのみを参照\n\n安心してご利用いただける環境を構築します。',
  },
  {
    keywords: ['連携', 'Slack', 'kintone', 'API', 'システム', '既存'],
    answer:
      'はい、主要なSaaSとの連携が可能です：\n\n✅ Slack / Microsoft Teams\n✅ kintone / Salesforce\n✅ Zendesk / freee\n✅ その他API連携可能なサービス\n\n既存のワークフローへスムーズに組み込めます。',
  },
  {
    keywords: ['相談', '問い合わせ', '連絡', 'コンタクト', '無料'],
    answer:
      'お気軽にご相談ください！初回のご相談は無料です。\n\nページ下部のお問い合わせフォームから、またはお電話でもご連絡いただけます。\n\n「こんなことできる？」という段階からでも大歓迎です！',
  },
  {
    keywords: ['ATP', 'トランスフォーメーション', 'パートナー', '顧問', '月額'],
    answer:
      'AIトランスフォーメーション・パートナー（ATP）は、御社専属のAI部門を月額で提供するサービスです：\n\n🟢 Entry（月10万円）— 業務1つをAI化 + 月1回MTG\n🔵 Standard（月25万円）— 月2回MTG + 月3件自動化実装\n🟣 Transform（月50万円）— 週1 MTG + 無制限実装 + 社内育成\n\n詳しくは /atp ページをご覧ください！',
  },
];

const suggestedQuestions = [
  '料金を教えてください',
  'どんなサービスがありますか？',
  '導入実績を知りたい',
  '会社について教えてください',
];

function findAnswer(input: string): string {
  const normalizedInput = input.toLowerCase();

  for (const entry of knowledgeBase) {
    if (entry.keywords.some((kw) => normalizedInput.includes(kw))) {
      return entry.answer;
    }
  }

  return 'ご質問ありがとうございます！\n\nより詳しくお答えするために、ぜひお問い合わせフォームからご連絡ください。担当者が丁寧にご対応いたします。\n\n💡 よくあるご質問：\n・料金について\n・サービス内容\n・導入実績\n・セキュリティ\n\n上記のキーワードでもお気軽にお尋ねください！';
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: 'こんにちは！WaiWai AIへようこそ 🤖\n\nサービス内容や料金など、お気軽にご質問ください。下のボタンからも選べます！',
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: findAnswer(messageText),
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
            aria-label="チャットを開く"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">WaiWai AI アシスタント</p>
                  <p className="text-xs text-blue-100">お気軽にご質問ください</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                aria-label="チャットを閉じる"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.isBot && (
                    <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-blue-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.isBot
                        ? 'bg-slate-100 text-slate-800 rounded-tl-md'
                        : 'bg-blue-600 text-white rounded-tr-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {!msg.isBot && (
                    <div className="w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />

              {/* Suggested Questions (only show at start) */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="px-3 py-1.5 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-slate-200 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="メッセージを入力..."
                  className="flex-1 px-4 py-2.5 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="送信"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
