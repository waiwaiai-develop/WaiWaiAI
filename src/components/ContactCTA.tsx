'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section id="contact" className="py-32 relative bg-blue-600 border-t border-slate-200 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center text-center relative overflow-hidden">

                    {/* Decorative subtle glow inside the white card */}


                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shadow-inner"
                    >
                        <Calculator className="w-8 h-8" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight tracking-tight max-w-2xl"
                    >
                        ビジネスに、<br /><span className="text-blue-600">「AIの即戦力」</span>を。
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg md:text-xl font-medium mb-10 max-w-3xl leading-relaxed"
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
                            className="flex-1 px-10 py-6 rounded-3xl text-center bg-blue-600 border border-transparent hover:bg-blue-700 text-white shadow-[0_20px_40px_-10px_rgba(59,130,246,0.5)] flex flex-col items-center justify-center group"
                        >
                            <span className="text-xl font-black mb-1 inline-flex items-center gap-2">
                                無料で相談する <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </span>
                            <span className="text-sm text-blue-100 font-bold opacity-80 uppercase tracking-widest">Calendlyで即時予約</span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            href="/#contact-form"
                            aria-label="メールでお問い合わせする"
                            className="flex-1 px-10 py-6 rounded-3xl text-center bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-800 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center group"
                        >
                            <span className="text-xl font-black mb-1 inline-flex items-center gap-2">
                                メールでお問い合わせ <ArrowRight className="w-5 h-5 text-slate-500 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                            </span>
                            <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">資料請求・RFPの送付はこちら</span>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-bold text-slate-700 w-full"
                    >
                        <div className="flex items-center gap-2 justify-center bg-slate-50 py-3 px-4 rounded-2xl border border-slate-200">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" /> NDA締結可能
                        </div>
                        <div className="flex items-center gap-2 justify-center bg-slate-50 py-3 px-4 rounded-2xl border border-slate-200">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 最短即日で対応可能
                        </div>
                        <div className="flex items-center gap-2 justify-center bg-slate-50 py-3 px-4 rounded-2xl border border-slate-200">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" /> IT未経験歓迎
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
