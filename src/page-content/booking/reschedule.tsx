'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    Loader2,
    AlertCircle,
    CheckCircle2,
    ArrowLeft,
    Video,
} from 'lucide-react';

interface Slot {
    start: string;
    end: string;
    date: string;
    time: string;
}

interface Booking {
    name: string;
    company?: string;
    date: string;
    time: string;
    status: string;
}

interface RescheduleResult {
    success: boolean;
    meetLink: string;
    date: string;
    time: string;
    token: string;
}

export default function BookingRescheduleContent() {
    const params = useSearchParams();
    const token = params.get('token') ?? '';

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [booking, setBooking] = useState<Booking | null>(null);
    const [slots, setSlots] = useState<Slot[]>([]);
    const [selected, setSelected] = useState<Slot | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState<RescheduleResult | null>(null);

    useEffect(() => {
        if (!token) {
            setError('トークンが指定されていません。');
            setLoading(false);
            return;
        }
        (async () => {
            try {
                const [b, s] = await Promise.all([
                    fetch('/api/booking', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ action: 'getBooking', token }),
                    }).then((r) => r.json()),
                    fetch('/api/booking', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ action: 'getSlots' }),
                    }).then((r) => r.json()),
                ]);
                if (!b.success) throw new Error(b.error ?? '予約情報の取得に失敗しました');
                setBooking(b);
                setSlots(s.slots ?? []);
            } catch (err) {
                setError(err instanceof Error ? err.message : '取得に失敗しました');
            } finally {
                setLoading(false);
            }
        })();
    }, [token]);

    const weekDates = useMemo(() => {
        const days = ['日', '月', '火', '水', '木', '金', '土'];
        const today = new Date();
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
            return {
                key: `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日(${days[d.getDay()]})`,
                label: `${d.getMonth() + 1}/${d.getDate()}(${days[d.getDay()]})`,
            };
        });
    }, []);

    const HOURS = useMemo(() => Array.from({ length: 10 }, (_, i) => 9 + i), []);

    const slotMap = useMemo(() => {
        const map = new Map<string, Slot>();
        for (const slot of slots) {
            const startHour = parseInt(slot.time.split(':')[0], 10);
            map.set(`${slot.date}|${startHour}`, slot);
        }
        return map;
    }, [slots]);

    const handleSubmit = async () => {
        if (!selected) return;
        setSubmitting(true);
        setError('');
        try {
            const res = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'reschedule',
                    token,
                    slotStart: selected.start,
                    slotEnd: selected.end,
                }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.error ?? '日程変更に失敗しました');
            setResult(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : '日程変更に失敗しました');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen py-24 lg:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    予約ページへ戻る
                </Link>

                <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
                    予約の日程変更
                </h1>

                {loading && (
                    <div className="glass-panel p-8 text-center">
                        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
                        <p className="text-slate-600 mt-4">予約情報と空き枠を取得しています…</p>
                    </div>
                )}

                {!loading && error && !booking && (
                    <div className="glass-panel p-8 text-center">
                        <AlertCircle className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                        <p className="text-slate-700">{error}</p>
                    </div>
                )}

                {!loading && booking && !result && (
                    <>
                        <div className="glass-panel p-6 mb-6">
                            <p className="text-xs text-slate-500 mb-2">現在の予約</p>
                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm font-semibold text-slate-900">
                                        {booking.date}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm text-slate-700">{booking.time}</span>
                                </div>
                            </div>
                        </div>

                        {booking.status === 'cancelled' ? (
                            <div className="glass-panel p-8 text-center">
                                <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                                <p className="text-slate-700">
                                    この予約は既にキャンセル済みのため、日程変更できません。
                                </p>
                            </div>
                        ) : (
                            <>
                                <p className="text-slate-700 mb-4">新しい日時を選択してください。</p>
                                <div className="overflow-x-auto pb-2">
                                    <div
                                        className="min-w-[720px] rounded-xl border border-slate-200 bg-white/60 overflow-hidden"
                                        style={{
                                            ['--grid' as never]:
                                                '56px repeat(7, minmax(0, 1fr)) 56px',
                                        }}
                                    >
                                        <div
                                            className="grid bg-slate-50/80 border-b border-slate-200"
                                            style={{ gridTemplateColumns: 'var(--grid)' }}
                                        >
                                            <div />
                                            {weekDates.map((d) => (
                                                <div
                                                    key={d.key}
                                                    className="text-center text-xs font-medium text-slate-700 py-3 px-1"
                                                >
                                                    {d.label}
                                                </div>
                                            ))}
                                            <div />
                                        </div>
                                        {HOURS.map((hour) => (
                                            <div
                                                key={hour}
                                                className="grid border-b border-slate-100 last:border-b-0"
                                                style={{ gridTemplateColumns: 'var(--grid)' }}
                                            >
                                                <div className="text-center text-xs text-slate-400 py-3">
                                                    {hour}:00
                                                </div>
                                                {weekDates.map((d) => {
                                                    const slot = slotMap.get(`${d.key}|${hour}`);
                                                    if (!slot) {
                                                        return (
                                                            <div
                                                                key={`${d.key}-${hour}`}
                                                                className="border-l border-slate-100 bg-slate-50/40"
                                                            />
                                                        );
                                                    }
                                                    const isSelected =
                                                        selected?.start === slot.start;
                                                    return (
                                                        <button
                                                            key={`${d.key}-${hour}`}
                                                            onClick={() => setSelected(slot)}
                                                            className={`border-l border-slate-100 py-2 px-1 text-xs transition ${
                                                                isSelected
                                                                    ? 'bg-blue-600 text-white font-semibold'
                                                                    : 'bg-emerald-50/60 hover:bg-emerald-100 text-emerald-700'
                                                            }`}
                                                        >
                                                            ◯
                                                        </button>
                                                    );
                                                })}
                                                <div />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {error && (
                                    <p className="text-sm text-rose-600 mt-4">{error}</p>
                                )}

                                <div className="flex justify-end mt-6">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!selected || submitting}
                                        className="px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50 inline-flex items-center gap-2"
                                    >
                                        {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                                        この日時に変更する
                                    </button>
                                </div>
                            </>
                        )}
                    </>
                )}

                {result && (
                    <div className="glass-panel p-8 text-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                        <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
                            日程を変更しました
                        </h2>
                        <p className="text-slate-600 text-sm mb-6">
                            ご登録のメールアドレスに新しい確認メールをお送りしました。
                        </p>
                        <div className="inline-flex flex-col gap-3 text-left p-6 rounded-2xl bg-blue-50/80 border border-blue-100 w-full max-w-sm">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-semibold text-slate-900">
                                    {result.date}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-blue-600" />
                                <span className="text-sm text-slate-700">{result.time}</span>
                            </div>
                            <div className="w-full h-px bg-blue-100" />
                            <div className="flex items-start gap-3">
                                <Video className="w-4 h-4 text-blue-600 mt-0.5" />
                                <a
                                    href={result.meetLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:text-blue-800 underline break-all"
                                >
                                    Google Meet に参加する
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
