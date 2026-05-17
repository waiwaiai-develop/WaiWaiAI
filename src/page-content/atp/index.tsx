'use client';

import { motion } from 'framer-motion';
import {
    ArrowRight,
    BarChart3,
    Bot,
    CheckCircle2,
    ClipboardList,
    MessageCircle,
    Route,
    Settings,
    Sparkles,
    Waves,
} from 'lucide-react';

const methodSteps = [
    {
        title: '課題を聞く',
        body: 'ツール名からではなく、毎日発生している作業・止まっている判断・人に依存している確認から整理します。',
        icon: MessageCircle,
    },
    {
        title: 'AI化する順番を決める',
        body: '削減時間、実装難易度、現場の受け入れやすさを見て、小さく成果が出る順に並べます。',
        icon: Route,
    },
    {
        title: '小さく実装する',
        body: '問い合わせ返信、集計、通知、資料作成など、まず1つの業務を現場で使える形にします。',
        icon: Bot,
    },
    {
        title: '運用にのせる',
        body: '使われないAIにしないため、ルール、担当者、改善サイクルまで一緒に設計します。',
        icon: Settings,
    },
];

const issueMap = [
    {
        issue: '業務効率化',
        examples: ['レポート作成時間の削減', '問い合わせ対応の自動化', '定型業務の省力化'],
    },
    {
        issue: '人手不足',
        examples: ['一次対応の自動化', '確認作業の標準化', '担当者への通知設計'],
    },
    {
        issue: 'AI活用方法が不明',
        examples: ['業務棚卸し', '優先順位づけ', '小さな実証導入'],
    },
];

const principles = ['会話を強制しない', '長文入力を求めない', '2〜3クリックで次の行動へ進む', '押し付けずに選択肢を提示する'];

export default function ATPPage() {
    return (
        <div className="relative overflow-hidden bg-[#f8fbfd] pt-28 text-[#0f2238]">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(238,247,251,0.94),rgba(247,241,232,0.74),rgba(255,255,255,0.98))]" aria-hidden="true" />
            <div className="absolute right-[-12%] top-24 h-[520px] w-[54%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(123,211,232,0.22),transparent_68%)]" aria-hidden="true" />

            <section className="relative mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_390px] lg:items-end">
                <div>
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-bold text-[#0e7fa5] backdrop-blur-xl">
                        <Waves className="h-4 w-4" />
                        AI Method
                    </p>
                    <h1 className="font-serif text-4xl font-medium leading-tight sm:text-6xl">
                        AI導入を、
                        <br />
                        現場で使われる順番にする。
                    </h1>
                    <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#425466]">
                        WaiWai AIのAI活用メソッドは、最初から大きなシステムを作るのではなく、現場の小さな困りごとを起点に、成果が見える順でAIを導入していく進め方です。
                    </p>
                </div>

                <div className="rounded-3xl border border-white/70 bg-white/76 p-5 shadow-[0_24px_70px_rgba(15,34,56,0.08)] backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#eef7fb]">
                            <img src="/nalu/nalu-concierge.png" alt="" className="absolute top-[-6px] h-20 w-20 object-cover object-top" />
                        </span>
                        <div>
                            <p className="text-base font-bold text-[#0f2238]">Naluの進め方</p>
                            <p className="mt-1 text-sm font-medium leading-6 text-[#425466]">
                                入力より選択。会話より整理。必要な情報だけを、波のように少しずつ出します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-bold text-[#0e7fa5]">Process</p>
                        <h2 className="mt-2 text-3xl font-bold text-[#0f2238]">AI導入支援プロセス</h2>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {methodSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.article
                                key={step.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
                                className="rounded-3xl border border-white/70 bg-white/76 p-5 shadow-[0_20px_60px_rgba(15,34,56,0.08)] backdrop-blur-xl"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-[#7a8a99]">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef7fb] text-[#0e7fa5]">
                                        <Icon className="h-6 w-6" />
                                    </span>
                                </div>
                                <h3 className="mt-5 text-xl font-bold text-[#0f2238]">{step.title}</h3>
                                <p className="mt-3 text-sm font-medium leading-7 text-[#425466]">{step.body}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            <section className="relative mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl border border-white/70 bg-white/76 p-6 shadow-[0_20px_60px_rgba(15,34,56,0.08)] backdrop-blur-xl">
                    <p className="mb-3 flex items-center gap-2 text-sm font-bold text-[#0e7fa5]">
                        <Sparkles className="h-4 w-4" />
                        Nalu UIの基本思想
                    </p>
                    <h2 className="text-3xl font-bold leading-tight text-[#0f2238]">AIを怖く見せない。</h2>
                    <div className="mt-6 grid gap-3">
                        {principles.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f8fbfd] px-4 py-4 text-sm font-bold text-[#0f2238]">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0e7fa5]" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-white/70 bg-white/76 p-6 shadow-[0_20px_60px_rgba(15,34,56,0.08)] backdrop-blur-xl">
                    <p className="mb-3 flex items-center gap-2 text-sm font-bold text-[#0e7fa5]">
                        <ClipboardList className="h-4 w-4" />
                        課題別の整理例
                    </p>
                    <div className="grid gap-4">
                        {issueMap.map((item) => (
                            <div key={item.issue} className="rounded-2xl bg-[#f8fbfd] p-4">
                                <h3 className="text-base font-bold text-[#0f2238]">{item.issue}</h3>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {item.examples.map((example) => (
                                        <span key={example} className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#425466]">
                                            {example}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8">
                <div className="grid gap-4 rounded-3xl bg-[#0b4f71] p-6 text-white shadow-[0_24px_70px_rgba(11,79,113,0.22)] md:grid-cols-[1fr_auto] md:items-center md:p-8">
                    <div>
                        <p className="flex items-center gap-2 text-sm font-bold text-[#7bd3e8]">
                            <BarChart3 className="h-4 w-4" />
                            Next Step
                        </p>
                        <h2 className="mt-2 text-2xl font-bold">最初にAI化する業務を、30分で一緒に絞ります。</h2>
                    </div>
                    <a href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#0b4f71] transition hover:-translate-y-0.5">
                        無料で相談する
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
