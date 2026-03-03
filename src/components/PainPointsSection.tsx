import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown, RefreshCcw, HandHeart } from 'lucide-react';

export default function PainPointsSection() {
    return (
        <section id="pain-points" className="py-24 lg:py-40 relative bg-slate-900 overflow-hidden">
            {/* Dark, intense ambient background indicative of "pain/problems" */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-90 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">

                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 font-bold text-sm tracking-widest mb-6"
                    >
                        <AlertTriangle className="w-4 h-4 text-rose-500" /> THE BOTTLENECK
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight"
                    >
                        まだ<span className="text-rose-500 relative">
                            手作業
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-rose-500/30 rounded-full"></span>
                        </span>に<br className="md:hidden" />月間数百時間を奪われていますか？
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Pain 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="group bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/30 rounded-3xl p-8 transition-all duration-500 backdrop-blur-xl hover:-translate-y-2 relative overflow-hidden"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                            <Clock className="w-8 h-8 text-slate-400 group-hover:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">慢性的な人手不足と<br />採用コストの高騰</h3>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            退職者が出るたびに発生する採用費と教育工数。単純作業に追われ、コア業務に集中できない悪循環。
                        </p>
                    </motion.div>

                    {/* Pain 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/30 rounded-3xl p-8 transition-all duration-500 backdrop-blur-xl hover:-translate-y-2 relative overflow-hidden lg:-translate-y-4"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                            <RefreshCcw className="w-8 h-8 text-slate-400 group-hover:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">属人化した業務フローと<br />ヒューマンエラー</h3>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            「あの人しか分からない」ブラックボックス化したエクセル管理。手入力によるミスの対応に追われる日々。
                        </p>
                    </motion.div>

                    {/* Pain 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/30 rounded-3xl p-8 transition-all duration-500 backdrop-blur-xl hover:-translate-y-2 relative overflow-hidden"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                            <TrendingDown className="w-8 h-8 text-slate-400 group-hover:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">AIの導入に失敗し<br />コストだけが残った</h3>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            流行りのツールを導入したものの、現場に定着せず使われない。自社の課題にフィットしていない。
                        </p>
                    </motion.div>
                </div>

                {/* Solution Transition */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 lg:mt-32 max-w-4xl mx-auto"
                >
                    <div className="relative p-1 rounded-3xl bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800">
                        <div className="bg-slate-900 rounded-[22px] px-8 py-12 md:p-16 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

                            <HandHeart className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight leading-snug">
                                WaiWai AIは、そのすべてを<br className="md:hidden" />システムで<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">「資産」</span>に変えます。
                            </h3>
                            <p className="text-slate-400 font-medium text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                                作業を減らすだけではありません。人が人にしかできない「価値創造」に集中できる環境を最速で構築します。
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
