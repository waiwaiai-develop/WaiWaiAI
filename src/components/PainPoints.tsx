'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Sparkles, Compass } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const painPoints = [
    {
        number: '01',
        icon: Brain,
        title: 'AIツールは使ってるけど、\n本業に活かせていない',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-500/10',
        borderColor: 'border-blue-200/50',
        accentColor: 'from-blue-500/20 to-transparent',
        numberColor: 'text-blue-200',
        glowColor: 'rgba(37,99,235,0.35)',
    },
    {
        number: '02',
        icon: Zap,
        title: '競合がAIで先行者利益を\n取っている気がする',
        iconColor: 'text-sky-500',
        iconBg: 'bg-sky-500/10',
        borderColor: 'border-sky-200/50',
        accentColor: 'from-sky-500/20 to-transparent',
        numberColor: 'text-sky-200',
        glowColor: 'rgba(14,165,233,0.35)',
    },
    {
        number: '03',
        icon: Sparkles,
        title: '反復作業から解放され、\nもっと創造的な仕事がしたい',
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-500/10',
        borderColor: 'border-indigo-200/50',
        accentColor: 'from-indigo-500/20 to-transparent',
        numberColor: 'text-indigo-200',
        glowColor: 'rgba(79,70,229,0.35)',
    },
    {
        number: '04',
        icon: Compass,
        title: 'DXと言われても、\n何から手を付ければいいかわからない',
        iconColor: 'text-slate-600',
        iconBg: 'bg-slate-500/10',
        borderColor: 'border-slate-200/50',
        accentColor: 'from-slate-400/15 to-transparent',
        numberColor: 'text-slate-200',
        glowColor: 'rgba(71,85,105,0.25)',
    },
];

export default function PainPoints() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Header - ガラスカード */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full glass text-blue-700 font-bold text-xs tracking-wider uppercase mb-6">
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
                            className={`group relative flex items-start gap-5 p-7 md:p-8 rounded-3xl glass-card glass-shimmer border ${point.borderColor} overflow-hidden`}
                        >
                            {/* 背景アクセントグラデーション */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${point.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            {/* ホバー時のブルーグロー */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    boxShadow: `0 20px 60px -15px ${point.glowColor}`,
                                }}
                            />

                            {/* 大きな背景番号 - より迫力のある表示 */}
                            <span className={`absolute right-5 bottom-2 font-display text-8xl font-black ${point.numberColor} leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-70`}>
                                {point.number}
                            </span>

                            {/* Icon - ガラススタイル + ホバー時ブルーグロー */}
                            <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${point.iconBg} backdrop-blur-sm border border-white/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                {/* アイコンのグロー効果 */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        boxShadow: `0 0 20px 4px ${point.glowColor}`,
                                    }}
                                />
                                <point.icon className={`relative z-10 w-6 h-6 ${point.iconColor}`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-1 pt-1">
                                <span className={`text-xs font-bold tracking-widest ${point.iconColor} uppercase opacity-70`}>
                                    {point.number}
                                </span>
                                <p className="font-sans text-[17px] font-semibold text-slate-800 leading-relaxed whitespace-pre-line">
                                    {point.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Message - 強調されたガラスカード + ブルーボーダーグロー */}
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <div
                        className="inline-block px-10 py-5 rounded-2xl glass-strong border border-blue-200/60"
                        style={{
                            boxShadow: '0 0 40px -10px rgba(59,130,246,0.25), 0 0 0 1px rgba(59,130,246,0.1)',
                        }}
                    >
                        <p className="font-sans text-slate-800 font-bold text-lg">
                            WaiWai AI が、これらすべてを解決します。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
