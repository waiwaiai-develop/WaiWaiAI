import { ArrowRight, PlayCircle, BarChart3, Clock, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">

            {/* Absolute Ambient Backgrounds */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-grid-light opacity-[0.10]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl">

                {/* Left Content Area */}
                <div className="flex-1 flex flex-col items-start pt-8 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm mb-8 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        エンタープライズ特化型 AI実装支援
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.15]"
                    >
                        業務の<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">70%</span>を自動化。<br />
                        圧倒的スピードで、<br />
                        御社に<span className="relative inline-block">
                            AI革命
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                            </svg>
                        </span>を。
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium"
                    >
                        DXの遅れ、慢性的な人手不足、経営を圧迫する残業代。<br className="hidden md:block" />
                        WaiWai AIは、最新のテクノロジーを用いて御社の業務プロセスを根本から再構築する「利益創出のパートナー」です。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <a href="#contact" className="group relative px-8 py-4 w-full sm:w-auto overflow-hidden rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-[0_8px_30px_-8px_rgba(59,130,246,0.6)] hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.8)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            <span className="relative z-10 flex items-center gap-2">
                                無料でコスト削減診断 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-700/50"></div>
                        </a>
                        <Link to="/services" className="group px-8 py-4 w-full sm:w-auto rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-bold text-lg hover:bg-slate-100 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2">
                            <PlayCircle className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                            ソリューションを見る
                        </Link>
                    </motion.div>
                </div>

                {/* Right Visual Area (Abstract UI Mockup / Dashboard) */}
                <motion.div
                    initial={{ opacity: 0, x: 40, rotateY: 15, perspective: 1000 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="flex-1 w-full lg:w-auto relative"
                >
                    <div className="relative w-full max-w-lg mx-auto aspect-square lg:aspect-[4/3]">
                        {/* Main Clean Panel */}
                        <div className="absolute inset-0 bg-white rounded-[2rem] border border-slate-200 shadow-xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group">

                            <div className="relative z-10 flex justify-between items-start mb-8 -translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-700">
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly ROI</h3>
                                    <div className="text-3xl font-black text-slate-800 tracking-tighter shrink-0">¥ 8,500,000</div>
                                </div>
                                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-xs font-bold border border-emerald-100 shadow-sm">
                                    <TrendingUp className="w-4 h-4" /> +320%
                                </div>
                            </div>

                            <div className="relative z-10 space-y-4">
                                {/* Stat Row 1 */}
                                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-sm flex items-center gap-4 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-md hover:bg-white">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-bold text-slate-600">手作業時間</span>
                                            <span className="text-sm font-bold text-rose-500">- 80%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-rose-400 w-1/5 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat Row 2 */}
                                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-sm flex items-center gap-4 transform transition-all duration-500 delay-75 hover:scale-[1.02] hover:shadow-md hover:bg-white">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-bold text-slate-600">処理スピード</span>
                                            <span className="text-sm font-bold text-emerald-500">+ 500%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-400 w-full rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat Row 3 */}
                                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-sm flex items-center gap-4 transform transition-all duration-500 delay-150 hover:scale-[1.02] hover:shadow-md hover:bg-white">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-bold text-slate-600">成約率向上</span>
                                            <span className="text-sm font-bold text-indigo-500">+ 2.5x</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-indigo-400 to-blue-500 w-[70%] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
