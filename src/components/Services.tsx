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
    },
    {
        icon: Settings,
        title: '業務自動化',
        description: '繰り返し作業をAIとRPAで効率化します。',
    },
    {
        icon: Cpu,
        title: 'AIシステム開発',
        description: '御社専用のAIシステムをスピーディに開発。',
    },
    {
        icon: Target,
        title: 'AI顧問パック',
        description: '専属のAI専門家が、継続的に戦略立案と実行を支援。',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 lg:py-32 bg-stone-50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-amber-600" />
                            <span className="text-amber-600 font-bold text-xs tracking-widest uppercase">
                                Our Solutions
                            </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 tracking-tight leading-tight">
                            あなたに最適な<br className="md:hidden" />AI活用プランを
                        </h2>
                        <p className="font-sans text-stone-600 max-w-2xl text-lg leading-relaxed">
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
                                className="group relative bg-white border border-stone-200 hover:border-amber-300 p-6 md:p-7 flex flex-col h-full transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center mb-5">
                                    <service.icon className="w-6 h-6 text-amber-600" />
                                </div>
                                <h3 className="font-display font-bold text-lg text-stone-900 mb-3 leading-snug">
                                    {service.title}
                                </h3>
                                <p className="font-sans text-sm text-stone-600 leading-relaxed mt-auto">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link
                            href="/#contact"
                            aria-label="無料で相談する"
                            className="group inline-flex items-center justify-center gap-2 h-14 px-10 bg-stone-950 text-white font-bold text-[15px] hover:bg-stone-800 transition-colors duration-200 active:scale-[0.98]"
                        >
                            無料で相談する
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                        <p className="mt-5 font-sans text-stone-500 text-sm font-medium">相談無料・お見積もり無料</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
