'use client';

import { ArrowRight, CalendarDays, CheckCircle2, Sparkles } from 'lucide-react';

const outcomes = ['AI化する業務を1つ決める', '削減できる時間と金額を概算', '導入までの最短ステップを整理'];

export default function HomeBottomCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(120deg, #06132f 0%, #0b3cb8 52%, #08205d 100%)',
        }}
      />
      <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-[912px] px-5 py-10 sm:px-6 lg:px-0 lg:py-9">
        <div className="grid items-center gap-7 lg:grid-cols-[1fr_330px]">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              <Sparkles className="h-3.5 w-3.5" />
              Free AI Consultation
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              まずは30分で、
              <br className="hidden sm:block" />
              AI導入の優先順位を決める。
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              いま一番効果が出やすい業務を一緒に切り分け、削減見込みと進め方まで整理します。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {outcomes.map((outcome) => (
                <span key={outcome} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white ring-1 ring-white/10">
                  <CheckCircle2 className="h-4 w-4 text-blue-200" />
                  {outcome}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white p-5 shadow-[0_24px_70px_-34px_rgba(0,0,0,0.8)]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Next Step</p>
            <p className="mt-2 text-lg font-bold leading-snug text-slate-950">
              無料相談を予約して、AI化候補を整理する
            </p>
            <a
              href="/booking"
              className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-blue-700 px-6 text-sm font-bold text-white shadow-[0_18px_38px_-24px_rgba(0,45,150,0.95)] transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              <CalendarDays className="h-5 w-5" />
              30分の無料相談を予約する
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-center text-xs font-medium text-slate-500">
              オンライン対応・無理な営業なし
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
