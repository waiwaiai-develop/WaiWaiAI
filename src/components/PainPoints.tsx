'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

/* CSS-only minimal icons — no emoji/lucide feel */
function IconBrain() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-blue-500">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 2v16M6 5.5c2 1.5 6 1.5 8 0M6 14.5c2-1.5 6-1.5 8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    );
}

function IconBolt() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-blue-500">
            <path d="M11 2L5 11h4.5l-.5 7 6-9h-4.5L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconSparkle() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-blue-500">
            <path d="M10 2l1.5 5.5L17 9l-5.5 1.5L10 16l-1.5-5.5L3 9l5.5-1.5L10 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
            <circle cx="16" cy="4" r="1" fill="currentColor" />
        </svg>
    );
}

function IconCompass() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-blue-500">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12.5 7.5l-1.2 3.8-3.8 1.2 1.2-3.8 3.8-1.2z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" />
        </svg>
    );
}

const painPoints = [
    { number: '01', icon: IconBrain, title: 'AIツールは使ってるけど、\n本業に活かせていない' },
    { number: '02', icon: IconBolt, title: '競合がAIで先行者利益を\n取っている気がする' },
    { number: '03', icon: IconSparkle, title: '反復作業から解放され、\nもっと創造的な仕事がしたい' },
    { number: '04', icon: IconCompass, title: 'DXと言われても、\n何から手を付ければいいかわからない' },
];

export default function PainPoints() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-white">
            <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-5xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-14"
                >
                    <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
                        Common Challenges
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                        こんな課題を<br className="md:hidden" />抱えていませんか？
                    </h2>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group relative flex items-start gap-4 p-6 md:p-7 rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all duration-200 hover:border-slate-300"
                            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}
                        >
                            <span className="absolute right-4 bottom-1 font-display text-7xl font-bold text-slate-100/80 leading-none select-none pointer-events-none">
                                {point.number}
                            </span>

                            <div className="relative z-10 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                <point.icon />
                            </div>

                            <div className="relative z-10 pt-1">
                                <p className="font-sans text-[15px] sm:text-base font-medium text-slate-700 leading-relaxed whitespace-pre-line">
                                    {point.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 text-slate-600 font-medium"
                >
                    WaiWai AI が、これらすべてを解決します。
                </motion.p>
            </div>
        </section>
    );
}
