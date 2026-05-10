'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';
import {
    ArrowRight,
    Bot,
    BrainCircuit,
    Code2,
    GraduationCap,
    Mail,
    Network,
} from 'lucide-react';

const companyRows = [
    { label: '会社名', value: 'WaiWai AI 株式会社' },
    { label: '代表者', value: '久保田 慧（Kei Kubota）' },
    { label: '所在地', value: '〒150-0043 東京都渋谷区道玄坂１丁目１０−８ 渋谷道玄坂東急ビル 2F-C' },
    { label: '設立', value: '2025年1月23日' },
    {
        label: '事業内容',
        value: 'AIシステム・プロダクト開発、AI導入コンサルティング、業務自動化支援、AI研修・リテラシー向上支援',
    },
];

const services = [
    {
        icon: BrainCircuit,
        title: 'AI導入コンサルティング',
        body: '業務を分解し、AIで改善できる領域を特定。戦略立案から導入計画までを支援します。',
    },
    {
        icon: Bot,
        title: '業務自動化（RPA/GAS/DX）',
        body: 'LINE・GAS・各種ツールを活用し、定型業務の自動化を実現します。',
    },
    {
        icon: Code2,
        title: 'AIシステム・プロダクト開発',
        body: '現場の課題に合わせたAIシステムやプロダクトを設計・開発します。',
    },
    {
        icon: GraduationCap,
        title: 'AI研修・リテラシー向上支援',
        body: '企業向けのAI研修やワークショップを通じて、組織全体のAI活用力を高めます。',
    },
];

