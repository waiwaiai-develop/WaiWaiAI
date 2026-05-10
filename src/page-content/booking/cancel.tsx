'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, Loader2, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

interface Booking {
    name: string;
    company?: string;
    date: string;
    time: string;
    status: string;
}

export default function BookingCancelContent() {
    const params = useSearchParams();
    const token = params.get('token') ?? '';

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [booking, setBooking] = useState<Booking | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!token) {
            setError('トークンが指定されていません。');
            setLoading(false);
            return;
        }
        (async () => {
            try {
                const res = await fetch('/api/booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'getBooking', token }),
                });
                const data = await res.json();
                if (!data.success) throw new Error(data.error ?? '予約情報の取得に失敗しました');
                setBooking(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : '予約情報の取得に失敗しました');
            } finally {
                setLoading(false);
            }
        })();
    }, [token]);

    const handleCancel = async () => {
        setSubmitting(true);
        setError('');
        try {
            const res = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'cancel', token }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.error ?? 'キャンセルに失敗しました');
            setDone(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'キャンセルに失敗しました');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen py-24 lg:py-32">
            <div className="container mx-auto px-4 max-w-2xl">
                <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    予約ページへ戻る
                </Link>

                <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
                    予約のキャンセル
                </h1>

                {loading && (
                    <div className="glass-panel p-8 text-center">
                        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
                        <p className="text-slate-600 mt-4">予約情報を取得しています…</p>
                    </div>
                )}

                {!loading && error && !booking && (
                    <div className="glass-panel p-8 text-center">
                        <AlertCircle className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                        <p className="text-slate-700">{error}</p>
                    </div>
                )}

                {!loading && booking && !done && (
                    <div className="glass-panel p-8">
                        {booking.status === 'cancelled' ? (
                            <div className="text-center">
                                <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                                <p className="text-slate-700">この予約は既にキャンセル済みです。</p>
                            </div>
                        ) : (
                            <>
                                <p className="text-slate-700 mb-6">
                                    以下の予約をキャンセルします。よろしいですか？
                                </p>
                                <div className="flex flex-col gap-3 p-6 rounded-2xl bg-blue-50/80 border border-blue-100 mb-6">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-semibold text-slate-900">
                                            {booking.date}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm text-slate-700">{booking.time}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">
                                        {booking.company ? `${booking.company} ` : ''}
                                        {booking.name} 様
                                    </p>
                                </div>

                                {error && (
                                    <p className="text-sm text-rose-600 mb-4">{error}</p>
                                )}

                                <div className="flex gap-3 justify-end">
                                    <Link
                                        href="/booking"
                                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
                                    >
                                        戻る
                                    </Link>
                                    <button
                                        onClick={handleCancel}
                                        disabled={submitting}
                                        className="px-5 py-2.5 rounded-xl bg-rose-600 text-white text-sm font-medium hover:bg-rose-700 transition disabled:opacity-60 inline-flex items-center gap-2"
                                    >
                                        {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                                        キャンセルする
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {done && (
                    <div className="glass-panel p-8 text-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                        <h2 className="font-display text-xl font-bold text-slate-900 mb-2">
                            予約をキャンセルしました
                        </h2>
                        <p className="text-slate-600 text-sm">
                            またのご利用をお待ちしております。
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
