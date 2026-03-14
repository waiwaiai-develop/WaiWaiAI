'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { casesData } from '@/data/casesData';

export default function CaseHighlights() {
    return (
        <section className="py-28 lg:py-36 relative overflow-hidden">
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                        Case Studies
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        実際に実現した、<br className="md:hidden" />圧倒的なROI
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        「導入しただけ」では終わらせない。数字で証明する成果をご覧ください。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {casesData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group rounded-2xl overflow-hidden border border-blue-100 bg-white hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] transition-all duration-300"
                        >
                            {/* Results bar */}
                            <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 flex gap-4 border-b border-blue-100">
                                {project.results.map((r, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-white rounded-xl p-4 border border-blue-100"
                                    >
                                        <div className="text-xs text-slate-500 font-medium mb-1">
                                            {r.label}
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                                            {r.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                                        {project.category}
                                    </span>
                                    <span className="text-sm text-slate-400 font-medium">
                                        {project.client}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-4">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 text-xs font-medium border border-slate-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/cases"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-white border border-blue-100 text-slate-900 hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.15)] font-semibold text-lg transition-all"
                    >
                        すべての事例を見る
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
