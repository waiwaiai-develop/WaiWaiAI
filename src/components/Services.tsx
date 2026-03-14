'use client';

import { motion } from 'framer-motion';
import { Bot, Settings, Cpu, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Bot,
        title: 'AI導入コンサル',
        price: '5万円〜',
        color: 'blue',
    },
    {
        icon: Settings,
        title: '業務自動化',
        price: '15万円〜',
        color: 'sky',
    },
    {
        icon: Cpu,
        title: 'AIシステム開発',
        price: '30万円〜',
        color: 'indigo',
    },
    {
        icon: Target,
        title: 'AI顧問パック',
        price: '10万円/月',
        color: 'slate',
    },
];

const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
    blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300 hover:bg-blue-100/50',
    },
    sky: {
        bg: 'bg-sky-50',
        text: 'text-sky-600',
        border: 'border-sky-200',
        hover: 'hover:border-sky-300 hover:bg-sky-100/50',
    },
    indigo: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        hover: 'hover:border-indigo-300 hover:bg-indigo-100/50',
    },
    slate: {
        bg: 'bg-slate-900',
        text: 'text-slate-200',
        border: 'border-slate-800',
        hover: 'hover:border-slate-700',
    },
};

export default function Services() {
    return (
        <section id="services" className="py-24 lg:py-32 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* CTA First - Main Focus */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                        あなたに最適な<br className="md:hidden" />AI活用プランを
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-10">
                        どのサービスが必要かわからない？<br className="hidden md:block" />
                        まずは無料で相談してください。一緒に最適なプランを考えます。
                    </p>
                    <Link
                        href="/#contact"
                        className="group inline-flex items-center gap-3 px-12 py-5 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
                    >
                        無料で相談する
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="mt-4 text-slate-400 text-sm">相談無料・お見積もり無料</p>
                </motion.div>

                {/* Simple Service Cards */}
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-slate-500 text-sm mb-8">提供サービス一覧</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {services.map((service, index) => {
                            const colors = colorMap[service.color];
                            const isDark = service.color === 'slate';
                            
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 text-center transition-all duration-300 ${colors.hover} ${isDark ? 'text-white' : ''}`}
                                >
                                    <div className={`${colors.text} w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${isDark ? 'bg-slate-800' : 'bg-white/60'}`}>
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className={`font-bold text-base mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : colors.text}`}>
                                        {service.price}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                    
                    <p className="text-center text-slate-400 text-xs mt-6">
                        ※ 詳細は相談時にご提案します
                    </p>
                </div>
            </div>
        </section>
    );
}
