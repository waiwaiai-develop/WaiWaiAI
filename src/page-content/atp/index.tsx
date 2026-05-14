'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import {
    ArrowRight,
    Building2,
    CalendarDays,
    CheckCircle2,
    Rocket,
    ShieldCheck,
    Trophy,
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const problems = [
    {
        number: '01',
        title: '提案書で止まり、業務に入らない',
    },
    {
        number: '02',
        title: '削減時間が見えず、継続判断できない',
    },
    {
        number: '03',
        title: '担当者任せで、社内に定着しない',
    },
];

const layers = [
    {
        title: '業務診断',
    },
    {
        title: '小さく実装',
    },
    {
        title: '運用改善',
    },
];

const useCases = [
    {
        title: '問い合わせ・予約対応',
        before: 'LINE・メール確認と日程調整に毎日追われる',
        after: '一次返信、候補日整理、担当者通知まで自動化',
    },
    {
        title: '日報・売上データ集計',
        before: '転記と集計が属人化し、月次確認が遅れる',
        after: '入力整形、集計、週次レポート作成まで自動化',
    },
    {
        title: '採用・営業の一次対応',
        before: '応募者・見込み客への確認や資料送付が遅れる',
        after: '条件確認、資料作成、次アクション通知まで自動化',
    },
];

const records = [
    {
        icon: Building2,
        title: '大企業でのAI推進経験',
        stat: '7,000人規模',
        body: '従業員7,000人規模の企業で、全社横断のAI導入プロジェクトを主導。',
    },
    {
        icon: Trophy,
        title: '経営層へのAI顧問',
        stat: '上場企業の実績あり',
        body: '経営課題から逆算して、AI導入の優先順位と実行計画を整理。',
    },
    {
        icon: Rocket,
        title: '自社業務での実装運用',
        stat: '自分で使って検証',
        body: '自社の問い合わせ対応、情報整理、開発ワークフローにAIを組み込み、日々改善。',
    },
];

const plans = [
    {
        name: 'ENTRY',
        price: '10',
        body: '最初の1業務を選び、実装前の設計まで固めるプラン',
        features: ['AI化できる業務の棚卸し', '削減見込みと優先順位の整理', '月1回の相談・改善提案'],
    },
    {
        name: 'STANDARD',
        price: '25',
        body: '問い合わせ・集計などを実際に1〜2本作る標準プラン',
        features: ['月1〜2件の自動化実装', '月2回の定例MTG', '削減時間と改善状況のレポート', 'チャットでの随時相談'],
        recommended: true,
    },
    {
        name: 'TRANSFORM',
        price: '50',
        body: '複数業務をまとめて改善し、社内展開まで進めるプラン',
        features: ['週1回の推進MTG', '複数業務の自動化・改善運用', '経営向けの進捗レポート', '四半期ロードマップ作成'],
    },
];

