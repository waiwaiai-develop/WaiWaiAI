'use client';

import { motion } from 'framer-motion';
import {
    Bot, Cpu, Settings, Brain, GraduationCap, Terminal,
    Server, MessageSquareText, CheckCircle2, ArrowRight,
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export default function ServicesPage() {
    const services = [
        {
            id: "consulting",
            icon: <Brain className="w-10 h-10 text-sky-600" />,
            title: 'AI顧問・技術アドバイザー',
            subtitle: '経営課題から逆算して、何をAI化すべきかを一緒に整理する',
            desc: '「AIを入れたいけど何から始めればいいかわからない」に対して、外部CTOのような立場で伴走します。代表自身が、大企業でのAI導入PM、上場企業のAI顧問、スタートアップのIT戦略策定を同時に経験。提案だけでなく自分で手を動かせる人間がアドバイスするから、実装まで一直線で進みます。',
            features: [
                '経営課題からのAI活用ロードマップ策定',
                'IT投資の優先順位整理・ベンダー見積もり精査',
                '社内AI人材の育成・内製化支援',
                '月次の定例相談・改善提案',
            ],
        },
        {
            id: "ai-solutions",
            icon: <Bot className="w-10 h-10 text-blue-600" />,
            title: 'AI導入・業務自動化',
            subtitle: '問い合わせ、集計、通知など、日々の定型業務をAIで仕組み化',
            desc: '現場で毎日発生している手作業を見つけて、AIとAPI連携で自動化します。LINE・Chatwork・Discord・Slack・スプレッドシートなど、今使っているツールをそのまま活かしながら、問い合わせの一次対応、データ集計、レポート通知まで、人がやらなくていい仕事を仕組みに変えます。',
            features: [
                'LINE / Chatwork / Discord / Slack との連携自動化',
                'Dify・LLMを使ったAIチャットボット構築',
                '社内ナレッジを学習させたRAG環境の構築',
                'GAS・API連携による業務フロー自動化',
            ],
        },
        {
            id: "system-development",
            icon: <Cpu className="w-10 h-10 text-sky-600" />,
            title: 'SaaS・Webシステム開発',
            subtitle: '必要なものを、必要な分だけ。フルスクラッチで作る',
            desc: '業界特化型AI SaaSの開発・OEM展開や、大規模データベースの構築など、代表自らフルスクラッチで設計・実装してきた実績があります。要件のズレが少なく、開発のスピードも速い。大規模な開発にはパートナーの受託開発会社と連携して対応します。',
            features: [
                'React / Next.js によるモダンなWebアプリ開発',
                'Google Cloud / AWS / Azure を用いたクラウド構築',
                'Stripe決済・認証・マルチテナント対応',
                'MVPを素早く作り、使いながら改善する開発スタイル',
            ],
        },
        {
            id: "dx-automation",
            icon: <Settings className="w-10 h-10 text-blue-600" />,
            title: 'DX・業務プロセス改善',
            subtitle: 'ツール間の手動転記をなくし、本来の仕事に集中する',
            desc: '複数のSaaSやツールに散らばったデータを、API連携で自動的につなぎます。毎日の転記、コピペ、確認作業を仕組み化して、ヒューマンエラーと残業を減らします。ツールを増やすのではなく、今あるものを活かして業務フロー全体を見直します。',
            features: [
                '複数SaaS間のデータ連携・自動同期',
                'KPI・売上レポートの自動集計',
                '業務フローの棚卸しと再設計',
                'データ基盤の設計・構築',
            ],
        },
        {
            id: "training",
            icon: <GraduationCap className="w-10 h-10 text-sky-600" />,
            title: 'AI研修・レクチャー',
            subtitle: 'AI活用相談の総合評価4.9。実務で使っている人から直接学ぶ',
            desc: 'ChatGPT・Dify・Claude等の生成AIを、実際の業務でどう使うかを教えます。AI活用相談サービスでの総合評価は4.9/5.0。「実務でAIを活用されている講師ならではのリアルな事例紹介が参考になった」「画面共有しながら実装を見せてもらい、中身の濃い時間だった」と好評です。',
            features: [
                '生成AI（ChatGPT / Claude / Dify）活用研修',
                '画面共有しながらの実装デモ・ハンズオン',
                '経営層〜現場スタッフまでレベル別に対応',
                '助成金（リスキリング補助金等）の活用相談',
            ],
        },
        {
            id: "claude-code",
            icon: <Terminal className="w-10 h-10 text-blue-600" />,
            title: 'Claude Code導入・Brain構築',
            subtitle: '会社の知的基盤をAIで動かす仕組みを作る',
            desc: 'WaiWai AI自身が、Claude Code + Obsidian + AIエージェント群で日常業務を回しています。この「1人+AIで会社を動かす仕組み」を、御社にも導入します。議事録、提案書、日報、ナレッジ管理まで、AIが秘書のように動く環境を構築します。',
            features: [
                'Claude Code / MCP の導入・設定支援',
                'Obsidian Brain（AI記憶基盤）の設計・構築',
                'AIエージェント群の設計・運用フロー構築',
                'CLAUDE.mdテンプレート・運用ルールの整備',
            ],
        },
        {
            id: "honux",
            icon: <Server className="w-10 h-10 text-sky-600" />,
            title: 'HonuX — AI技術検証プラットフォーム',
            subtitle: '最新AIを、御社の武器に',
            desc: '新しいAIが出るたびに厳選・実装し、ワンクリックで検証できるプラットフォームです。御社の業界・業務に合わせて「このAIをこう使うと効果的です」と自動提案。試して良かったら、そのまま業務への本格導入もお手伝いします。',
            features: [
                '最新AIツールを随時追加・検証できる環境',
                '業界・業務に合わせたAI活用の自動提案',
                '利用レポートでROIを可視化',
                '本格導入への移行サポート',
            ],
        },
        {
            id: "subsidy",
            icon: <MessageSquareText className="w-10 h-10 text-blue-600" />,
            title: '補助金・助成金活用支援',
            subtitle: '初期費用を抑えてAI導入を始める',
            desc: 'IT導入補助金やリスキリング助成金など、AI導入に使える公的支援の活用をサポートします。補助金採択企業のデータベースを自社で構築・運用しており、制度の実態を把握しています。',
            features: [
                'IT導入補助金を活用したAI導入支援',
                'リスキリング助成金によるAI研修の費用軽減',
                '補助金申請に必要な書類・要件の整理',
                '申請〜採択後の実装まで一貫サポート',
            ],
        },
    ];

    return (
        <div className="pt-32 pb-0 relative min-h-screen overflow-hidden bg-white">
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent z-[-1]"></div>
            <div className="absolute inset-0 bg-grid-light opacity-50 z-[-1]"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">

                {/* Page Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <div
                        className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
                    >
                        SOLUTIONS
                    </div>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
                    >
                        作れる人が、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">直接つくる。</span>
                    </h1>
                    <p
                        className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        エンジニアリングもAI活用も、代表自ら手を動かせる。<br className="hidden md:block" />
                        大規模な開発が必要な場合は、パートナーの受託開発会社とも連携して対応します。
                    </p>
                </div>

                {/* Services List */}
                <div className="space-y-16 pb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.05 }}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="bg-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] group flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)]"
                        >
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-12">
                                <div className="md:w-1/3">
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-blue-50 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-blue-600 font-bold text-sm mb-6 leading-relaxed">
                                        {service.subtitle}
                                    </p>
                                </div>

                                <div className="md:w-2/3 flex flex-col justify-center">
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
                                        {service.desc}
                                    </p>

                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">主な提供内容</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                            {service.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start gap-3 text-slate-700 font-bold text-sm">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                                    <span className="leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-start md:justify-end mt-auto">
                                        <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-blue-600 hover:text-white transition-colors border border-blue-100 group/btn">
                                            このサービスについて相談する
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ContactCTA />
        </div>
    );
}
