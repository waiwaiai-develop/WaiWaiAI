'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section id="contact" className="py-28 md:py-36 relative bg-white border-t border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-3xl">
                <div className="flex flex-col items-center text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight tracking-tight max-w-2xl"
                    >
                        ビジネスに、<br /><span className="text-blue-600">「AIの即戦力」</span>を。
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg md:text-xl font-normal mb-10 max-w-2xl leading-relaxed"
                    >
                        「どこまで自動化できる？」「費用対効果は？」<br className="hidden md:block" />
                        まずは1時間、御社の課題をお聞かせください。最適な進め方をご提案します。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 mb-10"
                    >
                        <a
                            href="/booking"
                            aria-label="無料相談を予約する"
                            className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            無料で相談する
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </a>
                        <a
                            href="/#contact-form"
                            aria-label="メールでお問い合わせする"
                            className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base transition-all duration-300 active:scale-[0.98]"
                        >
                            メールでお問い合わせ
                            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-slate-500"
                    >
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            NDA締結可能
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            最短即日で対応可能
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            IT未経験歓迎
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
