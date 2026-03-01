import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
    const cases = [
        {
            category: 'System Development',
            title: 'マッチングプラットフォーム構築で成約率2.5倍',
            desc: '複雑な条件マッチングとAIレコメンドを独自開発。手作業での提案業務を削減し、事業全体の粗利率を大幅に改善したフルスクラッチ開発事例。',
            tags: ['React', 'Node.js', 'AI Recommendation'],
            color: 'bg-primary-50 text-primary-700 border-primary-200',
            image: '/images/case1.png'
        },
        {
            category: 'AI Solution',
            title: '社内ナレッジ検索AI導入で問い合わせ工数80%削減',
            desc: '社内のマニュアルや過去資料を学習させたRAGシステムを導入。新入社員でも即座に正答を引き出せる環境を構築し、教育コストを劇的に削減。',
            tags: ['LLM', 'RAG', 'Python', 'Vector DB'],
            color: 'bg-sky-50 text-sky-700 border-sky-200',
            image: '/images/case2.png'
        },
        {
            category: 'DX & Automation',
            title: '手入力業務のRPA化で月間150時間の劇的削減',
            desc: '毎日発生するシステム間の転記作業をAPIとRPAで完全自動化。ヒューマンエラーをゼロにし、コア業務へリソースをシフトさせることに成功。',
            tags: ['RPA', 'API Integration', 'Cloud'],
            color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
            image: '/images/case3.png'
        }
    ];

    return (
        <section id="casestudies" className="py-24 lg:py-32 relative overflow-hidden bg-slate-50">
            {/* Subtle top divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
                        >
                            常識を覆す<br />
                            <span className="text-slate-500">圧倒的成果</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 font-medium leading-relaxed"
                        >
                            「売上が上がった」「コストが消滅した」という経営視点での具体的なインパクトをもたらした、変革の軌跡。
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/cases" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all text-sm font-semibold group shadow-sm">
                            すべての実績を見る
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cases.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="group flex flex-col h-full rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
                        >
                            <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-opacity"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-slate-700`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-sky-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 font-medium mb-8 flex-grow leading-relaxed text-sm">
                                    {project.desc}
                                </p>
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 font-mono text-xs border border-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link to="/cases" className="inline-flex items-center gap-2 text-sky-600 font-bold hover:text-sky-500 transition-colors text-sm group/link">
                                        詳細を読む
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
