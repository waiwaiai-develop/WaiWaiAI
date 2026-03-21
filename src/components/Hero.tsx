'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
    const yText = useTransform(scrollY, [0, 600], [0, 80]);
    const yImage = useTransform(scrollY, [0, 600], [0, 40]);
    const scaleImage = useTransform(scrollY, [0, 400], [1, 1.05]);

    return (
        <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-white">
            {/* Headline — absolute, top center */}
            <motion.div
                style={{ y: yText, opacity: opacityHero }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[18vh] sm:top-[16vh] left-0 right-0 z-20 text-center px-6"
            >
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-slate-900 mb-5">
                    AIを味方に、
                    <br />
                    <span className="text-gradient-deep">未来を豊かに。</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto leading-relaxed mb-8">
                    ハワイの言葉で「豊かさ」を意味するWaiWai。
                    <br className="hidden sm:block" />
                    テクノロジーの力で、確実な繁栄をもたらします。
                </p>
                <div className="flex items-center justify-center gap-5">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
                    >
                        無料で相談する
                    </a>
                    <a
                        href="#services"
                        className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        サービスを見る →
                    </a>
                </div>
            </motion.div>

            {/* Honu — large, bottom-anchored, cinematic */}
            <motion.div
                style={{ y: yImage, scale: scaleImage, opacity: opacityHero }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full mt-auto"
            >
                <div className="relative w-full max-w-5xl mx-auto px-6">
                    <div className="relative w-full" style={{ aspectRatio: '3392/1216' }}>
                        <Image
                            src="/hero-honu.png"
                            alt="WaiWai AI"
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
