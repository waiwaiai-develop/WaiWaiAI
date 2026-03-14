'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section className="py-28 lg:py-36 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f1115]" />
            {/* Gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#7c5bf5]/[0.04] blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight">
                        ビジネスに、
                        <br />
                        <span className="gradient-text-accent">「AIの即戦力」を。</span>
                    </h2>

                    <p className="text-[#8b8b9e] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        まずは30分、御社の課題をヒアリングさせてください。
                        <br className="hidden md:block" />
                        プロの視点で最短ルートを提示します。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a
                            href="https://calendly.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 rounded-lg bg-[#7c5bf5] text-white font-semibold text-lg transition-all hover:bg-[#6b4ae4] flex items-center justify-center gap-2"
                        >
                            無料相談を予約する
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact-form"
                            className="group px-8 py-4 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white font-semibold text-lg transition-all hover:bg-white/[0.08] flex items-center justify-center gap-2"
                        >
                            メールでお問い合わせ
                            <ArrowRight className="w-5 h-5 text-[#8b8b9e] group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#8b8b9e]">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#7c5bf5]" />
                            NDA締結可能
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#7c5bf5]" />
                            相見積もり歓迎
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#7c5bf5]" />
                            IT未経験歓迎
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
