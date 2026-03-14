'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { casesData } from '@/data/casesData';

export default function CaseHighlights() {
    return (
        <section className="py-28 lg:py-36 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#12141a] to-[#0f1115]" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-[#7c5bf5] font-semibold tracking-widest uppercase text-sm mb-4">
                        Case Studies
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                        実際に実現した、<br className="md:hidden" />圧倒的なROI
                    </h2>
                    <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto leading-relaxed">
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
                            className="group rounded-2xl overflow-hidden border border-white/[0.06] bg-[#16181f] hover:border-white/[0.12] transition-all duration-300"
                        >
                            {/* Results bar */}
                            <div className="bg-gradient-to-r from-[#7c5bf5]/20 to-[#5b8cf5]/20 p-6 flex gap-4 border-b border-white/[0.06]">
                                {project.results.map((r, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]"
                                    >
                                        <div className="text-xs text-[#8b8b9e] font-medium mb-1">
                                            {r.label}
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                            {r.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-md bg-[#7c5bf5]/10 text-[#7c5bf5] text-xs font-bold border border-[#7c5bf5]/20">
                                        {project.category}
                                    </span>
                                    <span className="text-sm text-[#5a5a6e] font-medium">
                                        {project.client}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white leading-snug mb-4">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[#8b8b9e] text-xs font-medium border border-white/[0.06]"
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
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.08] font-semibold text-lg transition-all"
                    >
                        すべての事例を見る
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
