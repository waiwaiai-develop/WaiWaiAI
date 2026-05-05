'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const rows = [
  {
    label: '課題',
    text: '電話やLINEでの予約対応に時間がかかり、スタッフの負担が大きかった。',
  },
  {
    label: '施策',
    text: 'LINE連携のAIチャットボットを導入し、予約受付を自動化。',
  },
  {
    label: '結果',
    text: '対応時間が約90%削減。接客や運営に集中できる状態に。',
  },
];

export default function HomeCaseStudy() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-gradient-to-r from-white via-blue-50/50 to-white">
      <div className="mx-auto grid max-w-[1024px] lg:h-[244px] lg:grid-cols-[330px_310px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="px-5 py-9 sm:px-6 lg:py-5 lg:pl-[58px] lg:pr-6"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Case Study
          </p>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-950">
            飲食チェーン（10店舗）の事例
          </h2>
          <p className="mt-2 text-[11px] font-bold leading-5 text-slate-800">
            予約対応に毎日2時間かかっていた業務がAI導入で30分に。
          </p>
          <div className="mt-3 space-y-1.5">
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[36px_1fr] gap-2">
                <span className="flex h-5 items-center justify-center rounded bg-blue-700 text-[10px] font-bold text-white">
                  {row.label}
                </span>
                <p className="text-[10px] leading-4 text-slate-600">{row.text}</p>
              </div>
            ))}
          </div>
          <a
            href="/cases"
            className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-700 transition hover:text-blue-900"
          >
            事例の詳細を見る
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center px-5 pb-9 sm:px-6 lg:px-0 lg:py-4"
        >
          <div className="w-full rounded-lg border border-slate-200 bg-white p-5 text-center shadow-[0_18px_50px_-28px_rgba(15,23,42,0.4)]">
            <p className="text-xs font-bold text-slate-500">予約対応の時間（1日あたり）</p>
            <div className="mt-4 grid grid-cols-[1fr_48px_1fr] items-end gap-3">
              <div>
                <p className="mb-2 text-xs font-bold uppercase text-slate-400">Before</p>
                <p className="mb-2 text-sm font-bold text-slate-900">
                  約 <span className="text-3xl text-slate-950">2</span> 時間
                </p>
                <div className="mx-auto h-20 w-12 rounded-t-2xl bg-slate-200" />
              </div>
              <div className="pb-10 text-4xl font-light text-blue-700">→</div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase text-blue-700">After</p>
                <p className="mb-2 text-sm font-bold text-blue-800">
                  約 <span className="text-3xl text-blue-700">30</span> 分
                </p>
                <div className="mx-auto h-10 w-12 rounded-t-2xl bg-blue-700" />
              </div>
            </div>
            <div className="mt-4 border-t border-slate-200 pt-3 text-xs font-bold text-blue-700">
              LINE × AIチャットで自動化を実現
            </div>
          </div>
        </motion.div>

        <div className="relative min-h-[280px] overflow-hidden bg-slate-200 lg:min-h-0">
          <img src="/design-case-restaurant.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>
      </div>
    </section>
  );
}
