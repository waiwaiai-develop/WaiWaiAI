'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section id="contact" className="py-32 relative bg-stone-950 border-t border-stone-800 overflow-hidden">
            {/* Grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
                <div className="bg-white p-8 md:p-16 border border-stone-200 flex flex-col items-center text-center relative overflow-hidden">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center border border-amber-100"
                    >
                        <Calculator className="w-8 h-8" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6 text-stone-900 leading-tight tracking-tight max-w-2xl"
                    >
                        ビジネスに、<br /><span className="text-amber-600">「AIの即戦力」</span>を。
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-stone-600 text-lg md:text-xl font-medium mb-10 max-w-3xl leading-relaxed"
                    >
                        「どこまで自動化できる？」「費用対効果は？」<br className="hidden md:block" />
                        まずは30分、御社の課題をお聞かせください。最適な進め方をご提案します。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-6 w-full justify-center max-w-4xl pb-12 mb-12"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            href="https://calendly.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Calendlyで無料相談を予約する"
                            className="flex-1 px-10 py-6 text-center bg-amber-500 hover:bg-amber-400 text-stone-950 border border-transparent flex flex-col items-center justify-center group transition-colors"
                        >
                            <span className="text-xl font-black mb-1 inline-flex items-center gap-2">
                                無料で相談する <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </span>
                            <span className="text-sm font-bold opacity-70 uppercase tracking-widest">Calendlyで即時予約</span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            href="/#contact-form"
                            aria-label="メールでお問い合わせする"
                            className="flex-1 px-10 py-6 text-center border border-stone-200 hover:border-stone-300 text-stone-800 hover:bg-stone-50 flex flex-col items-center justify-center group transition-colors"
                        >
                            <span className="text-xl font-black mb-1 inline-flex items-center gap-2">
                                メールでお問い合わせ <ArrowRight className="w-5 h-5 text-stone-500 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                            </span>
                            <span className="text-sm text-stone-500 font-bold uppercase tracking-widest">資料請求・RFPの送付はこちら</span>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-bold text-stone-700 w-full"
                    >
                        <div className="flex items-center gap-2 justify-center bg-stone-50 py-3 px-4 border border-stone-200">
                            <CheckCircle2 className="w-5 h-5 text-amber-600" /> NDA締結可能
                        </div>
                        <div className="flex items-center gap-2 justify-center bg-stone-50 py-3 px-4 border border-stone-200">
                            <CheckCircle2 className="w-5 h-5 text-amber-600" /> 最短即日で対応可能
                        </div>
                        <div className="flex items-center gap-2 justify-center bg-stone-50 py-3 px-4 border border-stone-200">
                            <CheckCircle2 className="w-5 h-5 text-amber-600" /> IT未経験歓迎
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
