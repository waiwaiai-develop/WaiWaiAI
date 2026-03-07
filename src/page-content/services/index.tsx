'use client';

import { motion } from 'framer-motion';
import { Bot, Cpu, Settings, TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export default function ServicesPage() {
    const services = [
        {
            id: "ai-solutions",
            icon: <Bot className="w-10 h-10 text-blue-600" />,
            title: 'カスタマーサポート完全無人化',
            subtitle: '月間最大200時間の対応コストを削減。自律型AIエージェント構築',
            desc: '最新のLLM（大規模言語モデル）と独自のRAG技術を用いて、社内マニュアルや過去の応対履歴を学習させた「絶対に社外秘を漏らさない」自社専用のAIチャットボットを構築します。24時間365日の即時対応により、CS担当者の疲弊を防ぎ、問い合わせ対応にかかる人件費を最大80%削減します。',
            features: [
                '社内ルール・PDF文書を完全学習したRAG環境',
                'ハルシネーション（嘘）を防ぐ厳密なガードレール設計',
                '既存システム（Slack/Teams/Zendesk等）への組み込み',
                'セキュアな閉域網での運用（Azure OpenAI / AWS）'
            ],
            bgBase: 'bg-blue-50',
            borderHover: 'hover:border-blue-300'
        },
        {
            id: "system-development",
            icon: <Cpu className="w-10 h-10 text-sky-600" />,
            title: 'フルスクラッチ自動化システム開発',
            subtitle: '開発期間とコストを従来の1/3に。無駄のないモダンアジャイル開発',
            desc: '現場が使いこなせない「重厚長大」なシステムは作りません。現在の業務フローのボトルネックを特定し、そこだけをピンポイントで解決するリーンなWebシステムを最速で開発します。エクセルや紙の管理から脱却し、売上に直結するコア業務へリソースを集中させます。',
            features: [
                '業務特化型Webアプリケーション開発',
                '最速1週間でのMVP（プロトタイプ）提供',
                'React / Next.js 等を用いた超高速レスポンス',
                '将来の拡張を見据えた柔軟なクラウドアーキテクチャ'
            ],
            bgBase: 'bg-sky-50',
            borderHover: 'hover:border-sky-300'
        },
        {
            id: "dx-automation",
            icon: <Settings className="w-10 h-10 text-blue-600" />,
            title: '既存業務プロセス（DX）の自動化・RPA',
            subtitle: '入力ミス・コピペ作業をゼロにし、作業時間を90%削減',
            desc: '各SaaS（Salesforce, kintone, freeeなど）間に点在するデータの「手動転記」を撲滅します。API連携やRPAツールを用いて、毎日の定型業務をバックグラウンドで自動実行する仕組みを構築。ヒューマンエラーによる損失や残業代を即座に削減します。',
            features: [
                '複数SaaS間のデータ同期・API連携自動化',
                'ROI（投資対効果）に基づくRPAシナリオの選定と実装',
                '毎日の売上・KPIレポートの自動集計化',
                '業務フローの根本的な見直し（BPR）コンサルティング'
            ],
            bgBase: 'bg-blue-50/50',
            borderHover: 'hover:border-blue-300'
        },
        {
            id: "consulting",
            icon: <TrendingDown className="w-10 h-10 text-sky-600" />,
            title: '経営陣直轄・AI/ITコンサルティング',
            subtitle: '不要なITコストを削減し、数百万〜数千万単位の利益改善を実現',
            desc: '「どのAIツールを入れればいいかわからない」「現在付き合っているベンダーの見積もりが高すぎる気がする」といった経営層の悩みに、中立的な外部CTOの立場で伴走します。使われていない無駄なSaaSの解約や、全社的な省力化ロードマップを策定し、確実な利益体質へと導きます。',
            features: [
                '現場ヒアリングに基づくIT投資ロードマップ策定',
                '適正価格でのベンダー対応・見積もり精査（セカンドオピニオン）',
                '社内DX人材の育成・内製化支援',
                '経営会議・役員会へのテクノロジーアドバイス'
            ],
            bgBase: 'bg-sky-50/50',
            borderHover: 'hover:border-sky-300'
        }
    ];

    return (
        <div className="pt-32 pb-0 relative min-h-screen overflow-hidden bg-white">
            {/* Clean Blue/White Background */}
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent z-[-1]"></div>
            <div className="absolute inset-0 bg-grid-light opacity-50 z-[-1]"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">

                {/* Page Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
                    >
                        SOLUTIONS
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
                    >
                        テクノロジーを、<br />
                        圧倒的な<span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">利益創出の武器</span>へ。
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        単に「最新のAI・システム」を導入することが目的ではありません。<br className="hidden md:block" />
                        WaiWai AIは、経営にインパクトを与える「確実なコスト削減と売上向上（ROI）」の実現をお約束します。
                    </motion.p>
                </div>

                {/* Services List */}
                <div className="space-y-16 pb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="bg-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] group flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)]"
                        >
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-12">
                                <div className="md:w-1/3">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${service.bgBase} bg-gradient-to-br from-white to-${service.bgBase.split('-')[1]}-50 shadow-sm border border-${service.bgBase.split('-')[1]}-100 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                        {service.icon}
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-blue-600 font-bold text-sm mb-6 leading-relaxed">
                                        {service.subtitle}
                                    </p>
                                </div>

                                <div className="md:w-2/3 flex flex-col justify-center">
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
                                        {service.desc}
                                    </p>

                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">主な提供内容・メリット</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                            {service.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start gap-3 text-slate-700 font-bold text-sm">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                                    <span className="leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-start md:justify-end mt-auto">
                                        <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-blue-600 hover:text-white transition-colors border border-blue-100 group/btn">
                                            このソリューションでコスト削減診断
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Global CTA */}
            <ContactCTA />
        </div>
    );
}
