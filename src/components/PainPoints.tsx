'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Receipt, FileSpreadsheet, UserX } from 'lucide-react';

const painPoints = [
    {
        icon: <HelpCircle className="w-7 h-7" />,
        title: 'AIを導入したいが、何から始めればいいかわからない',
        color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
        icon: <Receipt className="w-7 h-7" />,
        title: '既存ベンダーの見積もりが適正なのか判断できない',
        color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
        icon: <FileSpreadsheet className="w-7 h-7" />,
        title: 'エクセルや手作業の業務が多く、ミスとコストが膨らんでいる',
        color: 'text-sky-600 bg-sky-50 border-sky-100',
    },
    {
        icon: <UserX className="w-7 h-7" />,
        title: '社内にIT人材がおらず、DXが進まない',
        color: 'text-slate-600 bg-slate-50 border-slate-200',
    },
];

export default function PainPoints() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
        },
    };

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="text-center mb-16"
                >
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                        Common Challenges
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                        こんな課題、<br className="md:hidden" />抱えていませんか？
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group flex items-start gap-5 p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-[0_8px_30px_-10px_rgba(59,130,246,0.1)] transition-all duration-300"
                        >
                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border ${point.color} group-hover:scale-110 transition-transform`}
                            >
                                {point.icon}
                            </div>
                            <p className="text-lg font-bold text-slate-800 leading-relaxed pt-2">
                                {point.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12 text-slate-500 font-bold text-lg"
                >
                    WaiWai AI が、これらすべてを解決します。
                </motion.p>
            </div>
        </section>
    );
}
