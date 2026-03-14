'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

function TypingText({ texts, className }: { texts: string[]; className?: string }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const tick = useCallback(() => {
        const currentFullText = texts[currentTextIndex];

        if (isPaused) return;

        if (!isDeleting) {
            if (displayText.length < currentFullText.length) {
                setDisplayText(currentFullText.slice(0, displayText.length + 1));
            } else {
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, 2000);
            }
        } else {
            if (displayText.length > 0) {
                setDisplayText(displayText.slice(0, -1));
            } else {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
        }
    }, [displayText, isDeleting, isPaused, currentTextIndex, texts]);

    useEffect(() => {
        const speed = isDeleting ? 30 : 60;
        const timer = setTimeout(tick, speed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting]);

    return (
        <span className={className}>
            {displayText}
            <span className="typing-cursor" />
        </span>
    );
}

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    const typingTexts = [
        '最先端のAI技術で、あなたのビジョンを形に。',
        '開発から導入、運用まで一気通貫で支援します。',
        'AIネイティブな未来を、共に創りましょう。',
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-white">
            {/* Fluid background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="fluid-shape absolute top-[-15%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-100/30 to-sky-50/20 blur-[80px]" />
                <div className="fluid-shape absolute bottom-[-10%] left-[-8%] w-[400px] h-[400px] bg-gradient-to-tr from-sky-100/25 to-blue-50/15 blur-[80px]" style={{ animationDelay: '-5s' }} />
                <div className="fluid-shape absolute top-[30%] left-[50%] w-[300px] h-[300px] bg-gradient-to-r from-blue-50/20 to-transparent blur-[60px]" style={{ animationDelay: '-10s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-sm font-medium text-blue-600">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                                </span>
                                AIネイティブ開発会社
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
                        >
                            <span className="text-slate-900 glitch-text" data-text="AIを味方に、">AIを味方に、</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500">
                                未来を豊かに。
                            </span>
                        </motion.h1>

                        <motion.div
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-600 max-w-lg mb-10 leading-relaxed h-[3.5em]"
                        >
                            <TypingText
                                texts={typingTexts}
                                className="text-slate-600"
                            />
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#contact"
                                className="group px-7 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-[15px] transition-all hover:bg-blue-700 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                無料で相談する
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#products"
                                className="group px-7 py-3.5 rounded-lg bg-white/80 backdrop-blur-sm text-blue-700 font-semibold text-[15px] border border-blue-100/50 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center hover:scale-[1.02] active:scale-[0.98]"
                            >
                                プロダクトを見る
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Product Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden holo-card">
                            {/* Browser chrome mockup */}
                            <div className="bg-slate-50/90 backdrop-blur-sm px-4 py-3 flex items-center gap-2 border-b border-slate-200/50">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-300/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-300/60" />
                                    <div className="w-3 h-3 rounded-full bg-green-300/60" />
                                </div>
                                <div className="flex-1 mx-8">
                                    <div className="bg-white/80 rounded-md px-4 py-1.5 text-xs text-slate-400 text-center border border-slate-200/50">
                                        waiwai-ai.com
                                    </div>
                                </div>
                            </div>
                            <img
                                src="/images/product_a.png"
                                alt="WaiWaiAI SNS System"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Floating accent card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="absolute -bottom-6 -left-6 holo-card rounded-xl px-5 py-4"
                        >
                            <div className="text-xs text-slate-500 mb-1">月間処理件数</div>
                            <div className="text-2xl font-bold text-slate-900">50,000<span className="text-blue-600">+</span></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-0 w-full z-20 pointer-events-none"
            >
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-slate-400" />
                        <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-slate-400">Scroll</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
