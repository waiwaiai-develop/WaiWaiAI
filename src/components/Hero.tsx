'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
    const yShift = useTransform(scrollY, [0, 500], [0, 50]);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    const turtleVariants = {
        hidden: { opacity: 0, scale: 0.85, y: 20 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    const floatAnimation = {
        y: [0, -18, 0],
        rotate: [0, 1.5, -1, 0],
        transition: {
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut' as const,
        },
    };

    return (
        <section className="relative min-h-[95svh] flex items-center overflow-hidden">
            {/* ガラスモーフィズム背景エフェクト */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 中央の大きな光 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-blue-400/20 via-blue-300/10 to-transparent blur-3xl" />
            </div>

            {/* Main Content */}
            <motion.div
                style={{ y: yShift, opacity: opacityHero }}
                className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between mt-24 lg:mt-20 gap-8 lg:gap-16"
            >
                {/* Left side: Text & CTA */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
                >
                    {/* Badge - ガラススタイル */}
                    <motion.div variants={itemVariants} className="mb-8 inline-block">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong text-[13px] font-bold text-blue-700 tracking-wide uppercase">
                            <Sparkles className="w-4 h-4 text-blue-500" aria-hidden="true" />
                            AIネイティブ開発のプロフェッショナル
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-[44px] sm:text-6xl md:text-[5.5rem] font-extrabold tracking-tight mb-6 leading-[1.05] text-slate-900"
                    >
                        AIを味方に、
                        <br />
                        <span className="text-gradient-deep">
                            未来を豊かに。
                        </span>
                    </motion.h1>

                    {/* Sub Description */}
                    <motion.p
                        variants={itemVariants}
                        className="font-sans text-lg md:text-xl text-slate-600 mb-10 leading-[1.8] max-w-lg"
                    >
                        最先端のAI技術で、あなたのビジョンを形に。<br className="hidden lg:block" />
                        開発・コンサル・自動化から社内研修まで、<br className="hidden lg:block" />
                        AI導入を一気通貫で支援します。
                    </motion.p>

                    {/* CTA Buttons - ガラススタイル */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
                    >
                        <a
                            href="#contact"
                            aria-label="無料で相談する"
                            className="group h-14 px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-[15px] transition-all duration-300 hover:bg-blue-700 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_8px_28px_-4px_rgba(37,99,235,0.5)] hover:shadow-[0_12px_36px_-4px_rgba(37,99,235,0.6)]"
                        >
                            無料で相談する
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                        </a>
                        <a
                            href="#products"
                            aria-label="ソリューションを見る"
                            className="group h-14 px-10 py-4 rounded-full glass-strong text-slate-700 font-bold text-[15px] transition-all duration-300 hover:bg-white/50 hover:text-blue-700 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center"
                        >
                            ソリューションを見る
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right side: Turtle mascot */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex-1 relative w-full max-w-sm lg:max-w-none aspect-square flex items-center justify-center"
                >
                    {/* ガラス球体の背景 */}
                    <div className="absolute inset-[5%] rounded-full glass-panel opacity-80" />
                    <div className="absolute inset-[15%] rounded-full glass-card opacity-60" />
                    
                    {/* リッチなグラデーション背景 */}
                    <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-blue-200/40 via-sky-100/30 to-blue-300/20 blur-2xl" />
                    <div className="absolute inset-[25%] rounded-full bg-gradient-to-tr from-blue-500/10 via-sky-400/10 to-transparent blur-3xl" />

                    {/* リング装飾 - ガラス風 */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-[2%] rounded-full border border-white/40 border-dashed pointer-events-none"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-[12%] rounded-full border border-blue-300/30 border-dashed pointer-events-none"
                    />

                    {/* The Turtle */}
                    <motion.div
                        variants={turtleVariants}
                        animate={floatAnimation}
                        className="relative z-20 w-[75%] h-[75%] flex items-center justify-center drop-shadow-[0_32px_64px_rgba(37,99,235,0.2)]"
                    >
                        <picture>
                            <source srcSet="/hero-honu.webp" type="image/webp" />
                            <img
                                src="/hero-honu.png"
                                alt="WaiWai AI - AIネイティブ開発のホヌ（ウミガメ）マスコット"
                                className="w-full h-full object-contain pointer-events-none"
                                loading="eager"
                                width={800}
                                height={800}
                            />
                        </picture>
                    </motion.div>

                    {/* フローティングアクセントドット */}
                    <motion.div
                        animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                        className="absolute top-[12%] right-[18%] w-3 h-3 rounded-full bg-blue-400/80 z-30 glass-strong"
                    />
                    <motion.div
                        animate={{ y: [0, 14, 0], opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                        className="absolute bottom-[22%] left-[14%] w-4 h-4 rounded-full bg-sky-400/70 z-30 glass-strong"
                    />
                    <motion.div
                        animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                        className="absolute top-[35%] left-[8%] w-2.5 h-2.5 rounded-full bg-blue-300/90 z-30 glass-strong"
                    />
                </motion.div>
            </motion.div>

            {/* ボトムグラデーション */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
        </section>
    );
}