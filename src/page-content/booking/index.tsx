'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Clock,
    User,
    Mail,
    Building2,
    MessageSquare,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
    Loader2,
    Video,
    AlertCircle,
    Zap,
    Shield,
    TrendingUp,
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface Slot {
    start: string;
    end: string;
    date: string;
    time: string;
}

interface BookingResult {
    success: boolean;
    meetLink: string;
    date: string;
    time: string;
    token: string;
}

const services = [
    {
        icon: Zap,
        title: 'AI業務自動化',
        desc: '問い合わせ・書類処理・データ分析を自動化',
    },
    {
        icon: Shield,
        title: 'AI導入コンサルティング',
        desc: '中立的な立場で最適なAI活用をご提案',
    },
    {
        icon: TrendingUp,
        title: 'DX・RPA推進',
        desc: 'SaaS連携・業務フロー最適化で生産性向上',
    },
];

export default function BookingPageContent() {
    const [step, setStep] = useState<'slots' | 'form' | 'done'>('slots');
    const [slots, setSlots] = useState<Slot[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [loadingSlots, setLoadingSlots] = useState(true);
    const [slotError, setSlotError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [result, setResult] = useState<BookingResult | null>(null);

    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        topic: '',
    });

    // Group slots by date, preserving chronological order
    const dateGroups = useMemo(() => {
        const map = new Map<string, Slot[]>();
        for (const slot of slots) {
            if (!map.has(slot.date)) map.set(slot.date, []);
            map.get(slot.date)!.push(slot);
        }
        return Array.from(map.entries()).map(([date, slots]) => ({ date, slots }));
    }, [slots]);

    const selectedDateSlots = useMemo(
        () => dateGroups.find((g) => g.date === selectedDate)?.slots ?? [],
        [dateGroups, selectedDate]
    );

    // Auto-select first available date once slots load
    useEffect(() => {
        if (!selectedDate && dateGroups.length > 0) {
            setSelectedDate(dateGroups[0].date);
        }
    }, [dateGroups, selectedDate]);

    useEffect(() => {
        const fetchSlots = async () => {
            setLoadingSlots(true);
            setSlotError('');
            try {
                const res = await fetch('/api/booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'getSlots' }),
                });
                if (!res.ok) throw new Error('空き枠の取得に失敗しました');
                const data = await res.json();
                setSlots(data.slots ?? []);
            } catch {
                setSlotError('空き枠の取得に失敗しました。しばらくしてから再度お試しください。');
            } finally {
                setLoadingSlots(false);
            }
        };
        fetchSlots();
    }, []);

    const handleSlotSelect = (slot: Slot) => {
        setSelectedSlot(slot);
        setStep('form');
    };

    const handleBack = () => {
        setStep('slots');
        setSubmitError('');
    };

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSlot) return;

        if (!form.name || !form.email || !form.company) {
            setSubmitError('必須項目をすべて入力してください。');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            setSubmitError('有効なメールアドレスを入力してください。');
            return;
        }

        setSubmitting(true);
        setSubmitError('');

        try {
            const res = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'book',
                    name: form.name,
                    email: form.email,
                    company: form.company,
                    topic: form.topic,
                    slotStart: selectedSlot.start,
                    slotEnd: selectedSlot.end,
                }),
            });

            if (!res.ok) throw new Error('予約に失敗しました');

            const data = await res.json();
            if (!data.success) throw new Error(data.error ?? '予約に失敗しました');

            setResult(data);
            setStep('done');
        } catch (err) {
            setSubmitError(
                err instanceof Error ? err.message : '予約に失敗しました。時間をおいて再度お試しください。'
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(160deg, #f8faff 0%, #f0f5ff 20%, #f5f9ff 45%, #fafcff 70%, #ffffff 100%)',
                }}
                aria-hidden="true"
            />
            {/* Orbs */}
            <div
                className="orb orb-1 absolute -top-40 -right-40 opacity-30"
                aria-hidden="true"
            />
            <div
                className="orb orb-2 absolute -bottom-40 -left-40 opacity-20"
                aria-hidden="true"
            />

            <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-5xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-blue-600 font-semibold text-xs tracking-widest uppercase mb-5">
                        Free Consultation
                    </span>
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5 leading-[1.2]">
                        無料相談を<br />
                        <span className="text-gradient-deep">予約する</span>
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
                        空き枠を選んで、お名前とメールを入力するだけ。<br className="hidden sm:block" />
                        Google Meet のリンクをすぐにお送りします。
                    </p>
                </motion.div>

                {/* Step indicator */}
                {step !== 'done' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease }}
                        className="flex items-center justify-center gap-3 mb-10"
                    >
                        {(['slots', 'form'] as const).map((s, i) => (
                            <div key={s} className="flex items-center gap-3">
                                <div
                                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300 ${
                                        step === s
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                            : s === 'slots' && step === 'form'
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-slate-100 text-slate-400'
                                    }`}
                                >
                                    {s === 'slots' && step === 'form' ? (
                                        <CheckCircle2 className="w-4 h-4" />
                                    ) : (
                                        i + 1
                                    )}
                                </div>
                                <span
                                    className={`text-sm font-medium ${
                                        step === s ? 'text-slate-800' : 'text-slate-400'
                                    }`}
                                >
                                    {s === 'slots' ? '日時を選ぶ' : '情報を入力'}
                                </span>
                                {i < 1 && (
                                    <div className="w-8 h-px bg-slate-200" />
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}

                <AnimatePresence mode="wait">
                    {/* Step 1: Slot selection (TimeRex-style: date list + time slots) */}
                    {step === 'slots' && (
                        <motion.div
                            key="slots"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease }}
                        >
                            <div className="glass-panel p-6 md:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.07)]">
                                {loadingSlots && (
                                    <div className="flex flex-col items-center justify-center py-16 gap-3">
                                        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                                        <p className="text-sm text-slate-500">空き枠を取得しています...</p>
                                    </div>
                                )}

                                {slotError && (
                                    <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <p className="text-sm text-red-700">{slotError}</p>
                                    </div>
                                )}

                                {!loadingSlots && !slotError && slots.length === 0 && (
                                    <div className="text-center py-16">
                                        <Calendar className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                                        <p className="text-slate-500 font-medium mb-2">現在空き枠がありません</p>
                                        <p className="text-sm text-slate-400">
                                            お問い合わせフォームよりご連絡ください。
                                        </p>
                                    </div>
                                )}

                                {!loadingSlots && !slotError && slots.length > 0 && (
                                    <div className="grid gap-6 md:grid-cols-[260px_1fr]">
                                        {/* Date list (left) */}
                                        <div className="md:border-r md:border-slate-100 md:pr-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                                                <h2 className="font-display text-base font-bold text-slate-900">
                                                    日付を選ぶ
                                                </h2>
                                            </div>
                                            <div className="flex flex-col gap-1.5 max-h-[420px] overflow-y-auto pr-1">
                                                {dateGroups.map((group) => {
                                                    const isActive = selectedDate === group.date;
                                                    return (
                                                        <button
                                                            key={group.date}
                                                            onClick={() => setSelectedDate(group.date)}
                                                            className={`text-left px-4 py-3 rounded-xl border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                                                isActive
                                                                    ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200'
                                                                    : 'bg-white/70 border-slate-100 hover:border-blue-200 hover:bg-white text-slate-800'
                                                            }`}
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-sm font-semibold">
                                                                    {group.date}
                                                                </span>
                                                                <span
                                                                    className={`text-xs ${
                                                                        isActive ? 'text-blue-100' : 'text-slate-400'
                                                                    }`}
                                                                >
                                                                    {group.slots.length}枠
                                                                </span>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Time slots (right) */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                                                <h2 className="font-display text-base font-bold text-slate-900">
                                                    時間を選ぶ
                                                </h2>
                                            </div>
                                            {selectedDateSlots.length > 0 ? (
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[420px] overflow-y-auto pr-1">
                                                    {selectedDateSlots.map((slot) => (
                                                        <button
                                                            key={slot.start}
                                                            onClick={() => handleSlotSelect(slot)}
                                                            className="px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-medium hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 active:scale-[0.98] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                        >
                                                            {slot.time.split(' - ')[0]}
                                                        </button>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                                    <Calendar className="w-10 h-10 text-slate-200 mb-3" />
                                                    <p className="text-sm text-slate-400">
                                                        左側から日付を選択してください
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Form */}
                    {step === 'form' && selectedSlot && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease }}
                        >
                            <div className="glass-panel p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.07)]">
                                {/* Selected slot summary */}
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/80 border border-blue-100 mb-8">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                        <Calendar className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">
                                            {selectedSlot.date}
                                        </p>
                                        <p className="text-blue-600 text-sm flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {selectedSlot.time}
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleBack}
                                        className="ml-auto flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        変更する
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        {/* Name */}
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium text-slate-700 flex items-center gap-1.5"
                                            >
                                                <User className="w-3.5 h-3.5 text-slate-400" />
                                                お名前
                                                <span className="text-red-500 text-xs">*</span>
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={form.name}
                                                onChange={handleFormChange}
                                                placeholder="山田 太郎"
                                                required
                                                className="glass-input w-full px-4 py-3 text-base md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium text-slate-700 flex items-center gap-1.5"
                                            >
                                                <Mail className="w-3.5 h-3.5 text-slate-400" />
                                                メールアドレス
                                                <span className="text-red-500 text-xs">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleFormChange}
                                                placeholder="taro@example.com"
                                                required
                                                className="glass-input w-full px-4 py-3 text-base md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                            />
                                        </div>

                                        {/* Company */}
                                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                                            <label
                                                htmlFor="company"
                                                className="text-sm font-medium text-slate-700 flex items-center gap-1.5"
                                            >
                                                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                                                会社名・屋号
                                                <span className="text-red-500 text-xs">*</span>
                                            </label>
                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                value={form.company}
                                                onChange={handleFormChange}
                                                placeholder="株式会社〇〇"
                                                required
                                                className="glass-input w-full px-4 py-3 text-base md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                            />
                                        </div>

                                        {/* Topic */}
                                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                                            <label
                                                htmlFor="topic"
                                                className="text-sm font-medium text-slate-700 flex items-center gap-1.5"
                                            >
                                                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                                                相談したいこと（任意）
                                            </label>
                                            <textarea
                                                id="topic"
                                                name="topic"
                                                rows={3}
                                                value={form.topic}
                                                onChange={handleFormChange}
                                                placeholder="例: 問い合わせ対応を自動化したい / AIで何ができるか知りたい"
                                                className="glass-input w-full px-4 py-3 text-base md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Error */}
                                    <AnimatePresence>
                                        {submitError && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-5 flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100"
                                            >
                                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                                <p className="text-sm text-red-700">{submitError}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Submit */}
                                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            戻る
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-200"
                                        >
                                            {submitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    予約処理中...
                                                </>
                                            ) : (
                                                <>
                                                    <Video className="w-4 h-4" />
                                                    予約を確定する
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Done */}
                    {step === 'done' && result && (
                        <motion.div
                            key="done"
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease }}
                        >
                            {/* Confirmation */}
                            <div className="glass-panel p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.07)] text-center mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 200 }}
                                    className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                </motion.div>
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                                    予約が完了しました！
                                </h2>
                                <p className="text-slate-600 mb-8">
                                    ご登録のメールアドレスに確認メールをお送りしました。
                                </p>

                                {/* Details */}
                                <div className="inline-flex flex-col gap-3 text-left p-6 rounded-2xl bg-blue-50/80 border border-blue-100 mb-8 w-full max-w-sm mx-auto">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                                        <span className="text-sm font-semibold text-slate-900">{result.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                                        <span className="text-sm text-slate-700">{result.time}</span>
                                    </div>
                                    <div className="w-full h-px bg-blue-100" />
                                    <div className="flex items-start gap-3">
                                        <Video className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                        <a
                                            href={result.meetLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-600 hover:text-blue-800 underline underline-offset-2 break-all font-medium"
                                        >
                                            Google Meet に参加する
                                        </a>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-400">
                                    予約 ID: {result.token}
                                </p>
                            </div>

                            {/* Service introduction */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3, ease }}
                            >
                                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-5">
                                    WaiWai AI のサービス
                                </p>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    {services.map((svc, idx) => (
                                        <motion.div
                                            key={svc.title}
                                            initial={{ opacity: 0, y: 14 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.4 + idx * 0.08, ease }}
                                            className="glass-card p-6"
                                        >
                                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                                <svc.icon className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-slate-900 text-sm mb-1.5">
                                                {svc.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">
                                                {svc.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="text-center mt-8">
                                    <a
                                        href="/"
                                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        トップページへ戻る
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
