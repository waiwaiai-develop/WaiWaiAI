'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Newspaper, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { newsData } from '@/data/newsData';

export default function NewsSection() {

    return (
        <section id="news" className="py-32 relative bg-stone-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">

                <div className="border border-stone-200 bg-white overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Info Area */}
                        <div className="lg:w-1/3 bg-stone-950 p-10 lg:p-14 relative overflow-hidden border-r border-stone-800">
                            <div className="grain-overlay" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="w-14 h-14 border border-stone-700 flex items-center justify-center mb-8 relative z-10"
                            >
                                <Newspaper className="w-6 h-6 text-amber-500" />
                            </motion.div>

                            <h2 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight text-white relative z-10">
                                INFORMATION
                            </h2>
                            <p className="text-stone-400 leading-relaxed font-medium mb-12 relative z-10">
                                WaiWai AIの最新の技術動向、開発の裏側、プレスリリースをお届けします。
                            </p>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/blog" className="group flex items-center justify-between px-6 py-4 bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 transition-colors">
                                    <span>TECH BLOG 一覧</span>
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="lg:w-2/3 p-6 lg:p-14 bg-white">
                            <div className="flex flex-col space-y-2">
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
                                                className={`block p-6 border border-transparent transition-all duration-300 ${item.link ? 'group hover:border-stone-200 hover:bg-stone-50 cursor-pointer' : ''}`}
                                            >
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                                    <div className="flex items-center gap-4 w-48 shrink-0">
                                                        <span className="text-stone-500 font-mono text-sm tracking-tighter">{item.date}</span>
                                                        <span className={`text-xs font-black px-3 py-1 uppercase tracking-wider ${item.label === 'NEWS' ? 'bg-stone-200 text-stone-800' : 'bg-amber-100 text-amber-800'}`}>
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors flex-1 line-clamp-2 md:line-clamp-1">
                                                        {item.title}
                                                    </h3>
                                                    {item.link && (
                                                        <div className="hidden sm:flex items-center justify-center w-10 h-10 border border-stone-200 shrink-0 group-hover:border-amber-300 transition-all">
                                                            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-amber-500 group-hover:rotate-45 transition-transform" />
                                                        </div>
                                                    )}
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
