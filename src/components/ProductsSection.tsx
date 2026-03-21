'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function ProductsSection() {
    return (
        <section id="products" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full glass-shimmer text-blue-700 font-bold text-xs tracking-wider uppercase mb-6 border border-blue-200/40">
                        Our Products
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.2]">
                        提供プロダクト・<br className="md:hidden" />ソリューション
                    </h2>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                        現場にすぐ導入できる、<br className="hidden md:block" />
                        独自開発のAIプロダクト。
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                    {/* Product 1: WaiWaiAI SNS System */}
                    <motion.div
                        variants={fadeInUp}
                        className="group relative rounded-2xl overflow-hidden glass-card glass-shimmer border border-blue-200/50 hover:border-blue-300/70 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(37,99,235,0.2)]"
                    >
                        <div className="h-40 w-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-blue-200/10 to-transparent group-hover:from-blue-400/10 group-hover:via-transparent transition-all duration-700 z-10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
                            <Image
                                src="/images/product_a.png"
                                alt="WaiWaiAI SNS System"
                                fill
                                className="object-cover object-top transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-5 relative flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <h3 className="font-display text-base font-bold text-slate-900 tracking-tight mb-1">WaiWaiAI SNS System</h3>
                                    <p className="text-blue-600 font-semibold text-xs">SNS自動運用プラットフォーム</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full glass-shimmer text-blue-700 text-[10px] font-bold tracking-wider uppercase border border-blue-200/50 shrink-0">
                                    β版受付中
                                </span>
                            </div>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                AIがSNS投稿を自動生成・予約投稿。複数アカウント管理にも対応。
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 2: EstateAI */}
                    <motion.div
                        variants={fadeInUp}
                        className="group relative rounded-2xl overflow-hidden glass-card glass-shimmer border border-indigo-200/50 hover:border-indigo-300/70 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(99,102,241,0.2)]"
                    >
                        <div className="h-40 w-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-indigo-200/10 to-transparent group-hover:from-indigo-400/10 group-hover:via-transparent transition-all duration-700 z-10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
                            <Image
                                src="/images/product_b.png"
                                alt="EstateAI"
                                fill
                                className="object-cover object-left-top transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-5 relative flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <h3 className="font-display text-base font-bold text-slate-900 tracking-tight mb-1">EstateAI</h3>
                                    <p className="text-indigo-600 font-semibold text-xs">不動産業向けAIソリューション</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full glass text-slate-600 text-[10px] font-bold tracking-wider uppercase border border-slate-200/50 shrink-0">
                                    Coming Soon
                                </span>
                            </div>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                物件情報管理＋顧客対応自動化で、業務効率と顧客満足度を同時に向上。
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 3: WaiWai AI Chat */}
                    <motion.div
                        variants={fadeInUp}
                        className="group relative rounded-2xl overflow-hidden glass-card glass-shimmer border border-emerald-200/50 hover:border-emerald-300/70 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.2)]"
                    >
                        <div className="h-40 w-full overflow-hidden relative bg-gradient-to-br from-emerald-50 to-sky-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 via-sky-100/10 to-transparent z-10" />
                            <div className="text-5xl relative z-20">💬</div>
                        </div>
                        <div className="p-5 relative flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <h3 className="font-display text-base font-bold text-slate-900 tracking-tight mb-1">WaiWai AI Chat</h3>
                                    <p className="text-emerald-600 font-semibold text-xs">社内AIチャットボット</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full glass text-slate-600 text-[10px] font-bold tracking-wider uppercase border border-slate-200/50 shrink-0">
                                    Coming Soon
                                </span>
                            </div>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                社内ナレッジをAIが即座に回答。問い合わせ対応を大幅に効率化。
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
