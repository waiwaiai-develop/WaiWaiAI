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
                    {/* --- Elegant Minimalist Aurora Flow --- */}

                    {/* 1. Ultra-soft massive flowing gradients */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                            className="absolute w-[150%] h-[150%] lg:w-[120%] lg:h-[120%] opacity-40 lg:opacity-60 mix-blend-multiply filter blur-[80px] lg:blur-[120px]"
                        >
                            {/* Primary light blue orb */}
                            <motion.div
                                animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-[10%] left-[20%] w-[50%] h-[50%] bg-blue-200/50 rounded-full"
                            />
                            {/* Secondary violet orb */}
                            <motion.div
                                animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute bottom-[20%] right-[10%] w-[60%] h-[60%] bg-violet-200/40 rounded-full"
                            />
                            {/* Tertiary cyan orb */}
                            <motion.div
                                animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
                                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-[40%] right-[20%] w-[45%] h-[45%] bg-sky-200/50 rounded-full"
                            />
                        </motion.div>
                    </div>

                    {/* 2. Abstract Geometric Glass Orb (Hidden on mobile for legibility, elegant on desktop) */}
                    <motion.div
                        variants={sphereVariants}
                        className="hidden lg:flex relative z-20 w-[60%] aspect-square items-center justify-center"
                    >
                        {/* Perfect soft frosted glass circle */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-[15%] rounded-full border border-white/40 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.02)] flex items-center justify-center overflow-hidden"
                            style={{ WebkitBackdropFilter: 'blur(24px)' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-50" />
                            {/* Inner soft glow */}
                            <motion.div
                                animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.4, 0.7, 0.4] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-300/30 to-violet-300/30 blur-2xl"
                            />
                        </motion.div>

                        {/* Thin elegant orbital ring */}
                        <motion.div
                            animate={{ rotateZ: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[80%] aspect-square rounded-full border-[0.5px] border-slate-300/40 pointer-events-none"
                            style={{ rotateX: 65 }}
                        >
                            <div className="absolute top-0 left-[20%] w-1.5 h-1.5 bg-blue-300 rounded-full shadow-[0_0_8px_rgba(147,197,253,0.8)]" />
                        </motion.div>
                    </motion.div>

                    {/* 3. Subtle floating particles (Very minimal, transparent) */}
                    <div className="absolute inset-0 z-30 pointer-events-none hidden lg:block">
                        {[
                            { color: 'bg-blue-300', size: 'w-1 h-1', delay: 0, x: 25, y: 35, yMove: -15 },
                            { color: 'bg-violet-300', size: 'w-1.5 h-1.5', delay: 2, x: 75, y: 25, yMove: -20 },
                            { color: 'bg-sky-200', size: 'w-1 h-1', delay: 1, x: 15, y: 65, yMove: -10 },
                        ].map((node, i) => (
                            <motion.div
                                key={i}
                                className={`absolute ${node.size} rounded-full ${node.color} opacity-40`}
                                style={{ top: `${node.y}%`, left: `${node.x}%` }}
                                animate={{
                                    y: [0, node.yMove, 0],
                                    opacity: [0, 0.5, 0],
                                }}
                                transition={{
                                    duration: 6 + i,
                                    repeat: Infinity,
                                    delay: node.delay,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}