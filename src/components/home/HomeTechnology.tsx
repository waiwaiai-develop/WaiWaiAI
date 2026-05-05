'use client';

import { motion } from 'framer-motion';
import { Bot, Cable, Layers3, Workflow } from 'lucide-react';

const solutions = [
  {
    icon: Layers3,
    title: 'RAG（検索拡張生成）',
    description: '社内データやマニュアルを活用し、正確な情報をもとに回答。',
  },
  {
    icon: Bot,
    title: 'AI Agent（エージェント）',
    description: '自律的にタスクを実行し、複雑な業務も自動化。',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: '業務フローを自動化し、繰り返し作業を削減。',
  },
  {
    icon: Cable,
    title: 'システム・ツール連携',
    description: '既存のツールやシステムと連携し、業務に組み込みます。',
  },
];

const tools = ['LINE', 'Google Workspace', 'Google Apps Script', 'Dify', 'OpenAI', 'AWS', 'その他各種API'];

export default function HomeTechnology() {
  return (
    <section className="bg-white py-12 lg:py-14">
      <div className="mx-auto max-w-[912px] px-5 sm:px-6 lg:px-0">
        <div className="grid gap-8 lg:grid-cols-[230px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              Technology & Solution
            </p>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-950">
              どんな環境でも、
              <br />
              AIを組み込みます。
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-slate-200 pl-5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-7">
          <p className="mb-5 text-xs font-bold text-slate-700">連携可能なツール（一例）</p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
            {tools.map((tool) => (
              <span
                key={tool}
                className={`text-lg font-bold ${
                  tool === 'LINE'
                    ? 'text-green-600'
                    : tool === 'OpenAI'
                      ? 'text-slate-900'
                      : tool === 'AWS'
                        ? 'text-slate-800'
                        : 'text-slate-600'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-400">
            ※ 各サービスのロゴ・名称は各社の商標または登録商標です。当社が提携・代理店であることを示すものではありません。
          </p>
        </div>
      </div>
    </section>
  );
}
