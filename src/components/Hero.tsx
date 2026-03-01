import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
            {/* Ultra-subtle background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-sky-500/10 via-blue-500/5 to-transparent blur-[80px] pointer-events-none rounded-full"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all mb-8 shadow-sm hover:shadow group">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-100 text-sky-600">
                            <Sparkles className="w-3 h-3" />
                        </span>
                        <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">WaiWai AI 次世代システム開発</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </a>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-slate-900 mb-8 leading-[1.1] max-w-5xl mx-auto"
                >
                    限界を超える、<br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500">
                        AI最適化システム
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium tracking-wide"
                >
                    圧倒的なスピードと品質で、ビジネスのボトルネックを破壊。
                    最先端の生成AIとフルスクラッチ開発で、企業に真のトランスフォーメーションをもたらします。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-sky-600 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        プロジェクトについて相談する
                    </a>
                    <Link to="/services" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm">
                        ソリューションを見る
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                className="w-full max-w-5xl mx-auto mt-20 relative px-4"
            >
                <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl md:rounded-3xl border border-slate-200/60 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative flex items-center justify-center group cursor-pointer hover:border-sky-300 transition-colors">
                    {/* Inner subtle glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    {/* Top edge highlight */}
                    <div className="absolute top-0 w-1/2 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent group-hover:via-sky-400 transition-all duration-500"></div>

                    <div className="flex flex-col items-center gap-6 relative z-10">
                        <img src={logo} alt="WaiWai AI" className="w-20 h-20 object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-110 transform" />
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                            <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">SYSTEM.INITIALIZED</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
