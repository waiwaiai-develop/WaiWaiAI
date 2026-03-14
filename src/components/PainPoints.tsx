'use client';

import { motion } from 'framer-motion';

const clients = [
    'コンサルティングA社',
    '人材マッチングB社',
    '不動産C社',
    'メディアD社',
    'IT企業E社',
    '製造業F社',
];

export default function PainPoints() {
    return (
        <section className="py-16 border-y border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                >
                    <p className="text-sm text-slate-400 font-bold tracking-wider uppercase whitespace-nowrap">
                        Trusted by
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 w-full">
                        {clients.map((name, i) => (
                            <span
                                key={i}
                                className="text-slate-400 text-sm font-semibold tracking-wide hover:text-slate-600 transition-colors"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
