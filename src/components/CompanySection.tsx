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
        <section id="company" className="py-24 md:py-32 bg-stone-950 relative">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-px bg-amber-500" />
                        <span className="text-amber-500 font-bold text-xs tracking-widest uppercase">
                            COMPANY
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                        会社概要
                    </h2>
                </motion.div>

                {/* Company Info Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="border border-stone-800"
                >
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {companyInfo.map(({ icon: Icon, label, value }) => (
                            <motion.div key={label} variants={springItem} className="flex flex-col md:flex-row border-b border-stone-800">
                                <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold px-6 py-4 border-b border-stone-800 md:border-b-0 md:border-r md:border-stone-800">
                                    <Icon className="w-5 h-5" />
                                    {label}
                                </div>
                                <div className="md:w-2/3 text-stone-300 font-medium px-6 py-4">
                                    {value}
                                </div>
                            </motion.div>
                        ))}

                        <motion.div variants={springItem} className="flex flex-col md:flex-row border-b border-stone-800">
                            <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold px-6 py-4 border-b border-stone-800 md:border-b-0 md:border-r md:border-stone-800">
                                <Users2 className="w-5 h-5" />
                                事業内容
                            </div>
                            <div className="md:w-2/3 text-stone-300 font-medium px-6 py-4">
                                <ul className="space-y-2">
                                    {businessItems.map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div variants={springItem} className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold px-6 py-4 border-b border-stone-800 md:border-b-0 md:border-r md:border-stone-800">
                                <Mail className="w-5 h-5" />
                                お問い合わせ
                            </div>
                            <div className="md:w-2/3 text-stone-300 font-medium px-6 py-4">
                                <a href="#contact" className="text-amber-500 hover:text-amber-400 font-bold underline underline-offset-4 decoration-amber-700 hover:decoration-amber-500 transition-colors inline-flex items-center gap-1 group">
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
