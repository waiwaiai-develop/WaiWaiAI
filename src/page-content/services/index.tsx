'use client';

import { motion } from 'framer-motion';
import {
    ArrowRight,
    Bot,
    Brain,
    CheckCircle2,
    GraduationCap,
    MessageCircle,
    Settings,
    Sparkles,
    Waves,
} from 'lucide-react';

const services = [
    {
        icon: Brain,
        title: 'AIコンサルティング',
        body: '経営課題と現場業務を整理し、最初にAI化すべき領域を一緒に見つけます。',
        points: ['AI活用ロードマップ策定', '優先順位と費用対効果の整理', '技術選定・見積もり精査'],
    },
    {
        icon: Settings,
        title: '業務自動化ソリューション',
        body: '問い合わせ、集計、通知、転記などの定型業務を、今あるツールを活かして自動化します。',
        points: ['LINE / Slack / Sheets 連携', 'GAS・API連携', 'レポート・通知の自動化'],
    },
    {
        icon: Bot,
        title: 'AI開発・導入支援',
        body: 'Dify、RAG、LLM、Webアプリを組み合わせ、現場で使えるAIシステムとして実装します。',
        points: ['社内AIチャットボット', 'RAG環境構築', 'Next.js / クラウド開発'],
    },
    {
        icon: GraduationCap,
        title: '運用・定着支援',
        body: '導入して終わりではなく、社内で使われ続けるように研修・改善・内製化まで伴走します。',
        points: ['AI研修・ハンズオン', '社内運用ルール設計', '改善サイクルの定着'],
    },
];

const strengths = ['寄り添う伴走力', '豊富な実績と知見', '最適な技術選定', '人材育成まで支援'];
const flow = ['ヒアリング・課題整理', 'ご提案・プラン設計', '開発・導入', '運用・改善', '定着・自走化'];

export default function ServicesPage() {
    return (
        <div className="relative overflow-hidden bg-[#f8fbfd] pt-28 text-[#0f2238]">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(238,247,251,0.92),rgba(247,241,232,0.74),rgba(255,255,255,0.96))]" aria-hidden="true" />
            <div className="absolute left-0 top-28 h-[460px] w-[62%] bg-[radial-gradient(ellipse_at_12%_45%,rgba(123,211,232,0.22),transparent_58%)]" aria-hidden="true" />

            <section className="relative mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_360px] lg:items-end">
                <div>
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-bold text-[#0e7fa5] backdrop-blur-xl">
                        <Waves className="h-4 w-4" />
                        Services
                    </p>
                    <h1 className="font-serif text-4xl font-medium leading-tight sm:text-6xl">
                        貴社に最適なAI活用を、
                        <br />
                        一緒に見つけていきましょう。
                    </h1>
                    <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#425466]">
                        WaiWai AIは、企業の課題に寄り添い、最適なAI活用を設計・実行・定着まで伴走します。
                    </p>
                </div>

                <div className="rounded-3xl border border-white/70 bg-white/72 p-5 shadow-[0_24px_70px_rgba(15,34,56,0.08)] backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#eef7fb]">
                            <img src="/nalu/nalu-concierge.png" alt="" className="absolute top-[-6px] h-20 w-20 object-cover object-top" />
                        </span>
                        <div>
                            <p className="text-base font-bold text-[#0f2238]">Naluからのご案内</p>
                            <p className="mt-1 text-sm font-medium leading-6 text-[#425466]">
                                まだ課題が曖昧でも大丈夫です。最初の相談で、AI化できる業務を整理します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8">
                <div className="grid gap-5 md:grid-cols-2">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.article
                                key={service.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                                className="rounded-3xl border border-white/70 bg-white/76 p-6 shadow-[0_20px_60px_rgba(15,34,56,0.08)] backdrop-blur-xl"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef7fb] text-[#0e7fa5]">
                                        <Icon className="h-7 w-7" />
                                    </span>
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#0f2238]">{service.title}</h2>
                                        <p className="mt-3 text-sm font-medium leading-7 text-[#425466]">{service.body}</p>
                                    </div>
                                </div>
                                <div className="mt-6 grid gap-3">
                                    {service.points.map((point) => (
                                        <div key={point} className="flex items-center gap-3 rounded-2xl bg-[#f8fbfd] px-4 py-3 text-sm font-bold text-[#0f2238]">
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0e7fa5]" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                                <a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0e7fa5] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b4f71]">
                                    このサービスを相談する
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            <section className="relative mx-auto grid max-w-6xl gap-6 px-5 pb-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-3xl border border-white/70 bg-white/76 p-6 shadow-[0_20px_60px_rgba(15,34,56,0.08)] backdrop-blur-xl">
                    <p className="mb-4 flex items-center gap-2 text-sm font-bold text-[#0e7fa5]">
                        <Sparkles className="h-4 w-4" />
                        WaiWai AIの特長
                    </p>
                    <div className="grid gap-3">
                        {strengths.map((item) => (
                            <div key={item} className="rounded-2xl bg-[#f8fbfd] px-4 py-4 text-base font-bold text-[#0f2238]">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-white/70 bg-white/76 p-6 shadow-[0_20px_60px_rgba(15,34,56,0.08)] backdrop-blur-xl">
                    <p className="mb-5 text-sm font-bold text-[#0e7fa5]">導入の流れ</p>
                    <div className="grid gap-3">
                        {flow.map((item, index) => (
                            <div key={item} className="flex items-center gap-4 rounded-2xl bg-[#f8fbfd] px-4 py-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7fb] text-sm font-bold text-[#0e7fa5]">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-base font-bold text-[#0f2238]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative px-5 pb-20 sm:px-8">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 rounded-3xl bg-[#0b4f71] px-6 py-8 text-white shadow-[0_24px_70px_rgba(11,79,113,0.22)] sm:flex-row sm:px-8">
                    <div>
                        <p className="text-sm font-bold text-[#7bd3e8]">Next Step</p>
                        <h2 className="mt-2 text-2xl font-bold">まずは選ぶだけで、相談の輪郭を整えます。</h2>
                    </div>
                    <a href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#0b4f71] transition hover:-translate-y-0.5">
                        無料で相談してみる
                        <MessageCircle className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
