'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

/* Floating particles — small luminous dots drifting upward behind the honu */
const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 3 + Math.random() * 5,
    x: 15 + Math.random() * 70,       // % from left
    startY: 60 + Math.random() * 35,   // start near bottom
    duration: 6 + Math.random() * 10,  // seconds
    delay: Math.random() * 8,
    opacity: 0.15 + Math.random() * 0.3,
}));

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
    const yText = useTransform(scrollY, [0, 600], [0, 60]);
    const yImage = useTransform(scrollY, [0, 600], [0, 30]);

    return (
        <section className="relative min-h-[85svh] lg:min-h-screen flex items-center overflow-hidden pt-24 lg:pt-0">
            {/* ── Atmospheric background ── */}

            {/* Soft radial glow behind honu area (right side) */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: '80vw',
                    height: '80vh',
                    right: '-10vw',
                    top: '10%',
                    background: 'radial-gradient(ellipse at 60% 50%, rgba(191,219,254,0.5) 0%, rgba(219,234,254,0.3) 30%, rgba(239,246,255,0.15) 55%, transparent 75%)',
                }}
                aria-hidden="true"
            />

            {/* Secondary glow — top-left ambient wash */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: '50vw',
                    height: '50vh',
                    left: '-5vw',
                    top: '-5vh',
                    background: 'radial-gradient(ellipse at 40% 40%, rgba(219,234,254,0.35) 0%, transparent 70%)',
                }}
                aria-hidden="true"
            />

            {/* Floating particles — drifting upward */}
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

            {/* Subtle grid pattern for depth */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundSize: '60px 60px',
                    backgroundImage: 'linear-gradient(to right, rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,1) 1px, transparent 1px)',
                }}
                aria-hidden="true"
            />

            {/* ── Content ── */}
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

                    {/* Text — left side */}
                    <motion.div
                        style={{ y: yText, opacity: opacityHero }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
                    >
                        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900 mb-6">
                            AIを味方に、
                            <br />
                            <span className="text-gradient-deep">未来を豊かに。</span>
                        </h1>

                        <div className="text-base lg:text-lg text-slate-500 max-w-lg leading-[1.85] mb-8 space-y-2">
                            <p>
                                社名である<strong className="text-slate-800">「WaiWai」</strong>は、
                                ハワイの言葉で<strong className="text-blue-600">「豊かさ」</strong>を意味します。
                            </p>
                            <p>
                                ハワイで幸運と繁栄の象徴とされるウミガメ（ホヌ）のように、クライアントの事業に長く確実な繁栄をもたらします。
                            </p>
                            <p>
                                テクノロジーの力で誰もが本来のポテンシャルを発揮できる、豊かな未来を創り出します。
                            </p>
                        </div>

                        <div className="flex items-center gap-5">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
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

                    {/* Honu — right side with glow halo */}
                    <motion.div
                        style={{ y: yImage, opacity: opacityHero }}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Pulsing glow halo behind honu */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            style={{
                                width: '85%',
                                height: '85%',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(147,197,253,0.06) 40%, transparent 70%)',
                                animation: 'hero-glow-pulse 4s ease-in-out infinite',
                            }}
                            aria-hidden="true"
                        />

                        <div className="relative w-full max-w-lg lg:max-w-none mx-auto lg:-mr-12">
                            <Image
                                src="/ホヌ_背景透過.png"
                                alt="WaiWai AI - ホヌ（ウミガメ）"
                                width={1280}
                                height={853}
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* ── Keyframe animations ── */}
            <style>{`
                @keyframes hero-particle-float {
                    0% {
                        transform: translateY(0) scale(1);
                        opacity: 0;
                    }
                    15% {
                        opacity: 1;
                    }
                    85% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-40vh) scale(0.5);
                        opacity: 0;
                    }
                }
                @keyframes hero-glow-pulse {
                    0%, 100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.08);
                        opacity: 0.7;
                    }
                }
            `}</style>
        </section>
    );
}
