'use client';

import { motion, useScroll, useTransform } from 'framer-motion';


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
        <section className="relative min-h-[70svh] lg:min-h-[95svh] flex items-center overflow-hidden">
            {/* Main Content */}
            <motion.div
                style={{ y: yShift, opacity: opacityHero }}
                className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between mt-16 lg:mt-20 gap-8 lg:gap-16"
            >
                {/* Left side: Text & CTA */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl mx-auto lg:mx-0 relative z-10"
                >
                    {/* Main Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-[44px] sm:text-6xl md:text-[5.5rem] font-extrabold tracking-tight mb-6 leading-[1.05] text-slate-900"
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

                {/* Right side: 3D Abstract Sphere - モバイルでは背景、lgでは横並び */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="absolute inset-0 z-0 lg:relative lg:z-auto lg:flex-1 w-full lg:aspect-square flex items-center justify-center opacity-20 lg:opacity-100"
                >
                    {/* 外側のグロー - より派手に */}
                    <motion.div
                        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-[2%] rounded-full bg-gradient-to-br from-blue-400/30 via-violet-300/20 to-sky-400/25 blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-[12%] rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/15 to-blue-600/20 blur-3xl"
                    />

                    {/* 3D Orbital Rings */}
                    <div className="absolute inset-0 pointer-events-none" style={{ perspective: '800px' }}>
                        {/* Ring 1 - 外側、ゆっくり */}
                        <motion.div
                            style={{ rotateX: 75 }}
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[1%] rounded-full"
                        >
                            <div
                                className="w-full h-full rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, rgba(59,130,246,0.7), rgba(139,92,246,0.3) 20%, transparent 40%, rgba(59,130,246,0.2) 60%, transparent 80%)',
                                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2.5px))',
                                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2.5px))',
                                }}
                            />
                        </motion.div>

                        {/* Ring 2 - 中間、逆回転 */}
                        <motion.div
                            style={{ rotateX: 65, rotateY: 30 }}
                            animate={{ rotateZ: -360 }}
                            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[6%] rounded-full"
                        >
                            <div
                                className="w-full h-full rounded-full"
                                style={{
                                    background: 'conic-gradient(from 120deg, rgba(56,189,248,0.6), transparent 25%, rgba(139,92,246,0.2) 50%, transparent 75%)',
                                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
                                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
                                }}
                            />
                        </motion.div>

                        {/* Ring 3 - 内側、高速 */}
                        <motion.div
                            style={{ rotateX: 80, rotateY: -20 }}
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[14%] rounded-full"
                        >
                            <div
                                className="w-full h-full rounded-full"
                                style={{
                                    background: 'conic-gradient(from 240deg, rgba(99,102,241,0.5), transparent 30%, rgba(56,189,248,0.3) 60%, transparent 85%)',
                                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
                                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* パルスリング */}
                    <motion.div
                        animate={{ scale: [0.5, 1.1], opacity: [0.6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                        className="absolute inset-[20%] rounded-full border-2 border-blue-400/40 z-10"
                    />
                    <motion.div
                        animate={{ scale: [0.5, 1.1], opacity: [0.4, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
                        className="absolute inset-[20%] rounded-full border-2 border-violet-400/30 z-10"
                    />

                    {/* ガラス球体 */}
                    <motion.div
                        variants={sphereVariants}
                        className="relative z-20 w-[50%] h-[50%] rounded-full flex items-center justify-center"
                    >
                        {/* 球体の外殻 */}
                        <div
                            className="absolute inset-0 rounded-full border border-white/70"
                            style={{
                                background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 35%, rgba(59,130,246,0.12) 70%, rgba(139,92,246,0.08) 100%)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                boxShadow: '0 40px 100px -15px rgba(59,130,246,0.35), 0 20px 60px -10px rgba(139,92,246,0.15), inset 0 2px 2px rgba(255,255,255,0.7), inset 0 -6px 16px rgba(59,130,246,0.1)',
                            }}
                        />

                        {/* 内部グラデーション */}
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[6%] rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, rgba(147,197,253,0.25), rgba(139,92,246,0.15), rgba(59,130,246,0.2), rgba(56,189,248,0.15), rgba(147,197,253,0.25))',
                            }}
                        />

                        {/* ハイライト */}
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute top-[10%] left-[15%] w-[45%] h-[30%] rounded-full"
                            style={{
                                background: 'radial-gradient(ellipse, rgba(255,255,255,0.8) 0%, transparent 65%)',
                                filter: 'blur(5px)',
                            }}
                        />

                        {/* コアグロー */}
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-[20%] rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(139,92,246,0.2) 40%, transparent 70%)',
                                filter: 'blur(10px)',
                            }}
                        />

                        {/* 球面反射 */}
                        <div className="absolute inset-[4%] rounded-full overflow-hidden">
                            <div
                                className="absolute top-[55%] left-[-10%] w-[120%] h-[45%] rounded-full"
                                style={{
                                    background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.06) 30%, rgba(59,130,246,0.04))',
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* 光の粒子 - 多め */}
                    <motion.div
                        animate={{ y: [0, -14, 0], x: [0, 4, 0], opacity: [0.2, 1, 0.2], scale: [0.6, 1.4, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-[12%] right-[18%] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)] z-30"
                    />
                    <motion.div
                        animate={{ y: [0, 10, 0], x: [0, -3, 0], opacity: [0.15, 0.9, 0.15], scale: [0.5, 1.3, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                        className="absolute bottom-[18%] left-[14%] w-2.5 h-2.5 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.7)] z-30"
                    />
                    <motion.div
                        animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                        className="absolute top-[35%] left-[8%] w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.7)] z-30"
                    />
                    <motion.div
                        animate={{ y: [0, -12, 0], x: [0, -5, 0], opacity: [0.1, 0.8, 0.1], scale: [0.9, 1.5, 0.9] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                        className="absolute bottom-[28%] right-[10%] w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.6)] z-30"
                    />
                    <motion.div
                        animate={{ y: [0, 6, 0], opacity: [0.2, 0.7, 0.2], scale: [0.7, 1.1, 0.7] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        className="absolute top-[22%] left-[28%] w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(59,130,246,0.5)] z-30"
                    />
                    <motion.div
                        animate={{ y: [0, -9, 0], x: [0, 6, 0], opacity: [0.15, 0.85, 0.15], scale: [0.6, 1.3, 0.6] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                        className="absolute bottom-[14%] right-[25%] w-1 h-1 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)] z-30"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}