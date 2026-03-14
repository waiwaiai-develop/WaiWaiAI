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
        <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#7c5bf5]/[0.06] blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#5b8cf5]/[0.04] blur-[120px]" />
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
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-[#8b8b9e]">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-[#7c5bf5]" />
                                AIネイティブ開発会社
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
                        >
                            <span className="text-white">AIを味方に、</span>
                            <br />
                            <span className="gradient-text-accent">未来を豊かに。</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-[#8b8b9e] max-w-lg mb-10 leading-relaxed"
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
                                className="group px-7 py-3.5 rounded-lg bg-[#7c5bf5] text-white font-semibold text-[15px] transition-all hover:bg-[#6b4ae4] flex items-center justify-center gap-2"
                            >
                                無料で相談する
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#products"
                                className="group px-7 py-3.5 rounded-lg bg-white/[0.04] text-white/80 font-semibold text-[15px] border border-white/[0.08] transition-all hover:bg-white/[0.08] hover:text-white flex items-center justify-center"
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
                        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] glow-purple">
                            {/* Browser chrome mockup */}
                            <div className="bg-[#1a1d29] px-4 py-3 flex items-center gap-2 border-b border-white/[0.06]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-white/10" />
                                    <div className="w-3 h-3 rounded-full bg-white/10" />
                                    <div className="w-3 h-3 rounded-full bg-white/10" />
                                </div>
                                <div className="flex-1 mx-8">
                                    <div className="bg-white/[0.06] rounded-md px-4 py-1.5 text-xs text-[#5a5a6e] text-center">
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
                        <div className="absolute -bottom-6 -left-6 glass-card rounded-xl px-5 py-4">
                            <div className="text-xs text-[#8b8b9e] mb-1">月間処理件数</div>
                            <div className="text-2xl font-bold text-white">50,000<span className="text-[#7c5bf5]">+</span></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-0 w-full z-20 pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center gap-3 opacity-30">
                        <div className="w-8 h-[1px] bg-white/40" />
                        <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-[#5a5a6e]">Scroll</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
