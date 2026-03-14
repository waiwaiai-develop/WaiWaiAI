'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, Workflow, Cpu, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

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
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    // Map vertical scroll to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.666%']);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative"
            style={{ height: '300vh' }} // Extra height for scroll space
        >
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
                {/* Section header */}
                <div className="pt-20 pb-8 px-6 md:px-8 max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                            Solutions
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                            段階的に進化する<br className="md:hidden" />AI活用
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            御社のフェーズに合わせた最適なソリューションを提供します。
                        </p>
                    </motion.div>
                </div>

                {/* Progress indicator */}
                <div className="px-6 md:px-8 max-w-7xl mx-auto w-full mb-6">
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-[2px] bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-600 to-sky-500 rounded-full"
                                style={{ width: progressWidth }}
                            />
                        </div>
                        <div className="flex gap-2">
                            {features.map((f, i) => (
                                <motion.span
                                    key={f.version}
                                    className="text-xs font-bold px-2 py-1 rounded-md transition-colors"
                                    style={{
                                        color: useTransform(
                                            scrollYProgress,
                                            [i / 3, (i + 0.5) / 3, (i + 1) / 3],
                                            ['#94a3b8', '#2563eb', '#94a3b8']
                                        ),
                                    }}
                                >
                                    v{f.version}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Horizontal scroll area */}
                <div className="flex-1 overflow-hidden">
                    <motion.div
                        ref={scrollContainerRef}
                        className="flex h-full gap-8 px-6 md:px-8"
                        style={{ x }}
                    >
                        {features.map((feature, index) => (
                            <div
                                key={feature.version}
                                className="min-w-[100vw] md:min-w-[100vw] flex items-center px-4 md:px-12"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
                                    {/* Text side */}
                                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="px-4 py-1.5 rounded-lg bg-blue-50/80 backdrop-blur-sm text-blue-600 text-sm font-bold border border-blue-100/50">
                                                v{feature.version}
                                            </span>
                                            <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-100 to-transparent" />
                                        </div>

                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50/50 border border-blue-100/50 flex items-center justify-center backdrop-blur-sm">
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
                                                    className="px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/50 text-sm text-slate-500 font-medium"
                                                >
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image side */}
                                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                        <div className="rounded-2xl overflow-hidden holo-card">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-auto opacity-90"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* CTA after horizontal scroll */}
            <div className="absolute bottom-0 left-0 right-0 pb-12">
                <div className="text-center">
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        最適なプランを相談する
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="mt-3 text-slate-400 text-sm">相談無料・お見積もり無料</p>
                </div>
            </div>
        </section>
    );
}
