'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, FileSpreadsheet, MessageCircle, Users } from 'lucide-react';

const useCases = [
  {
    icon: Users,
    title: '採用対応の自動化',
    label: 'AI Agent × RAG',
    description:
      '応募者からの問い合わせ対応や書類選考前のスクリーニングを自動化。工数を大幅に削減します。',
    image: '/design-usecase-recruit.png',
  },
  {
    icon: MessageCircle,
    title: '問い合わせ対応の自動化',
    label: 'LINE × AIチャット',
    description:
      'LINE上での問い合わせにAIが自動回答。24時間対応で、顧客満足度を向上させます。',
    image: '/design-usecase-contact.png',
  },
  {
    icon: FileSpreadsheet,
    title: '日報・データ集計の自動化',
    label: 'GAS × 自動化',
    description:
      '日報の集計やレポート作成を自動化。スプレッドシートと連携し、業務を効率化します。',
    image: '/design-usecase-report.png',
  },
];

export default function HomeUseCases() {
  return (
    <section id="services" className="bg-white pb-9 pt-6 lg:pb-8 lg:pt-5">
      <div className="mx-auto max-w-[912px] px-5 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 max-w-3xl text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Use Case
          </p>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
            AIで、現場の仕事を<span className="text-blue-700">ラク</span>にする。
          </h2>
          <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
            日々繰り返される業務を自動化し、人がやるべき仕事に集中できる状態をつくります。
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_52px_-24px_rgba(15,23,42,0.45)]"
            >
              <div className="relative h-[102px] overflow-hidden bg-blue-50">
                <img src={item.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute left-4 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_10px_28px_-16px_rgba(15,23,42,0.7)]">
                  <item.icon className="h-7 w-7 text-blue-700" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold leading-snug text-slate-950">{item.title}</h3>
                <p className="mt-1 text-sm font-bold text-blue-700">{item.label}</p>
                <p className="mt-2 text-xs leading-6 text-slate-600">{item.description}</p>
                <a
                  href="/services"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-700 transition hover:text-blue-900"
                >
                  詳しく見る
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
