'use client';

import { motion } from 'framer-motion';
import { Bot, Settings, Cpu, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const services = [
    {
        icon: Bot,
        title: 'AI導入コンサル',
        description: '最適なAIツールの選定から社内浸透までサポート。',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-500/10',
        borderColor: 'border-blue-200/50',
        glowColor: 'rgba(37,99,235,0.25)',
    },
    {
        icon: Settings,
        title: '業務自動化',
        description: '繰り返し作業をAIとRPAで効率化します。',
        iconColor: 'text-sky-500',
        iconBg: 'bg-sky-500/10',
        borderColor: 'border-sky-200/50',
        glowColor: 'rgba(14,165,233,0.25)',
    },
    {
        icon: Cpu,
        title: 'AIシステム開発',
        description: '御社専用のAIシステムをスピーディに開発。',
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-500/10',
        borderColor: 'border-indigo-200/50',
        glowColor: 'rgba(79,70,229,0.25)',
    },
    {
        icon: Target,
        title: 'AI顧問パック',
        description: '専属のAI専門家が、継続的に戦略立案と実行を支援。',
        iconColor: 'text-slate-600',
        iconBg: 'bg-slate-500/10',
        borderColor: 'border-slate-200/50',
        glowColor: 'rgba(71,85,105,0.15)',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
            {/* 装飾用の浮遊グラスサークル */}
            <div className="absolute top-20 left-10 w-24 h-24 rounded-full glass opacity-40 blur-sm pointer-events-none" />
            <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full glass opacity-30 blur-sm pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-10 h-10 rounded-full glass opacity-20 blur-xs pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col items-center">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full glass text-blue-700 font-bold text-xs tracking-wider uppercase mb-6">
                            Our Solutions
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            あなたに最適な<br className="md:hidden" />AI活用プランを
                        </h2>
                        <p className="font-sans text-slate-700 max-w-2xl mx-auto text-lg leading-relaxed">
                            課題に合わせて最適なサービスをご提案します。<br className="hidden md:block" />
                            まずはお気軽にご相談ください。
                        </p>
                    </motion.div>

                    {/* Service Cards - プレミアムガラス */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-50px' }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-16"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.title}
                                variants={fadeInUp}
                                className={`group relative rounded-3xl p-6 md:p-7 flex flex-col h-full glass-card glass-shimmer border ${service.borderColor} transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25)]`}
                            >
                                {/* ホバー時のグロー効果 */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        boxShadow: `0 20px 60px -15px ${service.glowColor}`,
                                    }}
                                />

                                {/* Card content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon - ガラスコンテナ */}
                                    <div className={`glass border border-white/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative`}>
                                        {/* アイコングロー */}
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                boxShadow: `0 0 16px 2px ${service.glowColor}`,
                                            }}
                                        />
                                        <service.icon className={`relative z-10 w-6 h-6 ${service.iconColor}`} />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-slate-900 mb-3 leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="font-sans text-sm text-slate-700 leading-relaxed mt-auto">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Bottom - プレミアムガラスボタン */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center"
                    >
                        <Link
                            href="/#contact"
                            aria-label="無料で相談する"
                            className="group inline-flex items-center justify-center gap-2 h-14 px-10 glass-strong text-slate-800 font-bold text-[15px] rounded-full border border-white/60 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.35)] active:scale-[0.98]"
                        >
                            無料で相談する
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                        <p className="mt-5 font-sans text-slate-600 text-sm font-medium">相談無料・お見積もり無料</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
