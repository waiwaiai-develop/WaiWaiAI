'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { newsData } from '@/data/newsData';

export default function NewsSection() {

    return (
        <section id="news" className="py-28 lg:py-36 relative overflow-hidden">
            <div className="absolute inset-0 bg-white" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

                <div className="rounded-2xl overflow-hidden border border-blue-100 bg-white shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)]">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Info Area */}
                        <div className="lg:w-1/3 p-10 lg:p-14 relative overflow-hidden border-r border-slate-100 bg-gradient-to-br from-blue-50 to-blue-100/50">

                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-slate-900">
                                INFORMATION
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-12">
                                WaiWai AIの最新の技術動向、開発の裏側、プレスリリースをお届けします。
                            </p>

                            <div className="flex flex-col gap-3">
                                <Link href="#" className="group flex items-center justify-between px-5 py-3.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-100 transition-all font-medium text-slate-700">
                                    <span>NEWS 記事一覧</span>
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                </Link>
                                <Link href="#" className="group flex items-center justify-between px-5 py-3.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-100 transition-all font-medium text-slate-700">
                                    <span>TECH BLOG 一覧</span>
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="lg:w-2/3 p-6 lg:p-10">
                            <div className="flex flex-col">
                                {newsData.map((item, index) => (
                                    <motion.a
                                        href={item.link}
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                        className="group block p-5 rounded-lg border border-transparent hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                            <div className="flex items-center gap-4 w-48 shrink-0">
                                                <span className="text-slate-400 font-mono text-sm tracking-tighter">{item.date}</span>
                                                <span className={`text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider ${item.label === 'NEWS' ? 'bg-slate-50 text-slate-500 border border-slate-100' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                                                    {item.label}
                                                </span>
                                            </div>
                                            <h3 className="text-base font-medium text-slate-800 group-hover:text-blue-600 transition-colors flex-1 line-clamp-2 md:line-clamp-1">
                                                {item.title}
                                            </h3>
                                            <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 shrink-0 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all">
                                                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
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
