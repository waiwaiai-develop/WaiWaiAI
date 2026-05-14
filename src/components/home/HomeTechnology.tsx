'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cable, FileCheck2, Gauge } from 'lucide-react';

const buildSteps = [
  {
    icon: FileCheck2,
    title: '業務を分解する',
    body: '何に時間がかかっているか、どこまでAIに任せるか、最初に作る範囲を決めます。',
  },
  {
    icon: Cable,
    title: '今のツールにつなぐ',
    body: 'LINE、Slack、Google Workspace、スプレッドシートなど、現場が使っている入口に組み込みます。',
  },
  {
    icon: Bot,
    title: 'AIが動く仕組みにする',
    body: '返信、分類、要約、転記、レポート作成などを、人の確認を挟みながら自動化します。',
  },
  {
    icon: Gauge,
    title: '数字を見て改善する',
    body: '削減時間、対応件数、利用状況を見ながら、使われる形に調整していきます。',
  },
];

const outputs = ['問い合わせ一次対応', '日報・売上レポート', '社内ナレッジ検索', '資料作成補助', 'データ転記', '担当者通知'];
const tools = ['LINE', 'Slack', 'Google Workspace', 'GAS', 'Dify', 'OpenAI', 'AWS', '各種API'];

export default function HomeTechnology() {
  return (
    <section className="bg-slate-950 py-16 text-white lg:py-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-blue-300">Implementation</p>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              作って終わりではなく、
              <br />
              業務に残る形まで。
            </h2>
            <p className="mt-5 text-sm font-bold leading-7 text-blue-100/80">
              RAGやAIエージェントという言葉より、実際に現場で動くかを重視します。小さく作り、数字を見て、改善します。
            </p>
          </motion.div>

          <div>
            <div className="grid gap-3 md:grid-cols-2">
              {buildSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black text-blue-200">0{index + 1}</span>
                    </div>
                    <h3 className="text-base font-black">{item.title}</h3>
                    <p className="mt-2 text-xs font-bold leading-6 text-blue-100/70">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-black">たとえば、こういう仕組みを作れます</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {outputs.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-slate-950">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs font-black text-blue-200">連携できる主なツール</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {tools.map((tool) => (
                    <span key={tool} className="text-sm font-black text-blue-100/75">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-black text-white shadow-[0_18px_40px_-22px_rgba(37,99,235,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              自社でできることを相談する
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
