'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, FileSpreadsheet, MessageCircle, Terminal, Brain, Settings } from 'lucide-react';

const useCases = [
  {
    icon: MessageCircle,
    title: 'LINE・Chatworkに届く問い合わせ、毎回手で返していませんか？',
    label: 'LINE / Chatwork / Discord × AI',
    before: '営業時間中に割り込む確認・返信。毎日同じ質問に同じ回答',
    after: 'AIが一次対応。よくある質問は自動回答、判断が必要なものだけ人に通知',
    image: '/design-usecase-contact.png',
  },
  {
    icon: FileSpreadsheet,
    title: '日報の集計、まだコピペで転記していませんか？',
    label: 'GAS / スプレッドシート / Dify × 自動化',
    before: '各店舗・各担当の日報を手動で集計。週次レポートは毎回ゼロから作成',
    after: '日報を投げたら自動で集計・レポート生成。異常値があれば即通知',
    image: '/design-usecase-report.png',
  },
  {
    icon: Bot,
    title: '社内の「あれどこだっけ？」に、毎回誰かが答えていませんか？',
    label: 'RAG × 社内ナレッジAI',
    before: 'マニュアルや過去資料がバラバラ。ベテランに聞かないとわからない',
    after: '社内資料を学習したAIが、根拠つきで即回答。属人化を解消',
    image: '/design-usecase-recruit.png',
  },
  {
    icon: Terminal,
    title: 'ChatGPTを契約しただけで、業務は何も変わっていませんか？',
    label: 'Claude Code × Obsidian Brain',
    before: 'たまに翻訳に使う程度。業務への組み込み方がわからない',
    after: '会社専用のAI環境を構築。議事録、提案書、日報まで、AIが動く仕組みに',
    image: '/design-usecase-contact.png',
  },
  {
    icon: Brain,
    title: '最新のAI、どれを使えばいいかわからなくないですか？',
    label: 'HonuX — AI技術検証プラットフォーム',
    before: 'AIツールが多すぎて選べない。試すだけで時間がかかる',
    after: '御社の業務に合ったAIを自動提案。ワンクリックで検証、良ければそのまま導入',
    image: '/design-usecase-report.png',
  },
  {
    icon: Settings,
    title: '補助金が使えるのに、知らずに全額自腹で払っていませんか？',
    label: 'IT導入補助金 / リスキリング助成金',
    before: 'AI導入の初期費用が高くて踏み切れない。補助金の制度がよくわからない',
    after: '補助金・助成金を活用して初期費用を軽減。申請から導入まで一貫サポート',
    image: '/design-usecase-recruit.png',
  },
];

export default function HomeUseCases() {
  return (
    <section id="services" className="bg-white pb-12 pt-8 lg:pb-14 lg:pt-10">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Use Case
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            その仕事、<span className="text-blue-700">まだ手でやってますか？</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            現場で毎日発生している「地味に面倒な作業」こそ、AIで仕組み化できます。
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_52px_-24px_rgba(15,23,42,0.45)]"
            >
              <div className="flex-1 p-5 sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <item.icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-base font-bold leading-snug text-slate-950">{item.title}</h3>
                <p className="mt-2 text-xs font-bold text-blue-600">{item.label}</p>

                <div className="mt-4 space-y-2">
                  <div className="rounded-lg bg-red-50 px-3 py-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-400">Before</p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-700">{item.before}</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 px-3 py-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-500">After</p>
                    <p className="mt-0.5 text-xs font-bold leading-5 text-slate-900">{item.after}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 px-5 py-3 sm:px-6">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 transition group-hover:text-blue-900"
                >
                  この課題について相談する
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
