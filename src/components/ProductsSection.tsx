'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function ProductsSection() {

    return (
        <section id="products" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-100/60">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20 flex flex-col items-center"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs tracking-wider uppercase mb-6 border border-slate-200/60">
                        Our Products
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.2]">
                        提供プロダクト・<br className="md:hidden" />ソリューション
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        すぐに現場へ導入し、圧倒的なROIを生み出す<br className="hidden md:block" />
                        独自開発のAIプロダクト。
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    {/* Product 1: WaiWaiAI SNS System */}
                    <motion.div variants={fadeInUp} className="group block relative rounded-3xl bg-white border border-slate-200/60 overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all duration-500">
                        <div className="h-64 sm:h-80 w-full overflow-hidden bg-slate-50 border-b border-slate-100 relative">
                            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                            <Image src="/images/product_a.png" alt="WaiWaiAI SNS System" fill className="object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div className="p-8 md:p-10 relative bg-white h-full flex flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">WaiWaiAI SNS System</h3>
                                    <p className="text-blue-600 font-semibold text-sm">SNS自動運用プラットフォーム</p>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold tracking-wider uppercase border border-blue-100/50">
                                    β版受付中
                                </span>
                            </div>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                AIがSNS投稿を自動生成・予約投稿。複数アカウント管理にも対応し、運用コストを大幅に削減します。
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 2: EstateAI */}
                    <motion.div variants={fadeInUp} className="group block relative rounded-3xl bg-white border border-slate-200/60 overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all duration-500">
                        <div className="h-64 sm:h-80 w-full overflow-hidden bg-slate-50 border-b border-slate-100 relative">
                            <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                            <Image src="/images/product_b.png" alt="EstateAI" fill className="object-cover object-left-top transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div className="p-8 md:p-10 relative bg-white h-full flex flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">EstateAI</h3>
                                    <p className="text-indigo-600 font-semibold text-sm">不動産業向けAIソリューション</p>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold tracking-wider uppercase border border-slate-200/50">
                                    Coming Soon
                                </span>
                            </div>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                不動産業向けAI。物件情報管理＋顧客対応自動化で、業務効率と顧客満足度を同時に向上させます。
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
