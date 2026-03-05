import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, User } from 'lucide-react';

export default function ProfileSection() {
    return (
        <section id="profile" className="py-24 lg:py-32 relative bg-white overflow-hidden border-t border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start text-center md:text-left">

                    {/* Visual / Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-sky-400 rounded-3xl rotate-6 opacity-20 blur-lg group-hover:rotate-12 transition-all duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-sky-400 rounded-3xl -rotate-3 scale-105 opacity-50 group-hover:-rotate-6 transition-all duration-500"></div>
                        <div className="relative w-full h-full bg-slate-100 rounded-3xl border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                            {/* Placeholder for an actual photo. The user can easily replace this with an <img> tag later */}
                            <User className="w-24 h-24 text-slate-300" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-sm tracking-widest mb-6"
                        >
                            PROFILE
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
                        >
                            Your Name <span className="text-xl md:text-2xl text-slate-400 font-medium tracking-normal ml-2">(名前)</span>
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-bold text-blue-600 mb-6"
                        >
                            IT Consultant / Product Builder
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4 text-slate-600 leading-relaxed font-medium mb-8"
                        >
                            <p>
                                エンタープライズ向けのAI実装・DX推進を専門とするITコンサルタント。
                                クライアントの抱える「無駄」を根本から排除し、本質的な価値創造に集中できる環境を構築します。
                            </p>
                            <p>
                                同時に、個人・スモールチーム向けのAIプロダクトを開発・運営するプロダクトビルダーとしても活動中。
                                最新のテクノロジー（LLM, モダンWeb技術）を駆使し、高速に仮説検証と実装を繰り返すスタイルを得意としています。
                            </p>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center justify-center md:justify-start gap-4"
                        >
                            <a href="#" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