export default function CompanyPage() {
    return (
        <div className="overflow-hidden bg-white text-slate-950">
            <section className="relative border-b border-slate-100 pt-28">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 via-white to-white" aria-hidden="true" />
                <div
                    className="absolute inset-0 opacity-65"
                    aria-hidden="true"
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(0deg, rgba(37,99,235,0.045) 1px, transparent 1px)',
                        backgroundSize: '58px 58px',
                    }}
                />
                <div className="pointer-events-none absolute right-0 top-20 hidden h-72 w-[64%] lg:block" aria-hidden="true">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_42%_58%,rgba(14,165,233,0.12),transparent_32%)]" />
                    <svg viewBox="0 0 820 300" className="absolute inset-0 h-full w-full text-blue-300/55">
                        <g fill="none" stroke="currentColor" strokeWidth="1.4">
                            <path d="M48 196 C148 118 236 214 334 130 S522 62 742 124" />
                            <path d="M98 82 C210 150 300 42 412 102 S612 224 790 74" />
                            <path d="M178 236 C284 174 380 240 482 164 S646 118 776 204" />
                            <path d="M254 74 L334 130 L412 102 L482 164 L612 224" />
                        </g>
                        <g fill="currentColor">
                            {[48, 98, 178, 254, 334, 412, 482, 612, 742, 776, 790].map((x, index) => (
                                <circle key={x} cx={x} cy={[196, 82, 236, 74, 130, 102, 164, 224, 124, 204, 74][index]} r="5" />
                            ))}
                        </g>
                    </svg>
                </div>

                <div className="relative mx-auto max-w-[1120px] px-5 pb-16 pt-16 sm:px-6 lg:px-0 lg:pb-20 lg:pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="max-w-xl"
                    >
                        <p className="mb-5 text-[11px] font-black uppercase tracking-[0.24em] text-blue-700">Company</p>
                        <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">会社概要</h1>
                        <div className="mt-6 h-px w-10 bg-blue-700" />
                        <p className="mt-7 text-lg font-bold leading-9 text-slate-800">
                            上場企業を含む複数社で、
                            <br />
                            AI顧問として支援しています。
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-14 sm:py-16">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <SectionTitle>会社情報</SectionTitle>
                    <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
                        {companyRows.map((row) => (
                            <div key={row.label} className="grid gap-2 py-5 text-sm md:grid-cols-[260px_1fr] md:gap-8 md:px-8">
                                <dt className="font-black text-slate-900">{row.label}</dt>
                                <dd className="font-medium leading-7 text-slate-700">{row.value}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto grid max-w-[1120px] gap-8 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-0">
                    <div>
                        <SectionTitle>社名の由来</SectionTitle>
                        <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                            豊かさが、
                            <br />
                            循環する会社へ。
                        </h2>
                    </div>
                    <div className="relative overflow-hidden border-l-0 border-slate-200 bg-white/70 px-0 py-0 lg:border-l lg:pl-10">
                        <img
                            src="/logo-symbol.png"
                            alt=""
                            className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 opacity-[0.05]"
                            aria-hidden="true"
                        />
                        <p className="relative text-lg font-black leading-9 text-slate-950">
                            社名の「WaiWai」は、ハワイの言葉で「豊かさ」を意味します。
                        </p>
                        <p className="relative mt-5 text-sm font-medium leading-8 text-slate-700">
                            ハワイで幸運と繁栄の象徴とされるホヌのように、クライアントの事業に長く確実な繁栄をもたらしたい。
                            テクノロジーの力で、人と組織が本来のポテンシャルを発揮できる未来をつくるという想いを込めています。
                        </p>
                        <div className="relative mt-6 flex flex-wrap gap-2">
                            {['豊かさ', '長く伴走', '現場で使えるAI'].map((item) => (
                                <span key={item} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black text-blue-700">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 sm:py-16">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <SectionTitle>事業内容</SectionTitle>
                    <div className="mt-8 grid gap-0 border-y border-slate-200 md:grid-cols-4 md:border-l">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.title} className="border-b border-slate-200 px-6 py-8 last:border-b-0 md:border-b-0 md:border-r">
                                    <Icon className="mx-auto h-11 w-11 text-blue-700" strokeWidth={1.7} />
                                    <h3 className="mt-7 text-center text-base font-black leading-7 text-slate-950">{service.title}</h3>
                                    <p className="mx-auto mt-4 max-w-[220px] text-center text-sm font-medium leading-7 text-slate-600">{service.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="pb-8 sm:pb-10">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <div className="relative overflow-hidden rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 px-6 py-8 shadow-[0_24px_90px_-70px_rgba(15,23,42,0.6)] sm:px-10 sm:py-12 lg:px-12">
                        <div className="absolute right-0 top-0 hidden h-full w-[34%] bg-[radial-gradient(circle_at_50%_42%,rgba(37,99,235,0.16),transparent_36%)] lg:block" aria-hidden="true" />
                        <div className="absolute bottom-0 right-8 hidden h-56 w-56 rounded-full bg-white/80 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.12)] lg:block" aria-hidden="true">
                            <Network className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-blue-700" strokeWidth={1.5} />
                        </div>
                        <div className="relative max-w-3xl">
                            <div className="mb-7 flex items-center gap-4 text-[11px] font-black tracking-[0.18em] text-blue-700">
                                <span>代表メッセージ</span>
                                <span className="h-px w-12 bg-blue-700" />
                            </div>
                            <h2 className="text-2xl font-black leading-relaxed tracking-tight text-slate-950 sm:text-3xl">
                                AIは「導入すること」ではなく、
                                <br />
                                「現場で使われて初めて価値になる」と考えています。
                            </h2>
                            <p className="mt-6 max-w-2xl text-sm font-medium leading-8 text-slate-700">
                                そのため、私たちは提案だけで終わらず、実装・運用まで伴走し、成果につながるAI活用を支援します。
                            </p>
                            <p className="mt-8 text-sm font-medium leading-7 text-slate-800">
                                代表取締役　<span className="font-black">久保田 慧</span>（Kei Kubota）
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-14 sm:pb-16">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <div className="grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-60px_rgba(15,23,42,0.7)] md:grid-cols-[64px_1fr_auto] md:items-center md:p-8">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black tracking-tight text-slate-950">ご相談・ご質問がございましたらお気軽にご連絡ください。</h2>
                            <p className="mt-2 text-sm font-medium leading-7 text-slate-600">AI活用に関するお悩みを無料でご相談いただけます。</p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-blue-700 px-6 text-sm font-black text-blue-700 transition hover:bg-blue-700 hover:text-white"
                        >
                            お問い合わせフォームへ
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <h2 className="text-xl font-black tracking-tight text-blue-700">
            {children}
        </h2>
    );
}
