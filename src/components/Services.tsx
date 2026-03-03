import { motion } from 'framer-motion';
import { Bot, Cpu, Settings, ArrowRight, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <section id="services" className="py-24 lg:py-40 relative bg-slate-900 border-t border-slate-800 overflow-hidden">

            {/* Deep intense background for high contrast & memorability */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold text-sm tracking-widest mb-6 backdrop-blur-md"
                    >
                        <Zap className="w-4 h-4" /> OUR SOLUTIONS
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                    >
                        破壊的スピードで、<br className="md:hidden" />事業を生まれ変わらせる
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
                    >
                        部分最適ではなく、本質的なプロセス改革を。最新のLLMと堅牢なシステム開発力で、あなたのビジネスから「無駄」を完全に排除します。
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {/* Service 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/50 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                                <Bot className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">AIエージェント構築</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed flex-grow text-sm font-medium pr-4">
                                RAGを活用し「社外秘を絶対に漏らさない」自社専用チャットボットを開発。CS対応などの手作業を最大80%削減します。
                            </p>
                            <Link to="/services#ai-solutions" className="inline-flex items-center gap-2 text-blue-400 font-bold group-hover:text-blue-300 transition-colors uppercase tracking-widest text-xs">
                                詳しく見る <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                        className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/50 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] group-hover:bg-indigo-500/20 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                                <Cpu className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">AIシステム・アプリ開発</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed flex-grow text-sm font-medium pr-4">
                                生成AIを組み込んだ新規SaaSの立ち上げや、社内業務システムのリプレイス。最新のモダンスタックで堅牢なシステムを最速構築。
                            </p>
                            <Link to="/services#system-development" className="inline-flex items-center gap-2 text-indigo-400 font-bold group-hover:text-indigo-300 transition-colors uppercase tracking-widest text-xs">
                                詳しく見る <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/50 overflow-hidden lg:col-span-1 md:col-span-2 lg:col-auto"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-[40px] group-hover:bg-sky-500/20 transition-all duration-500"></div>
                        <div className="relative z-10 md:w-1/2 lg:w-full mx-auto md:text-center lg:text-left">
                            <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-500 md:mx-auto lg:mx-0">
                                <Settings className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">DX・RPAコンサルティング</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed flex-grow text-sm font-medium lg:pr-4">
                                「何をAI化すべきか分からない」状態から、業務フローを可視化。Zapier, Make等を駆使したローコード自動化から伴走します。
                            </p>
                            <Link to="/services#dx-automation" className="inline-flex items-center gap-2 text-sky-400 font-bold group-hover:text-sky-300 transition-colors uppercase tracking-widest text-xs">
                                詳しく見る <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <Link to="/services" className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-slate-900 font-extrabold text-lg transition-transform transform hover:scale-105 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-3">
                            <Target className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform" />
                            すべてのソリューションとROIを見る
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-sky-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
