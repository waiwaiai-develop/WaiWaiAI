'use client';

import { motion } from 'framer-motion';
import { Building2, Users2, MapPin, Mail, ArrowRight, Turtle } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import { staggerContainer, springItem } from '@/lib/animations';

export default function CompanyPage() {

    return (
        <div className="pt-32 pb-0 relative min-h-screen overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl relative z-10">

                {/* Page Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-3 justify-center mb-6"
                    >
                        <div className="w-12 h-px bg-amber-500" />
                        <span className="text-amber-500 text-xs font-semibold tracking-[0.3em] uppercase">Company</span>
                        <div className="w-12 h-px bg-amber-500" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6"
                    >
                        本質的な課題解決を導く、<br />
                        最強の<span className="text-gradient-amber">技術パートナー</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-stone-400 max-w-2xl mx-auto font-medium"
                    >
                        テクノロジーは現場で使われ、利益を生んで初めて価値を持ちます。<br className="hidden md:block" />
                        私たちWaiWai AIは、単に「システムを作る」集団ではなく、ビジネスをスケールさせる熱狂的な同志です。
                    </motion.p>
                </div>

                {/* Mission & Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
                    className="bg-stone-900 border border-stone-800 p-10 md:p-16 mb-16 text-center relative overflow-hidden"
                >
                    <div className="grain-overlay" />

                    <Turtle className="w-16 h-16 text-amber-500/60 mx-auto mb-6 relative z-10" />
                    <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 relative z-10">Our Mission</h2>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight relative z-10 mb-8 tracking-tight">
                        AIを味方に、<br className="md:hidden" />未来を豊かに。
                    </p>

                    <div className="relative z-10 max-w-2xl mx-auto text-stone-400 font-medium leading-relaxed text-lg text-left md:text-center p-6 bg-stone-800/50 border border-stone-700">
                        <p className="mb-4">
                            社名である<strong className="text-white">「WaiWai」</strong>は、ハワイの言葉で<strong className="text-amber-400 border-b-2 border-amber-500 pb-0.5">「豊かさ」</strong>を意味します。
                        </p>
                        <p>
                            ハワイで幸運と繁栄の象徴とされるウミガメ（ホヌ）のように、クライアントの事業に長く確実な繁栄をもたらし、テクノロジーの力で誰もが本来のポテンシャルを発揮できる豊かな未来を創り出します。
                        </p>
                    </div>
                </motion.div>

                {/* Company Info Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-stone-900 border border-stone-800 p-8 md:p-12 relative overflow-hidden mb-24"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-8 pb-4 border-b border-stone-700 flex items-center gap-3">
                            <span className="w-2 h-8 bg-amber-500 inline-block"></span>
                            会社概要
                        </h2>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <motion.div variants={springItem} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-stone-800">
                                <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold">
                                    <Building2 className="w-5 h-5" />
                                    会社名
                                </div>
                                <div className="md:w-2/3 text-white font-bold text-lg">
                                    WaiWai AI 株式会社
                                </div>
                            </motion.div>

                            <motion.div variants={springItem} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-stone-800">
                                <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold">
                                    <Users2 className="w-5 h-5" />
                                    設立
                                </div>
                                <div className="md:w-2/3 text-stone-300 font-medium">
                                    2025年1月23日
                                </div>
                            </motion.div>

                            <motion.div variants={springItem} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-stone-800">
                                <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold">
                                    <Users2 className="w-5 h-5" />
                                    資本金
                                </div>
                                <div className="md:w-2/3 text-stone-300 font-medium">
                                    50万円
                                </div>
                            </motion.div>

                            <motion.div variants={springItem} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-stone-800">
                                <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold">
                                    <Users2 className="w-5 h-5" />
                                    代表者
                                </div>
                                <div className="md:w-2/3 text-stone-300 font-medium">
                                    久保田慧（Kei Kubota）
                                </div>
                            </motion.div>

                            <motion.div variants={springItem} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-stone-800">
                                <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold">
                                    <Users2 className="w-5 h-5" />
                                    事業内容
                                </div>
                                <div className="md:w-2/3 text-stone-300 font-medium leading-relaxed">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500"></div> AIシステム・プロダクト開発（受託）</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500"></div> AI導入コンサルティング・技術顧問</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500"></div> 業務自動化（RPA/GAS/DX）</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500"></div> AI研修・リテラシー向上支援</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div variants={springItem} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-stone-800">
                                <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold">
                                    <MapPin className="w-5 h-5" />
                                    所在地
                                </div>
                                <div className="md:w-2/3 text-stone-300 font-medium">
                                    〒150-0043 東京都渋谷区道玄坂１丁目１０−８ 渋谷道玄坂東急ビル 2F-C
                                </div>
                            </motion.div>

                            <motion.div variants={springItem} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4">
                                <div className="md:w-1/3 flex items-center gap-2 text-amber-500 font-bold">
                                    <Mail className="w-5 h-5" />
                                    お問い合わせ
                                </div>
                                <div className="md:w-2/3 text-stone-300 font-medium">
                                    <a href="#contact" className="text-amber-500 hover:text-amber-400 font-bold underline underline-offset-4 decoration-amber-600 hover:decoration-amber-400 transition-colors inline-flex items-center gap-1 group">
                                        お問い合わせフォームより承っております <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>

            {/* Global CTA */}
            <ContactCTA />
        </div>
    );
}
