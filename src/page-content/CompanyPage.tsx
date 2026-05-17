'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import {
    ArrowRight,
    Bot,
    BrainCircuit,
    Building2,
    CheckCircle2,
    Code2,
    GraduationCap,
    Mail,
    MessageSquareText,
    Rocket,
    Star,
    Terminal,
    Trophy,
} from 'lucide-react';

const companyRows = [
    { label: '会社名', value: 'WaiWai AI 株式会社' },
    { label: '代表者', value: '久保田 慧（Kei Kubota）' },
    { label: '所在地', value: '〒150-0043 東京都渋谷区道玄坂１丁目１０−８ 渋谷道玄坂東急ビル 2F-C' },
    { label: '設立', value: '2025年1月23日' },
    {
        label: '事業内容',
        value: 'AI顧問・コンサルティング、SaaS・Webシステム開発、業務自動化支援、AI研修・レクチャー、AI技術検証プラットフォーム運営（HonuX）',
    },
    {
        label: '体制',
        value: '代表1名 + AIエージェント群。Claude Code を主力エンジンとして、1人+AIで運営',
    },
];

const principles = [
    'エンジニアリングもAI活用も、代表自ら手を動かして一貫して担う',
    '自社業務でもAIを使い込んでいるから、現場で動くものが作れる',
    '大規模開発はパートナー企業と連携し、小さな自動化から大きなシステムまで対応',
];

const services = [
    {
        icon: BrainCircuit,
        title: 'AI顧問・導入設計',
        body: '何からAI化すべきか、経営課題から逆算して一緒に整理します。',
    },
    {
        icon: Bot,
        title: '業務自動化',
        body: 'LINE・Chatwork・Discord連携。定型業務をAIとAPIで仕組み化します。',
    },
    {
        icon: Code2,
        title: 'SaaS・システム開発',
        body: '必要なものを必要な分だけ、フルスクラッチで設計・開発します。',
    },
    {
        icon: GraduationCap,
        title: 'AI研修・レクチャー',
        body: 'AI活用相談の評価4.9。実務経験に基づくハンズオン型の研修。',
    },
    {
        icon: Terminal,
        title: 'Claude Code導入・Brain構築',
        body: 'AIエージェントの記憶基盤を設計し、1人+AIで回る仕組みを構築。',
    },
    {
        icon: Rocket,
        title: 'HonuX（AI技術検証）',
        body: '最新AIを試せるプラットフォーム。御社に合ったAI活用を自動提案。',
    },
];

const records = [
    {
        icon: Building2,
        stat: '7,000人規模',
        title: '大企業でのAI導入PM',
        body: '従業員7,000人規模の企業で社内ChatGPTの導入を主導。普及率60%超を達成。外部登壇実績あり。',
    },
    {
        icon: Trophy,
        stat: '上場企業の実績あり',
        title: '上場企業のAI顧問',
        body: '東証上場企業のAI活用推進技術顧問として、経営課題から逆算したAI導入の優先順位と実行計画を整理。',
    },
    {
        icon: Star,
        stat: '評価 4.9 / 5.0',
        title: 'AI研修・活用相談',
        body: '「実務でAIを活用されている講師ならではのリアルな事例紹介が参考になった」と高評価。レビュー18件。',
    },
    {
        icon: Rocket,
        stat: '自社で検証済み',
        title: '自社SaaS・プロダクト開発',
        body: '業界特化型AI SaaSをフルスクラッチで開発しOEM展開。データ基盤の設計・構築実績も多数。',
    },
];

const reviews = [
    {
        text: '実務でAIを活用されている講師ならではの、リアルな事例紹介も大変参考になり、すぐに自分の業務に応用できそうです。',
        from: 'AI研修受講者（上場企業社員）',
    },
    {
        text: '画面共有しながら、どのように実装していくのかを見せてもらい、大変中身の濃い時間でした。',
        from: 'AI活用相談ご利用者',
    },
    {
        text: 'とても素晴らしい方でした。人格も、能力も、お勧めします。',
        from: 'AI開発依頼のクライアント',
    },
];

const techCategories = [
    {
        label: 'AI・LLM',
        desc: 'チャットボット、RAG、AIエージェント、自動提案エンジンを構築',
        items: ['OpenAI API', 'Claude API', 'Dify', 'RAG', 'プロンプト設計', 'AIエージェント'],
    },
    {
        label: 'AI駆動開発',
        desc: 'AI自体を開発ツールとして使い、開発スピードを加速',
        items: ['Claude Code', 'MCP', 'Obsidian Brain', 'n8n'],
    },
    {
        label: 'フロントエンド',
        desc: 'モダンで高速なWebアプリ・管理画面・LPを構築',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
        label: 'バックエンド・DB',
        desc: 'API設計、データ基盤、認証・決済の仕組みを構築',
        items: ['Node.js', 'Python', 'Supabase', 'Firebase', 'PostgreSQL', 'Stripe'],
    },
    {
        label: 'クラウド・インフラ',
        desc: 'スケーラブルなクラウド環境の設計・構築・運用',
        items: ['Google Cloud', 'AWS', 'Azure', 'Vercel', 'Docker', 'GitHub Actions'],
    },
    {
        label: 'ツール連携・自動化',
        desc: 'LINEやChatworkなど既存ツールとAIをつないで業務を自動化',
        items: ['LINE', 'Chatwork', 'Discord', 'Slack', 'GAS', 'Shopify'],
    },
];

