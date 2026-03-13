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
                <div className="text-center mb-14">
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
                        className="text-[1.75rem] sm:text-3xl md:text-4xl font-black text-slate-950 mb-6 uppercase tracking-tight md:tracking-tighter leading-[1.25] md:leading-[1.15]"
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
                >
                    {/* Service 1: AI導入コンサル */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
                    >
                        <div className="h-40 w-full overflow-hidden bg-slate-50 relative">
                            <div className="absolute inset-0 bg-blue-100/30 group-hover:bg-transparent transition-colors z-10 w-full h-full pointer-events-none"></div>
                            <img src="/bento-consulting.png" alt="AI導入コンサル" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 bg-white flex-1 flex flex-col">
                            <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Bot className="w-5 h-5" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg md:text-xl font-black text-slate-950 tracking-tight">AI導入コンサル</h3>
                                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">5万円〜</span>
                            </div>
                            <p className="text-slate-700 leading-relaxed font-bold text-sm tracking-tight flex-1">
                                現状ヒアリング(2h) + 導入ロードマップ提案。「何から始めるべきか」を明確にします。
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 2: 業務自動化 */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
                    >
                        <div className="h-40 w-full overflow-hidden bg-slate-50 relative">
                            <div className="absolute inset-0 bg-emerald-100/30 group-hover:bg-transparent transition-colors z-10 w-full h-full pointer-events-none"></div>
                            <img src="/bento-dx.png" alt="業務自動化" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 bg-white flex-1 flex flex-col">
                            <div className="w-11 h-11 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                <Settings className="w-5 h-5" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg md:text-xl font-black text-slate-950 tracking-tight">業務自動化</h3>
                                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">15万円〜</span>
                            </div>
                            <p className="text-slate-700 leading-relaxed font-bold text-sm tracking-tight flex-1">
                                GAS/RPA等で1業務フロー完全自動化。手作業をなくし、現場の生産性を劇的に向上。
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 3: AIシステム開発 */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
                    >
                        <div className="h-40 w-full overflow-hidden bg-slate-50 relative">
                            <div className="absolute inset-0 bg-indigo-100/30 group-hover:bg-transparent transition-colors z-10 w-full h-full pointer-events-none"></div>
                            <img src="/bento-dev.png" alt="AIシステム開発" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 bg-white flex-1 flex flex-col">
                            <div className="w-11 h-11 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg md:text-xl font-black text-slate-950 tracking-tight">AIシステム開発</h3>
                                <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">30万円〜</span>
                            </div>
                            <p className="text-slate-700 leading-relaxed font-bold text-sm tracking-tight flex-1">
                                小規模AI機能（チャットボット等）開発。PoCから本番実装まで技術的にリードします。
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 4: AI顧問パック */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-slate-950 border border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] z-0 opacity-20"></div>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors z-0"></div>

                        <div className="p-6 relative z-10 flex-1 flex flex-col">
                            <div className="w-11 h-11 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4 text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent transition-all">
                                <Target className="w-5 h-5" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg md:text-xl font-black text-white tracking-tight">AI顧問パック</h3>
                                <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold">10万円/月</span>
                            </div>
                            <p className="text-slate-300 leading-relaxed font-bold tracking-tight text-sm flex-1">
                                月4h定例MTG + 技術選定 + 導入支援。継続的なAI活用をパートナーとして伴走します。
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-500 font-bold text-sm mb-6">相談無料・お見積もり無料</p>
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
