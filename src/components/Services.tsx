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
        iconColor: 'text-blue-500',
        borderColor: 'border-slate-200',
    },
    {
        icon: Settings,
        title: '業務自動化',
        description: '繰り返し作業をAIとRPAで効率化します。',
        iconColor: 'text-sky-500',
        borderColor: 'border-slate-200',
    },
    {
        icon: Cpu,
        title: 'AIシステム開発',
        description: '御社専用のAIシステムをスピーディに開発。',
        iconColor: 'text-indigo-500',
        borderColor: 'border-slate-200',
    },
    {
        icon: Target,
        title: 'AI顧問パック',
        description: '専属のAI専門家が、継続的に戦略立案と実行を支援。',
        iconColor: 'text-slate-500',
        borderColor: 'border-slate-200',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-28 lg:py-36 relative overflow-hidden">
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
                        <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">
                            Our Solutions
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            あなたに最適な<br className="md:hidden" />AI活用プランを
                        </h2>
                        <p className="font-sans text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-normal">
                            課題に合わせて最適なサービスをご提案します。<br className="hidden md:block" />
                            まずはお気軽にご相談ください。
                        </p>
                    </motion.div>

                    {/* Service Cards */}
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
                                className={`group relative rounded-2xl p-6 md:p-7 flex flex-col h-full glass-card border ${service.borderColor} transition-shadow duration-300 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)]`}
                            >
                                {/* Card content */}
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="mb-5">
                                        <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                                    </div>
                                    <h3 className="font-display font-semibold text-lg text-slate-900 mb-3 leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="font-sans text-sm text-slate-600 leading-relaxed mt-auto font-normal">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Bottom */}
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
                            className="group inline-flex items-center justify-center gap-2 h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] rounded-full shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.16)] transition-all duration-300 active:scale-[0.98]"
                        >
                            無料で相談する
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                        <p className="mt-5 font-sans text-slate-500 text-sm">相談無料・お見積もり無料</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
