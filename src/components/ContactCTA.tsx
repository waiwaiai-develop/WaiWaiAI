import { motion } from 'framer-motion';
import { ArrowRight, Mail, CalendarDays } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section id="contact" className="py-32 relative bg-sky-50 border-t border-slate-200">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Decorative subtle glow */}
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    <div className="lg:w-1/2 text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight tracking-tight"
                        >
                            次世代の<br />
                            システム開発を、<br />
                            <span className="text-sky-600">今すぐ。</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg mb-8 font-medium leading-relaxed"
                        >
                            AI導入からフルスクラッチ開発まで、貴社のビジネスに合わせた最適なソリューションをご提案します。まずは無料のオンライン相談で、課題をお聞かせください。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 text-slate-700 text-sm font-semibold"
                        >
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                                </span>
                                無料相談受付中
                            </div>
                            <div className="w-px h-4 bg-slate-300"></div>
                            <div className="text-slate-500">オンラインMTG対応</div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10 text-center tracking-wide">
                                プロジェクトについて話す
                            </h3>

                            <div className="space-y-4 mb-8 relative z-10">
                                <a
                                    href="#contactform"
                                    className="w-full relative px-6 py-5 rounded-2xl text-left bg-slate-50 border border-slate-100 hover:border-sky-300 hover:bg-white hover:shadow-sm transition-all flex flex-col group/btn"
                                >
                                    <span className="text-xs font-mono text-sky-600 mb-2 flex items-center gap-2 uppercase tracking-wider">
                                        <Mail className="w-3.5 h-3.5" /> Requirement Detail
                                    </span>
                                    <span className="text-lg font-bold text-slate-900 transition-colors">
                                        詳細な要件や相談を送る
                                    </span>
                                    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover/btn:text-sky-500 group-hover/btn:translate-x-1 transition-all" />
                                </a>

                                <a
                                    href="#schedule"
                                    className="w-full relative px-6 py-5 rounded-2xl text-left bg-slate-50 border border-slate-100 hover:border-blue-300 hover:bg-white hover:shadow-sm transition-all flex flex-col group/btn"
                                >
                                    <span className="text-xs font-mono text-blue-600 mb-2 flex items-center gap-2 uppercase tracking-wider">
                                        <CalendarDays className="w-3.5 h-3.5" /> Book a Meeting
                                    </span>
                                    <span className="text-lg font-bold text-slate-900 transition-colors">
                                        30分の無料オンライン予約
                                    </span>
                                    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover/btn:text-blue-500 group-hover/btn:translate-x-1 transition-all" />
                                </a>
                            </div>

                            <p className="text-xs text-slate-500 font-medium text-center relative z-10">
                                セキュアな通信で保護されています。<br className="md:hidden" />相見積もりも大歓迎です。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
