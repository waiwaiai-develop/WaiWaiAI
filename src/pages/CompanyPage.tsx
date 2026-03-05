import { motion } from 'framer-motion';
import { Building2, Users2, MapPin, Mail, ArrowRight, Turtle } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

export default function CompanyPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <div className="pt-32 pb-0 relative min-h-screen overflow-hidden bg-white">
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent z-[-1]"></div>
            <div className="absolute inset-0 bg-grid-light opacity-50 z-[-1]"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">

                {/* Page Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
                    >
                        COMPANY
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
                    >
                        本質的な課題解決を導く、<br />
                        最強の<span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">技術パートナー</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
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
                    className="bg-blue-600 rounded-3xl p-10 md:p-16 mb-16 text-center relative overflow-hidden shadow-2xl shadow-blue-600/20"
                >
                    <div className="absolute inset-0 bg-grid-light opacity-20"></div>


                    <Turtle className="w-16 h-16 text-blue-200 mx-auto mb-6 relative z-10" />
                    <h2 className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-4 relative z-10">Our Mission</h2>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight relative z-10 mb-8 tracking-tight">
                        AIを味方に、<br className="md:hidden" />未来を豊かに。
                    </p>

                    <div className="relative z-10 max-w-2xl mx-auto text-blue-100 font-medium leading-relaxed text-lg text-left md:text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                        <p className="mb-4">
                            社名である<strong className="text-white">「WaiWai」</strong>は、ハワイの言葉で<strong className="text-white border-b-2 border-sky-400 pb-0.5">「豊かさ」</strong>を意味します。
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
                    className="bg-white rounded-3xl border border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] p-8 md:p-12 relative overflow-hidden mb-24"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200/50 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
                            会社概要
                        </h2>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-slate-50">
                                <div className="md:w-1/3 flex items-center gap-2 text-blue-600 font-bold">
                                    <Building2 className="w-5 h-5" />
                                    会社名
                                </div>
                                <div className="md:w-2/3 text-slate-800 font-bold text-lg">
                                    WaiWai AI (法人化準備中 / WIP)
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-slate-50">
                                <div className="md:w-1/3 flex items-center gap-2 text-blue-600 font-bold">
                                    <Users2 className="w-5 h-5" />
                                    事業内容
                                </div>
                                <div className="md:w-2/3 text-slate-700 font-medium leading-relaxed">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> AIエージェント開発および導入支援</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> オーダーメイド型Webシステム設計・開発</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> 業務フロー再構築、RPA導入、DX実行支援</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> 中長期ITコンサルティング（外部CTO）</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-slate-50">
                                <div className="md:w-1/3 flex items-center gap-2 text-blue-600 font-bold">
                                    <MapPin className="w-5 h-5" />
                                    所在地
                                </div>
                                <div className="md:w-2/3 text-slate-700 font-medium">
                                    東京都内
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4">
                                <div className="md:w-1/3 flex items-center gap-2 text-blue-600 font-bold">
                                    <Mail className="w-5 h-5" />
                                    お問い合わせ
                                </div>
                                <div className="md:w-2/3 text-slate-700 font-medium">
                                    <a href="#contact" className="text-blue-600 hover:text-blue-800 font-bold underline underline-offset-4 decoration-blue-200 hover:decoration-blue-400 transition-colors inline-flex items-center gap-1 group">
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
