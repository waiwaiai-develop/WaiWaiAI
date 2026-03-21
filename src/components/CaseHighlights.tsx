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
        <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="text-center mb-20"
                >
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                        Case Studies
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-6 leading-tight">
                        実際に実現した、<br className="md:hidden" />圧倒的なROI
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-bold tracking-tight leading-relaxed">
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
                            className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-500"
                        >
                            {/* Results bar */}
                            <div
                                className={`${project.bgImage} p-6 flex gap-4`}
                            >
                                {project.results.map((r, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20"
                                    >
                                        <div className="flex items-center gap-2 text-white/80 mb-1">
                                            {renderIcon(r.iconName, 'w-4 h-4')}
                                            <span className="text-xs font-bold tracking-wide">
                                                {r.label}
                                            </span>
                                        </div>
                                        <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                                            {r.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
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
                                            className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 font-bold text-xs border border-slate-100"
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
                        className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-extrabold text-lg transition-all shadow-[0_8px_20px_rgb(0,0,0,0.12)] hover:-translate-y-1"
                    >
                        すべての事例を見る
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
