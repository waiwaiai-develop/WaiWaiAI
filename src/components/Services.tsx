'use client';

import { motion } from 'framer-motion';
import { Bot, Settings, Cpu, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const services = [
    {
        icon: Bot,
        title: 'AI導入コンサル',
        price: '5万円〜',
        description: '最適なAIツールの選定から社内浸透までサポート。',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-500/10',
        borderColor: 'border-blue-200/50',
        glowColor: 'rgba(37,99,235,0.2)',
    },
    {
        icon: Settings,
        title: '業務自動化',
        price: '15万円〜',
        description: 'ルーチンワークをAIとRPAで徹底的に効率化します。',
        iconColor: 'text-sky-500',
        iconBg: 'bg-sky-500/10',
        borderColor: 'border-sky-200/50',
        glowColor: 'rgba(14,165,233,0.2)',
    },
    {
        icon: Cpu,
        title: 'AIシステム開発',
        price: '30万円〜',
        description: '御社独自のカスタムAIソリューションをアジャイル開発。',
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-500/10',
        borderColor: 'border-indigo-200/50',
        glowColor: 'rgba(79,70,229,0.2)',
    },
    {
        icon: Target,
        title: 'AI顧問パック',
        price: '10万円/月',
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
                            どのサービスが必要かわからない？<br className="hidden md:block" />
                            まずは無料で相談してください。一緒に最適なプランを考えます。
                        </p>
                    </motion.div>

                    {/* Service Cards - ガラススタイル */}
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
                                className={`group relative rounded-3xl p-6 md:p-7 flex flex-col h-full glass-card border ${service.borderColor} transition-all duration-500`}
                                style={{ '--glow': service.glowColor } as React.CSSProperties}
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
                                    <div className={`${service.iconBg} backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 border border-white/50`}>
                                        <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-slate-900 mb-1 leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="font-sans text-sm font-bold text-blue-600 mb-3">
                                        {service.price}
                                    </p>
                                    <p className="font-sans text-sm text-slate-700 leading-relaxed mt-auto">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Bottom - ガラススタイル */}
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
                            className="group inline-flex items-center justify-center gap-2 h-14 px-10 glass-strong text-slate-800 font-bold text-[15px] rounded-full hover:bg-white/60 transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/50"
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