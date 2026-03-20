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

    return (
        <section className="relative min-h-[70svh] lg:min-h-[95svh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-16 lg:pt-0 lg:pb-0">
            <motion.div
                style={{ y: yShift, opacity: opacityHero }}
                className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16"
            >
                {/* Right/Top Visual: Contained Canvas Animation Block (AI-Shift style) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square relative z-20 flex-shrink-0"
                >
                    <div className="w-full h-full rounded-full bg-slate-50 overflow-hidden relative shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]">
                        <NetworkCanvas />
                    </div>
                </motion.div>

                {/* Left/Bottom Content: Text & CTA */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full mx-auto lg:mx-0 relative z-10"
                >
                    {/* Main Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-[42px] sm:text-6xl md:text-[5.5rem] font-extrabold tracking-tight mb-6 leading-[1.05] text-slate-900"
                    >
                        <span className="block whitespace-nowrap">AIを味方に、</span>
                        <span className="block whitespace-nowrap text-gradient-deep">未来を豊かに。</span>
                    </motion.h1>

                    {/* Sub Description */}
                    <motion.div
                        variants={itemVariants}
                        className="font-sans text-sm sm:text-base md:text-lg text-slate-600 mb-4 lg:mb-10 leading-[1.9] max-w-2xl [text-wrap:pretty]"
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

                </motion.div>
            </motion.div>
        </section>
    );
}