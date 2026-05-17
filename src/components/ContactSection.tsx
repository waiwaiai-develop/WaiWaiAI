'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    AlertCircle,
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Loader2,
    MessageSquareText,
    Send,
} from 'lucide-react';

const inquiryTypes = [
    {
        value: 'AI導入・開発に関するご相談',
        title: 'AI導入・開発の相談',
        description: '業務自動化、AI顧問、AIシステム開発について相談したい',
    },
    {
        value: '無料のコスト削減診断を希望',
        title: '削減できる業務を知りたい',
        description: 'どの業務からAI化すべきか、まず整理したい',
    },
    {
        value: '協業・アライアンスについて',
        title: '協業・提携の相談',
        description: 'パートナー連携、共同提案、取材などについて話したい',
    },
    {
        value: 'その他',
        title: 'その他の問い合わせ',
        description: '上記以外、まだ内容が固まっていない相談',
    },
];

const supportItems = ['最短1営業日で返信', '予約前の質問OK', 'NDA締結可能'];
type ContactMethod = 'booking' | 'form';

export default function ContactSection() {
    const router = useRouter();
    const [contactMethod, setContactMethod] = useState<ContactMethod>('form');
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        category: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const selectedInquiry = inquiryTypes.find((item) => item.value === formData.category);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const selectCategory = (category: string) => {
        setFormData((current) => ({ ...current, category }));
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage('');
        }
    };

    const selectContactMethod = (method: ContactMethod) => {
        setContactMethod(method);
        if (status === 'success') {
            setStatus('idle');
        }
        window.requestAnimationFrame(() => {
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!formData.company || !formData.name || !formData.email || !formData.category || !formData.message) {
            setStatus('error');
            setErrorMessage('必須項目を入力してください。特に「問い合わせ内容」と「相談内容の種類」が未入力になりやすいです。');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            setStatus('error');
            setErrorMessage('有効なメールアドレスを入力してください。');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('送信に失敗しました');

            setStatus('success');
            setFormData({
                company: '',
                name: '',
                email: '',
                phone: '',
                category: '',
                message: '',
            });
            router.push('/contact/thanks');
        } catch {
            setStatus('error');
            setErrorMessage('送信に失敗しました。時間をおいて再度お試しください。');
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-white pb-16 pt-16 lg:pb-24 lg:pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/65 via-white to-white" aria-hidden="true" />
            <div
                className="absolute inset-0 opacity-65"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        'linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(0deg, rgba(37,99,235,0.045) 1px, transparent 1px)',
                    backgroundSize: '58px 58px',
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg border border-blue-100 bg-white/90 p-4 shadow-[0_24px_90px_-64px_rgba(15,23,42,0.65)] sm:p-7 lg:grid lg:grid-cols-[0.72fr_1fr] lg:items-center lg:gap-8"
                >
                    <div className="border-b border-slate-100 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-blue-700 sm:mb-4">Contact</p>
                        <h1 className="text-[28px] font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                            まず、連絡方法を
                            <br className="hidden sm:block" />
                            選んでください。
                        </h1>
                        <p className="mt-4 max-w-xl text-sm font-bold leading-7 text-slate-700 sm:mt-5">
                            相談予約と通常問い合わせは別の入口です。内容が固まっていない場合は、フォームから送っていただければこちらで整理して返信します。
                        </p>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-0">
                        <button
                            type="button"
                            onClick={() => selectContactMethod('form')}
                            aria-pressed={contactMethod === 'form'}
                            className={`group rounded-lg p-4 text-left transition hover:-translate-y-0.5 sm:p-5 ${
                                contactMethod === 'form'
                                    ? 'bg-blue-700 text-white shadow-[0_18px_42px_-24px_rgba(0,45,150,0.9)]'
                                    : 'border border-slate-200 bg-slate-50 text-slate-950 hover:border-blue-200 hover:bg-white'
                            }`}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <MessageSquareText className={`h-7 w-7 ${contactMethod === 'form' ? 'text-white' : 'text-blue-700'}`} />
                                <span className={`rounded-full px-2.5 py-1 text-[11px] font-black ${contactMethod === 'form' ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-700'}`}>
                                    文章で送る
                                </span>
                            </div>
                            <h2 className="mt-4 text-xl font-black sm:mt-5">通常問い合わせ</h2>
                            <p className={`mt-2 text-sm font-medium leading-6 sm:mt-3 sm:leading-7 ${contactMethod === 'form' ? 'text-blue-100' : 'text-slate-600'}`}>
                                予約前の質問、資料請求、協業・取材などを先に文章で送りたい方。
                            </p>
                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-black sm:mt-5">
                                下にフォームを表示
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() => selectContactMethod('booking')}
                            aria-pressed={contactMethod === 'booking'}
                            className={`group rounded-lg p-4 text-left transition hover:-translate-y-0.5 sm:p-5 ${
                                contactMethod === 'booking'
                                    ? 'bg-blue-700 text-white shadow-[0_18px_42px_-24px_rgba(0,45,150,0.9)]'
                                    : 'border border-slate-200 bg-slate-50 text-slate-950 hover:border-blue-200 hover:bg-white'
                            }`}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <CalendarDays className="h-7 w-7" />
                                <span className={`rounded-full px-2.5 py-1 text-[11px] font-black ${contactMethod === 'booking' ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-700'}`}>
                                    日程を決める
                                </span>
                            </div>
                            <h2 className="mt-4 text-xl font-black sm:mt-5">30分の無料相談</h2>
                            <p className={`mt-2 text-sm font-medium leading-6 sm:mt-3 sm:leading-7 ${contactMethod === 'booking' ? 'text-blue-100' : 'text-slate-600'}`}>
                                画面越しに話しながら、AI化できる業務や進め方を整理したい方。
                            </p>
                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-black sm:mt-5">
                                下に予約案内を表示
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                            </span>
                        </button>
                    </div>
                </motion.div>

                <div className="mt-5 flex gap-2 overflow-x-auto pb-1 sm:mt-8 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:pb-0">
                    {supportItems.map((item) => (
                        <div key={item} className="flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 sm:px-4 sm:py-3 sm:text-sm">
                            <CheckCircle2 className="h-4 w-4 text-blue-700" />
                            {item}
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-12">
                    <div id="contact-form" className="mx-auto max-w-[880px] scroll-mt-28 rounded-lg border border-slate-200 bg-white p-5 shadow-[0_24px_90px_-68px_rgba(15,23,42,0.7)] sm:p-8">
                        <AnimatePresence mode="wait">
                            {contactMethod === 'booking' ? (
                                <motion.div
                                    key="booking"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.25 }}
                                    className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
                                >
                                    <div>
                                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">Selected</p>
                                        <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950">
                                            30分の無料相談を
                                            <br />
                                            予約する
                                        </h2>
                                        <p className="mt-5 text-sm font-bold leading-7 text-slate-700">
                                            画面越しに話しながら、AI化できる業務、削減できそうな時間、最初に作るべき仕組みを整理します。
                                        </p>
                                    </div>
                                    <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
                                        <div className="space-y-3">
                                            {['相談内容が固まっていなくてもOK', 'オンラインで30分', '無理な営業なし'].map((item) => (
                                                <div key={item} className="flex items-center gap-2 text-sm font-black text-slate-800">
                                                    <CheckCircle2 className="h-4 w-4 text-blue-700" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <a
                                            href="/booking"
                                            className="mt-6 flex min-h-14 items-center justify-center gap-3 rounded-lg bg-blue-700 px-6 text-base font-black text-white shadow-[0_18px_42px_-22px_rgba(0,45,150,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-800"
                                        >
                                            予約ページへ進む
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => selectContactMethod('form')}
                                            className="mt-3 w-full rounded-lg px-4 py-3 text-sm font-black text-blue-700 transition hover:bg-white"
                                        >
                                            文章で問い合わせたい場合はこちら
                                        </button>
                                    </div>
                                </motion.div>
                            ) : status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                                >
                                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                                        <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-950">送信が完了しました</h2>
                                    <p className="mt-4 max-w-md text-sm font-medium leading-7 text-slate-600">
                                        お問い合わせありがとうございます。内容を確認し、必要な進め方を整理してご連絡します。
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-8 rounded-lg border border-slate-200 px-6 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-50"
                                    >
                                        新しく問い合わせる
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={false}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-7"
                                >
                                    <fieldset>
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                                            <div>
                                                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">通常問い合わせ</p>
                                                <legend className="mt-2 text-2xl font-black tracking-tight text-slate-950">問い合わせ内容を1つ選ぶ</legend>
                                                <p className="mt-2 text-sm font-bold leading-7 text-slate-600">一番近いものを選ぶだけで大丈夫です。</p>
                                            </div>
                                            <p className="text-xs font-bold text-slate-500">必須</p>
                                        </div>
                                        <div className="mt-4 md:hidden">
                                            <label htmlFor="contact-category" className="sr-only">
                                                問い合わせ内容
                                            </label>
                                            <select
                                                id="contact-category"
                                                name="category"
                                                required
                                                aria-required="true"
                                                value={formData.category}
                                                onChange={handleChange}
                                                disabled={status === 'submitting'}
                                                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-base font-black text-slate-950 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                                            >
                                                <option value="">選択してください</option>
                                                {inquiryTypes.map((item) => (
                                                    <option key={item.value} value={item.value}>
                                                        {item.title}
                                                    </option>
                                                ))}
                                            </select>
                                            {selectedInquiry && (
                                                <p className="mt-2 text-sm font-bold leading-6 text-slate-600">
                                                    {selectedInquiry.description}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mt-4 hidden overflow-hidden rounded-lg border border-slate-200 bg-white md:block" role="radiogroup" aria-label="相談内容の種類">
                                            {inquiryTypes.map((item) => {
                                                const isSelected = formData.category === item.value;
                                                return (
                                                    <label
                                                        key={item.value}
                                                        className={`group relative flex cursor-pointer gap-4 border-b border-slate-100 p-4 transition last:border-b-0 sm:p-5 ${
                                                            isSelected
                                                                ? 'bg-blue-50 shadow-[inset_4px_0_0_rgba(29,78,216,1)]'
                                                                : 'bg-white hover:bg-slate-50'
                                                        }`}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="category"
                                                            value={item.value}
                                                            checked={isSelected}
                                                            onChange={() => selectCategory(item.value)}
                                                            disabled={status === 'submitting'}
                                                            className="sr-only"
                                                            required
                                                        />
                                                        <span
                                                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                                                isSelected ? 'border-blue-700 bg-blue-700' : 'border-slate-300 bg-white group-hover:border-blue-500'
                                                            }`}
                                                            aria-hidden="true"
                                                        >
                                                            {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                                                        </span>
                                                        <span className="min-w-0 flex-1">
                                                            <span className="flex flex-wrap items-center justify-between gap-2">
                                                                <span className="text-base font-black text-slate-950">{item.title}</span>
                                                                {isSelected && (
                                                                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-700 px-2.5 py-1 text-[11px] font-black text-white">
                                                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                                                        選択済み
                                                                    </span>
                                                                )}
                                                            </span>
                                                            <span className="mt-2 block text-sm font-medium leading-6 text-slate-600">{item.description}</span>
                                                        </span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                        <div
                                            className={`mt-3 rounded-lg px-4 py-3 text-sm font-bold leading-6 ${
                                                selectedInquiry ? 'bg-blue-50 text-blue-900' : 'bg-slate-50 text-slate-600'
                                            }`}
                                            aria-live="polite"
                                        >
                                            {selectedInquiry ? (
                                                <>
                                                    現在の選択: <span className="text-blue-700">{selectedInquiry.title}</span>
                                                </>
                                            ) : (
                                                <>未選択です。迷ったら「その他の問い合わせ」を選んでください。内容を見てこちらで振り分けます。</>
                                            )}
                                        </div>
                                    </fieldset>

                                    {status === 'error' && (
                                        <div className="flex gap-3 rounded-lg border border-red-100 bg-red-50 p-4 text-sm font-bold leading-6 text-red-700">
                                            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <div>
                                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">Step 2</p>
                                        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">連絡先を入力する</h2>
                                        <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
                                            <TextField label="会社名" name="company" value={formData.company} onChange={handleChange} placeholder="WaiWai AI 株式会社" required disabled={status === 'submitting'} />
                                            <TextField label="ご担当者名" name="name" value={formData.name} onChange={handleChange} placeholder="山田 太郎" required disabled={status === 'submitting'} />
                                            <TextField label="メールアドレス" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="info@example.com" required disabled={status === 'submitting'} />
                                            <TextField label="電話番号" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="03-0000-0000" disabled={status === 'submitting'} />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">Step 3</p>
                                        <label htmlFor="contact-message" className="mt-2 block text-2xl font-black tracking-tight text-slate-950">
                                            内容を書く
                                        </label>
                                        <p className="mt-2 text-sm font-medium leading-7 text-slate-600">
                                            例: 問い合わせ対応を減らしたい、日報集計を自動化したい、まず費用感を知りたい
                                        </p>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            required
                                            aria-required="true"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            placeholder="現在の課題や相談したいことを入力してください。箇条書きでも大丈夫です。"
                                            disabled={status === 'submitting'}
                                            className="mt-4 min-h-36 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        aria-busy={status === 'submitting'}
                                        className="flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-blue-700 px-6 text-base font-black text-white shadow-[0_18px_42px_-22px_rgba(0,45,150,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-800 disabled:pointer-events-none disabled:opacity-70"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                送信中
                                            </>
                                        ) : (
                                            <>
                                                問い合わせを送信する
                                                <Send className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TextField({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = 'text',
    required = false,
    disabled = false,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
}) {
    return (
        <div>
            <label htmlFor={`contact-${name}`} className="mb-2 flex items-center gap-2 text-sm font-black text-slate-800">
                {label}
                <span className={`text-[10px] font-black ${required ? 'text-red-500' : 'text-slate-400'}`}>
                    {required ? '必須' : '任意'}
                </span>
            </label>
            <input
                id={`contact-${name}`}
                type={type}
                name={name}
                required={required}
                aria-required={required}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
        </div>
    );
}