function SectionHeading({
    label,
    title,
    body,
    align = 'left',
    tone = 'light',
}: {
    label: string;
    title: ReactNode;
    body?: string;
    align?: 'left' | 'center';
    tone?: 'light' | 'dark';
}) {
    return (
        <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-xl'}>
            <p className={`mb-4 text-[11px] font-black uppercase tracking-[0.24em] ${tone === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>
                {label}
            </p>
            <h2 className={`text-3xl font-black leading-tight tracking-tight sm:text-4xl ${tone === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                {title}
            </h2>
            {body && (
                <p className={`mt-4 text-sm font-medium leading-7 ${tone === 'dark' ? 'text-blue-100/80' : 'text-slate-600'}`}>
                    {body}
                </p>
            )}
        </div>
    );
}

function HeroAmbientVisual() {
    return (
        <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block"
            aria-hidden="true"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/72 to-transparent" />
            <motion.img
                src="/atp-hero-ai-chip.png"
                alt=""
                className="absolute right-[-6%] top-10 w-[760px] max-w-none opacity-48 mix-blend-multiply"
                animate={{ y: [0, -10, 0], scale: [1, 1.015, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 66% 58% at 58% 42%, black 38%, transparent 78%)',
                    maskImage: 'radial-gradient(ellipse 66% 58% at 58% 42%, black 38%, transparent 78%)',
                }}
            />
            <motion.div
                className="absolute right-[8%] top-24 h-64 w-[520px] bg-[linear-gradient(115deg,transparent,rgba(37,99,235,0.14),transparent)]"
                animate={{ x: [-80, 90, -80] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
}

export default function ATPPage() {
    return (
        <div className="relative overflow-hidden bg-white text-slate-950">
            <section className="relative overflow-hidden border-b border-slate-100 bg-white pb-9 pt-24 sm:pb-12 sm:pt-28 lg:pb-16">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,99,235,0.045)_1px,transparent_1px),linear-gradient(0deg,rgba(37,99,235,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" aria-hidden="true" />
                <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-blue-50 to-transparent" aria-hidden="true" />
                <HeroAmbientVisual />

                <div className="relative z-10 mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <div>
                        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-blue-700 sm:mb-5 sm:text-[11px]">AI Implementation Partner</p>
                        <h1 className="text-[40px] font-black leading-[1.06] tracking-tight text-slate-950 sm:text-6xl lg:text-[56px]">
                            <span className="block lg:whitespace-nowrap">人手が足りない</span>
                            <span className="block lg:whitespace-nowrap">
                                業務を、<span className="text-blue-700">AI</span>で
                            </span>
                            <span className="block lg:hidden">
                                回る仕組みに
                                <br />
                                変える。
                            </span>
                            <span className="hidden whitespace-nowrap lg:block">回る仕組みに変える。</span>
                        </h1>
                        <p className="mt-5 max-w-md text-sm font-bold leading-7 text-slate-800 sm:mt-6 sm:text-base sm:leading-8">
                            問い合わせ、集計、資料作成から小さく自動化。代表自ら設計・実装まで手を動かし、現場で使えるところまで一緒に作ります。
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
                            <a
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-blue-700 px-7 text-sm font-black text-white shadow-[0_18px_38px_-20px_rgba(37,99,235,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-800"
                            >
                                <CalendarDays className="h-5 w-5" />
                                無料で相談する
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a href="#pricing" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-2 text-sm font-black text-slate-700 transition hover:text-blue-700">
                                料金を見る
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-slate-700 sm:mt-8 sm:grid sm:grid-cols-3 sm:gap-3 lg:max-w-xl">
                            {['代表が直接対応', '実装まで伴走', '補助金・助成金相談可'].map((item) => (
                                <span key={item} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
                                    <CheckCircle2 className="h-4 w-4 text-blue-700" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-10 sm:py-12">
                <div className="mx-auto grid max-w-[1120px] gap-8 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.62fr] lg:items-start lg:px-0">
                    <SectionHeading
                        label="Problem"
                        title={
                            <>
                                AI導入が止まる理由は、
                                <br />
                                だいたい現場にある。
                            </>
                        }
                    />
                    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                        {problems.map((problem) => (
                            <div
                                key={problem.number}
                                className="grid gap-3 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[72px_1fr] md:items-center"
                            >
                                <div className="flex items-center gap-3 text-blue-700">
                                    <span className="text-xl font-black tracking-tight">{problem.number}</span>
                                </div>
                                <h3 className="text-lg font-black leading-7 text-slate-950">{problem.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-slate-200 bg-white py-12 sm:py-14">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <SectionHeading
                            label="What We Do"
                            title={
                                <>
                                    最初に減らす業務を
                                    <br />
                                    30分で絞る。
                                </>
                            }
                            body="ツール名ではなく、毎日発生している作業から整理します。効果が見えやすい業務から小さく作ります。"
                        />
                    </div>

                    <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white sm:mt-8">
                        <div className="hidden grid-cols-[0.72fr_1fr_1fr] bg-slate-50 px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400 md:grid">
                            <span>業務</span>
                            <span>今</span>
                            <span>AI化後</span>
                        </div>
                        {useCases.map((useCase) => (
                            <div key={useCase.title} className="grid gap-2 border-b border-slate-200 p-4 last:border-b-0 sm:gap-3 sm:p-5 md:grid-cols-[0.72fr_1fr_1fr] md:items-center">
                                <h3 className="text-base font-black leading-7 text-slate-950">{useCase.title}</h3>
                                <div>
                                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 md:hidden">今</p>
                                    <p className="text-sm font-medium leading-7 text-slate-600">{useCase.before}</p>
                                </div>
                                <div className="rounded-lg bg-blue-50 px-3 py-2.5 sm:px-4 sm:py-3">
                                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.16em] text-blue-700 md:hidden">AI化後</p>
                                    <p className="text-sm font-bold leading-7 text-slate-900">{useCase.after}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 rounded-lg border border-blue-100 bg-blue-50 px-5 py-4 text-sm font-black text-slate-900 md:flex-row md:items-center">
                        <span className="shrink-0 text-blue-700">進め方</span>
                        <div className="flex flex-wrap items-center gap-2">
                            {layers.map((layer, index) => (
                                <span key={layer.title} className="inline-flex items-center gap-2">
                                    {layer.title}
                                    {index < layers.length - 1 && <ArrowRight className="h-4 w-4 text-blue-700" />}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-white py-12 sm:py-16">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50/70 to-transparent" aria-hidden="true" />
                <div className="relative mx-auto grid max-w-[1120px] gap-10 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.52fr] lg:items-stretch lg:px-0">
                    <SectionHeading
                        label="Track Record"
                        title={
                            <>
                                自分で使ってきたから、
                                <br />
                                現場で動くものを作れる。
                            </>
                        }
                        body="大企業でのAI推進から自社業務での実装運用まで、手を動かしてきた経験がベースにあります。"
                    />
                    <div className="grid gap-3 md:grid-cols-3 md:gap-4">
                        {records.map((record) => {
                            const Icon = record.icon;
                            return (
                                <div key={record.title} className="rounded-lg border border-blue-100 bg-white p-4 shadow-[0_24px_72px_-56px_rgba(15,23,42,0.45)] sm:p-6">
                                    <div className="mb-4 flex items-center justify-between sm:mb-6">
                                        <Icon className="h-7 w-7 text-blue-700 sm:h-8 sm:w-8" />
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{record.stat}</span>
                                    </div>
                                    <h3 className="text-lg font-black leading-7 text-slate-950 sm:text-xl">{record.title}</h3>
                                    <p className="mt-2 text-sm font-medium leading-7 text-slate-600 sm:mt-4">{record.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="pricing" className="bg-slate-50 py-12 sm:py-16">
                <div className="mx-auto grid max-w-[1120px] gap-9 px-5 sm:px-6 lg:grid-cols-[0.68fr_1.62fr] lg:px-0">
                    <SectionHeading
                        label="Pricing"
                        title="作る業務と伴走範囲で選ぶ。"
                        body="最初に対象業務と削減見込みを整理し、作る量に合わせてプランを選びます。まずは1業務から始められます。"
                    />
                    <div>
                        <div className="grid gap-5 md:grid-cols-3">
                            {plans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`relative rounded-lg border bg-white p-6 shadow-[0_20px_64px_-54px_rgba(15,23,42,0.5)] ${
                                        plan.recommended ? 'border-blue-700 ring-1 ring-blue-700' : 'border-slate-200'
                                    }`}
                                >
                                    {plan.recommended && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-700 px-5 py-1 text-xs font-black text-white">
                                            おすすめ
                                        </span>
                                    )}
                                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-700">{plan.name}</p>
                                    <div className="mt-4 flex items-end gap-1">
                                        <span className="text-5xl font-black tracking-tight text-slate-950">{plan.price}</span>
                                        <span className="pb-1 text-sm font-black text-slate-800">万円/月〜</span>
                                    </div>
                                    <p className="mt-4 min-h-16 text-sm font-black leading-6 text-slate-700">{plan.body}</p>
                                    <div className="mt-5 border-t border-slate-100 pt-5">
                                        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">含まれること</p>
                                        <ul className="space-y-2">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex gap-2 text-xs font-bold leading-5 text-slate-700">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <a
                                        href="/contact"
                                        className={`mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-black transition ${
                                            plan.recommended
                                                ? 'bg-blue-700 text-white hover:bg-blue-800'
                                                : 'border border-slate-200 text-slate-800 hover:border-blue-200 hover:text-blue-700'
                                        }`}
                                    >
                                        このプランで相談する
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white px-5 py-16 sm:px-6 lg:px-0">
                <div className="mx-auto grid max-w-[1120px] gap-7 rounded-lg border border-blue-100 bg-gradient-to-r from-slate-950 to-blue-900 p-7 text-white shadow-[0_28px_82px_-60px_rgba(15,23,42,0.65)] md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black text-blue-100">
                            <ShieldCheck className="h-4 w-4" />
                            Free AI Consultation
                        </div>
                        <h2 className="text-3xl font-black leading-tight tracking-tight">
                            まずは30分で、減らせる業務を特定する。
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-blue-100/85">
                            どの業務からAI化すべきか、どれくらい削減できそうか、最初に作るべき仕組みまで整理します。問い合わせも同じページから選べます。
                        </p>
                    </div>
                    <a
                        href="/contact"
                        className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-7 text-sm font-black text-blue-800 transition hover:-translate-y-0.5 hover:bg-blue-50"
                    >
                        <CalendarDays className="h-5 w-5" />
                        相談・問い合わせへ
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
