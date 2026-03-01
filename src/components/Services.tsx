import { motion } from 'framer-motion';
import { Network, Database, Code, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        {
            icon: <Network className="w-6 h-6 text-cyan-400" />,
            title: 'AIソリューション導入',
            desc: '最新のLLM・RAG技術を活用し、社内ナレッジの属人化を解消。労働集約型の業務を根本から変革し、圧倒的なタイパ改善を実現します。',
            colSpan: 'md:col-span-2'
        },
        {
            icon: <Code className="w-6 h-6 text-indigo-400" />,
            title: 'システム・アプリ開発',
            desc: 'モダンアーキテクチャによるスケーラブルなフルスクラッチ開発。過剰機能を削ぎ落とした最速MVP立ち上げを支援。',
            colSpan: 'md:col-span-1'
        },
        {
            icon: <Database className="w-6 h-6 text-blue-400" />,
            title: 'DX・RPA自動化',
            desc: 'API連携やRPAで定型業務を無人化。ヒューマンエラーをゼロにし、コア業務へリソースを集中させます。',
            colSpan: 'md:col-span-1'
        },
        {
            icon: <LineChart className="w-6 h-6 text-purple-400" />,
            title: 'ITコンサルティング',
            desc: 'IT投資のロードマップ策定からベンダー選定まで、経営視点で伴走する強力な外部CTOとして機能します。',
            colSpan: 'md:col-span-2'
        }
    ];

    return (
        <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
                        >
                            事業成長を加速させる<br />
                            <span className="text-slate-500">コア・ソリューション</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 font-medium"
                        >
                            本質的な経営課題に直結する、ROI最強のテックスタックを提供します。
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className={`group relative flex flex-col p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden ${service.colSpan}`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-sky-500 transition-colors" />
                            </div>

                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-medium mt-auto">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group">
                        すべてのソリューションを詳しく見る
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
