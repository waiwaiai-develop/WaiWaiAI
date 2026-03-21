'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { casesData } from '@/data/casesData';
import { staggerContainer, springItem } from '@/lib/animations';

const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
        case 'Clock':
            return <Clock className={className} />;
        case 'TrendingUp':
            return <TrendingUp className={className} />;
        case 'CheckCircle2':
            return <CheckCircle2 className={className} />;
        default:
            return null;
    }
};

export default function CaseHighlights() {

    return (
        <section className="py-28 md:py-36 bg-white relative overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
                        Case Studies
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight mb-6 leading-tight">
                        実際に実現した、<br className="md:hidden" />圧倒的なROI
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
                        「導入しただけ」では終わらせない。数字で証明する成果をご覧ください。
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                >
                    {casesData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={springItem}
                            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
                        >
                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-blue-600 text-xs font-semibold tracking-[0.15em] uppercase">
                                        {project.category}
                                    </span>
                                    <span className="text-sm text-slate-400">
                                        {project.client}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 leading-snug mb-6">
                                    {project.title}
                                </h3>

                                {/* Stats as horizontal metric boxes */}
                                <div className="flex gap-4 mb-6">
                                    {project.results.map((r, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-slate-50 rounded-xl p-4"
                                        >
                                            <div className="flex items-center gap-1.5 text-slate-500 mb-1.5">
                                                {renderIcon(r.iconName, 'w-3.5 h-3.5')}
                                                <span className="text-xs font-medium">
                                                    {r.label}
                                                </span>
                                            </div>
                                            <div className="text-2xl font-bold text-slate-900 tracking-tight">
                                                {r.value}
                                            </div>
                                            <div className="text-xs text-slate-500 mt-0.5">
                                                {r.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 text-xs border border-slate-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        href="/cases"
                        aria-label="すべての導入事例を見る"
                        className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.16)] hover:-translate-y-0.5"
                    >
                        すべての事例を見る
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
