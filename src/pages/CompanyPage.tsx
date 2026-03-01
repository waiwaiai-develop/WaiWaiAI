import { motion } from 'framer-motion';
import { Network, Building2, Users2, MapPin, Mail } from 'lucide-react';

export default function CompanyPage() {
    return (
        <div className="pt-32 pb-24 relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-slate-50 z-[-2]"></div>
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-primary-100/40 to-transparent z-[-1]"></div>
            <div className="absolute inset-0 bg-grid-light opacity-50 z-[-1]"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">

                {/* Page Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-2"
                    >
                        <div className="w-8 h-[2px] bg-primary-600"></div>
                        Company
                        <div className="w-8 h-[2px] bg-primary-600"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
                    >
                        本質的な課題解決を導く、<br />
                        最強の<span className="text-primary-600">技術パートナー</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        私たちWaiWai AIは、単に「システムを作る」集団ではありません。<br className="hidden md:block" />
                        テクノロジーを手段とし、お客様のビジネスを共にスケールさせる同志です。
                    </motion.p>
                </div>

                {/* Mission & Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
                    className="bg-primary-900 rounded-3xl p-10 md:p-16 mb-16 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <Network className="w-16 h-16 text-primary-400 mx-auto mb-6 relative z-10" />
                    <h2 className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 relative z-10">Mission</h2>
                    <p className="text-2xl md:text-3xl font-extrabold text-white leading-relaxed relative z-10">
                        「IT化の遅れ」という<br className="md:hidden" />
                        ボトルネックを破壊し、<br />
                        企業が本来持つ<br className="md:hidden" />ポテンシャルを解放する。
                    </p>
                </motion.div>

                {/* Company Profiles List (if any)
            I will leave out specific executive names as it was not provided,
            but provide a solid structure.
        */}

                {/* Company Info Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200/50">会社概要</h2>

                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-slate-50">
                                <div className="md:w-1/3 flex items-center gap-2 text-primary-600 font-bold">
                                    <Building2 className="w-5 h-5" />
                                    会社名
                                </div>
                                <div className="md:w-2/3 text-slate-700 font-medium">
                                    WaiWai AI (法人化準備中 / WIP)
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-slate-50">
                                <div className="md:w-1/3 flex items-center gap-2 text-primary-600 font-bold">
                                    <Users2 className="w-5 h-5" />
                                    事業内容
                                </div>
                                <div className="md:w-2/3 text-slate-700 font-medium leading-relaxed">
                                    ・AIソリューションの企画・開発・運用<br />
                                    ・オーダーメイド型Webシステム・アプリ開発<br />
                                    ・業務効率化、RPA導入、DX推移支援<br />
                                    ・ITコンサルティング
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-slate-50">
                                <div className="md:w-1/3 flex items-center gap-2 text-primary-600 font-bold">
                                    <MapPin className="w-5 h-5" />
                                    所在地
                                </div>
                                <div className="md:w-2/3 text-slate-700 font-medium">
                                    東京都内
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4">
                                <div className="md:w-1/3 flex items-center gap-2 text-primary-600 font-bold">
                                    <Mail className="w-5 h-5" />
                                    お問い合わせ
                                </div>
                                <div className="md:w-2/3 text-slate-700 font-medium">
                                    ホームページのお問い合わせフォームより承っております。
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
