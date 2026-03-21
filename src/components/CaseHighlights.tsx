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
        <section className="py-32 bg-stone-950 relative overflow-hidden">
            <div className="grain-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-amber-500/3 blur-[200px]" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-amber-500" />
                        <span className="text-amber-500 text-xs font-semibold tracking-[0.3em] uppercase">Case Studies</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        実際に実現した、<br className="md:hidden" />圧倒的なROI
                    </h2>
                    <p className="text-lg text-stone-400 max-w-2xl mt-6 leading-relaxed">
                        「導入しただけ」では終わらせない。数字で証明する成果をご覧ください。
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-stone-800"
                >
                    {casesData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={springItem}
                            className="group border-b lg:border-r border-stone-800 last:border-r-0 hover:bg-stone-900/50 transition-colors"
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
                                    <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                                        {project.category}
                                    </span>
                                    <span className="text-sm text-stone-500 font-medium">
                                        {project.client}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white leading-snug mb-4 group-hover:text-amber-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 bg-stone-800 text-stone-400 font-bold text-xs border border-stone-700"
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
                    className="text-center mt-16"
                >
                    <Link
                        href="/cases"
                        aria-label="すべての導入事例を見る"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-amber-500 text-stone-950 font-bold text-base tracking-wide hover:bg-amber-400 transition-colors"
                    >
                        すべての事例を見る
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
