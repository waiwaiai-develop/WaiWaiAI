'use client';

import { motion } from 'framer-motion';
import { Bot, Workflow, Cpu, ArrowRight } from 'lucide-react';

const features = [
    {
        version: '1.0',
        icon: Bot,
        title: 'AI導入コンサルティング',
        description: '現状の業務フローを分析し、AI活用の最適なロードマップを策定。投資対効果を明確にした提案で、確実な第一歩を支援します。',
        capabilities: ['業務フロー分析', 'ROI試算', '導入計画策定', 'PoC支援'],
        image: '/bento-consulting.png',
    },
    {
        version: '2.0',
        icon: Workflow,
        title: '業務自動化・DX推進',
        description: 'RPAとAIを組み合わせた業務自動化で、反復作業から解放。データ入力、レポート生成、顧客対応などを自動化します。',
        capabilities: ['RPA導入', 'ワークフロー最適化', 'API連携', 'データパイプライン'],
        image: '/bento-dx.png',
    },
    {
        version: '3.0',
        icon: Cpu,
        title: 'AIシステム開発',
        description: 'LLM/RAGを活用したカスタムAIシステムをフルスクラッチで開発。御社専用のAIソリューションを構築し、競争優位性を確立します。',
        capabilities: ['RAG構築', 'LLMファインチューニング', 'AIエージェント', 'マルチモーダルAI'],
        image: '/bento-dev.png',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-28 lg:py-36 relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                        Solutions
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                        段階的に進化する<br className="md:hidden" />AI活用
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        御社のフェーズに合わせた最適なソリューションを提供します。
                    </p>
                </motion.div>

                {/* Feature steps */}
                <div className="space-y-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.version}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                index % 2 === 1 ? 'lg:direction-rtl' : ''
                            }`}
                        >
                            {/* Text side */}
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-sm font-bold border border-blue-100">
                                        v{feature.version}
                                    </span>
                                    <div className="h-[1px] flex-1 bg-blue-100" />
                                </div>

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {feature.capabilities.map((cap) => (
                                        <span
                                            key={cap}
                                            className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-500 font-medium"
                                        >
                                            {cap}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Image side */}
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <div className="rounded-2xl overflow-hidden border border-blue-100 bg-white shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)]">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-auto opacity-90"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-24"
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                    >
                        最適なプランを相談する
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="mt-3 text-slate-400 text-sm">相談無料・お見積もり無料</p>
                </motion.div>
            </div>
        </section>
    );
}
