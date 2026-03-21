'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Brain, Cpu, Repeat, CheckCircle2, ArrowRight, TrendingUp,
    Clock, AlertTriangle, BarChart3, Users, Zap, Shield,
    Building2, Rocket, Target, ChevronDown, Minus, Plus
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
            className="border-b border-stone-200 last:border-b-0"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-7 text-left group"
            >
                <span className="font-medium text-stone-900 text-lg pr-6 group-hover:text-amber-700 transition-colors">{q}</span>
                {open
                    ? <Minus className="w-5 h-5 text-amber-600 shrink-0" />
                    : <Plus className="w-5 h-5 text-stone-400 group-hover:text-amber-600 shrink-0 transition-colors" />
                }
            </button>
            <motion.div
                initial={false}
                animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
            >
                <div className="pb-7 text-stone-500 leading-relaxed max-w-2xl">
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
                '業務診断 & 1つの業務をAI化',
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
        { q: '補助金は使えますか？', a: 'IT導入支援事業者として登録予定です。デジタル化・AI導入補助金（最大450万円）やものづくり補助金（最大2,500万円）の活用を支援します。' },
        { q: '大企業でも対応できますか？', a: 'Transformプランは上場企業向けに設計しています。7,000人規模でのAI推進経験があり、大規模組織特有の課題にも対応可能です。' },
    ];

    return (
        <div className="relative overflow-hidden" style={{ fontFamily: "'Sora', 'Noto Sans JP', sans-serif" }}>

            {/* ═══════ HERO — Editorial, dark, dramatic ═══════ */}
            <section ref={heroRef} className="relative min-h-[100svh] flex items-center bg-stone-950 overflow-hidden">
                {/* Grain overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px' }} />
                {/* Ambient glow */}
                <div className="absolute top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-amber-500/5 blur-[120px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-stone-500/5 blur-[100px]" />

                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 py-40">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-12 h-px bg-amber-500" />
                            <span className="text-amber-500 text-xs font-semibold tracking-[0.3em] uppercase">AI Transformation Partner</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
                            御社に、<br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #f59e0b, #d97706, #b45309)' }}>
                                AI部門
                            </span>を<br />
                            インストールする。
                        </h1>

                        <p className="text-stone-400 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
                            アドバイスで終わらない。<br />
                            戦略を立て、AIが自動で実装し、<br />
                            成果を数字で証明する。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-amber-500 text-stone-950 font-bold text-base tracking-wide hover:bg-amber-400 transition-colors"
                            >
                                料金プランを見る <ArrowRight className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="#contact"
                                className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-stone-700 text-stone-300 font-medium text-base hover:border-stone-500 hover:text-white transition-colors"
                            >
                                無料で相談する
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Trust strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-24 flex flex-wrap gap-8 text-xs text-stone-500 tracking-wide uppercase"
                    >
                        <span className="flex items-center gap-2"><Building2 className="w-3.5 h-3.5 text-amber-600" />東証グロース上場企業の顧問実績</span>
                        <span className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-amber-600" />7,000人規模のAI普及を主導</span>
                        <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-amber-600" />補助金対応</span>
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════ PAIN POINTS — Stark, editorial grid ═══════ */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
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
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                            AI導入企業の<span className="text-red-500">8割</span>が<br />直面する壁。
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-200">
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
                                className="p-10 md:p-12 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-stone-200 group hover:bg-stone-50 transition-colors"
                            >
                                <span className="text-6xl font-black text-stone-100 group-hover:text-red-50 transition-colors block mb-6">{p.num}</span>
                                <div className="text-red-500 mb-4">{p.icon}</div>
                                <h3 className="text-lg font-bold text-stone-900 mb-3 leading-snug">{p.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ 3 LAYERS — Overlapping editorial cards ═══════ */}
            <section className="py-32 bg-stone-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-amber-500" />
                            <span className="text-amber-600 text-xs font-semibold tracking-[0.3em] uppercase">Solution</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight max-w-2xl">
                            3つのレイヤーで、<br />確実に変える。
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            { icon: <Brain className="w-7 h-7" />, layer: 'Layer 01', title: '頭脳', sub: '戦略 & 判断', desc: '7,000人規模企業でAI普及率60%を達成した経験に基づき、「何をAI化すべきか」「どの順番で進めるか」を的確に判断。現場で実証済みの知見でロードマップを設計。', accent: 'amber' },
                            { icon: <Cpu className="w-7 h-7" />, layer: 'Layer 02', title: '手足', sub: 'AIエージェントが自動実装', desc: '戦略を立てるだけでは終わりません。AIエージェントが自動でツールを開発し、業務自動化を実装。通常の開発会社より圧倒的に速く、低コストで実現。', accent: 'stone' },
                            { icon: <Repeat className="w-7 h-7" />, layer: 'Layer 03', title: '定着', sub: '仕組み化 & 改善', desc: 'KPIを自動計測し成果を数字で可視化。社内にAI推進者を育て、四半期ごとに次のフェーズへ進む仕組みを構築。作って終わりにしない。', accent: 'stone' },
                        ].map((l, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white border border-stone-200 hover:border-amber-300 transition-all duration-500 group"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 p-10 md:p-12 border-b md:border-b-0 md:border-r border-stone-200 flex flex-col justify-center">
                                        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-400 mb-4">{l.layer}</span>
                                        <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-500">{l.icon}</div>
                                        <h3 className="text-3xl font-bold text-stone-900 mb-1">{l.title}</h3>
                                        <p className="text-amber-600 font-medium text-sm">{l.sub}</p>
                                    </div>
                                    <div className="md:w-2/3 p-10 md:p-12 flex items-center">
                                        <p className="text-stone-600 text-lg leading-relaxed">{l.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ TRACK RECORD — Dark, cinematic numbers ═══════ */}
            <section className="py-32 bg-stone-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-amber-500/3 blur-[200px]" />

                <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-amber-500" />
                            <span className="text-amber-500 text-xs font-semibold tracking-[0.3em] uppercase">Track Record</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            実績が証明する、<br />圧倒的な再現性。
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-800">
                        {[
                            { number: '7,000', unit: '人', label: 'AI普及率60%超を達成', sub: '社内AI「ChatPCA」を主導。プロンプト研修・認定試験まで設計し、全社に定着。' },
                            { number: '30', unit: '%増', label: '面接進出率の向上', sub: 'AI活用による職務経歴書の品質向上。応募者の面接到達率が大幅に改善。' },
                            { number: '101', unit: '億', label: '上場企業のAI顧問', sub: '全国24拠点の人材企業。経営層と直接対話しながらAI導入ロードマップを設計。' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.7 }}
                                className="p-10 md:p-12 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-stone-800"
                            >
                                <div className="mb-6">
                                    <span className="text-6xl md:text-7xl font-black text-white tracking-tight">{stat.number}</span>
                                    <span className="text-2xl font-bold text-amber-500 ml-1">{stat.unit}</span>
                                </div>
                                <div className="text-amber-500 font-semibold text-sm mb-3 tracking-wide">{stat.label}</div>
                                <p className="text-stone-500 text-sm leading-relaxed">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* 3 perspectives */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 border border-stone-800 p-10 md:p-12"
                    >
                        <h3 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-10">3つの世界を同時に見ている唯一の存在</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { icon: <Building2 className="w-5 h-5" />, title: '大企業', desc: '7,000人組織でのAI導入。部門間調整とガバナンスの知見。' },
                                { icon: <TrendingUp className="w-5 h-5" />, title: '上場企業', desc: '東証グロース上場企業の経営課題。コンプライアンスを踏まえた提案。' },
                                { icon: <Rocket className="w-5 h-5" />, title: '1人AI会社', desc: '社員ゼロ+AIエージェントで会社運営。理論ではなく実践の人。' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="text-amber-500 mt-1 shrink-0">{item.icon}</div>
                                    <div>
                                        <div className="text-white font-bold mb-2">{item.title}</div>
                                        <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════ COMPARISON TABLE ═══════ */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-stone-900" />
                            <span className="text-stone-900 text-xs font-semibold tracking-[0.3em] uppercase">Comparison</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">他社との比較。</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto"
                    >
                        <table className="w-full text-sm min-w-[640px]">
                            <thead>
                                <tr className="border-b-2 border-stone-900">
                                    <th className="text-left py-5 pr-6 font-semibold text-stone-400 uppercase tracking-widest text-xs w-1/5" />
                                    <th className="py-5 px-4 text-center w-1/5">
                                        <span className="inline-block bg-stone-950 text-amber-400 font-bold py-2 px-5 text-sm tracking-wide">WaiWai AI</span>
                                    </th>
                                    <th className="py-5 px-4 text-center font-medium text-stone-500 w-1/5">大手コンサル</th>
                                    <th className="py-5 px-4 text-center font-medium text-stone-500 w-1/5">フリーランス</th>
                                    <th className="py-5 px-4 text-center font-medium text-stone-500 w-1/5">AI顧問（他社）</th>
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
                                    <tr key={i} className="border-b border-stone-100 hover:bg-stone-50/50 transition-colors">
                                        <td className="py-5 pr-6 font-semibold text-stone-800">{row.label}</td>
                                        <td className="py-5 px-4 text-center font-bold text-amber-700">{row.us}</td>
                                        <td className="py-5 px-4 text-center text-stone-400">{row.a}</td>
                                        <td className="py-5 px-4 text-center text-stone-400">{row.b}</td>
                                        <td className="py-5 px-4 text-center text-stone-400">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* ═══════ PROCESS — Horizontal editorial steps ═══════ */}
            <section className="py-32 bg-stone-50 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-amber-500" />
                            <span className="text-amber-600 text-xs font-semibold tracking-[0.3em] uppercase">Process</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">導入の流れ。</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-stone-200 bg-white">
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
                                className="p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-stone-200 group hover:bg-stone-50 transition-colors"
                            >
                                <span className="text-5xl font-black text-stone-100 group-hover:text-amber-100 transition-colors block mb-6">{item.step}</span>
                                <div className="text-amber-600 mb-4">{item.icon}</div>
                                <h3 className="text-base font-bold text-stone-900 mb-2">{item.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ PRICING — Clean, decisive ═══════ */}
            <section id="pricing" className="py-32 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-amber-500" />
                            <span className="text-amber-600 text-xs font-semibold tracking-[0.3em] uppercase">Pricing</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">料金プラン。</h2>
                        <p className="text-stone-500 text-lg">社員1人の採用コストより、確実に安い。</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-200">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className={`p-10 md:p-12 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-stone-200 flex flex-col relative ${plan.accent ? 'bg-stone-950 text-white border-stone-800' : 'bg-white'}`}
                            >
                                {plan.accent && (
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
                                )}
                                <div className="mb-8">
                                    <span className={`text-xs font-semibold tracking-[0.3em] uppercase ${plan.accent ? 'text-amber-500' : 'text-stone-400'}`}>
                                        {plan.name}
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-6xl font-black tracking-tight">{plan.price}</span>
                                    <span className={`text-lg font-medium ml-1 ${plan.accent ? 'text-stone-400' : 'text-stone-400'}`}>万円<span className="text-sm">/月</span></span>
                                </div>
                                <p className={`text-sm mb-10 ${plan.accent ? 'text-stone-400' : 'text-stone-500'}`}>{plan.description}</p>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {plan.features.map((f, fi) => (
                                        <li key={fi} className="flex items-start gap-3">
                                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.accent ? 'text-amber-500' : 'text-amber-600'}`} />
                                            <span className={`text-sm ${plan.accent ? 'text-stone-300' : 'text-stone-600'}`}>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="#contact"
                                    className={`block text-center py-4 font-bold text-sm tracking-wide transition-colors ${plan.accent
                                        ? 'bg-amber-500 text-stone-950 hover:bg-amber-400'
                                        : 'bg-stone-950 text-white hover:bg-stone-800'
                                        }`}
                                >
                                    無料で相談する
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Spot products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-200 border-t-0">
                        {[
                            { icon: <BarChart3 className="w-5 h-5" />, title: 'AI業務診断', desc: '全業務を棚卸し、AI活用ロードマップを納品。', price: '30万円（税別）' },
                            { icon: <Users className="w-5 h-5" />, title: 'AI導入研修', desc: '半日のオンライン研修。社内のAIリテラシーを底上げ。', price: '15万円（税別）' },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className={`p-8 md:p-10 flex items-center gap-6 ${i === 0 ? 'md:border-r border-b md:border-b-0 border-stone-200' : ''}`}
                            >
                                <div className="text-amber-600 shrink-0">{s.icon}</div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-stone-900 text-sm">{s.title}</h4>
                                    <p className="text-stone-500 text-xs mt-1">{s.desc}</p>
                                </div>
                                <span className="text-amber-700 font-bold text-sm whitespace-nowrap">{s.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ FAQ — Minimal, editorial ═══════ */}
            <section className="py-32 bg-stone-50 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-stone-900" />
                            <span className="text-stone-900 text-xs font-semibold tracking-[0.3em] uppercase">FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">よくある質問。</h2>
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
