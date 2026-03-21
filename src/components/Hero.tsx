'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
    const yText = useTransform(scrollY, [0, 600], [0, 50]);
    const yVideo = useTransform(scrollY, [0, 600], [0, 20]);

    return (
        <section className="relative min-h-[90svh] lg:min-h-screen flex items-center overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0 bg-white">
            {/* ── Background: soft blue gradient ── */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(160deg, #f8faff 0%, #f0f5ff 20%, #f5f9ff 45%, #fafcff 70%, #ffffff 100%)',
                }}
                aria-hidden="true"
            />

            {/* ── Content ── */}
            <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4">

                    {/* Text */}
                    <motion.div
                        style={{ y: yText, opacity: opacityHero }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1 relative"
                    >
                        {/* Mobile only: ghosted video behind text */}
                        <div
                            className="absolute inset-0 lg:hidden pointer-events-none flex items-center justify-center overflow-hidden"
                            style={{
                                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)',
                                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)',
                            }}
                            aria-hidden="true"
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-[140%] h-auto opacity-[0.2] object-cover"
                            >
                                <source src="/電脳の海を泳ぐホヌ動画.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
                            AIを味方に、
                            <br />
                            <span className="text-gradient-deep">未来を豊かに。</span>
                        </h1>

                        <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-4">
                            &ldquo;WaiWai AI&rdquo;がつくる、
                            <br className="sm:hidden" />
                            新しい<span className="text-blue-600">「豊かさ」。</span>
                        </h2>

                        <ul className="text-sm sm:text-base text-slate-600 mb-4 space-y-1 text-left">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1 shrink-0">•</span>
                                <span>社名<strong className="text-slate-800">「WaiWai」</strong>は、ハワイ語で<strong className="text-blue-600">『豊かさ』</strong>。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1 shrink-0">•</span>
                                <span>幸運と繁栄の象徴<strong className="text-blue-600">「ホヌ（ウミガメ）」</strong>のように。</span>
                            </li>
                        </ul>

                        <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-7 max-w-lg text-left">
                            ハワイで愛されるホヌ（ウミガメ）のように、AIテクノロジーでクライアントの事業に長く確実な繁栄をもたらします。本来のポテンシャルを発揮できる、豊かな未来を共に創り出します。
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                                style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.2)' }}
                            >
                                無料で相談する
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-slate-600 border border-slate-300 rounded-full hover:border-slate-400 hover:bg-white/60 transition-all"
                            >
                                さらに詳しく →
                            </a>
                        </div>
                    </motion.div>

                    {/* Honu video — desktop */}
                    <motion.div
                        style={{ y: yVideo, opacity: opacityHero }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:block w-full lg:w-[50%] relative z-[6] order-1 lg:order-2"
                    >
                        <div
                            className="relative lg:max-w-none mx-auto lg:-mr-16"
                            style={{
                                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at 60% 50%, black 40%, transparent 75%)',
                                maskImage: 'radial-gradient(ellipse 85% 80% at 60% 50%, black 40%, transparent 75%)',
                            }}
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-auto scale-110"
                            >
                                <source src="/電脳の海を泳ぐホヌ動画.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
