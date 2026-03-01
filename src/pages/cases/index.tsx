import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, PiggyBank, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CasesPage() {
    const cases = [
        {
            id: "case-matching",
            category: 'System Development',
            title: '不動産売買マッチングプラットフォーム構築で成約率2.5倍',
            client: '大手不動産仲介会社 様',
            problem: '属人的なエクセル管理と担当者のカンに頼った物件提案になっており、ミスマッチが多く成約率が伸び悩んでいた。また、提案資料の作成に膨大な時間がかかっていた。',
            solution: '複雑な条件マッチングとAIレコメンドを組み合わせたフルスクラッチのWebシステムをゼロから開発。顧客の希望条件と過去の成約データを基に、最適な物件をスコアリングして自動提案する仕組みを構築した。',
            results: [
                { icon: <TrendingUp className="w-5 h-5" />, label: '成約率', value: '250% UP' },
                { icon: <Clock className="w-5 h-5" />, label: '提案準備時間', value: '1/3に削減' },
            ],
            tags: ['React', 'Node.js', 'AI Recommendation', 'AWS'],
            color: 'bg-primary-50 text-primary-700 border-primary-200',
            image: '/images/case1.png'
        },
        {
            id: "case-rag",
            category: 'AI Solution',
            title: '社内ナレッジ検索AI導入で問い合わせ工数80%削減',
            client: '中堅製造業 様',
            problem: 'マニュアルや過去のトラブルシューティング資料が各部署のファイルサーバーに散在。新入社員からベテランへの「社内質問」が絶えず、コア業務を圧迫していた。',
            solution: '社内のあらゆるドキュメント（PDF, Word, Excel）を横断検索し、自然言語でピンポイントな回答を生成する独自RAG（Retrieval-Augmented Generation）システムを構築。Azure OpenAIセキュア環境で運用。',
            results: [
                { icon: <Clock className="w-5 h-5" />, label: '社内問い合わせ工数', value: '80% 削減' },
                { icon: <PiggyBank className="w-5 h-5" />, label: '教育・オンボーディング', value: '期間半減' },
            ],
            tags: ['LLM', 'RAG', 'Python', 'Vector DB', 'Azure'],
            color: 'bg-sky-50 text-sky-700 border-sky-200',
            image: '/images/case2.png'
        },
        {
            id: "case-rpa",
            category: 'DX & Automation',
            title: '手入力業務のRPA化で月間150時間の劇的削減',
            client: 'Eコマース・小売業 様',
            problem: '受注データから出荷指示システム、売上管理システムへの転記作業を毎日手作業で行っており、ヒューマンエラーによる誤出荷が多発。また繁忙期の残業が常態化していた。',
            solution: 'API連携とRPAツールを組み合わせ、受注から出荷、売上計上までのデータフローを完全自動化。イレギュラーエラー時のみ担当者に通知が飛ぶ仕組みを構築。',
            results: [
                { icon: <Clock className="w-5 h-5" />, label: '削減時間', value: '月間150時間' },
                { icon: <CheckCircle2 className="w-5 h-5" />, label: '入力ミス', value: '0件（ゼロ）' },
            ],
            tags: ['RPA', 'API Integration', 'Cloud Functions'],
            color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
            image: '/images/case3.png'
        }
    ];

    return (
        <div className="pt-32 pb-24 relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-slate-50 z-[-2]"></div>
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-indigo-100/30 to-transparent z-[-1]"></div>
            <div className="absolute inset-0 bg-dot-light opacity-60 z-[-1]"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

                {/* Page Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-2"
                    >
                        <div className="w-8 h-[2px] bg-primary-600"></div>
                        Case Studies
                        <div className="w-8 h-[2px] bg-primary-600"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
                    >
                        本質的な課題解決から導く、<br className="hidden md:block" />
                        <span className="text-primary-600">圧倒的成果。</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        単なるシステム構築に留まらない、「売上向上」「コスト削減」に直結した
                        WaiWai AIの支援実績を詳細なデータと共にお届けします。
                    </motion.p>
                </div>

                {/* Case Studies Detailed List */}
                <div className="space-y-24">
                    {cases.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
                            className="glass-card overflow-hidden group"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
                                {/* Image Side */}
                                <div className="bg-slate-100/50 relative h-64 lg:h-auto overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-white/95 backdrop-blur-sm border shadow-sm ${project.color}`}>
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="text-sm font-bold text-slate-500 mb-2">{project.client}</div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-8">
                                        {project.title}
                                    </h2>

                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">抱えていた課題</h4>
                                            <p className="text-slate-700 font-medium leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-slate-100 shadow-sm">
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">解決策・アプローチ</h4>
                                            <p className="text-slate-700 font-medium leading-relaxed bg-primary-50 p-4 rounded-xl border border-primary-100">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* ROI metrics */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {project.results.map((result, rIndex) => (
                                            <div key={rIndex} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm group-hover:shadow-md transition-shadow">
                                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 mb-2 shadow-sm">
                                                    {result.icon}
                                                </div>
                                                <div className="text-xs font-bold text-slate-500 mb-1">{result.label}</div>
                                                <div className="text-xl font-extrabold text-slate-900">{result.value}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-3 py-1.5 rounded-md bg-slate-50 text-slate-500 font-semibold text-xs border border-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 text-center"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">「自社に似た事例」について<br className="sm:hidden" />詳しく聞いてみませんか？</h3>
                    <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-600/30 text-lg">
                        具体的な事例のオンライン説明を申し込む
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
