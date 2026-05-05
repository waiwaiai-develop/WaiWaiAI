'use client';

import { motion } from 'framer-motion';
import { Building2, Users2, MapPin, Mail, ArrowRight } from 'lucide-react';
import { staggerContainer, springItem } from '@/lib/animations';

const companyInfo = [
    { icon: Building2, label: '会社名', value: 'WaiWai AI 株式会社' },
    { icon: Users2, label: '設立', value: '2025年1月23日' },
    { icon: Users2, label: '資本金', value: '50万円' },
    { icon: Users2, label: '代表者', value: '久保田慧（Kei Kubota）' },
    { icon: MapPin, label: '所在地', value: '〒150-0043 東京都渋谷区道玄坂１丁目１０−８ 渋谷道玄坂東急ビル 2F-C' },
];

const businessItems = [
    'AIシステム・プロダクト開発（受託）',
    'AI導入コンサルティング・技術顧問',
    '業務自動化（RPA/GAS/DX）',
    'AI研修・リテラシー向上支援',
];

export default function CompanySection() {
    return (
        <section id="company" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block">
                        COMPANY
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-2">
                        会社概要
                    </h2>
                </motion.div>

                {/* Company Info Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel rounded-2xl border border-white/60 p-8 md:p-12"
                    style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
                >
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-0"
                    >
                        {companyInfo.map(({ icon: Icon, label, value }, index) => (
                            <motion.div
                                key={label}
                                variants={springItem}
                                className="flex flex-col md:flex-row gap-2 md:gap-8 py-5"
                            >
                                <div className="md:w-1/3 flex items-center gap-2 text-blue-600 font-bold">
                                    <Icon className="w-5 h-5" />
                                    {label}
                                </div>
                                <div className="md:w-2/3 text-slate-800 font-medium">
                                    {value}
                                </div>
                                {index < companyInfo.length - 1 && (
                                    <div className="hidden md:block absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" style={{ display: 'none' }} />
                                )}
                            </motion.div>
                        ))}

                        {/* Gradient divider after companyInfo items */}
                        <div className="h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent my-1" />

                        <motion.div variants={springItem} className="flex flex-col md:flex-row gap-2 md:gap-8 py-5">
                            <div className="md:w-1/3 flex items-center gap-2 text-blue-600 font-bold">
                                <Users2 className="w-5 h-5" />
                                事業内容
                            </div>
                            <div className="md:w-2/3 text-slate-700 font-medium leading-relaxed">
                                <ul className="space-y-2">
                                    {businessItems.map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <div className="h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent my-1" />

                        <motion.div variants={springItem} className="flex flex-col md:flex-row gap-2 md:gap-8 py-5">
                            <div className="md:w-1/3 flex items-center gap-2 text-blue-600 font-bold">
                                <Mail className="w-5 h-5" />
                                お問い合わせ
                            </div>
                            <div className="md:w-2/3 text-slate-700 font-medium">
                                <a href="/booking" className="text-blue-600 hover:text-blue-800 font-bold underline underline-offset-4 decoration-blue-200 hover:decoration-blue-400 transition-colors inline-flex items-center gap-1 group">
                                    お問い合わせフォームより承っております <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
