'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { newsData } from '@/data/newsData';

export default function NewsSection() {

    return (
        <section id="news" className="py-24 lg:py-32 relative bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">

                <div className="border border-slate-200 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Info Area */}
                        <div className="lg:w-1/3 bg-blue-50 p-10 lg:p-14 text-slate-900 relative overflow-hidden border-r border-slate-100">

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
                                    INFORMATION
                                </h2>
                                <p className="text-slate-600 leading-relaxed font-medium mb-12">
                                    WaiWai AIの最新の技術動向、開発の裏側、プレスリリースをお届けします。
                                </p>

                                <Link
                                    href="/blog"
                                    className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    TECH BLOG 一覧
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Content Area */}
                        <div className="lg:w-2/3 p-6 lg:p-14 bg-white">
                            <div className="flex flex-col">
                                {newsData.map((item, index) => {
                                    const Wrapper = item.link ? 'a' : 'div';
                                    const linkProps = item.link ? { href: item.link } : {};
                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Wrapper
                                                {...linkProps}
                                                className={`block py-5 border-b border-slate-100 last:border-0 transition-colors duration-200 ${item.link ? 'group cursor-pointer' : ''}`}
                                            >
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                                    <div className="flex items-center gap-3 shrink-0">
                                                        <span className="text-slate-400 font-mono text-sm">{item.date}</span>
                                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${item.label === 'NEWS' ? 'bg-slate-100 text-slate-500' : 'bg-blue-50 text-blue-600'}`}>
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors flex-1 line-clamp-2 md:line-clamp-1">
                                                        {item.title}
                                                        {item.link && (
                                                            <span className="ml-1.5 inline-block text-slate-300 group-hover:text-blue-400 transition-colors">↗</span>
                                                        )}
                                                    </h3>
                                                </div>
                                            </Wrapper>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
