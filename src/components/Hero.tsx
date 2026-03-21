'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

/* Floating particles */
const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 4,
    x: 30 + Math.random() * 60,
    startY: 50 + Math.random() * 40,
    duration: 7 + Math.random() * 10,
    delay: Math.random() * 6,
    opacity: 0.12 + Math.random() * 0.2,
}));

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
    const yText = useTransform(scrollY, [0, 600], [0, 60]);
    const yImage = useTransform(scrollY, [0, 600], [0, 25]);

    return (
        <section className="relative min-h-[85svh] lg:min-h-screen flex items-center overflow-hidden pt-24 lg:pt-0 bg-white">
            {/* ── Blue gradient background (opaque to block layout bg) ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 25%, #e0f2fe 50%, #eff6ff 75%, #ffffff 100%)',
                }}
                aria-hidden="true"
            />

            {/* Subtle tech grid lines */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundSize: '80px 80px',
                    backgroundImage: 'linear-gradient(to right, rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,1) 1px, transparent 1px)',
                }}
                aria-hidden="true"
            />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${p.x}%`,
                            top: `${p.startY}%`,
                            background: `radial-gradient(circle, rgba(59,130,246,${p.opacity + 0.15}) 0%, rgba(147,197,253,${p.opacity}) 60%, transparent 100%)`,
                            animation: `hero-particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                        }}
                    />
                ))}
            </div>

            {/* ── Content ── */}
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="relative flex flex-col lg:flex-row items-center lg:items-center">

                    {/* Text — left side */}
                    <motion.div
                        style={{ y: yText, opacity: opacityHero }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 py-8 lg:py-0"
                    >
                        <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-8">
                            AIを味方に、
                            <br />
                            <span className="text-gradient-deep">未来を豊かに。</span>
                        </h1>

                        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-800 mb-5">
                            &ldquo;WaiWai AI&rdquo;がつくる、新しい<span className="text-blue-600">「豊かさ」</span>。
                        </h2>

                        <ul className="text-sm sm:text-base text-slate-600 mb-5 space-y-1">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                                社名<strong className="text-slate-800">「WaiWai」</strong>は、ハワイ語で<strong className="text-blue-600">『豊かさ』</strong>。
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                                幸運と繁栄の象徴<strong className="text-blue-600">「ホヌ（ウミガメ）」</strong>のように。
                            </li>
                        </ul>

                        <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
                            ハワイで愛されるホヌ（ウミガメ）のように、AIテクノロジーでクライアントの事業に長く確実な繁栄をもたらします。
                            <br />
                            本来のポテンシャルを発揮できる、豊かな未来を共に創り出します。
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                                style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.25)' }}
                            >
                                無料で相談する
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-slate-700 border border-slate-300 rounded-full hover:border-slate-400 hover:bg-white/60 transition-all"
                            >
                                さらに詳しく →
                            </a>
                        </div>
                    </motion.div>

                    {/* Honu — right side, overlapping into center */}
                    <motion.div
                        style={{ y: yImage, opacity: opacityHero }}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.3, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-[55%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 relative"
                    >
                        {/* Blue glow halo behind honu */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            style={{
                                width: '90%',
                                height: '90%',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(147,197,253,0.05) 40%, transparent 65%)',
                                animation: 'hero-glow-pulse 5s ease-in-out infinite',
                            }}
                            aria-hidden="true"
                        />

                        {/* Tech trace lines behind honu */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]"
                            viewBox="0 0 600 400"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M50 300 Q150 250 250 280 T450 220 T600 180"
                                stroke="url(#trace1)"
                                strokeWidth="1.5"
                                strokeDasharray="8 6"
                                className="animate-[hero-trace_6s_linear_infinite]"
                            />
                            <path
                                d="M0 200 Q100 180 200 210 T400 170 T580 140"
                                stroke="url(#trace2)"
                                strokeWidth="1"
                                strokeDasharray="6 8"
                                className="animate-[hero-trace_8s_linear_1s_infinite]"
                            />
                            <path
                                d="M100 350 Q200 320 300 340 T500 280 T620 250"
                                stroke="url(#trace3)"
                                strokeWidth="1"
                                strokeDasharray="4 10"
                                className="animate-[hero-trace_10s_linear_2s_infinite]"
                            />
                            <defs>
                                <linearGradient id="trace1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                                    <stop offset="30%" stopColor="rgba(59,130,246,1)" />
                                    <stop offset="70%" stopColor="rgba(147,197,253,1)" />
                                    <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                                </linearGradient>
                                <linearGradient id="trace2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(96,165,250,0)" />
                                    <stop offset="40%" stopColor="rgba(96,165,250,0.8)" />
                                    <stop offset="100%" stopColor="rgba(96,165,250,0)" />
                                </linearGradient>
                                <linearGradient id="trace3" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(147,197,253,0)" />
                                    <stop offset="50%" stopColor="rgba(147,197,253,0.6)" />
                                    <stop offset="100%" stopColor="rgba(147,197,253,0)" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="relative max-w-xl lg:max-w-none mx-auto">
                            <Image
                                src="/ホヌ_背景透過.png"
                                alt="WaiWai AI - ホヌ（ウミガメ）"
                                width={1280}
                                height={853}
                                className="w-full h-auto drop-shadow-[0_16px_40px_rgba(37,99,235,0.1)]"
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* ── Keyframe animations ── */}
            <style>{`
                @keyframes hero-particle-float {
                    0% { transform: translateY(0) scale(1); opacity: 0; }
                    15% { opacity: 1; }
                    85% { opacity: 1; }
                    100% { transform: translateY(-35vh) scale(0.4); opacity: 0; }
                }
                @keyframes hero-glow-pulse {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    50% { transform: translate(-50%, -50%) scale(1.06); opacity: 0.6; }
                }
                @keyframes hero-trace {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -100; }
                }
            `}</style>
        </section>
    );
}
