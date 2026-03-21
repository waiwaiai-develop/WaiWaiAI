'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function ProductsSection() {
    return (
        <section id="products" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-px bg-amber-500" />
                        <span className="text-amber-600 font-bold text-xs tracking-widest uppercase">
                            Our Products
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight leading-[1.2]">
                        提供プロダクト・<br className="md:hidden" />ソリューション
                    </h2>
                    <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
                        現場にすぐ導入できる、独自開発のAIプロダクト。
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
                        className="group relative rounded-none overflow-hidden bg-white border border-stone-200 hover:border-amber-300 transition-colors duration-300"
                    >
                        <div className="h-40 w-full overflow-hidden relative">
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
                                    <h3 className="font-display text-base font-bold text-stone-900 tracking-tight mb-1">WaiWaiAI SNS System</h3>
                                    <p className="text-amber-600 font-semibold text-xs">SNS自動運用プラットフォーム</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-1 bg-amber-500/10 text-amber-700 text-[10px] font-bold tracking-wider uppercase border border-amber-200 shrink-0">
                                    β版受付中
                                </span>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                AIがSNS投稿を自動生成・予約投稿。複数アカウント管理にも対応。
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 2: EstateAI */}
                    <motion.div
                        variants={fadeInUp}
                        className="group relative rounded-none overflow-hidden bg-white border border-stone-200 hover:border-amber-300 transition-colors duration-300"
                    >
                        <div className="h-40 w-full overflow-hidden relative">
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
                                    <h3 className="font-display text-base font-bold text-stone-900 tracking-tight mb-1">EstateAI</h3>
                                    <p className="text-stone-500 font-semibold text-xs">不動産業向けAIソリューション</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-1 bg-stone-100 text-stone-500 text-[10px] font-bold tracking-wider uppercase border border-stone-200 shrink-0">
                                    Coming Soon
                                </span>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                物件情報管理＋顧客対応自動化で、業務効率と顧客満足度を同時に向上。
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 3: WaiWai AI Chat */}
                    <motion.div
                        variants={fadeInUp}
                        className="group relative rounded-none overflow-hidden bg-white border border-stone-200 hover:border-amber-300 transition-colors duration-300"
                    >
                        <div className="h-40 w-full overflow-hidden relative bg-stone-100 flex items-center justify-center">
                            <div className="text-5xl">💬</div>
                        </div>
                        <div className="p-5 relative flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <h3 className="font-display text-base font-bold text-stone-900 tracking-tight mb-1">WaiWai AI Chat</h3>
                                    <p className="text-stone-500 font-semibold text-xs">社内AIチャットボット</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-1 bg-stone-100 text-stone-500 text-[10px] font-bold tracking-wider uppercase border border-stone-200 shrink-0">
                                    Coming Soon
                                </span>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                社内ナレッジをAIが即座に回答。問い合わせ対応を大幅に効率化。
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
