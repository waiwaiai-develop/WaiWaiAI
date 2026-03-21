'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function ProductsSection() {
    return (
        <section id="products" className="py-28 md:py-36 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Our Products
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight leading-[1.2]">
                        提供プロダクト
                    </h2>
                    <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-normal">
                        現場にすぐ導入できる、独自開発のAIプロダクト。
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Product 1: WaiWaiAI SNS System */}
                    <motion.div
                        variants={fadeInUp}
                        className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300"
                        style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                    >
                        <div className="h-44 w-full overflow-hidden relative">
                            <Image
                                src="/images/product_a.png"
                                alt="WaiWaiAI SNS System"
                                fill
                                className="object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-6 relative flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <h3 className="font-display text-base font-semibold text-slate-900 tracking-tight mb-1">WaiWaiAI SNS System</h3>
                                    <p className="text-blue-600 text-xs font-medium">SNS自動運用プラットフォーム</p>
                                </div>
                                <span className="text-[10px] font-semibold text-blue-600 tracking-wider uppercase shrink-0 bg-blue-50 px-2.5 py-1 rounded-full">
                                    β版受付中
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                AIがSNS投稿を自動生成・予約投稿。複数アカウント管理にも対応。
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 2: EstateAI */}
                    <motion.div
                        variants={fadeInUp}
                        className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300"
                        style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                    >
                        <div className="h-44 w-full overflow-hidden relative">
                            <Image
                                src="/images/product_b.png"
                                alt="EstateAI"
                                fill
                                className="object-cover object-left-top transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-6 relative flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <h3 className="font-display text-base font-semibold text-slate-900 tracking-tight mb-1">EstateAI</h3>
                                    <p className="text-blue-600 text-xs font-medium">不動産業向けAIソリューション</p>
                                </div>
                                <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase shrink-0">
                                    Coming Soon
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                物件情報管理＋顧客対応自動化で、業務効率と顧客満足度を同時に向上。
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 3: WaiWai AI Chat */}
                    <motion.div
                        variants={fadeInUp}
                        className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300"
                        style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                    >
                        <div className="h-44 w-full overflow-hidden relative bg-slate-50 flex items-center justify-center">
                            {/* CSS chat icon instead of emoji */}
                            <div className="relative w-16 h-16">
                                <div className="absolute inset-0 rounded-2xl bg-blue-100 group-hover:bg-blue-200/80 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 relative flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <h3 className="font-display text-base font-semibold text-slate-900 tracking-tight mb-1">WaiWai AI Chat</h3>
                                    <p className="text-blue-600 text-xs font-medium">社内AIチャットボット</p>
                                </div>
                                <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase shrink-0">
                                    Coming Soon
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                社内ナレッジをAIが即座に回答。問い合わせ対応を大幅に効率化。
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
