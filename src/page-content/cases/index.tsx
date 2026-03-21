'use client';

import { motion } from 'framer-motion';
import { ArrowDown, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

import { casesData } from '@/data/casesData';

export default function CasesPage() {
    const renderIcon = (iconName: string, className: string) => {
        switch (iconName) {
            case 'Clock': return <Clock className={className} />;
            case 'TrendingUp': return <TrendingUp className={className} />;
            case 'CheckCircle2': return <CheckCircle2 className={className} />;
            default: return null;
        }
    };

    return (
        <div className="pt-32 pb-0 relative min-h-screen overflow-hidden bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl relative z-10">

                {/* Page Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-3 justify-center mb-6"
                    >
                        <div className="w-12 h-px bg-amber-500" />
                        <span className="text-amber-600 text-xs font-semibold tracking-[0.3em] uppercase">Case Studies</span>
                        <div className="w-12 h-px bg-amber-500" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight mb-6"
                    >
                        課題解決から導いた、<br className="hidden md:block" />
                        <span className="text-gradient-amber">圧倒的なROI事例</span>。
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-stone-600 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        「AIを入れただけ」の自己満足で終わらせない。<br />
                        WaiWai AIが実際にコスト削減・売上向上（ROI）を実現したプロジェクトの一部をご紹介します。
                    </motion.p>
                </div>

                {/* Case Studies */}
                <div className="space-y-6 pb-24">
                    {casesData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                            className="bg-white border border-stone-200 hover:border-amber-300 overflow-hidden flex flex-col relative transition-all duration-500 group"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">

                                {/* Visual / Data Side */}
                                <div className={`lg:col-span-5 relative overflow-hidden flex flex-col justify-center items-center p-8 lg:p-12 ${project.bgImage}`}>
                                    <div className="absolute top-6 left-6 z-10">
                                        <span className="inline-block px-4 py-1.5 text-sm font-bold bg-white/95 backdrop-blur-sm text-stone-800">
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="w-full max-w-sm mt-8 relative z-10 flex flex-col gap-4">
                                        {project.results.map((r, i) => (
                                            <div key={i} className="bg-white/10 backdrop-blur-md p-6 border border-white/20 text-white shadow-xl">
                                                <div className="flex items-center gap-3 mb-2 opacity-80">
                                                    {renderIcon(r.iconName, "w-6 h-6")} <span className="font-bold text-sm tracking-widest">{r.label}</span>
                                                </div>
                                                <div className="text-4xl md:text-5xl font-extrabold tracking-tighter drop-shadow-md">
                                                    {r.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center bg-white">
                                    <div className="text-sm font-bold text-stone-500 mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-amber-500"></span>
                                        {project.client}
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 leading-tight mb-8">
                                        {project.title}
                                    </h2>

                                    <div className="space-y-6 mb-8 relative">
                                        <div className="absolute left-[20px] top-6 bottom-6 w-px bg-stone-200 hidden sm:block"></div>

                                        <div className="relative pl-0 sm:pl-12">
                                            <div className="hidden sm:flex absolute left-0 top-0 w-10 h-10 bg-red-50 border border-red-100 text-red-500 items-center justify-center font-bold text-xs">課題</div>
                                            <h4 className="text-sm font-bold text-red-500 mb-2 sm:hidden">抱えていた課題</h4>
                                            <p className="text-stone-700 font-medium leading-relaxed bg-stone-50 p-5 border border-stone-200">
                                                {project.problem}
                                            </p>
                                        </div>

                                        <div className="relative pl-0 sm:pl-12 flex justify-center text-stone-300 py-1">
                                            <ArrowDown className="w-5 h-5" />
                                        </div>

                                        <div className="relative pl-0 sm:pl-12">
                                            <div className="hidden sm:flex absolute left-0 top-0 w-10 h-10 bg-amber-50 border border-amber-200 text-amber-600 items-center justify-center font-bold text-xs">解決</div>
                                            <h4 className="text-sm font-bold text-amber-600 mb-2 sm:hidden">解決策</h4>
                                            <p className="text-stone-700 font-medium leading-relaxed bg-amber-50/50 p-5 border border-amber-200">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-stone-200">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-3 py-1.5 bg-stone-50 text-stone-500 font-bold text-xs border border-stone-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Global CTA */}
            <ContactCTA />
        </div>
    );
}
