'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, MessageSquareText, SearchCheck } from 'lucide-react';

const useCases = [
  {
    icon: MessageSquareText,
    title: '問い合わせ対応を、止まらない窓口にする',
    body: 'LINE・メール・フォームに届く質問をAIが整理し、よくある内容は一次返信。人は判断が必要な相談だけを見ます。',
    before: '毎日同じ質問に返信している',
    after: '一次対応と担当通知を自動化',
  },
  {
    icon: FileText,
    title: '日報・集計・報告を、翌朝には見える状態にする',
    body: 'スプレッドシートや日報の入力内容を自動で集計し、週次レポートや異常値通知までつなぎます。',
    before: '集計と転記に時間が消える',
    after: 'レポート作成まで自動化',
  },
  {
    icon: SearchCheck,
    title: '社内の「あれどこ？」を、AIに聞ける状態にする',
    body: 'マニュアル、議事録、過去資料を検索できる社内AIにして、属人化した確認作業を減らします。',
    before: '詳しい人に毎回聞いている',
    after: '根拠つきで即回答',
  },
];

export default function HomeUseCases() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-blue-700">What We Build</p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              手作業を、
              <br />
              現場で使える
              <br />
              <span className="text-blue-700">AIの仕組みへ。</span>
            </h2>
            <p className="mt-5 text-sm font-bold leading-7 text-slate-600">
              ツールを入れることが目的ではありません。問い合わせ、集計、検索のような毎日の作業を、実際に回る業務フローへ変えます。
            </p>
            <a href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-blue-700">
              サービスを見る
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-5 py-7 sm:grid-cols-[56px_1fr] sm:items-start"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black leading-snug text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm font-bold leading-7 text-slate-600">{item.body}</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500">
                        Before <span className="ml-2 text-slate-800">{item.before}</span>
                      </p>
                      <p className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-black text-blue-900">
                        After <span className="ml-2">{item.after}</span>
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
