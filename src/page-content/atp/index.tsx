'use client';

import { motion } from 'framer-motion';
import {
    Brain, Cpu, Repeat, CheckCircle2, ArrowRight, TrendingUp,
    Clock, AlertTriangle, BarChart3, Users, Zap, Shield,
    Building2, Rocket, Target, ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import ContactCTA from '@/components/ContactCTA';

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-blue-100 rounded-2xl overflow-hidden bg-white"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50/50 transition-colors"
            >
                <span className="font-bold text-slate-900 text-lg pr-4">{q}</span>
                <ChevronDown className={`w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                    {a}
                </div>
            )}
        </motion.div>
    );
}

export default function ATPPage() {
    const plans = [
        {
            name: 'Entry',
            price: '10',
            unit: '万円',
            period: '/ 月（税別）',
            description: 'まず1つ、AIで変えてみる',
            features: [
                '業務診断 & 1つの業務をAI化',
                '月1回のオンラインMTG',
                'KPI設定 & 月次レポート自動送付',
                'チャット相談（営業日対応）',
            ],
            cta: 'まずは相談する',
            accent: false,
        },
        {
            name: 'Standard',
            price: '25',
            unit: '万円',
            period: '/ 月（税別）',
            description: 'AI部門を月額でレンタル',
            features: [
                '月2回の戦略 & レビューMTG',
                '月3件の業務自動化を実装',
                'KPIダッシュボード & 月次レポート',
                'チャット相談（営業日対応）',
                '社内向け簡易マニュアル作成',
            ],
            cta: '導入を相談する',
            accent: true,
        },
        {
            name: 'Transform',
            price: '50',
            unit: '万円',
            period: '/ 月（税別）',
            description: '会社ごとAI化する',
            features: [
                '週1回のMTG + 臨時MTG無制限',
                '自動化ツール実装 無制限',
                '経営ダッシュボード構築',
                '社内AI推進者の育成プログラム',
                '四半期ロードマップ策定',
            ],
            cta: '導入を相談する',
            accent: false,
        },
    ];

    const layers = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: '頭脳',
            subtitle: '戦略 & 判断',
            desc: '7,000人規模企業でAI普及率60%を達成した経験に基づき、「何をAI化すべきか」「どの順番で進めるか」を的確に判断。机上の空論ではなく、現場で実証済みの知見でロードマップを設計します。',
            color: 'blue',
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: '手足',
            subtitle: 'AIエージェントが自動実装',
            desc: '戦略を立てるだけでは終わりません。AIエージェントが自動でツールを開発し、業務自動化を実装。通常の開発会社に外注するよりも圧倒的に速く、低コストで実現します。',
            color: 'sky',
        },
        {
            icon: <Repeat className="w-8 h-8" />,
            title: '定着',
            subtitle: '仕組み化 & 改善',
            desc: '作って終わりにしません。KPIを自動計測し、成果を数字で可視化。社内にAI推進者を育て、四半期ごとに次のフェーズへ進む仕組みを構築します。',
            color: 'indigo',
        },
    ];

    const painPoints = [
        { icon: <AlertTriangle className="w-6 h-6" />, title: 'アドバイスだけで\n実装してくれない', desc: '「こうしましょう」で終わるコンサル。結局、社内で誰もやらない。' },
        { icon: <Clock className="w-6 h-6" />, title: '導入したけど\n成果が見えない', desc: 'AI導入に投資したのに、何が変わったか説明できない。' },
        { icon: <Users className="w-6 h-6" />, title: '社内に\n推進者がいない', desc: 'ツールを導入しても、使いこなせる人がいないから放置される。' },
    ];

    const comparisons = [
        { label: '月額費用', us: '10〜50万円', bigConsul: '30〜100万円', freelance: '100万円〜', other: '10〜30万円' },
        { label: '実装', us: 'AIが自動開発', bigConsul: '別会社に外注', freelance: '本人が手動', other: 'なし' },
        { label: 'KPI計測', us: '自動', bigConsul: '手動レポート', freelance: 'なし', other: 'なし' },
        { label: '対応速度', us: '即日〜翌日', bigConsul: '1〜2週間', freelance: '数日', other: '数日' },
        { label: '放置リスク', us: 'なし', bigConsul: '高い', freelance: '低い', other: '高い' },
    ];

    const faqs = [
        { q: '最低契約期間はありますか？', a: '3ヶ月からとなります。AI導入の効果を正しく測定するために最低限必要な期間です。3ヶ月後は月単位で継続・解約が可能です。' },
        { q: 'ITに詳しい社員がいなくても大丈夫ですか？', a: 'はい。むしろIT人材がいない企業こそ、このサービスの価値を最も感じていただけます。導入・運用・改善まですべてお任せいただけます。' },
        { q: '自動化の「実装」とは具体的に何をしてもらえますか？', a: 'チャットボット構築、メール自動返信、レポート自動生成、データ入力自動化、SaaS間のデータ連携など、御社の業務に合わせたツールをAIエージェントが開発します。' },
        { q: '補助金は使えますか？', a: 'IT導入支援事業者として登録予定（2026年度）です。デジタル化・AI導入補助金（最大450万円）やものづくり補助金（最大2,500万円）の活用をご支援できます。提携の中小企業診断士が申請をサポートします。' },
        { q: '大企業でも対応できますか？', a: 'はい。Transformプランは上場企業・中堅企業向けに設計しています。7,000人規模の企業でのAI推進経験があり、大規模組織特有の課題（部門間調整、セキュリティ要件、ガバナンス）にも対応可能です。' },
    ];

    return (
        <div className="pt-32 pb-0 relative min-h-screen overflow-hidden bg-white">
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent z-[-1]" />
            <div className="absolute inset-0 bg-grid-light opacity-50 z-[-1]" />

            {/* ===== HERO ===== */}
            <section className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 mb-24">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
                    >
                        AI Transformation Partner
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
                    >
                        御社に、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">AI部門</span>を<br className="md:hidden" />インストールする。
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-10"
                    >
                        アドバイスで終わらない。<br className="hidden md:block" />
                        戦略を立て、AIが自動で実装し、成果を数字で証明する。
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="#pricing"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-[0_20px_40px_-10px_rgba(59,130,246,0.4)]"
                        >
                            料金プランを見る <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-slate-800 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                            無料で相談する
                        </a>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium"
                    >
                        <span className="flex items-center gap-2"><Building2 className="w-4 h-4 text-blue-500" />東証グロース上場企業の顧問実績</span>
                        <span className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" />7,000人規模のAI普及を主導</span>
                        <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-500" />補助金対応</span>
                    </motion.div>
                </div>
            </section>

            {/* ===== PAIN POINTS ===== */}
            <section className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        AI導入、こんな<span className="text-red-500">失敗</span>していませんか？
                    </h2>
                    <p className="text-slate-600 font-medium">AI導入企業の8割が直面する課題</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {painPoints.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-red-50/50 border border-red-100 rounded-2xl p-8 text-center"
                        >
                            <div className="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                {p.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 whitespace-pre-line">{p.title}</h3>
                            <p className="text-slate-600 font-medium text-sm">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== 3 LAYERS ===== */}
            <section className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                        WHY WaiWai AI
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        3つのレイヤーで、<span className="text-blue-600">確実に変える</span>
                    </h2>
                    <p className="text-slate-600 font-medium max-w-2xl mx-auto">
                        「アドバイスだけ」で終わらない。戦略・実装・定着まで一気通貫で支援します。
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {layers.map((layer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex items-center gap-5 md:w-1/3">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-${layer.color}-50 text-${layer.color}-600 border border-${layer.color}-100 shrink-0`}>
                                        {layer.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Layer {i + 1}</div>
                                        <h3 className="text-2xl font-bold text-slate-900">{layer.title}</h3>
                                        <p className="text-blue-600 font-bold text-sm">{layer.subtitle}</p>
                                    </div>
                                </div>
                                <p className="md:w-2/3 text-slate-600 text-lg leading-relaxed font-medium">
                                    {layer.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== TRACK RECORD ===== */}
            <section className="py-24 bg-slate-900 relative overflow-hidden mb-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            実績が証明する、<span className="text-sky-400">圧倒的な再現性</span>
                        </h2>
                        <p className="text-slate-400 font-medium">大企業からスタートアップまで、規模を問わず成果を出してきました。</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            { number: '7,000', unit: '人', label: '規模の企業でAI普及率60%超を達成', sub: '社内AI「ChatPCA」を主導。プロンプト研修・認定試験まで設計し、全社に定着させた実績。' },
                            { number: '3', unit: '割増', label: '面接進出率の向上を実現', sub: 'AI活用により職務経歴書の品質が向上。応募者の面接到達率が約30%改善。' },
                            { number: '101', unit: '億円', label: '東証グロース上場企業のAI顧問', sub: '全国24拠点を持つ人材企業のAI導入ロードマップを設計。経営層と直接対話しながら推進。' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
                            >
                                <div className="text-5xl font-black text-white mb-1">
                                    {stat.number}<span className="text-2xl text-sky-400">{stat.unit}</span>
                                </div>
                                <div className="text-sky-400 font-bold text-sm mb-4">{stat.label}</div>
                                <p className="text-slate-400 text-sm font-medium">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10"
                    >
                        <h3 className="text-white font-bold text-lg mb-6 text-center">3つの世界を同時に見ている、唯一の存在</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: <Building2 className="w-6 h-6" />, title: '大企業', desc: '7,000人組織でのAI導入・普及。部門間調整やガバナンスの知見。' },
                                { icon: <TrendingUp className="w-6 h-6" />, title: '上場企業', desc: '東証グロース上場企業の経営課題を理解。コンプライアンスを踏まえた提案。' },
                                { icon: <Rocket className="w-6 h-6" />, title: '1人AI会社', desc: '自ら社員ゼロ+AIエージェントで会社運営。理論ではなく実践の人。' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold mb-1">{item.title}</div>
                                        <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== COMPARISON ===== */}
            <section className="py-24 container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        他社との<span className="text-blue-600">比較</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto"
                >
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b-2 border-blue-100">
                                <th className="text-left p-4 font-bold text-slate-400 uppercase tracking-widest text-xs" />
                                <th className="p-4 text-center">
                                    <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-xl text-base">WaiWai AI</div>
                                </th>
                                <th className="p-4 text-center font-bold text-slate-600">大手コンサル</th>
                                <th className="p-4 text-center font-bold text-slate-600">フリーランス</th>
                                <th className="p-4 text-center font-bold text-slate-600">AI顧問（他社）</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row, i) => (
                                <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-slate-50/50' : ''}`}>
                                    <td className="p-4 font-bold text-slate-700">{row.label}</td>
                                    <td className="p-4 text-center font-bold text-blue-600">{row.us}</td>
                                    <td className="p-4 text-center text-slate-500">{row.bigConsul}</td>
                                    <td className="p-4 text-center text-slate-500">{row.freelance}</td>
                                    <td className="p-4 text-center text-slate-500">{row.other}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className="py-24 bg-blue-50/30 relative">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            導入の<span className="text-blue-600">流れ</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '01', icon: <Target className="w-6 h-6" />, title: '無料相談', desc: '30分で御社の課題をヒアリング。AI化のポテンシャルをその場でお伝えします。', color: 'blue' },
                            { step: '02', icon: <BarChart3 className="w-6 h-6" />, title: '業務診断', desc: '全業務を棚卸し。AI化の優先順位をインパクト×難易度のマトリクスで整理。', color: 'sky' },
                            { step: '03', icon: <Zap className="w-6 h-6" />, title: '自動化実装', desc: 'AIエージェントが開発開始。最短1週間で最初の成果物をお届け。', color: 'indigo' },
                            { step: '04', icon: <TrendingUp className="w-6 h-6" />, title: 'KPI計測 & 改善', desc: '成果を数字で見える化。毎月レポートをお届けし、次の施策を実行。', color: 'blue' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm relative"
                            >
                                <div className="text-5xl font-black text-blue-100 absolute top-4 right-4">{item.step}</div>
                                <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 text-${item.color}-600 flex items-center justify-center mb-4 border border-${item.color}-100`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section id="pricing" className="py-24 container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                        PRICING
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        料金プラン
                    </h2>
                    <p className="text-slate-600 font-medium">
                        社員1人の採用コスト（月30〜40万円）より、確実に安い。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-3xl p-8 border relative ${plan.accent
                                ? 'bg-blue-600 text-white border-blue-500 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)] scale-[1.02]'
                                : 'bg-white text-slate-900 border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)]'
                                }`}
                        >
                            {plan.accent && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-400 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className={`text-lg font-bold mb-1 ${plan.accent ? 'text-blue-100' : 'text-blue-600'}`}>{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-5xl font-black">{plan.price}</span>
                                    <span className={`text-xl font-bold ${plan.accent ? 'text-blue-200' : 'text-slate-400'}`}>{plan.unit}</span>
                                    <span className={`text-sm font-medium ${plan.accent ? 'text-blue-200' : 'text-slate-400'}`}>{plan.period}</span>
                                </div>
                                <p className={`font-bold ${plan.accent ? 'text-blue-200' : 'text-slate-500'}`}>{plan.description}</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className="flex items-start gap-3">
                                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.accent ? 'text-sky-300' : 'text-blue-500'}`} />
                                        <span className={`font-medium text-sm ${plan.accent ? 'text-white' : 'text-slate-700'}`}>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`block text-center py-4 rounded-2xl font-bold transition-colors ${plan.accent
                                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                                    : 'bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-100'
                                    }`}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Spot products */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex gap-6 items-center">
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shrink-0">
                            <BarChart3 className="w-7 h-7" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">AI業務診断（単発）</h4>
                            <p className="text-sm text-slate-600 font-medium">全業務を棚卸し、AI活用ロードマップを納品。</p>
                            <div className="text-blue-600 font-bold mt-1">30万円（税別）</div>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex gap-6 items-center">
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shrink-0">
                            <Users className="w-7 h-7" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">AI導入研修（単発）</h4>
                            <p className="text-sm text-slate-600 font-medium">半日のオンライン研修。社内のAIリテラシーを底上げ。</p>
                            <div className="text-blue-600 font-bold mt-1">15万円（税別）</div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="py-24 bg-blue-50/30 relative">
                <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            よくある質問
                        </h2>
                    </motion.div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <ContactCTA />
        </div>
    );
}
