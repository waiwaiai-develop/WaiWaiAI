'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import NetworkCanvas from './NetworkCanvas';

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
    const yShift = useTransform(scrollY, [0, 500], [0, 50]);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.14, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    const sphereVariants = {
        hidden: { opacity: 0, scale: 0.85 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    return (
        <section className="relative min-h-[70svh] lg:min-h-[95svh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-16 lg:pt-0 lg:pb-0">
            {/* Subtle blue gradient at top */}
            <div
                className="absolute inset-x-0 top-0 h-[400px] pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, rgba(219,234,254,0.45) 0%, rgba(191,219,254,0.18) 50%, transparent 100%)',
                }}
                aria-hidden="true"
            />

            <motion.div
                style={{ y: yShift, opacity: opacityHero }}
                className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row-reverse items-center justify-between gap-16 lg:gap-20"
            >
                {/* Right / Top: NetworkCanvas in clean circle */}
                <motion.div
                    variants={sphereVariants}
                    initial="hidden"
                    animate="show"
                    className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[460px] aspect-square flex-shrink-0"
                >
                    <div
                        className="w-full h-full rounded-full overflow-hidden border border-slate-200"
                        style={{
                            boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                        }}
                    >
                        <NetworkCanvas />
                    </div>
                </motion.div>

                {/* Left / Bottom: Text & CTA */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full mx-auto lg:mx-0"
                >
                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-7 leading-[1.05] text-slate-900"
                    >
                        <span className="block whitespace-nowrap">AIを味方に、</span>
                        <span className="block whitespace-nowrap text-gradient-deep">未来を豊かに。</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.div
                        variants={itemVariants}
                        className="font-sans text-base md:text-lg text-slate-500 font-normal mb-10 leading-[1.9] max-w-xl [text-wrap:pretty]"
                    >
                        <p className="mb-2">
                            社名である「WaiWai」は、ハワイの言葉で「豊かさ」を意味します。
                        </p>
                        <p className="mb-2">
                            ハワイで幸運と繁栄の象徴とされるウミガメ（ホヌ）のように、クライアントの事業に長く確実な繁栄をもたらします。
                        </p>
                        <p>
                            テクノロジーの力で誰もが本来のポテンシャルを発揮できる、豊かな未来を創り出します。
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center lg:items-start gap-4"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
                            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                        >
                            無料で相談する
                        </a>
                        <a
                            href="#services"
                            className="text-sm font-normal text-slate-500 hover:text-slate-700 transition-colors duration-200"
                        >
                            サービスを見る →
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
