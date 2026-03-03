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
                        className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight max-w-2xl"
                    >
                        まずは<span className="text-blue-600">30分無料</span>で、<br />どれだけコスト削減できるか診断しませんか？
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-xl md:text-2xl font-bold mb-10 max-w-3xl"
                    >
                        「AIでできること」「削減できる具体的な工数」を、その場でお答えします。押し売りは一切いたしません。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-4 w-full justify-center max-w-3xl border-b border-slate-100 pb-12 mb-12"
                    >
                        <a
                            href="https://calendly.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-8 py-5 rounded-2xl text-center bg-blue-600 border border-transparent hover:bg-blue-700 text-white shadow-xl shadow-blue-500/30 transition-all flex flex-col items-center justify-center group"
                        >
                            <span className="text-xl font-bold mb-2 inline-flex items-center gap-2">
                                無料でオンライン相談を予約 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="text-sm text-blue-100 font-medium">空き日程カレンダーから1クリックで予約完了</span>
                        </a>

                        <a
                            href="/#contact-form"
                            className="flex-1 px-8 py-5 rounded-2xl text-center bg-white border-2 border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex flex-col items-center justify-center group"
                        >
                            <span className="text-xl font-bold text-slate-800 mb-2 inline-flex items-center gap-2">
                                メールで要件を送信する <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                            </span>
                            <span className="text-sm text-slate-500 font-medium">資料請求や具体的なRFPがある方はこちら</span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row justify-center gap-6 text-sm font-bold text-slate-600"
                    >
                        <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-5 h-5 text-green-500" /> 秘密保持契約（NDA）締結可能</span>
                        <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-5 h-5 text-green-500" /> 相見積もりのための情報収集でも歓迎</span>
                        <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-5 h-5 text-green-500" /> ITの専門知識がなくてもOK</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
