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
                    {/* --- New Advanced AI Core Visualization --- */}

                    {/* 1. Ambient Background Mesh Glowing Aura */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            className="absolute w-full h-full opacity-50 mix-blend-multiply blur-[60px]"
                        >
                            <div className="absolute top-[10%] right-[20%] w-[40%] h-[40%] bg-blue-300/40 rounded-full" />
                            <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-violet-200/40 rounded-full" />
                            <div className="absolute top-[30%] left-[10%] w-[45%] h-[45%] bg-sky-300/40 rounded-full" />
                        </motion.div>
                    </div>

                    {/* 2. Complex Orbital Data Rings */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ perspective: '1200px' }}>
                        {/* Outer Grid Ring */}
                        <motion.div
                            style={{ rotateX: 60, rotateY: -15 }}
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[80%] aspect-square rounded-full border-[1.5px] border-blue-200/50 flex items-center justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]"
                        >
                            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
                            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-300/50 to-transparent" />
                            {/* Outer Orbit Nodes */}
                            <div className="absolute top-0 w-2.5 h-2.5 -translate-y-1/2 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                            <div className="absolute bottom-0 w-2 h-2 translate-y-1/2 bg-indigo-400 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
                        </motion.div>

                        {/* Mid Dashed Ring */}
                        <motion.div
                            style={{ rotateX: 55, rotateY: 20 }}
                            animate={{ rotateZ: -360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[60%] aspect-square rounded-full border border-sky-400/30 border-dashed"
                        />

                        {/* Inner Glowing Aura Ring */}
                        <motion.div
                            style={{ rotateX: 45 }}
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[40%] aspect-square rounded-full border-t-2 border-r-2 border-violet-400/50 filter blur-[1px]"
                        />
                    </div>

                    {/* 3. The Central Generative Crystal (AI Core) */}
                    <motion.div
                        variants={sphereVariants}
                        className="relative z-20 w-[45%] aspect-square flex items-center justify-center"
                    >
                        {/* Central Breathing Light */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-sky-400 via-blue-500 to-violet-500 blur-2xl opacity-60"
                        />

                        {/* Outer Glass Crystal Layer */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[10%] rounded-[2rem] border border-white/60 bg-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.06)] overflow-hidden"
                            style={{
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-40" />
                            {/* Inner structural lines mimicking neural paths */}
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-x-[20%] top-0 bottom-[20%] border-r border-b border-white/40 rotate-45"
                            />
                        </motion.div>

                        {/* Inner Dense Processing Core */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[25%] rounded-3xl border border-white/90 bg-gradient-to-tr from-blue-50/40 to-violet-50/40 backdrop-blur-md flex items-center justify-center shadow-inner mt-0"
                        >
                            <motion.div
                                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.9, 1, 0.9] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="w-[45%] h-[45%] rounded-full bg-gradient-to-br from-blue-500 to-violet-600 shadow-[0_0_25px_rgba(99,102,241,0.5)] border border-white flex items-center justify-center"
                            >
                                <div className="w-[40%] h-[40%] bg-white rounded-full blur-[2px] opacity-90" />
                            </motion.div>
                        </motion.div>

                        {/* Orbiting Quantum Sparkles around crystal */}
                        <motion.div
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            <div className="absolute top-[10%] left-[50%] w-1.5 h-1.5 bg-sky-300 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                            <div className="absolute bottom-[20%] right-[10%] w-1 h-1 bg-violet-300 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                        </motion.div>
                    </motion.div>

                    {/* 4. Synapse Network Particles (Floating Nodes) */}
                    <div className="absolute inset-0 z-30 pointer-events-none">
                        {[
                            { color: 'bg-blue-500', size: 'w-2 h-2', delay: 0, x: 20, y: 30, xMove: 15, yMove: -20 },
                            { color: 'bg-violet-500', size: 'w-1.5 h-1.5', delay: 1, x: 75, y: 25, xMove: -10, yMove: -25 },
                            { color: 'bg-sky-400', size: 'w-2 h-2', delay: 2, x: 15, y: 70, xMove: 20, yMove: -15 },
                            { color: 'bg-indigo-500', size: 'w-1.5 h-1.5', delay: 0.5, x: 80, y: 65, xMove: -15, yMove: -20 },
                            { color: 'bg-blue-400', size: 'w-1 h-1', delay: 1.5, x: 40, y: 85, xMove: 10, yMove: -30 },
                            { color: 'bg-violet-400', size: 'w-1 h-1', delay: 2.5, x: 60, y: 15, xMove: -5, yMove: -15 },
                        ].map((node, i) => (
                            <motion.div
                                key={i}
                                className={`absolute ${node.size} rounded-full ${node.color} shadow-[0_0_12px_currentColor]`}
                                style={{ top: `${node.y}%`, left: `${node.x}%` }}
                                animate={{
                                    y: [0, node.yMove, 0],
                                    x: [0, node.xMove, 0],
                                    opacity: [0.1, 0.9, 0.1],
                                    scale: [0.6, 1.2, 0.6]
                                }}
                                transition={{
                                    duration: 4 + i * 0.5,
                                    repeat: Infinity,
                                    delay: node.delay,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}

                        {/* Synaptic Connecting Beams (Subtle) */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-overlay">
                            <motion.div
                                animate={{ rotateZ: [0, 90, 180, 270, 360], opacity: [0, 0.5, 0] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                            />
                            <motion.div
                                animate={{ rotateZ: [45, 135, 225, 315, 405], opacity: [0, 0.4, 0] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                                className="absolute w-[70%] h-[1px] bg-gradient-to-r from-transparent via-violet-400 to-transparent"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}