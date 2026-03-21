'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import NetworkCanvas from './NetworkCanvas';

const floatingPills = [
    { label: 'AI Native', delay: 0.6, x: '-8%', y: '10%', rotate: -6 },
    { label: 'DX推進', delay: 0.75, x: '92%', y: '18%', rotate: 8 },
    { label: 'LLM活用', delay: 0.9, x: '-12%', y: '72%', rotate: -4 },
    { label: '組織変革', delay: 1.05, x: '88%', y: '78%', rotate: 6 },
];

const trustBadges = [
    { text: '東証グロース上場企業の顧問実績' },
    { text: '7,000人規模のAI普及を主導' },
];

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

    const sphereVariants = {
        hidden: { opacity: 0, scale: 0.7 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    const pillVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        show: (delay: number) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        }),
    };

    return (
        <section className="relative min-h-[70svh] lg:min-h-[95svh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-16 lg:pt-0 lg:pb-0">
            {/* Subtle blue gradient overlay at top */}
            <div
                className="absolute inset-x-0 top-0 h-[480px] pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, rgba(219,234,254,0.55) 0%, rgba(191,219,254,0.25) 40%, transparent 100%)',
                }}
                aria-hidden="true"
            />

            {/* Ambient orbs — depth layer */}
            <div
                className="orb orb-1 pointer-events-none"
                style={{ top: '-120px', left: '-160px', opacity: 0.35 }}
                aria-hidden="true"
            />
            <div
                className="orb orb-2 pointer-events-none"
                style={{ top: '30%', right: '-100px', opacity: 0.28 }}
                aria-hidden="true"
            />
            <div
                className="orb orb-3 pointer-events-none"
                style={{ bottom: '-60px', left: '30%', opacity: 0.22 }}
                aria-hidden="true"
            />

            {/* Noise texture */}
            <div className="noise-overlay" aria-hidden="true" />

            <motion.div
                style={{ y: yShift, opacity: opacityHero }}
                className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16"
            >
                {/* Right / Top: NetworkCanvas in glass-bordered circular container */}
                <motion.div
                    variants={sphereVariants}
                    initial="hidden"
                    animate="show"
                    className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square flex-shrink-0"
                >
                    {/* Outer glow ring */}
                    <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                            boxShadow: '0 0 80px 20px rgba(37,99,235,0.18), 0 0 160px 60px rgba(37,99,235,0.08)',
                        }}
                        aria-hidden="true"
                    />

                    {/* Glass border circle */}
                    <div
                        className="absolute inset-0 rounded-full pointer-events-none glass-shimmer"
                        style={{
                            background: 'rgba(255,255,255,0.18)',
                            border: '1.5px solid rgba(255,255,255,0.7)',
                            backdropFilter: 'blur(2px)',
                            WebkitBackdropFilter: 'blur(2px)',
                            boxShadow:
                                'inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 40px -8px rgba(37,99,235,0.25)',
                        }}
                        aria-hidden="true"
                    />

                    {/* Canvas itself */}
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                        <NetworkCanvas />
                    </div>

                    {/* Floating glass pills positioned relative to the canvas */}
                    {floatingPills.map((pill) => (
                        <motion.div
                            key={pill.label}
                            custom={pill.delay}
                            variants={pillVariants}
                            initial="hidden"
                            animate="show"
                            className="absolute glass glass-shimmer rounded-full px-3 py-1.5 text-xs font-semibold text-blue-700 select-none pointer-events-none"
                            style={{
                                left: pill.x,
                                top: pill.y,
                                rotate: pill.rotate,
                                boxShadow: '0 4px 16px rgba(37,99,235,0.15)',
                                whiteSpace: 'nowrap',
                                animation: `float-${((floatingPills.indexOf(pill) % 3) + 1)} ${14 + floatingPills.indexOf(pill) * 3}s ease-in-out infinite`,
                            }}
                            aria-hidden="true"
                        >
                            {pill.label}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Left / Bottom: Text & CTA */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full mx-auto lg:mx-0 relative z-10"
                >
                    {/* Eyebrow label */}
                    <motion.div variants={itemVariants} className="mb-5">
                        <span
                            className="glass rounded-full px-4 py-1.5 text-xs font-semibold text-blue-600 tracking-widest uppercase"
                            style={{ letterSpacing: '0.12em' }}
                        >
                            AI Strategy &amp; DX
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-[42px] sm:text-6xl md:text-[5.5rem] font-extrabold tracking-tight mb-6 leading-[1.05] text-slate-900"
                    >
                        <span className="block whitespace-nowrap">AIを味方に、</span>
                        <span className="block whitespace-nowrap text-gradient-deep">未来を豊かに。</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.div
                        variants={itemVariants}
                        className="font-sans text-sm sm:text-base md:text-lg text-slate-600 mb-8 lg:mb-10 leading-[1.9] max-w-2xl [text-wrap:pretty]"
                    >
                        <p className="mb-2">
                            社名である<strong className="text-slate-900">「WaiWai」</strong>は、
                            ハワイの言葉で<strong className="text-blue-600 border-b-2 border-blue-300 pb-0.5">「豊かさ」</strong>を意味します。
                        </p>
                        <p className="mb-2">
                            ハワイで幸運と繁栄の象徴とされるウミガメ（ホヌ）のように、クライアントの事業に長く確実な繁栄をもたらします。
                        </p>
                        <p>
                            テクノロジーの力で誰もが本来のポテンシャルを発揮できる、豊かな未来を創り出します。
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-3 mb-6 w-full sm:w-auto"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-[0_4px_16px_0_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-all duration-200 hover:shadow-[0_6px_24px_0_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0"
                        >
                            無料相談を予約する
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-700 glass rounded-full hover:bg-white/60 border border-white/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            サービスを見る
                        </a>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-2 justify-center lg:justify-start"
                    >
                        {trustBadges.map((badge) => (
                            <span
                                key={badge.text}
                                className="glass rounded-full px-3.5 py-1.5 text-xs text-slate-500 font-medium"
                                style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}
                            >
                                {badge.text}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
