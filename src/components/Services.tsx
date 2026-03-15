'use client';

import { motion } from 'framer-motion';
import { Bot, Settings, Cpu, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Bot,
        title: 'AI導入コンサル',
        price: '5万円〜',
        description: '最適なAIツールの選定から社内浸透までサポート。',
        color: 'text-blue-600 bg-blue-50/80 border-blue-200/50',
    },
    {
        icon: Settings,
        title: '業務自動化',
        price: '15万円〜',
        description: 'ルーチンワークをAIとRPAで徹底的に効率化します。',
        color: 'text-sky-600 bg-sky-50/80 border-sky-200/50',
    },
    {
        icon: Cpu,
        title: 'AIシステム開発',
        price: '30万円〜',
        description: '御社独自のカスタムAIソリューションをアジャイル開発。',
        color: 'text-indigo-600 bg-indigo-50/80 border-indigo-200/50',
    },
    {
        icon: Target,
        title: 'AI顧問パック',
        price: '10万円/月',
        description: '専属のAI専門家が、継続的に戦略立案と実行を支援。',
        color: 'text-slate-700 bg-slate-100 border-slate-200',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 lg:py-32 relative bg-[#fafafa] border-t border-slate-100/60 overflow-hidden">
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
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-200/50 text-slate-600 font-semibold text-xs tracking-wider uppercase mb-6 border border-slate-300/30">
                            Our Solutions
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            あなたに最適な<br className="md:hidden" />AI活用プランを
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            どのサービスが必要かわからない？<br className="hidden md:block" />
                            まずは無料で相談してください。一緒に最適なプランを考えます。
                        </p>
                    </motion.div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mb-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 hover:border-slate-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full"
                            >
                                <div className={`${service.color} border w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm font-semibold text-slate-500 mb-4">
                                    {service.price}
                                </p>
                                <p className="text-sm text-slate-500 leading-relaxed mt-auto">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

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
                            className="group inline-flex items-center justify-center gap-2 h-14 px-10 bg-slate-900 text-white font-medium text-[15px] rounded-full hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        >
                            無料で相談する
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                        <p className="mt-5 text-slate-400 text-sm font-medium">相談無料・お見積もり無料</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
