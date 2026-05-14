'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquareText } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const trustItems = ['30分の無料相談', '代表が直接対応', '設計から実装まで一貫'];

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
    const yText = useTransform(scrollY, [0, 600], [0, 32]);
    const yVideo = useTransform(scrollY, [0, 600], [0, 18]);

    return (
        <section className="relative flex min-h-[520px] items-center overflow-hidden bg-white pb-8 pt-24 sm:min-h-[600px] sm:pb-10 lg:min-h-[450px] lg:pb-0 lg:pt-20">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(135deg, #ffffff 0%, #f8fbff 36%, #edf6ff 100%)',
                }}
                aria-hidden="true"
            />
            <div className="absolute inset-y-0 right-0 hidden w-[62%] bg-grid-light opacity-70 lg:block" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-[912px] px-5 sm:px-6 lg:px-0">
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-2">

                    {/* Text — staggered animations */}
                    <motion.div
                        style={{ y: yText, opacity: opacityHero }}
                        className="relative z-10 order-2 flex w-full flex-col items-center text-center lg:order-1 lg:w-[47%] lg:items-start lg:text-left"
                    >
                        {/* Mobile ghost video */}
                        <div
                            className="absolute inset-0 lg:hidden pointer-events-none flex items-center justify-center overflow-hidden"
                            style={{
                                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)',
                                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)',
                            }}
                            aria-hidden="true"
                        >
                            <video autoPlay muted loop playsInline poster="/hero-honu.webp" className="h-auto w-[160%] object-cover opacity-[0.18]">
                                <source src="/電脳の海を泳ぐホヌ動画.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div>
                            <h1 className="mb-5 text-[42px] font-bold leading-[1.08] tracking-tight text-slate-950 sm:mb-6 sm:text-6xl lg:text-[48px] xl:text-[48px]">
                                <span className="block">
                                    AIを味方に、
                                </span>
                                <span className="block text-blue-700">
                                    未来を豊かに。
                                </span>
                            </h1>
                        </div>

                        <p
                            className="mb-5 max-w-md text-sm font-bold leading-7 text-slate-900 sm:mb-6 sm:text-base sm:leading-8"
                        >
                            エンジニアリングもAI活用も、
                            <br />
                            代表自ら手を動かす開発会社です。
                        </p>

                        {/* CTAs */}
                        <div
                            className="flex w-full justify-center lg:justify-start"
                        >
                            <a
                                href="/contact"
                                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-blue-700 px-7 text-sm font-bold text-white shadow-[0_14px_30px_-18px_rgba(0,45,150,0.85)] transition hover:-translate-y-0.5 hover:bg-blue-800"
                            >
                                <MessageSquareText className="h-5 w-5" />
                                相談・問い合わせをする
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                            </a>
                        </div>

                        <div
                            className="mt-5 grid w-full grid-cols-1 gap-2 text-left sm:mt-7 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-7 sm:gap-y-3 lg:justify-start"
                        >
                            {trustItems.map((item) => (
                                <span key={item} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/65 px-3 py-2 text-xs font-bold text-slate-700 ring-1 ring-blue-100/70 sm:justify-start sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm sm:ring-0">
                                    <CheckCircle2 className="h-4 w-4 text-blue-700 sm:h-5 sm:w-5" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Honu video — desktop */}
                    <motion.div
                        style={{ y: yVideo, opacity: opacityHero }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease }}
                        className="relative z-[6] order-1 hidden w-full lg:order-2 lg:block lg:w-[53%]"
                    >
                        <div
                            className="relative mx-auto lg:-mr-10 lg:max-w-none"
                            style={{
                                WebkitMaskImage: 'radial-gradient(ellipse 86% 78% at 58% 50%, black 42%, transparent 76%)',
                                maskImage: 'radial-gradient(ellipse 86% 78% at 58% 50%, black 42%, transparent 76%)',
                            }}
                        >
                            <video autoPlay muted loop playsInline poster="/hero-honu.webp" className="h-auto w-full scale-110">
                                <source src="/電脳の海を泳ぐホヌ動画.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
