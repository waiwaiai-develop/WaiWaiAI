import { motion } from 'framer-motion';
import { ArrowRight, Newspaper, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { newsData } from '../data/newsData';

export default function NewsSection() {

    return (
        <section id="news" className="py-24 lg:py-32 relative bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">

                <div className="border border-slate-200 bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgba(15,23,42,0.04)] overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Info Area */}
                        <div className="lg:w-1/3 bg-blue-50 p-10 lg:p-14 text-slate-900 relative overflow-hidden border-r border-slate-100">

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-blue-100"
                            >
                                <Newspaper className="w-6 h-6 text-blue-600" />
                            </motion.div>

                            <h2 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight">
                                INFORMATION
                            </h2>
                            <p className="text-slate-600 leading-relaxed font-bold mb-12">
                                WaiWai AIの最新の技術動向、開発の裏側、プレスリリースをお届けします。
                            </p>

                            <div className="flex flex-col gap-4">
                                <Link to="#" className="group flex items-center justify-between px-6 py-4 rounded-xl bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-600 hover:text-white transition-all font-bold shadow-sm text-slate-800">
                                    <span>NEWS 記事一覧</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                        <ArrowRight className="w-4 h-4 group-hover:text-white text-slate-600" />
                                    </div>
                                </Link>
                                <Link to="#" className="group flex items-center justify-between px-6 py-4 rounded-xl bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-600 hover:text-white transition-all font-bold shadow-sm text-slate-800">
                                    <span>TECH BLOG 一覧</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                        <ArrowRight className="w-4 h-4 group-hover:text-white text-slate-600" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="lg:w-2/3 p-6 lg:p-14 bg-white">
                            <div className="flex flex-col space-y-2">
                                {newsData.map((item, index) => (
                                    <motion.a
                                        href={item.link}
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group block p-6 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                            <div className="flex items-center gap-4 w-48 shrink-0">
                                                <span className="text-slate-500 font-mono text-sm tracking-tighter">{item.date}</span>
                                                <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${item.label === 'NEWS' ? 'bg-slate-200 text-slate-800' : 'bg-blue-100 text-blue-700'}`}>
                                                    {item.label}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors flex-1 line-clamp-2 md:line-clamp-1">
                                                {item.title}
                                            </h3>
                                            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 shrink-0 group-hover:shadow-md group-hover:border-blue-200 transition-all">
                                                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:rotate-45 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
