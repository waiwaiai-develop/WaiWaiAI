'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
    const yText = useTransform(scrollY, [0, 600], [0, 60]);
    const yImage = useTransform(scrollY, [0, 600], [0, 30]);

    return (
        <section className="relative min-h-[85svh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-24 lg:pt-0">
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

                    {/* Honu — right side, transparent bg so it naturally integrates */}
                    <motion.div
                        style={{ y: yImage, opacity: opacityHero }}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative w-full max-w-lg lg:max-w-none mx-auto lg:-mr-12">
                            <Image
                                src="/ホヌ_背景透過.png"
                                alt="WaiWai AI - ホヌ（ウミガメ）"
                                width={1280}
                                height={853}
                                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
