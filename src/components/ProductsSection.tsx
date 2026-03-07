'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ProductsSection() {
    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
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
        <section id="products" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-100">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="text-center mb-24"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-sm tracking-wider mb-8 shadow-sm">
                        <Sparkles className="w-4 h-4 text-blue-400" /> 独自ソリューション
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-950 mb-6 tracking-tighter leading-[1.1]">
                        提供プロダクト・<br className="md:hidden" />ソリューション
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-bold tracking-tight leading-relaxed">
                        すぐに現場へ導入し、圧倒的なROIを生み出す独自開発のAIプロダクト。
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {/* Product 1 Bento */}
                    <motion.a href="/services#products" variants={itemVariants} className="group block relative rounded-[2rem] bg-slate-50 border border-slate-200/60 overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                        <div className="h-64 sm:h-80 w-full overflow-hidden bg-white/50 relative">
                            <div className="absolute inset-0 bg-blue-100/30 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src="/images/product_a.png" alt="NEXUS AI" className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 md:p-10 relative bg-white h-full border-t border-slate-100">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">NEXUS AI</h3>
                                    <p className="text-blue-600 font-bold tracking-tight">セキュアRAG基盤</p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                                </div>
                            </div>
                            <p className="text-slate-600 font-bold leading-relaxed">企業内ドキュメントを活用した社内専用の高精度AIアシスタント。機密情報を守りながら圧倒的な業務効率化を実現。</p>
                        </div>
                    </motion.a>

                    {/* Product 2 Bento */}
                    <motion.a href="/services#products" variants={itemVariants} className="group block relative rounded-[2rem] bg-slate-50 border border-slate-200/60 overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                        <div className="h-64 sm:h-80 w-full overflow-hidden bg-white/50 relative">
                            <div className="absolute inset-0 bg-indigo-100/30 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src="/images/product_b.png" alt="PRODUCTIVITY HUB" className="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 md:p-10 relative bg-white h-full border-t border-slate-100">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">PRODUCTIVITY HUB</h3>
                                    <p className="text-indigo-600 font-bold tracking-tight">業務特化エージェント</p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                                </div>
                            </div>
                            <p className="text-slate-600 font-bold leading-relaxed">人事・法務・営業など特定プロセスに特化したAI群。導入当日から実証済みのROIを提供する即効型ソリューション。</p>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
