'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-white">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-100/30 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-600">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                                AIネイティブ開発会社
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
                        >
                            <span className="text-slate-900">AIを味方に、</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">未来を豊かに。</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-600 max-w-lg mb-10 leading-relaxed"
                        >
                            最先端のAI技術で、あなたのビジョンを形に。
                            <br className="hidden md:block" />
                            開発から導入、運用まで一気通貫で支援します。
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#contact"
                                className="group px-7 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-[15px] transition-all hover:bg-blue-700 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2"
                            >
                                無料で相談する
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#products"
                                className="group px-7 py-3.5 rounded-lg bg-blue-50 text-blue-700 font-semibold text-[15px] border border-blue-100 transition-all hover:bg-blue-600 hover:text-white flex items-center justify-center"
                            >
                                プロダクトを見る
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Product Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)]">
                            {/* Browser chrome mockup */}
                            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                </div>
                                <div className="flex-1 mx-8">
                                    <div className="bg-white rounded-md px-4 py-1.5 text-xs text-slate-400 text-center border border-slate-200">
                                        waiwai-ai.com
                                    </div>
                                </div>
                            </div>
                            <img
                                src="/images/product_a.png"
                                alt="WaiWaiAI SNS System"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Floating accent card */}
                        <div className="absolute -bottom-6 -left-6 bg-white border border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] rounded-xl px-5 py-4">
                            <div className="text-xs text-slate-500 mb-1">月間処理件数</div>
                            <div className="text-2xl font-bold text-slate-900">50,000<span className="text-blue-600">+</span></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-0 w-full z-20 pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center gap-3 opacity-30">
                        <div className="w-8 h-[1px] bg-slate-400" />
                        <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-slate-400">Scroll</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
