'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Sparkles, Compass } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const painPoints = [
    {
        number: '01',
        icon: Brain,
        title: 'AIツールは使ってるけど、\n本業に活かせていない',
    },
    {
        number: '02',
        icon: Zap,
        title: '競合がAIで先行者利益を\n取っている気がする',
    },
    {
        number: '03',
        icon: Sparkles,
        title: '反復作業から解放され、\nもっと創造的な仕事がしたい',
    },
    {
        number: '04',
        icon: Compass,
        title: 'DXと言われても、\n何から手を付ければいいかわからない',
    },
];

export default function PainPoints() {
    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-red-500" />
                        <span className="text-red-500 font-bold text-xs tracking-widest uppercase">
                            Problem
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-[1.2]">
                        こんな課題を<br className="md:hidden" />抱えていませんか？
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-200"
                >
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`group relative flex items-start gap-5 p-8 md:p-10 overflow-hidden hover:bg-stone-50 transition-colors duration-300 border-stone-200
                                ${index === 0 ? 'border-b md:border-b md:border-r' : ''}
                                ${index === 1 ? 'border-b' : ''}
                                ${index === 2 ? 'md:border-r' : ''}
                            `}
                        >
                            {/* 大きな背景番号 */}
                            <span className="absolute right-6 bottom-4 font-display text-8xl font-black text-stone-100 leading-none select-none pointer-events-none group-hover:text-stone-50 transition-colors duration-300">
                                {point.number}
                            </span>

                            {/* Icon */}
                            <div className="relative z-10 w-12 h-12 flex items-center justify-center shrink-0 mt-1">
                                <point.icon className="w-6 h-6 text-amber-600" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-2 pt-1">
                                <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">
                                    {point.number}
                                </span>
                                <p className="font-sans text-[17px] font-semibold text-stone-800 leading-relaxed whitespace-pre-line">
                                    {point.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-0"
                >
                    <div className="bg-stone-900 px-10 py-6">
                        <p className="font-sans text-white font-bold text-lg text-center">
                            WaiWai AI が、これらすべてを解決します。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
