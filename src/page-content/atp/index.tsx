'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Brain, Cpu, Repeat, CheckCircle2, ArrowRight, TrendingUp,
    Clock, AlertTriangle, BarChart3, Users, Zap, Shield,
    Building2, Rocket, Target, ChevronDown, Minus, Plus,
    Search, RefreshCw, PhoneCall, Wrench, Sparkles, LifeBuoy
} from 'lucide-react';
import { useState, useRef } from 'react';
import ContactCTA from '@/components/ContactCTA';

/* ── FAQ Accordion ── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="glass-card rounded-2xl mb-3 overflow-hidden"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-7 py-6 text-left group"
            >
                <span className="font-medium text-slate-800 text-lg pr-6 group-hover:text-blue-600 transition-colors">{q}</span>
                {open
                    ? <Minus className="w-5 h-5 text-blue-500 shrink-0" />
                    : <Plus className="w-5 h-5 text-slate-400 group-hover:text-blue-500 shrink-0 transition-colors" />
                }
            </button>
            <motion.div
                initial={false}
                animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
            >
                <div className="px-7 pb-6 text-slate-500 leading-relaxed max-w-2xl">
                    {a}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function ATPPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const plans = [
        {
            name: 'Entry',
            price: '10',
            description: 'まず1つ、AIで変えてみる',
            features: [
                '業務診断 & 1つの業務をAI化（例: 日報・請求書・問い合わせ対応）',
                '月1回のオンラインMTG',
                'KPI設定 & 月次レポート',
                'チャット相談（営業日）',
            ],
            accent: false,
        },
        {
            name: 'Standard',
            price: '25',
            description: 'AI部門を月額でレンタル',
            features: [
                '月2回の戦略 & レビューMTG',
                '月3件の業務自動化を実装',
                'KPIダッシュボード & 月次レポート',
                'チャット相談（営業日）',
                '社内向けマニュアル作成',
            ],
            accent: true,
        },
        {
            name: 'Transform',
            price: '50',
            description: '会社ごとAI化する',
            features: [
                '週1回MTG + 臨時MTG無制限',
                '自動化ツール実装 無制限',
                '経営ダッシュボード構築',
                '社内AI推進者の育成',
                '四半期ロードマップ策定',
            ],
            accent: false,
        },
    ];

    const faqs = [
        { q: '最低契約期間はありますか？', a: '3ヶ月からです。AI導入の効果を正しく測定するために必要な期間です。3ヶ月後は月単位で継続・解約が可能です。' },
        { q: 'ITに詳しい社員がいなくても大丈夫ですか？', a: 'はい。IT人材がいない企業こそ、このサービスの価値を最も感じていただけます。導入・運用・改善まですべてお任せいただけます。' },
        { q: '「自動実装」とは具体的に何ですか？', a: 'チャットボット、メール自動返信、レポート自動生成、データ入力自動化、SaaS間連携など。御社の業務に合わせたツールをAIエージェントが開発します。' },
        { q: '補助金は使えますか？', a: 'はい。各種補助金・助成金の活用を支援しています。IT導入補助金（最大450万円）やリスキリング助成金など、御社に適した制度をご提案します。提携士業とも連携し、申請までサポートします。' },
        { q: '大企業でも対応できますか？', a: 'Transformプランは上場企業向けに設計しています。大手企業でのAI推進プロジェクト経験があり、大規模組織特有の課題にも対応可能です。' },
    ];

    return (
        <div className="relative overflow-hidden bg-white" style={{ fontFamily: "'Sora', 'Noto Sans JP', sans-serif" }}>

            {/* ═══════ HERO — White glassmorphism, dramatic ═══════ */}
            <section ref={heroRef} className="relative min-h-[100svh] flex items-center bg-white overflow-hidden">
                {/* Ambient blue glows */}
                <div className="absolute top-0 right-0 w-[70vw] h-[70vw] rounded-full bg-blue-100/60 blur-[140px] -translate-y-1/4 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-blue-50/80 blur-[120px] translate-y-1/4 -translate-x-1/4" />
                {/* Subtle grid */}
                <div className="absolute inset-0 bg-grid-light opacity-40" />

                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 py-40">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-12 h-px bg-blue-500" />
                            <span className="text-blue-500 text-xs font-semibold tracking-[0.3em] uppercase">AI Transformation Partner</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[0.95] tracking-tight mb-8">
                            御社に、<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                                AI部門
                            </span>を<br />
                            インストールする。
                        </h1>

                        <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
                            アドバイスで終わらない。<br />
                            戦略を立て、AIが自動で実装し、<br />
                            成果を数字で証明する。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white font-bold text-base tracking-wide hover:bg-blue-700 transition-colors rounded-2xl shadow-[0_8px_32px_-8px_rgba(37,99,235,0.5)]"
                            >
                                料金プランを見る <ArrowRight className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="#contact"
                                className="inline-flex items-center justify-center gap-3 px-8 py-5 glass font-medium text-base text-slate-700 hover:text-blue-600 transition-colors rounded-2xl"
                            >
                                無料で相談する
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Trust strip — glass badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-24 flex flex-wrap gap-4"
                    >
                        {[
                            { icon: <Building2 className="w-3.5 h-3.5 text-blue-500" />, label: '東証グロース上場企業の顧問実績' },
                            { icon: <Users className="w-3.5 h-3.5 text-blue-500" />, label: '大手企業でのAI推進経験あり' },
                            { icon: <Shield className="w-3.5 h-3.5 text-blue-500" />, label: '補助金対応' },
                        ].map((item, i) => (
                            <span key={i} className="glass flex items-center gap-2 px-4 py-2.5 rounded-full text-xs text-slate-600 tracking-wide uppercase font-medium">
                                {item.icon} {item.label}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════ PAIN POINTS — White bg, glass cards ═══════ */}
            <section className="py-32 bg-white relative">
                <div className="absolute inset-0 bg-dot-light opacity-30" />
                <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-red-500" />
                            <span className="text-red-500 text-xs font-semibold tracking-[0.3em] uppercase">Problem</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            AI導入企業の<span className="text-red-500">8割</span>が<br />直面する壁。
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { icon: <AlertTriangle className="w-5 h-5" />, num: '01', title: 'アドバイスだけで実装してくれない', desc: '「こうしましょう」で終わるコンサル。結局、社内で誰もやらない。' },
                            { icon: <Clock className="w-5 h-5" />, num: '02', title: '導入したけど成果が見えない', desc: 'AIに投資したのに、何が変わったか説明できない。' },
                            { icon: <Users className="w-5 h-5" />, num: '03', title: '社内に推進者がいない', desc: 'ツールを導入しても使いこなせる人がおらず放置される。' },
                        ].map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="glass-card rounded-2xl p-10 md:p-12 group hover:shadow-[0_8px_32px_-8px_rgba(37,99,235,0.15)] transition-all duration-500"
                            >
                                <span className="text-6xl font-black text-blue-50 group-hover:text-blue-100 transition-colors block mb-6">{p.num}</span>
                                <div className="text-red-500 mb-4">{p.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{p.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ 3 LAYERS — Glass panel cards ═══════ */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] rounded-full bg-blue-100/50 blur-[100px] -translate-y-1/2 translate-x-1/3" />
                <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-blue-500" />
                            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">Solution</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
                            3つのレイヤーで、<br />確実に変える。
                        </h2>
                    </motion.div>

                    <div className="space-y-5">
                        {[
                            { icon: <Brain className="w-7 h-7" />, layer: 'Layer 01', title: '頭脳', sub: '戦略 & 判断', desc: '大手企業でAI普及率60%を達成した経験に基づき、「何をAI化すべきか」「どの順番で進めるか」を的確に判断。現場で実証済みの知見でロードマップを設計。' },
                            { icon: <Cpu className="w-7 h-7" />, layer: 'Layer 02', title: '手足', sub: 'AIエージェントが自動実装', desc: '戦略を立てるだけでは終わりません。AIエージェントが自動でツールを開発し、業務自動化を実装。通常の開発会社より圧倒的に速く、低コストで実現。' },
                            { icon: <Repeat className="w-7 h-7" />, layer: 'Layer 03', title: '定着', sub: '仕組み化 & 改善', desc: 'KPIを自動計測し成果を数字で可視化。社内にAI推進者を育て、四半期ごとに次のフェーズへ進む仕組みを構築。作って終わりにしない。' },
                        ].map((l, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-panel rounded-2xl hover:shadow-[0_8px_40px_-8px_rgba(37,99,235,0.2)] transition-all duration-500 group"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/60 flex flex-col justify-center">
                                        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400 mb-4">{l.layer}</span>
                                        <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-500">{l.icon}</div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-1">{l.title}</h3>
                                        <p className="text-blue-500 font-medium text-sm">{l.sub}</p>
                                    </div>
                                    <div className="md:w-2/3 p-10 md:p-12 flex items-center">
                                        <p className="text-slate-600 text-lg leading-relaxed">{l.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ TRACK RECORD — Blue-600 bg section ═══════ */}
            <section className="py-32 bg-blue-600 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-white/5 blur-[200px]" />

                <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-white/60" />
                            <span className="text-white/70 text-xs font-semibold tracking-[0.3em] uppercase">Track Record</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            実績が証明する、<br />圧倒的な再現性。
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                        {[
                            { number: '7,000', unit: '人', label: 'AI普及率60%超を達成', sub: '大手企業の社内AI導入を主導。研修・認定試験まで設計し、全社に定着。' },
                            { number: '30', unit: '%増', label: '面接進出率の向上', sub: 'AI活用による職務経歴書の品質向上。応募者の面接到達率が大幅に改善。' },
                            { number: '101', unit: '億', label: '上場企業のAI顧問', sub: '全国24拠点の人材企業。経営層と直接対話しながらAI導入ロードマップを設計。' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.7 }}
                                className="glass rounded-2xl p-10 md:p-12"
                                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}
                            >
                                <div className="mb-6">
                                    <span className="text-6xl md:text-7xl font-black text-white tracking-tight">{stat.number}</span>
                                    <span className="text-2xl font-bold text-blue-200 ml-1">{stat.unit}</span>
                                </div>
                                <div className="text-blue-200 font-semibold text-sm mb-3 tracking-wide">{stat.label}</div>
                                <p className="text-blue-100/70 text-sm leading-relaxed">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* 3 perspectives */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl p-10 md:p-12"
                        style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                        <h3 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-10">3つの世界を同時に見ている唯一の存在</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { icon: <Building2 className="w-5 h-5" />, title: '大企業', desc: '大規模組織でのAI導入。部門間調整とガバナンスの知見。' },
                                { icon: <TrendingUp className="w-5 h-5" />, title: '上場企業', desc: '東証グロース上場企業の経営課題。コンプライアンスを踏まえた提案。' },
                                { icon: <Rocket className="w-5 h-5" />, title: '1人AI会社', desc: '社員ゼロ+AIエージェントで会社運営。理論ではなく実践の人。' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="text-blue-200 mt-1 shrink-0">{item.icon}</div>
                                    <div>
                                        <div className="text-white font-bold mb-2">{item.title}</div>
                                        <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════ COMPARISON TABLE — Glass highlight ═══════ */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-blue-600" />
                            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">Comparison</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">他社との比較。</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto rounded-2xl glass-card"
                    >
                        <table className="w-full text-sm min-w-[640px]">
                            <thead>
                                <tr className="border-b border-slate-200/80">
                                    <th className="text-left py-5 pr-6 pl-6 font-semibold text-slate-400 uppercase tracking-widest text-xs w-1/5" />
                                    <th className="py-5 px-4 text-center w-1/5">
                                        <span className="inline-block bg-blue-600 text-white font-bold py-2 px-5 text-sm tracking-wide rounded-xl shadow-[0_4px_16px_-4px_rgba(37,99,235,0.4)]">WaiWai AI</span>
                                    </th>
                                    <th className="py-5 px-4 text-center font-medium text-slate-400 w-1/5">大手コンサル</th>
                                    <th className="py-5 px-4 text-center font-medium text-slate-400 w-1/5">フリーランス</th>
                                    <th className="py-5 px-4 text-center font-medium text-slate-400 w-1/5">AI顧問（他社）</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: '月額費用', us: '10〜50万円', a: '30〜100万円', b: '100万円〜', c: '10〜30万円' },
                                    { label: '実装', us: 'AIが自動開発', a: '別会社に外注', b: '本人が手動', c: 'なし' },
                                    { label: 'KPI計測', us: '自動', a: '手動レポート', b: 'なし', c: 'なし' },
                                    { label: '対応速度', us: '即日〜翌日', a: '1〜2週間', b: '数日', c: '数日' },
                                    { label: '放置リスク', us: 'なし', a: '高い', b: '低い', c: '高い' },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 last:border-b-0 hover:bg-blue-50/30 transition-colors">
                                        <td className="py-5 pr-6 pl-6 font-semibold text-slate-800">{row.label}</td>
                                        <td className="py-5 px-4 text-center font-bold text-blue-600">{row.us}</td>
                                        <td className="py-5 px-4 text-center text-slate-400">{row.a}</td>
                                        <td className="py-5 px-4 text-center text-slate-400">{row.b}</td>
                                        <td className="py-5 px-4 text-center text-slate-400">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* ═══════ PROCESS — Glass step cards ═══════ */}
            <section className="py-32 bg-slate-50 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-blue-500" />
                            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">Process</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">導入の流れ。</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {[
                            { step: '01', icon: <Target className="w-5 h-5" />, title: '無料相談', desc: '30分で御社の課題をヒアリング。AI化のポテンシャルをその場でお伝え。' },
                            { step: '02', icon: <BarChart3 className="w-5 h-5" />, title: '業務診断', desc: '全業務を棚卸し。インパクト×難易度で優先順位を整理。' },
                            { step: '03', icon: <Zap className="w-5 h-5" />, title: '自動化実装', desc: 'AIエージェントが開発開始。最短1週間で最初の成果物。' },
                            { step: '04', icon: <TrendingUp className="w-5 h-5" />, title: 'KPI計測', desc: '成果を数字で見える化。毎月レポート、次の施策を実行。' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="glass-card rounded-2xl p-8 md:p-10 group hover:shadow-[0_8px_32px_-8px_rgba(37,99,235,0.2)] transition-all duration-500"
                            >
                                <span className="text-5xl font-black text-blue-100 group-hover:text-blue-200 transition-colors block mb-6">{item.step}</span>
                                <div className="text-blue-500 mb-4">{item.icon}</div>
                                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ PRICING — Glass plan cards ═══════ */}
            <section id="pricing" className="py-32 bg-white relative">
                <div className="absolute inset-0 bg-dot-light opacity-20" />
                <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-blue-500" />
                            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">Pricing</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">料金プラン。</h2>
                        <p className="text-slate-500 text-lg">社員1人の採用コストより、確実に安い。</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className={`glass-card rounded-2xl p-10 md:p-12 flex flex-col relative ${plan.accent
                                    ? 'border-blue-400 shadow-[0_8px_32px_-8px_rgba(37,99,235,0.3)]'
                                    : ''
                                    }`}
                            >
                                {plan.accent && (
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl" />
                                )}
                                <div className="mb-8">
                                    <span className={`text-xs font-semibold tracking-[0.3em] uppercase ${plan.accent ? 'text-blue-500' : 'text-slate-400'}`}>
                                        {plan.name}
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-6xl font-black tracking-tight text-slate-900">{plan.price}</span>
                                    <span className="text-lg font-medium ml-1 text-slate-400">万円<span className="text-sm">/月</span></span>
                                </div>
                                <p className="text-sm mb-10 text-slate-500">{plan.description}</p>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {plan.features.map((f, fi) => (
                                        <li key={fi} className="flex items-start gap-3">
                                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.accent ? 'text-blue-500' : 'text-blue-400'}`} />
                                            <span className="text-sm text-slate-600">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="#contact"
                                    className={`block text-center py-4 font-bold text-sm tracking-wide transition-colors rounded-xl ${plan.accent
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_4px_16px_-4px_rgba(37,99,235,0.4)]'
                                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                                        }`}
                                >
                                    無料で相談する
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Spot products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        {[
                            { icon: <BarChart3 className="w-5 h-5" />, title: 'AI業務診断', desc: '全業務を棚卸し、AI活用ロードマップを納品。', price: '30万円（税別）' },
                            { icon: <Users className="w-5 h-5" />, title: 'AI導入研修', desc: '半日のオンライン研修。社内のAIリテラシーを底上げ。', price: '15万円（税別）' },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="glass-card rounded-2xl p-8 md:p-10 flex items-center gap-6"
                            >
                                <div className="text-blue-500 shrink-0">{s.icon}</div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 text-sm">{s.title}</h4>
                                    <p className="text-slate-500 text-xs mt-1">{s.desc}</p>
                                </div>
                                <span className="text-blue-600 font-bold text-sm whitespace-nowrap">{s.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ NEW ENTRY POINTS — AI Review + IT/AI Rescue ═══════ */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-blue-100/40 blur-[120px] translate-x-1/3 translate-y-1/3" />
                <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-blue-500" />
                            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">New Services</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                            まず、ここから始める。
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl">
                            月額契約の前に、単発で試せる入口をご用意しました。
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Card 1: AI活用レビュー */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-card rounded-2xl overflow-hidden group hover:shadow-[0_12px_48px_-8px_rgba(37,99,235,0.2)] transition-all duration-500"
                        >
                            {/* Top accent bar */}
                            <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                            <div className="p-10 md:p-12">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
                                    <Sparkles className="w-3 h-3 text-blue-500" />
                                    <span className="text-xs font-semibold text-blue-600 tracking-wide">導入済み企業向け</span>
                                </div>

                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                                        <Search className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 leading-tight">AI活用レビュー</h3>
                                        <p className="text-blue-500 font-medium text-sm mt-1">現状診断 → 最適化提案</p>
                                    </div>
                                </div>

                                <p className="text-slate-600 leading-relaxed mb-8">
                                    「AIツールを入れたけど放置している」「契約しているだけで活用できていない」<br />
                                    そんな企業に向けた、単発の現状診断サービスです。
                                </p>

                                {/* Pain points */}
                                <div className="space-y-3 mb-8">
                                    {[
                                        'AI導入したのに誰も使っていない',
                                        'ツールはあるが業務に定着していない',
                                        '何から改善すれば良いかわからない',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                            <span className="text-sm text-slate-500">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Process */}
                                <div className="glass rounded-xl p-6 mb-8 bg-blue-50/50">
                                    <div className="flex items-center gap-2 mb-4">
                                        <RefreshCw className="w-4 h-4 text-blue-500" />
                                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">レビューの流れ</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <span className="font-medium text-slate-800">現状確認</span>
                                        <ArrowRight className="w-3 h-3 text-blue-400 shrink-0" />
                                        <span className="font-medium text-slate-800">課題抽出</span>
                                        <ArrowRight className="w-3 h-3 text-blue-400 shrink-0" />
                                        <span className="font-medium text-slate-800">最適化提案</span>
                                    </div>
                                </div>

                                {/* Key message */}
                                <div className="border-l-2 border-blue-400 pl-4 mb-10">
                                    <p className="text-sm text-slate-500 italic leading-relaxed">
                                        "AIの進化は早い。定期的なレビューが必要です。"<br />
                                        現状を把握することが、次の一歩につながります。
                                    </p>
                                </div>

                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="/#contact"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white font-bold text-sm tracking-wide hover:bg-blue-700 transition-colors rounded-xl shadow-[0_4px_16px_-4px_rgba(37,99,235,0.4)]"
                                >
                                    レビューを依頼する <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Card 2: IT/AIレスキュー */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-card rounded-2xl overflow-hidden group hover:shadow-[0_12px_48px_-8px_rgba(234,88,12,0.15)] transition-all duration-500"
                        >
                            {/* Top accent bar */}
                            <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-400" />
                            <div className="p-10 md:p-12">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-8">
                                    <LifeBuoy className="w-3 h-3 text-orange-500" />
                                    <span className="text-xs font-semibold text-orange-600 tracking-wide">ITが苦手な方向け</span>
                                </div>

                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                                        <PhoneCall className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 leading-tight">IT/AIレスキュー</h3>
                                        <p className="text-orange-500 font-medium text-sm mt-1">困ったらZoomで即解決</p>
                                    </div>
                                </div>

                                <p className="text-slate-600 leading-relaxed mb-8">
                                    IT/AIのトラブルに、すぐ呼べる存在が必要です。<br />
                                    AIで作ったものが動かない、設定がわからない。<br />
                                    そんなときに頼れるパートナーがここにいます。
                                </p>

                                {/* Scenario examples */}
                                <div className="space-y-3 mb-8">
                                    {[
                                        '「AIで作ったけど突然動かなくなった！」',
                                        '「設定しようとしたら画面が変わってわからない」',
                                        '「エラーが出て何が何だか分からない」',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <AlertTriangle className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-500">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Speed highlight */}
                                <div className="glass rounded-xl p-6 mb-8 bg-orange-50/50">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Zap className="w-4 h-4 text-orange-500" />
                                        <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">スピード解決</span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <span className="text-3xl font-black text-slate-900">最短</span>
                                            <span className="text-sm text-slate-400 ml-1">即日</span>
                                            <p className="text-xs text-slate-400 mt-1">お問い合わせ当日に対応</p>
                                        </div>
                                        <div className="w-px h-10 bg-slate-200" />
                                        <div className="text-sm text-slate-600 leading-relaxed">
                                            Zoom画面共有で一緒に確認。<br />
                                            その場で解決します。
                                        </div>
                                    </div>
                                </div>

                                {/* Key message */}
                                <div className="border-l-2 border-orange-400 pl-4 mb-10">
                                    <p className="text-sm text-slate-500 italic leading-relaxed">
                                        一度のサポートが、安心感と信頼につながります。<br />
                                        継続的なAI活用支援もご相談ください。
                                    </p>
                                </div>

                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="/#contact"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-orange-500 text-white font-bold text-sm tracking-wide hover:bg-orange-600 transition-colors rounded-xl shadow-[0_4px_16px_-4px_rgba(234,88,12,0.3)]"
                                >
                                    今すぐ相談する <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ═══════ FAQ — Glass accordion ═══════ */}
            <section className="py-32 bg-slate-50 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-blue-500" />
                            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">よくある質問。</h2>
                    </motion.div>
                    <div>
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ CTA ═══════ */}
            <ContactCTA />
        </div>
    );
}
