import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileDown, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: '資料ダウンロード',
    description:
        'WaiWai AIのAI導入・業務自動化の検討資料ダウンロードページ。まずは入力負担を抑えて、相談前の確認ポイントを整理できます。',
    alternates: {
        canonical: '/download',
    },
};

const items = [
    'AI導入で最初に確認すべき業務一覧',
    '業務自動化の費用対効果チェック',
    '社内導入を進めるためのステップ',
];

export default function DownloadPage() {
    return (
        <main className="bg-[#f8fbfd] pt-28 text-[#0f2238]">
            <section className="px-5 py-16 sm:px-8">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_420px]">
                    <div>
                        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-bold text-[#0e7fa5] backdrop-blur-xl">
                            <FileDown className="h-4 w-4" />
                            Download
                        </p>
                        <h1 className="font-serif text-4xl font-medium leading-tight sm:text-6xl">
                            相談前に、
                            <br />
                            AI活用の全体像を確認する。
                        </h1>
                        <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#425466]">
                            AIに詳しくない決裁者でも、社内で検討を始めやすいように、導入前の論点を一枚ずつ整理した資料です。
                        </p>
                        <div className="mt-8 grid gap-3">
                            {items.map((item) => (
                                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/76 px-5 py-4 shadow-[0_16px_44px_rgba(15,34,56,0.06)]">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0e7fa5]" />
                                    <span className="text-sm font-bold text-[#0f2238]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/70 bg-white/76 p-6 shadow-[0_24px_70px_rgba(15,34,56,0.1)] backdrop-blur-xl">
                        <p className="text-xl font-bold text-[#0f2238]">資料請求</p>
                        <p className="mt-3 text-sm font-medium leading-7 text-[#425466]">
                            現時点では資料請求フォームはお問い合わせ導線に集約しています。資料希望と書いて送るだけで大丈夫です。
                        </p>
                        <a href="/contact" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0e7fa5] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b4f71]">
                            資料を希望する
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <a href="/contact" className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#eef7fb] px-6 text-sm font-bold text-[#0e7fa5] transition hover:-translate-y-0.5 hover:bg-white">
                            先に相談する
                            <MessageCircle className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
