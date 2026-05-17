import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Clock, TrendingUp } from 'lucide-react';
import { casesData } from '@/data/casesData';

export const metadata: Metadata = {
    title: '導入事例',
    description:
        'WaiWai AIのAI導入・業務自動化・社内ナレッジ活用の導入事例。課題、導入内容、成果を業界別に確認できます。',
    alternates: {
        canonical: '/cases',
    },
};

const categories = ['採用DX', '業務自動化', 'レポート作成', '問い合わせ対応', 'AI研修'];

const iconMap = {
    Clock,
    TrendingUp,
    CheckCircle2,
};

export default function CasesPage() {
    return (
        <main className="bg-[#f8fbfd] pt-28 text-[#0f2238]">
            <section className="relative overflow-hidden px-5 py-16 sm:px-8">
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(238,247,251,0.92),rgba(247,241,232,0.8),rgba(255,255,255,0.96))]" aria-hidden="true" />
                <div className="relative mx-auto max-w-6xl">
                    <p className="mb-4 text-sm font-bold text-[#0e7fa5]">Case Studies</p>
                    <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-6xl">
                        近い課題から、
                        <br />
                        AI活用の入口を見つける。
                    </h1>
                    <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#425466]">
                        業界・課題・成果をひと目で確認できる導入事例です。Naluが案内するように、必要な情報だけを静かに整理しています。
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <span key={category} className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-bold text-[#0e7fa5] backdrop-blur-xl">
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 pb-20 sm:px-8">
                <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
                    {casesData.map((item) => (
                        <article key={item.id} className="rounded-3xl border border-white/70 bg-white/76 p-6 shadow-[0_20px_60px_rgba(15,34,56,0.08)] backdrop-blur-xl">
                            <div className="mb-5 flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-[#eef7fb] px-3 py-1 text-xs font-bold text-[#0e7fa5]">{item.category}</span>
                                <span className="text-sm font-bold text-[#7a8a99]">{item.client}</span>
                            </div>
                            <h2 className="text-2xl font-bold leading-snug text-[#0f2238]">{item.title}</h2>
                            <div className="mt-6 grid gap-4">
                                <InfoBlock label="課題" text={item.problem} />
                                <InfoBlock label="導入内容" text={item.solution} />
                            </div>
                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {item.results.map((result) => {
                                    const Icon = iconMap[result.iconName];
                                    return (
                                        <div key={result.label} className="rounded-2xl bg-[#f8fbfd] p-4">
                                            <div className="flex items-center gap-2 text-sm font-bold text-[#425466]">
                                                <Icon className="h-4 w-4 text-[#0e7fa5]" />
                                                {result.label}
                                            </div>
                                            <p className="mt-2 text-2xl font-bold text-[#0f2238]">{result.value}</p>
                                            <p className="mt-1 text-xs font-medium text-[#7a8a99]">{result.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0e7fa5] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b4f71]">
                                同じような相談をする
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

function InfoBlock({ label, text }: { label: string; text: string }) {
    return (
        <div>
            <p className="text-xs font-bold text-[#0e7fa5]">{label}</p>
            <p className="mt-2 text-sm font-medium leading-7 text-[#425466]">{text}</p>
        </div>
    );
}
