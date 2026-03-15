'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Sparkles, Compass } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const painPoints = [
    {
        icon: Brain,
        title: 'AIツールは使ってるけど、\n本業に活かせていない',
        color: 'text-indigo-600 bg-indigo-50/50 border-indigo-100/50',
    },
    {
        icon: Zap,
        title: '競合がAIで先行者利益を\n取っている気がする',
        color: 'text-blue-600 bg-blue-50/50 border-blue-100/50',
    },
    {
        icon: Sparkles,
        title: '反復作業から解放され、\nもっと創造的な仕事がしたい',
        color: 'text-sky-600 bg-sky-50/50 border-sky-100/50',
    },
    {
        icon: Compass,
        title: 'DXと言われても、\n何から手を付ければいいかわからない',
        color: 'text-slate-600 bg-slate-50 border-slate-200/50',
    },
];

export default function PainPoints() {

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs tracking-wider uppercase mb-6 border border-slate-200/60">
                        Common Challenges
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                        こんな課題を<br className="md:hidden" />抱えていませんか？
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                >
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group flex flex-col items-start gap-4 p-8 rounded-2xl bg-white border border-slate-200/60 hover:border-slate-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-300"
                        >
                            <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${point.color} transition-transform duration-500`}
                            >
                                <point.icon className="w-6 h-6" />
                            </div>
                            <p className="text-[17px] font-semibold text-slate-800 leading-relaxed whitespace-pre-line">
                                {point.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-500 font-medium text-lg">
                        WaiWai AI が、これらすべてを解決します。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
