'use client';

import { CalendarDays, ArrowRight } from 'lucide-react';

export default function HomeBottomCTA() {
  return (
    <section className="relative overflow-hidden bg-blue-800">
      <div
        className="absolute inset-0 opacity-35"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 85% 35%, rgba(147,197,253,0.8), transparent 24%), linear-gradient(120deg, #0044d8 0%, #0034a8 55%, #001f68 100%)',
        }}
      />
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[912px] items-center gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[150px_1fr_auto] lg:px-0 lg:py-8">
        <img
          src="/design-bottom-honu.png"
          alt=""
          className="mx-auto hidden w-36 object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)] lg:block"
        />
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            まずは1つの業務から。
          </h2>
          <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">
            30分の無料相談で、どこをAI化すべきか、どれくらい削減できるかを整理します。
          </p>
        </div>
        <div className="text-center">
          <a
            href="/booking"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-white px-8 text-sm font-bold text-blue-800 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)] transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            <CalendarDays className="h-5 w-5" />
            無料で相談する
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-blue-100">無理な営業は一切いたしませんのでご安心ください。</p>
        </div>
      </div>
    </section>
  );
}
