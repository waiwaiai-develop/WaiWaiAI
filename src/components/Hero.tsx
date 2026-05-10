'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquareText } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const trustItems = ['30分の無料相談', '最適なAI活用をご提案', '現場に寄り添う伴走支援'];

export default function Hero() {
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
    const yText = useTransform(scrollY, [0, 600], [0, 32]);
    const yVideo = useTransform(scrollY, [0, 600], [0, 18]);

    return (
        <section className="relative flex min-h-[600px] items-center overflow-hidden bg-white pb-10 pt-24 lg:min-h-[450px] lg:pb-0 lg:pt-20">
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

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease }}
                        >
                            <h1 className="mb-6 text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[48px] xl:text-[48px]">
                                <motion.span
                                    className="block"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2, ease }}
                                >
                                    AIを味方に、
                                </motion.span>
                                <motion.span
                                    className="block text-blue-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.45, ease }}
                                >
                                    未来を豊かに。
                                </motion.span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7, ease }}
                            className="mb-6 max-w-md text-base font-bold leading-8 text-slate-900"
                        >
                            中小企業のAI導入を、
                            <br />
                            戦略から実装・運用まで伴走します。
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.95, ease }}
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
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.15, ease }}
                            className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 lg:justify-start"
                        >
                            {trustItems.map((item) => (
                                <span key={item} className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 sm:text-sm">
                                    <CheckCircle2 className="h-5 w-5 text-blue-700" />
                                    {item}
                                </span>
                            ))}
                        </motion.div>
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
