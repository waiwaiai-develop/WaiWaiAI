import { motion } from 'framer-motion';
import { Network, Database, Code, LineChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
    const services = [
        {
            id: "ai-solutions",
            icon: <Network className="w-10 h-10 text-primary-600" />,
            title: 'AIソリューション導入',
            subtitle: 'LLM・RAGを活用し、労働集約型業務を根本から変革',
            desc: '汎用的なAIツールの導入ではなく、自社データ（社内規定、過去の提案書など）と連携させた独自RAG（Retrieval-Augmented Generation）環境を構築します。これにより「月間数十時間の問い合わせ対応削減」や「熟練スタッフのナレッジ共有」を実現し、確実なタイパ改善をもたらします。',
            features: [
                '社内文書学習型 チャットボット (RAG) 構築',
                'プロンプトエンジニアリング・チューニング',
                '生成AIを活用したドキュメント自動生成',
                'AI導入に向けたセキュリティ・ガイドライン策定'
            ],
            bgBase: 'bg-primary-50',
            borderHover: 'hover:border-primary-300'
        },
        {
            id: "system-development",
            icon: <Code className="w-10 h-10 text-sky-600" />,
            title: 'オーダーメイドシステム・アプリ開発',
            subtitle: 'ビジネスの成長を止めない、スケーラブルな独自システム',
            desc: 'エクセルやスプレッドシート管理の限界を感じている企業様へ。現場の使いやすさを最優先に設計し、過剰な機能を持たないリーンなWebシステムやアプリをアジャイル開発で最速提供します。新規事業のMVP（Minimum Viable Product）立ち上げにも最適です。',
            features: [
                'フルスクラッチWebアプリケーション開発',
                'SaaSプロダクト・ポータルサイト構築',
                'React / Node.js 等を用いたモダンアーキテクチャ',
                'AWS / GCP を活用したクラウドインフラ構築'
            ],
            bgBase: 'bg-sky-50',
            borderHover: 'hover:border-sky-300'
        },
        {
            id: "dx-automation",
            icon: <Database className="w-10 h-10 text-indigo-600" />,
            title: '社内DX・RPA自動化',
            subtitle: '属人化を排除し、ヒューマンエラーゼロの組織へ',
            desc: 'システム間の転記作業、毎日決まった時間に実行する単調なデータ集計など、人に依存した定型業務を徹底的に自動化します。RPA（Robotic Process Automation）やAPI連携を駆使し、人件費削減と並行してコア業務へのリソース集中を可能にします。',
            features: [
                '主要SaaS間のAPI連携自動化',
                'RPAツールの選定およびシナリオ作成',
                'データパイプライン構築・自動集計レポート化',
                '業務フローの可視化と再設計（BPR）'
            ],
            bgBase: 'bg-indigo-50',
            borderHover: 'hover:border-indigo-300'
        },
        {
            id: "consulting",
            icon: <LineChart className="w-10 h-10 text-blue-600" />,
            title: 'IT顧問・技術コンサルティング',
            subtitle: '「何から手をつけるべきか」を共に考える右腕として',
            desc: '「IT化の必要性は感じているが、どこから始めるべきか分からない」「ベンダーから提示された見積もりが適正か判断できない」といった経営課題に対し、技術とビジネスの両視点から伴走します。中立的な立場でセカンドオピニオンも提供します。',
            features: [
                'IT投資ロードマップ・中長期戦略の策定',
                'ベンダー選定・RFP（提案依頼書）作成支援',
                '社内IT人材の育成・採用支援',
                'プロジェクトマネジメント（PMO）支援'
            ],
            bgBase: 'bg-blue-50',
            borderHover: 'hover:border-blue-300'
        }
    ];

    return (
        <div className="pt-32 pb-24 relative min-h-screen overflow-hidden">
            {/* Global Theme background for subpages */}
            <div className="absolute inset-0 bg-slate-50 z-[-2]"></div>
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-primary-100/40 to-transparent z-[-1]"></div>
            <div className="absolute inset-0 bg-grid-light opacity-50 z-[-1]"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">

                {/* Page Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-2"
                    >
                        <div className="w-8 h-[2px] bg-primary-600"></div>
                        Services
                        <div className="w-8 h-[2px] bg-primary-600"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
                    >
                        テクノロジーを、<br />
                        企業の<span className="text-primary-600">競争優位</span>に。
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        先端のAI技術から、堅牢なシステム開発、日々の業務自動化まで。
                        経営課題に直結するROI（費用対効果）の高いソリューションを提供します。
                    </motion.p>
                </div>

                {/* Services List */}
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: 'spring', stiffness: 50, delay: index * 0.1 }}
                            className="glass-card p-8 md:p-12 group flex flex-col relative overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-bl ${service.bgBase.replace('bg-', 'from-').replace('50', '50/50')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-12">
                                <div className="md:w-1/3">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${service.bgBase} shadow-inner mb-6 group-hover:scale-105 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-primary-600 font-bold text-sm mb-6">
                                        {service.subtitle}
                                    </p>
                                </div>

                                <div className="md:w-2/3 flex flex-col justify-center">
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
                                        {service.desc}
                                    </p>

                                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 mb-8 shadow-sm">
                                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">主な提供内容</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {service.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start gap-2 text-slate-700 font-medium">
                                                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-start md:justify-end mt-auto">
                                        <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg">
                                            このサービスについて相談する
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Footer inside Services */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 p-12 bg-gradient-to-br from-primary-900 to-slate-900 rounded-3xl text-center shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">どのサービスが自社に最適か分からない方へ</h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
                            課題感がふんわりした状態でも全く問題ありません。現在の業務フローや経営課題をヒアリングし、最もROI（費用対効果）の高い解決策を無料でご提案いたします。
                        </p>
                        <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-orange-500 hover:text-white transition-all shadow-lg text-lg">
                            無料オンライン相談を予約
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
