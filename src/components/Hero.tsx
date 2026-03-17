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

    const sphereVariants = {
        hidden: { opacity: 0, scale: 0.7 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    return (
        <section className="relative min-h-[95svh] flex items-center overflow-hidden">
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
                        className="font-sans text-lg md:text-xl text-slate-700 mb-10 leading-[1.8] max-w-lg"
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
                            className="group h-14 px-10 py-4 rounded-full glass-strong text-slate-700 font-bold text-[15px] transition-all duration-300 hover:bg-white/60 hover:text-blue-700 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center"
                        >
                            ソリューションを見る
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right side: 3D Abstract Sphere */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex-1 relative w-full max-w-sm lg:max-w-none aspect-square flex items-center justify-center"
                >
                    {/* 外側のソフトグロー */}
                    <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-blue-200/40 via-sky-100/30 to-blue-300/20 blur-2xl" />
                    <div className="absolute inset-[18%] rounded-full bg-gradient-to-tr from-blue-500/12 via-sky-400/10 to-transparent blur-3xl" />

                    {/* 3D Orbital Rings */}
                    <div className="absolute inset-0 pointer-events-none" style={{ perspective: '800px' }}>
                        {/* Ring 1 - 大きめ、ゆっくり */}
                        <motion.div
                            style={{ rotateX: 75 }}
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[3%] rounded-full"
                        >
                            <div
                                className="w-full h-full rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, rgba(59,130,246,0.5), transparent 35%, rgba(59,130,246,0.15), transparent 75%)',
                                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
                                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
                                }}
                            />
                        </motion.div>

                        {/* Ring 2 - 小さめ、逆回転、別角度 */}
                        <motion.div
                            style={{ rotateX: 65, rotateY: 30 }}
                            animate={{ rotateZ: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[8%] rounded-full"
                        >
                            <div
                                className="w-full h-full rounded-full"
                                style={{
                                    background: 'conic-gradient(from 120deg, rgba(56,189,248,0.4), transparent 30%, rgba(56,189,248,0.1), transparent 70%)',
                                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
                                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* ガラス球体 */}
                    <motion.div
                        variants={sphereVariants}
                        className="relative z-20 w-[55%] h-[55%] rounded-full flex items-center justify-center"
                    >
                        {/* 球体の外殻 - ガラスモーフィズム */}
                        <div
                            className="absolute inset-0 rounded-full border border-white/60"
                            style={{
                                background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 40%, rgba(59,130,246,0.08) 100%)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                boxShadow: '0 32px 80px -12px rgba(59,130,246,0.25), inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -4px 12px rgba(59,130,246,0.08)',
                            }}
                        />

                        {/* 内部グラデーション - 奥行き表現 */}
                        <div
                            className="absolute inset-[8%] rounded-full"
                            style={{
                                background: 'radial-gradient(circle at 40% 35%, rgba(147,197,253,0.3) 0%, rgba(59,130,246,0.12) 50%, rgba(99,102,241,0.06) 100%)',
                            }}
                        />

                        {/* ハイライト - 上部の光の反射 */}
                        <motion.div
                            animate={{ opacity: [0.6, 0.9, 0.6] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute top-[12%] left-[18%] w-[40%] h-[25%] rounded-full"
                            style={{
                                background: 'radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 70%)',
                                filter: 'blur(4px)',
                            }}
                        />

                        {/* コアグロー - 中心の輝き */}
                        <motion.div
                            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-[25%] rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(56,189,248,0.1) 50%, transparent 70%)',
                                filter: 'blur(8px)',
                            }}
                        />

                        {/* 球面上の反射ライン */}
                        <div
                            className="absolute inset-[4%] rounded-full overflow-hidden"
                        >
                            <div
                                className="absolute top-[60%] left-[-10%] w-[120%] h-[40%] rounded-full"
                                style={{
                                    background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.06) 30%, rgba(99,102,241,0.04))',
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* 光の粒子 */}
                    <motion.div
                        animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                        className="absolute top-[14%] right-[20%] w-1.5 h-1.5 rounded-full bg-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.6)] z-30"
                    />
                    <motion.div
                        animate={{ y: [0, 8, 0], opacity: [0.2, 0.9, 0.2], scale: [0.7, 1.2, 0.7] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute bottom-[20%] left-[16%] w-2 h-2 rounded-full bg-sky-300/70 shadow-[0_0_10px_rgba(56,189,248,0.5)] z-30"
                    />
                    <motion.div
                        animate={{ y: [0, -6, 0], opacity: [0.2, 0.8, 0.2], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                        className="absolute top-[38%] left-[10%] w-1 h-1 rounded-full bg-blue-300/90 shadow-[0_0_6px_rgba(59,130,246,0.5)] z-30"
                    />
                    <motion.div
                        animate={{ y: [0, -12, 0], opacity: [0.15, 0.7, 0.15], scale: [1, 1.4, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
                        className="absolute bottom-[30%] right-[12%] w-1 h-1 rounded-full bg-sky-400/80 shadow-[0_0_6px_rgba(56,189,248,0.4)] z-30"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}