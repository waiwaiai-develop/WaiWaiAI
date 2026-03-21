'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Users, Shield, ArrowRight } from 'lucide-react';
import NetworkCanvas from './NetworkCanvas';

export default function Hero() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

    const canvasVariants = {
        hidden: { opacity: 0, scale: 0.85 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    return (
        <section
            ref={heroRef}
            className="relative min-h-[100svh] flex items-center bg-stone-950 overflow-hidden"
        >
            {/* Grain overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px',
                }}
            />

            {/* Ambient glow — right amber */}
            <div className="absolute top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
            {/* Ambient glow — left stone */}
            <div className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-stone-500/5 blur-[100px] pointer-events-none" />

            <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 py-32 md:py-40"
            >
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16 lg:gap-20">

                    {/* NetworkCanvas — contained circle */}
                    <motion.div
                        variants={canvasVariants}
                        initial="hidden"
                        animate="show"
                        className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[460px] aspect-square flex-shrink-0"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden relative border border-stone-800/60 shadow-[0_0_80px_rgba(245,158,11,0.06)]">
                            {/* Subtle amber rim glow inside the circle */}
                            <div className="absolute inset-0 rounded-full bg-amber-500/[0.03] pointer-events-none z-10" />
                            <NetworkCanvas />
                        </div>
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
                    >
                        {/* Section label */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="w-12 h-px bg-amber-500" />
                            <span className="text-amber-500 text-xs font-semibold tracking-[0.3em] uppercase">
                                AI Business Solutions
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-8"
                        >
                            AIを味方に、<br />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: 'linear-gradient(135deg, #f59e0b, #d97706, #b45309)',
                                }}
                            >
                                未来を豊かに。
                            </span>
                        </motion.h1>

                        {/* Sub description */}
                        <motion.div
                            variants={itemVariants}
                            className="text-stone-400 text-base md:text-lg leading-relaxed mb-12 max-w-xl"
                        >
                            <p className="mb-3">
                                社名「<span className="text-stone-200 font-medium">WaiWai</span>」はハワイの言葉で
                                <span className="text-amber-500 font-medium">「豊かさ」</span>を意味します。
                            </p>
                            <p className="mb-3">
                                ハワイで幸運と繁栄の象徴とされるウミガメ（ホヌ）のように、クライアントの事業に長く確実な繁栄をもたらします。
                            </p>
                            <p>
                                テクノロジーの力で誰もが本来のポテンシャルを発揮できる、豊かな未来を創り出します。
                            </p>
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="#contact"
                                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-amber-500 text-stone-950 font-bold text-base tracking-wide hover:bg-amber-400 transition-colors"
                            >
                                無料で相談する <ArrowRight className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="#services"
                                className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-stone-700 text-stone-300 font-medium text-base hover:border-stone-500 hover:text-white transition-colors"
                            >
                                サービスを見る
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Trust strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-24 flex flex-wrap gap-8 text-xs text-stone-500 tracking-wide uppercase"
                >
                    <span className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-amber-600" />
                        東証グロース上場企業の顧問実績
                    </span>
                    <span className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-amber-600" />
                        7,000人規模のAI普及を主導
                    </span>
                    <span className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-amber-600" />
                        補助金対応
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
}
