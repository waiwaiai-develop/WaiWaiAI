'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

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

    const imageVariants = {
        hidden: { opacity: 0, x: 60 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    return (
        <section className="relative min-h-[70svh] lg:min-h-[95svh] flex items-center overflow-hidden bg-white pt-24 pb-8 lg:pt-0 lg:pb-0">
            <motion.div
                style={{ y: yShift, opacity: opacityHero }}
                className="w-full"
            >
                {/* Desktop: text left, image extends to right edge */}
                <div className="flex flex-col lg:flex-row items-center lg:items-center">
                    {/* Text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="w-full lg:w-[42%] px-6 md:px-12 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.08] text-slate-900"
                        >
                            <span className="block">AIを味方に、</span>
                            <span className="block text-gradient-deep">未来を豊かに。</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-base md:text-lg text-slate-500 font-normal mb-8 leading-relaxed max-w-md"
                        >
                            ハワイの言葉で「豊かさ」を意味するWaiWai。ウミガメ（ホヌ）のように、テクノロジーの力でクライアントの事業に長く確実な繁栄をもたらします。
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-5"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
                                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                            >
                                無料で相談する
                            </a>
                            <a
                                href="#services"
                                className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-200"
                            >
                                サービスを見る →
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Honu image — fills remaining space, bleeds to right edge */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="show"
                        className="w-full lg:w-[58%] mt-10 lg:mt-0"
                    >
                        <div className="relative w-full aspect-[3392/1216]">
                            <Image
                                src="/hero-honu.png"
                                alt="WaiWai AI - テクノロジーの力で豊かな未来を"
                                fill
                                className="object-contain object-center lg:object-right"
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
