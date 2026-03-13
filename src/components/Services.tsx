'use client';

import { motion } from 'framer-motion';
import { Bot, Settings, Cpu, Target, ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        step: 1,
        icon: Bot,
        title: 'AI導入コンサル',
        price: '5万円〜',
        desc: '現状ヒアリング(2h) + 導入ロードマップ提案。「何から始めるべきか」を明確にします。',
        color: 'blue',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        badgeBg: 'bg-blue-100',
        badgeColor: 'text-blue-700',
    },
    {
        step: 2,
        icon: Settings,
        title: '業務自動化',
        price: '15万円〜',
        desc: 'GAS/RPA等で1業務フロー完全自動化。手作業をなくし、現場の生産性を劇的に向上。',
        color: 'sky',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200',
        iconBg: 'bg-sky-100',
        iconColor: 'text-sky-600',
        badgeBg: 'bg-sky-100',
        badgeColor: 'text-sky-700',
    },
    {
        step: 3,
        icon: Cpu,
        title: 'AIシステム開発',
        price: '30万円〜',
        desc: '小規模AI機能（チャットボット等）開発。PoCから本番実装まで技術的にリードします。',
        color: 'indigo',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200',
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
        badgeBg: 'bg-indigo-100',
        badgeColor: 'text-indigo-700',
    },
    {
        step: 4,
        icon: Target,
        title: 'AI顧問パック',
        price: '10万円/月',
        desc: '月4h定例MTG + 技術選定 + 導入支援。継続的なAI活用をパートナーとして伴走します。',
        color: 'slate',
        bgColor: 'bg-slate-900',
        borderColor: 'border-slate-800',
        iconBg: 'bg-slate-800',
        iconColor: 'text-slate-200',
        badgeBg: 'bg-slate-700',
        badgeColor: 'text-slate-200',
        isDark: true,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 lg:py-32 relative bg-white border-t border-slate-100 overflow-hidden">
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white font-bold text-sm tracking-wider mb-6"
                    >
                        4ステップで始めるAI活用
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
                    >
                        あなたのビジネスに<br className="md:hidden" />最適な導入プラン
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        まずは診断から。ステップを追って、確実にAI活用を定着させます。
                    </motion.p>
                </div>

                {/* Step Cards - Zigzag Layout */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.step}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} w-full md:w-[80%]`}
                        >
                            <div
                                className={`group relative ${service.bgColor} ${service.borderColor} border-2 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${
                                    service.isDark ? 'hover:shadow-slate-900/20' : 'hover:shadow-blue-500/10'
                                }`}
                            >
                                {/* Step Number Badge */}
                                <div className={`absolute -top-4 ${index % 2 === 0 ? 'left-8' : 'right-8'} w-10 h-10 rounded-full bg-white border-2 ${service.borderColor} flex items-center justify-center font-black text-lg ${service.iconColor}`}>
                                    {service.step}
                                </div>

                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    {/* Icon */}
                                    <div className={`${service.iconBg} ${service.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <h3 className={`text-xl md:text-2xl font-black tracking-tight ${service.isDark ? 'text-white' : 'text-slate-900'}`}>
                                                {service.title}
                                            </h3>
                                            <span className={`${service.badgeBg} ${service.badgeColor} px-3 py-1 rounded-full text-sm font-bold`}>
                                                {service.price}
                                            </span>
                                        </div>
                                        <p className={`text-base leading-relaxed ${service.isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow to next step */}
                            {index < services.length - 1 && (
                                <div className={`hidden md:flex absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'} z-10`}>
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm">
                                        <ArrowRight className={`w-5 h-5 text-slate-400 ${index % 2 !== 0 && 'rotate-180'}`} />
                                    </div>
                                </div>
                            )}

                            {/* Mobile Arrow Down */}
                            {index < services.length - 1 && (
                                <div className="flex md:hidden justify-center mt-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <ArrowDown className="w-5 h-5 text-slate-400" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-slate-500 text-sm mb-6">どのステップから始めればいいかわからない？</p>
                    <Link href="/#contact" className="group inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-1">
                        無料で相談する
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