export default function CompanyPage() {
    return (
        <div className="overflow-hidden bg-[#f8fbfd] text-[#0f2238]">
            <section className="relative overflow-hidden border-b border-white/70 bg-[#f8fbfd] pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-20">
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(238,247,251,0.94),rgba(247,241,232,0.74),rgba(255,255,255,0.98))]" aria-hidden="true" />
                <div className="absolute right-[-10%] top-20 h-[420px] w-[54%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(123,211,232,0.18),transparent_68%)]" aria-hidden="true" />
                <div className="pointer-events-none absolute right-[-6%] top-8 hidden h-[420px] w-[58%] lg:block" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbfd] via-white/74 to-transparent" />
                    <img
                        src="/brand/logo-symbol.png"
                        alt=""
                        className="absolute right-16 top-8 h-80 w-80 object-contain opacity-[0.07]"
                    />
                </div>

                <div className="relative z-10 mx-auto grid max-w-[1120px] gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:items-end lg:px-0">
                    <div>
                        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-bold text-[#0e7fa5] backdrop-blur-xl">Company</p>
                        <h1 className="font-serif text-4xl font-medium leading-tight text-[#0f2238] sm:text-6xl">
                            AIを味方に、
                            <br />
                            未来を豊かに。
                        </h1>
                        <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[#425466]">
                            WaiWai AIは、AIを冷たいツールではなく、企業に寄り添う味方として設計する会社です。現場で使われる仕組みになるまで、実装と運用に伴走します。
                        </p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#0e7fa5] px-7 text-sm font-bold text-white shadow-[0_18px_38px_-20px_rgba(14,127,165,0.9)] transition hover:-translate-y-0.5 hover:bg-[#0b4f71]"
                            >
                                <Mail className="h-5 w-5" />
                                相談・問い合わせへ
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <a href="#company-info" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/70 px-5 text-sm font-bold text-[#0e7fa5] ring-1 ring-white/70 transition hover:-translate-y-0.5 hover:bg-white">
                                会社情報を見る
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/70 bg-white/76 p-6 shadow-[0_24px_70px_rgba(15,34,56,0.08)] backdrop-blur-xl">
                        <p className="text-sm font-bold text-[#0e7fa5]">Origin</p>
                        <h2 className="mt-4 text-2xl font-bold leading-tight text-[#0f2238] sm:text-3xl">
                            豊かさが、
                            <br />
                            循環する会社へ。
                        </h2>
                        <p className="mt-5 text-sm font-medium leading-8 text-[#425466]">
                            「WaiWai」は、ハワイの言葉で豊かさを連想させる響き。人が集い、助け合い、笑顔になる状態を、AIの力で増やしていきます。
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-slate-100 bg-slate-50 py-10 sm:py-14">
                <div className="mx-auto grid max-w-[1120px] gap-8 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-0">
                    <SectionHeading label="Policy" title="導入して終わりにしない。" />
                    <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white/70">
                        {principles.map((principle, index) => (
                            <div key={principle} className="grid gap-3 py-5 sm:grid-cols-[72px_1fr] sm:items-center sm:px-6">
                                <span className="text-sm font-black tracking-[0.18em] text-blue-700">0{index + 1}</span>
                                <p className="text-base font-black leading-8 text-slate-950">{principle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <SectionHeading label="What we do" title="相談から実装まで、代表が直接やる。" body="AI顧問、業務自動化、SaaS開発、AI研修、Claude Code導入支援、HonuX。" />
                    <div className="mt-8 grid gap-0 border-y border-slate-200 md:grid-cols-3 md:border-l">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.title} className="grid grid-cols-[44px_1fr] gap-4 border-b border-slate-200 py-5 last:border-b-0 sm:px-5 sm:py-7 md:block md:border-b-0 md:border-r">
                                    <Icon className="h-10 w-10 text-blue-700 md:h-11 md:w-11" strokeWidth={1.7} />
                                    <h3 className="text-base font-black leading-7 text-slate-950 md:mt-7">{service.title}</h3>
                                    <p className="mt-2 text-sm font-medium leading-7 text-slate-600 md:mt-4">{service.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Track Record */}
            <section className="border-y border-slate-100 bg-slate-50 py-12 sm:py-16">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <SectionHeading label="Track Record" title="自分で使ってきたから、現場で動くものを作れる。" body="営業出身 → エンジニア → 大企業AI導入PM → 起業。「AI × 実装 × ビジネス設計を1人で完結」できることが最大の強みです。" />
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {records.map((record) => {
                            const Icon = record.icon;
                            return (
                                <div key={record.title} className="rounded-lg border border-blue-100 bg-white p-5 shadow-[0_24px_72px_-56px_rgba(15,23,42,0.45)] sm:p-6">
                                    <div className="mb-4 flex items-center justify-between sm:mb-5">
                                        <Icon className="h-7 w-7 text-blue-700 sm:h-8 sm:w-8" />
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{record.stat}</span>
                                    </div>
                                    <h3 className="text-lg font-black leading-7 text-slate-950">{record.title}</h3>
                                    <p className="mt-2 text-sm font-medium leading-7 text-slate-600 sm:mt-3">{record.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-12 sm:py-16">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <SectionHeading label="Voice" title="ご利用いただいた方の声" body="AI活用相談サービス（総合評価 4.9 / 5.0）に寄せられたレビューより。" />
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {reviews.map((review) => (
                            <div key={review.from} className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
                                <div className="mb-4 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm font-medium leading-7 text-slate-700">&ldquo;{review.text}&rdquo;</p>
                                <p className="mt-4 text-xs font-black text-slate-500">{review.from}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="border-y border-slate-100 bg-slate-50 py-12 sm:py-16">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <SectionHeading label="Technology" title="使える技術の幅が、提案の幅になる。" body="AI・LLMからフロントエンド、バックエンド、インフラ、ツール連携まで。必要な技術を組み合わせて、最適な仕組みを作ります。" />
                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {techCategories.map((category) => (
                            <div key={category.label} className="rounded-lg border border-slate-200 bg-white p-5">
                                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">{category.label}</p>
                                <p className="mb-4 text-sm font-medium leading-6 text-slate-600">{category.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item) => (
                                        <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="company-info" className="border-y border-slate-100 bg-slate-50 py-12 sm:py-16">
                <div className="mx-auto grid max-w-[1120px] gap-8 px-5 sm:px-6 lg:grid-cols-[0.48fr_1fr] lg:px-0">
                    <SectionHeading label="Profile" title="会社情報" />
                    <dl className="divide-y divide-slate-200 border-y border-slate-200 bg-white/70">
                        {companyRows.map((row) => (
                            <div key={row.label} className="grid gap-2 py-4 text-sm sm:grid-cols-[180px_1fr] sm:gap-8 sm:px-6 sm:py-5">
                                <dt className="font-black text-slate-950">{row.label}</dt>
                                <dd className="font-medium leading-7 text-slate-700">{row.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <div className="relative overflow-hidden rounded-lg bg-slate-950 px-5 py-8 text-white shadow-[0_30px_100px_-70px_rgba(15,23,42,0.9)] sm:px-10 sm:py-12 lg:px-12">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,99,235,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(37,99,235,0.12)_1px,transparent_1px)] bg-[size:58px_58px] opacity-45" aria-hidden="true" />
                        <img src="/brand/logo-symbol.png" alt="" className="pointer-events-none absolute -right-8 -top-10 h-64 w-64 object-contain opacity-[0.08]" aria-hidden="true" />
                        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-end">
                            <div>
                                <p className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-blue-200">Message</p>
                                <h2 className="text-2xl font-black leading-relaxed tracking-tight sm:text-3xl">
                                    自分で作って、自分で使う。
                                    <br />
                                    だから現場で動くものが作れる。
                                </h2>
                                <p className="mt-5 max-w-2xl text-sm font-medium leading-8 text-blue-100/85">
                                    自社の業務にもAIを組み込んで日々使っています。Claude Code + Obsidian Brain + AIエージェント群で、1人+AIの会社を動かしている実践者です。提案だけでは終わらない。設計・実装・改善まで、直接手を動かして伴走します。
                                </p>
                                <p className="mt-8 text-sm font-medium leading-7 text-blue-100">
                                    代表取締役　<span className="font-black text-white">久保田 慧</span>（Kei Kubota）
                                </p>
                                <p className="mt-1 text-xs font-medium text-blue-100/60">
                                    東京理科大学 経営学部卒 / CSM（認定スクラムマスター）/ AWS認定クラウドプラクティショナー
                                </p>
                            </div>
                            <div className="space-y-3">
                                {['30分の無料相談', '通常問い合わせ', '協業・取材相談'].map((item) => (
                                    <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-white">
                                        <CheckCircle2 className="h-5 w-5 text-blue-200" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-14 sm:pb-16">
                <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                    <div className="grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-60px_rgba(15,23,42,0.7)] md:grid-cols-[1fr_auto] md:items-center md:p-8">
                        <div>
                            <h2 className="text-xl font-black tracking-tight text-slate-950">AI活用の相談、会社へのお問い合わせはこちらから。</h2>
                            <p className="mt-2 text-sm font-medium leading-7 text-slate-600">無料相談と通常問い合わせを同じページで選べます。</p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-blue-700 px-7 text-sm font-black text-white transition hover:bg-blue-800"
                        >
                            相談・問い合わせへ
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function SectionHeading({ label, title, body }: { label: string; title: ReactNode; body?: string }) {
    return (
        <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-blue-700">{label}</p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
            {body && <p className="mt-4 text-sm font-medium leading-7 text-slate-600">{body}</p>}
        </div>
    );
}
