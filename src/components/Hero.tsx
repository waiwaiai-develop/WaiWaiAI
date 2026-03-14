'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

    // Refined, crisp animations (no blur or scale, just clean fade-in up)
    const containerVariants: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
                ease: "easeOut"
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Elegant ease curve
        }
    };

    return (
        <section className="relative min-h-[85svh] flex items-center pt-24 pb-16 overflow-hidden bg-[#fafafa]">

            {/* Very subtle background noise/texture for premium feel without being distracting */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.015] mix-blend-overlay z-0 pointer-events-none"></div>

            {/* Subtle Gradient Backdrop */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none z-0"></div>

            {/* Immersive Background Image - "正攻法" for positioning without hacks */}
            <motion.div
                style={{ y: y1, opacity: opacityHero }}
                className="absolute top-0 right-0 w-[90%] lg:w-[65%] h-full z-0 pointer-events-none opacity-85 mix-blend-multiply"
            >
                {/* Standard gradient mask to blend with the white space */}
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/50 to-transparent z-10"></div>
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#fafafa] to-transparent z-10"></div>
                <img
                    src="/hero-honu.png"
                    alt="WaiWai AI Honu Motif"
                    className="w-full h-full object-cover object-[75%_center] lg:object-[65%_center]"
                />
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-3xl"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                            AIネイティブ開発会社
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-8 leading-[1.12] text-slate-900"
                    >
                        AIを味方に、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">未来を豊かに。</span>
                    </motion.h1>

                    {/* Sub Description */}
                    <motion.div
                        variants={itemVariants}
                        className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium space-y-4"
                    >
                        <p>
                            最先端の技術で、あなたのビジョンを形に。
                        </p>
                        <p className="text-base text-slate-500 font-normal">
                            ハワイ語で「豊かさ」を意味するWaiWai。<br className="hidden md:block" />
                            幸運と繁栄のシンボル・ホヌのように、AIで御社のビジネスをもっと豊かにします。
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a href="#products" className="group w-full sm:w-auto px-7 py-3.5 rounded-lg bg-slate-900 text-white font-medium text-[15px] border border-transparent transition-all hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2">
                            プロダクトを見る
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="group w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white text-slate-900 font-medium text-[15px] border border-slate-200 transition-all hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-sm flex items-center justify-center">
                            まずは無料相談
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Aligned with main content */}
            <div className="absolute bottom-6 md:bottom-10 left-0 w-full z-20 pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        style={{ opacity: opacityHero }}
                        className="flex items-center gap-3 opacity-50"
                    >
                        <div className="w-12 h-[1px] bg-slate-400"></div>
                        <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-slate-500">Scroll down</span>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
