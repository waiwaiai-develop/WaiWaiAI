'use client';

import { motion } from 'framer-motion';
import { Bot, Cpu, Settings, ArrowRight, Zap, Target } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
    };

    return (
        <section id="services" className="py-24 lg:py-32 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
            {/* Structural Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-white font-bold text-sm tracking-wider mb-6 shadow-sm"
                    >
                        <Zap className="w-4 h-4 text-blue-400" /> CONSULTING SERVICES
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[1.1] drop-shadow-sm"
                    >
                        AIシステム開発から、<br className="md:hidden" />AI顧問・研修まで
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-700 max-w-2xl mx-auto text-xl leading-relaxed font-bold tracking-tight drop-shadow-sm"
                    >
                        「開発」を中核に、AI顧問・ITコンサルティング・AI研修を一気通貫で提供。<br className="hidden md:block" />
                        確かな実装力に基づいた、地に足の着いた変革を支援します。
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                >
                    {/* Pillar 1: Development (Large Bento) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-2 lg:col-span-2 flex flex-col"
                    >
                        <div className="h-64 sm:h-80 w-full overflow-hidden bg-slate-50 relative">
                            <div className="absolute inset-0 bg-blue-100/30 group-hover:bg-transparent transition-colors z-10 w-full h-full pointer-events-none"></div>
                            <img src="/bento-dev.png" alt="AI System Development" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 md:p-10 bg-white relative z-20 flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                                    <Cpu className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">AIシステム・<br className="md:hidden" />プロダクト開発</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed font-bold tracking-tight text-lg">
                                LLMを組み込んだ独自のSaaS開発や社内システムの構築。PoCから本番実装、スケーリングまで、開発を「メイン」として技術的にリードします。
                            </p>
                        </div>
                    </motion.div>

                    {/* Pillar 2: Advisory / Consulting (Tall Bento) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-1 lg:col-span-1 flex flex-col"
                    >
                        <div className="h-56 w-full overflow-hidden bg-slate-50 relative">
                            <div className="absolute inset-0 bg-indigo-100/30 group-hover:bg-transparent transition-colors z-10 w-full h-full pointer-events-none"></div>
                            <img src="/bento-consulting.png" alt="AI Consulting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 bg-white pb-10 flex-1 flex flex-col">
                            <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <Bot className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-3 tracking-tight">AI顧問・ITコンサル</h3>
                            <p className="text-slate-700 leading-relaxed font-bold text-[15px] tracking-tight flex-1">
                                「何をAI化すべきか」の戦略策定から、最新技術選定、組織への導入支援まで。現場を知るコンサルティングを提供。
                            </p>
                        </div>
                    </motion.div>

                    {/* Pillar 3: DX & Automation (Medium Bento) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-1 lg:col-span-1 flex flex-col"
                    >
                        <div className="h-56 w-full overflow-hidden bg-slate-50 relative">
                            <div className="absolute inset-0 bg-emerald-100/30 group-hover:bg-transparent transition-colors z-10 w-full h-full pointer-events-none"></div>
                            <img src="/bento-dx.png" alt="DX & Automation" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 bg-white pb-10 flex-1 flex flex-col">
                            <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-3 tracking-tight">DX特化型コンサル</h3>
                            <p className="text-slate-700 leading-relaxed font-bold text-[15px] tracking-tight flex-1">
                                ローコードツールやRPAを活用した業務プロセスの再構築。自動化で、現場のオペレーションを劇的に最適化。
                            </p>
                        </div>
                    </motion.div>

                    {/* Pillar 4: Training (Text heavy / Call-out Bento) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-slate-950 border border-slate-800 rounded-[2rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:col-span-1 lg:col-span-2 flex flex-col justify-center overflow-hidden"
                    >
                        {/* Decorative Background for dark card */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] z-0 opacity-20"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors z-0"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent transition-all flex-shrink-0">
                                <Target className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">AI研修・リテラシー向上</h3>
                                <p className="text-slate-300 leading-relaxed font-bold tracking-tight mb-2">
                                    生成AIの社内活用を促進するためのハンズオン研修。プロンプトエンジニアリングからセキュアなツール活用まで、全社的なAIリテラシーを底上げします。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-24 text-center"
                >
                    <Link href="/services" className="group relative inline-flex items-center justify-center px-12 py-5 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-extrabold text-xl transition-all shadow-[0_8px_20px_rgb(0,0,0,0.12)] hover:-translate-y-1">
                        <span className="relative z-10 flex items-center gap-3 text-white">
                            すべてのサービスを見る <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
