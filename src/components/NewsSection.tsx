'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { newsData } from '@/data/newsData';

export default function NewsSection() {

    return (
        <section id="news" className="py-28 lg:py-36 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f1115]" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

                <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#16181f]">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Info Area */}
                        <div className="lg:w-1/3 p-10 lg:p-14 relative overflow-hidden border-r border-white/[0.06] bg-gradient-to-br from-[#7c5bf5]/10 to-transparent">

                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-white">
                                INFORMATION
                            </h2>
                            <p className="text-[#8b8b9e] leading-relaxed mb-12">
                                WaiWai AIの最新の技術動向、開発の裏側、プレスリリースをお届けします。
                            </p>

                            <div className="flex flex-col gap-3">
                                <Link href="#" className="group flex items-center justify-between px-5 py-3.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] transition-all font-medium text-white/80 hover:text-white">
                                    <span>NEWS 記事一覧</span>
                                    <ArrowRight className="w-4 h-4 text-[#5a5a6e] group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </Link>
                                <Link href="#" className="group flex items-center justify-between px-5 py-3.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] transition-all font-medium text-white/80 hover:text-white">
                                    <span>TECH BLOG 一覧</span>
                                    <ArrowRight className="w-4 h-4 text-[#5a5a6e] group-hover:text-white group-hover:translate-x-1 transition-all" />
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
                                        className="group block p-5 rounded-lg border border-transparent hover:border-white/[0.06] hover:bg-white/[0.02] transition-all duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                            <div className="flex items-center gap-4 w-48 shrink-0">
                                                <span className="text-[#5a5a6e] font-mono text-sm tracking-tighter">{item.date}</span>
                                                <span className={`text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider ${item.label === 'NEWS' ? 'bg-white/[0.06] text-[#8b8b9e] border border-white/[0.06]' : 'bg-[#7c5bf5]/10 text-[#7c5bf5] border border-[#7c5bf5]/20'}`}>
                                                    {item.label}
                                                </span>
                                            </div>
                                            <h3 className="text-base font-medium text-white/80 group-hover:text-white transition-colors flex-1 line-clamp-2 md:line-clamp-1">
                                                {item.title}
                                            </h3>
                                            <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/[0.12] transition-all">
                                                <ArrowUpRight className="w-3.5 h-3.5 text-[#5a5a6e] group-hover:text-white transition-colors" />
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
