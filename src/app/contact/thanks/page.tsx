import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Home } from 'lucide-react';

export const metadata: Metadata = {
    title: 'お問い合わせ完了',
    description: 'WaiWai AIへのお問い合わせを受け付けました。',
    alternates: {
        canonical: '/contact/thanks',
    },
};

export default function ContactThanksPage() {
    return (
        <main className="bg-[#f8fbfd] px-5 pt-32 text-[#0f2238] sm:px-8">
            <section className="mx-auto max-w-3xl rounded-3xl border border-white/70 bg-white/78 p-8 text-center shadow-[0_24px_70px_rgba(15,34,56,0.1)] backdrop-blur-xl sm:p-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eef7fb] text-[#0e7fa5]">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h1 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl">お問い合わせを受け付けました</h1>
                <p className="mt-5 text-base font-medium leading-8 text-[#425466]">
                    内容を確認のうえ、担当よりご連絡します。Naluと一緒に、最初の一歩を静かに整理していきましょう。
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a href="/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0e7fa5] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b4f71]">
                        トップへ戻る
                        <Home className="h-4 w-4" />
                    </a>
                    <a href="/cases" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#eef7fb] px-6 text-sm font-bold text-[#0e7fa5] transition hover:-translate-y-0.5 hover:bg-white">
                        導入事例を見る
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </main>
    );
}
