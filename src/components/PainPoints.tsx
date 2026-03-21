'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Sparkles, Compass } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const painPoints = [
    {
        number: '01',
        icon: Brain,
        title: 'AIツールは使ってるけど、\n本業に活かせていない',
        iconColor: 'text-blue-500',
        borderColor: 'border-slate-200',
        numberColor: 'text-slate-100',
    },
    {
        number: '02',
        icon: Zap,
        title: '競合がAIで先行者利益を\n取っている気がする',
        iconColor: 'text-sky-500',
        borderColor: 'border-slate-200',
        numberColor: 'text-slate-100',
    },
    {
        number: '03',
        icon: Sparkles,
        title: '反復作業から解放され、\nもっと創造的な仕事がしたい',
        iconColor: 'text-indigo-500',
        borderColor: 'border-slate-200',
        numberColor: 'text-slate-100',
    },
    {
        number: '04',
        icon: Compass,
        title: 'DXと言われても、\n何から手を付ければいいかわからない',
        iconColor: 'text-slate-500',
        borderColor: 'border-slate-200',
        numberColor: 'text-slate-100',
    },
];

export default function PainPoints() {
    return (
        <section className="py-28 md:py-36 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                        Common Challenges
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                        こんな課題を<br className="md:hidden" />抱えていませんか？
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`group relative flex items-start gap-5 p-7 md:p-8 rounded-2xl glass-card border ${point.borderColor} overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)]`}
                        >
                            {/* 大きな背景番号 */}
                            <span className={`absolute right-5 bottom-2 font-display text-8xl font-bold ${point.numberColor} leading-none select-none pointer-events-none`}>
                                {point.number}
                            </span>

                            {/* Icon */}
                            <div className="relative z-10 shrink-0 pt-1">
                                <point.icon className={`w-6 h-6 ${point.iconColor}`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-1 pt-0.5">
                                <span className={`text-xs font-semibold tracking-widest ${point.iconColor} uppercase opacity-60`}>
                                    {point.number}
                                </span>
                                <p className="font-sans text-[17px] font-semibold text-slate-800 leading-relaxed whitespace-pre-line">
                                    {point.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="font-sans text-slate-800 font-semibold text-lg">
                        WaiWai AI が、これらすべてを解決します。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
