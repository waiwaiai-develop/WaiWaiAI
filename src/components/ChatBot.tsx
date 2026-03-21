'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

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
  { label: '料金について', icon: '💰' },
  { label: 'サービス内容', icon: '🤖' },
  { label: '導入実績', icon: '📊' },
  { label: '会社概要', icon: '🏢' },
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

const ease = [0.16, 1, 0.3, 1] as const;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: 'こんにちは！WaiWai AI へようこそ。\n\nサービスや料金について、何でもお気軽にどうぞ。',
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

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
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: findAnswer(messageText),
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="チャットを開く"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
            {/* Button */}
            <span
              className="relative flex items-center gap-2 px-5 py-3.5 rounded-full text-white text-sm font-medium shadow-[0_8px_32px_-4px_rgba(37,99,235,0.5)]"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">AIに質問する</span>
              <MessageCircle className="w-4 h-4 sm:hidden" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-3rem)] flex flex-col overflow-hidden rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              boxShadow:
                '0 24px 80px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255,255,255,0.6) inset, 0 -1px 0 0 rgba(255,255,255,0.3) inset',
            }}
          >
            {/* Header - Gradient glass */}
            <div
              className="relative px-5 py-4 flex items-center justify-between shrink-0 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(37,99,235,0.95) 0%, rgba(14,165,233,0.9) 100%)',
              }}
            >
              {/* Subtle shimmer */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 55%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  animation: 'glass-shimmer 6s ease-in-out infinite',
                }}
              />
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white tracking-tight">WaiWai AI</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    <p className="text-[11px] text-blue-100">オンライン</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white/20 transition-all duration-200"
                aria-label="チャットを閉じる"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scrollbar-none">
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i === 0 ? 0 : 0.05, ease }}
                  className={`flex gap-2.5 ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.isBot && (
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-1"
                      style={{
                        background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                        border: '1px solid rgba(59,130,246,0.15)',
                      }}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-4 py-3 text-[13px] leading-relaxed whitespace-pre-line ${
                      msg.isBot
                        ? 'rounded-2xl rounded-tl-lg text-slate-700'
                        : 'rounded-2xl rounded-tr-lg text-white'
                    }`}
                    style={
                      msg.isBot
                        ? {
                            background: 'rgba(241, 245, 249, 0.8)',
                            border: '1px solid rgba(226, 232, 240, 0.6)',
                          }
                        : {
                            background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                            boxShadow: '0 4px 16px -4px rgba(37, 99, 235, 0.4)',
                          }
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5 justify-start"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-1"
                    style={{
                      background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                      border: '1px solid rgba(59,130,246,0.15)',
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <div
                    className="px-5 py-4 rounded-2xl rounded-tl-lg"
                    style={{
                      background: 'rgba(241, 245, 249, 0.8)',
                      border: '1px solid rgba(226, 232, 240, 0.6)',
                    }}
                  >
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-2 h-2 rounded-full bg-slate-400"
                          animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1, 0.85] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />

              {/* Suggested Questions */}
              {messages.length === 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-2 pt-1"
                >
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q.label}
                      onClick={() => handleSend(q.label)}
                      className="group flex items-center gap-2 px-3.5 py-2.5 text-[12px] font-medium text-slate-600 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: 'rgba(255,255,255,0.7)',
                        border: '1px solid rgba(226,232,240,0.8)',
                        boxShadow: '0 2px 8px -2px rgba(0,0,0,0.06)',
                      }}
                    >
                      <span className="text-sm">{q.icon}</span>
                      <span className="group-hover:text-blue-600 transition-colors">{q.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div
              className="px-4 py-3.5 shrink-0"
              style={{
                background: 'rgba(248, 250, 252, 0.6)',
                borderTop: '1px solid rgba(226, 232, 240, 0.5)',
              }}
            >
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
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(226,232,240,0.8)',
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.04)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1), inset 0 1px 3px rgba(0,0,0,0.02)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(226,232,240,0.8)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.04)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                  }}
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:scale-105 active:scale-95"
                  style={{
                    background: input.trim()
                      ? 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)'
                      : '#cbd5e1',
                    boxShadow: input.trim()
                      ? '0 4px 16px -4px rgba(37, 99, 235, 0.5)'
                      : 'none',
                  }}
                  aria-label="送信"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-center text-[10px] text-slate-400 mt-2">
                Powered by WaiWai AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
