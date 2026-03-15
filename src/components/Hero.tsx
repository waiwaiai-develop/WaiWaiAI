'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
    const yShift = useTransform(scrollY, [0, 500], [0, 50]);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        show: {
            opacity: 1, scale: 1, y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    // Turtle floating animation
    const floatAnimation = {
        y: [0, -20, 0],
        rotate: [0, 2, -1, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    return (
        <section className="relative min-h-[90svh] flex items-center overflow-hidden bg-[#fafafa]">
            {/* Background Animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Advanced Grid */}
                <div
                    className="absolute inset-0 opacity-40 mix-blend-multiply"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)'
                    }}
                />

                {/* Animated Glowing Orbs (Subtle but dynamic) */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full will-change-transform"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-indigo-500/20 blur-[100px] rounded-full will-change-transform"
                />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/5 border-dashed pointer-events-none"
                />
            </div>

            {/* Main Content */}
            <motion.div
                style={{ y: yShift, opacity: opacityHero }}
                className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between mt-24 lg:mt-20 gap-12"
            >
                {/* Left side: Text & CTA */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="mb-8 relative group cursor-pointer inline-block">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        <span className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] text-[13px] font-semibold text-slate-700 hover:border-slate-300 transition-colors">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                            <span>AIネイティブ開発のプロフェッショナル</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-[40px] sm:text-6xl md:text-[5rem] font-bold tracking-tight mb-8 leading-[1.15] text-slate-900"
                    >
                        AIを味方に、
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900">
                            未来を豊かに。
                        </span>
                    </motion.h1>

                    {/* Sub Description */}
                    <motion.div
                        variants={itemVariants}
                        className="text-lg md:text-[22px] text-slate-500 mb-12 leading-[1.6] font-medium"
                    >
                        <p>
                            最先端のAI技術で、あなたのビジョンを形に。<br className="hidden lg:block" />
                            開発・コンサル・自動化から社内研修まで、<br className="hidden lg:block" />
                            AI導入を一気通貫で支援します。
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
                    >
                        <a
                            href="#contact"
                            className="group h-14 px-8 rounded-full bg-slate-900 text-white font-medium text-[15px] transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        >
                            無料相談を予約する
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#products"
                            className="group h-14 px-8 rounded-full bg-white text-slate-700 font-medium text-[15px] border border-slate-200 transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center shadow-sm"
                        >
                            ソリューションを見る
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right side: Animated Graphic (Turtle mascot) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 relative w-full max-w-lg lg:max-w-none aspect-square flex items-center justify-center"
                >
                    {/* Decorative blurred background for the turtle */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl scale-75 animate-pulse" style={{ animationDuration: '4s' }} />

                    {/* The Turtle */}
                    <motion.div
                        animate={floatAnimation}
                        className="relative z-20 w-[80%] h-[80%] flex items-center justify-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                    >
                        {/* 
                          Using an object-contain image to ensure the turtle looks premium and integrates well.
                          The floating animation gives it a 3D-like gentle levitation over the UI.
                        */}
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

                    {/* Floating decorative elements around the turtle */}
                    <motion.div
                        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-[10%] right-[15%] w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-md border border-white/50 z-30 transform rotate-12"
                    >
                        <Sparkles className="w-6 h-6 text-blue-500" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-white/80 rounded-full shadow-lg flex items-center justify-center backdrop-blur-md border border-white/60 z-30"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20" />
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
}
