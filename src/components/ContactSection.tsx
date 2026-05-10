'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    AlertCircle,
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    ClipboardList,
    HelpCircle,
    Loader2,
    Mail,
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

export default function ContactSection() {
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
                    className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"
                >
                    <div>
                        <p className="mb-5 text-[11px] font-black uppercase tracking-[0.24em] text-blue-700">Contact</p>
                        <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
                            相談・問い合わせを、
                            <br />
                            迷わず送れるように。
                        </h1>
                        <p className="mt-6 max-w-xl text-base font-bold leading-8 text-slate-700">
                            日程を決めて話したい方は無料相談へ。文章で内容を送っておきたい方はフォームへ。
                            迷った場合は、フォームから送っていただければこちらで進め方を整理します。
                        </p>
                    </div>

                    <div className="grid gap-3 rounded-lg border border-blue-100 bg-white p-3 shadow-[0_24px_90px_-62px_rgba(15,23,42,0.6)] sm:grid-cols-2">
                        <a
                            href="/booking"
                            className="group rounded-lg bg-blue-700 p-5 text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
                        >
                            <CalendarDays className="h-7 w-7" />
                            <h2 className="mt-5 text-xl font-black">30分の無料相談を予約</h2>
                            <p className="mt-3 text-sm font-medium leading-7 text-blue-100">
                                画面越しに相談したい、進め方を一緒に整理したい方向け。
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black">
                                日程を選ぶ
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                            </span>
                        </a>

                        <a
                            href="#contact-form"
                            className="group rounded-lg border border-slate-200 bg-slate-50 p-5 text-slate-950 transition hover:-translate-y-0.5 hover:bg-white"
                        >
                            <MessageSquareText className="h-7 w-7 text-blue-700" />
                            <h2 className="mt-5 text-xl font-black">フォームで問い合わせ</h2>
                            <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                                予約前の質問、資料請求、協業相談などを文章で送りたい方向け。
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700">
                                入力へ進む
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                            </span>
                        </a>
                    </div>
                </motion.div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {supportItems.map((item) => (
                        <div key={item} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-blue-700" />
                            {item}
                        </div>
                    ))}
                </div>

                <div id="contact-form" className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
                    <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-60px_rgba(15,23,42,0.7)] lg:sticky lg:top-28">
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">Guide</p>
                        <h2 className="mt-4 text-2xl font-black leading-tight text-slate-950">
                            何を書けばいいか
                            <br />
                            迷ったら。
                        </h2>
                        <div className="mt-6 space-y-4">
                            <GuideItem icon={ClipboardList} title="状況" text="今どんな業務に時間がかかっているか" />
                            <GuideItem icon={HelpCircle} title="希望" text="相談したい、見積もりたい、資料が欲しいなど" />
                            <GuideItem icon={Mail} title="返信先" text="連絡が取りやすいメールアドレス" />
                        </div>
                        <p className="mt-6 rounded-lg bg-blue-50 p-4 text-sm font-bold leading-7 text-slate-700">
                            詳細が固まっていなくても大丈夫です。箇条書きや一言だけでも送れます。
                        </p>
                    </aside>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_24px_90px_-68px_rgba(15,23,42,0.7)] sm:p-8"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
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
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-7"
                                >
                                    <div>
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                                            <div>
                                                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">Step 1</p>
                                                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">相談内容を選ぶ</h2>
                                            </div>
                                            <p className="text-xs font-bold text-slate-500">必須</p>
                                        </div>
                                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                            {inquiryTypes.map((item) => {
                                                const isSelected = formData.category === item.value;
                                                return (
                                                    <button
                                                        key={item.value}
                                                        type="button"
                                                        onClick={() => selectCategory(item.value)}
                                                        className={`rounded-lg border p-4 text-left transition ${
                                                            isSelected
                                                                ? 'border-blue-700 bg-blue-50 shadow-[inset_0_0_0_1px_rgba(29,78,216,1)]'
                                                                : 'border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50'
                                                        }`}
                                                        aria-pressed={isSelected}
                                                    >
                                                        <span className="flex items-center justify-between gap-3">
                                                            <span className="text-sm font-black text-slate-950">{item.title}</span>
                                                            {isSelected && <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700" />}
                                                        </span>
                                                        <span className="mt-2 block text-xs font-medium leading-6 text-slate-600">{item.description}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex gap-3 rounded-lg border border-red-100 bg-red-50 p-4 text-sm font-bold leading-6 text-red-700">
                                            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <div>
                                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">Step 2</p>
                                        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">連絡先を入力する</h2>
                                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
                                            className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function GuideItem({
    icon: Icon,
    title,
    text,
}: {
    icon: typeof ClipboardList;
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <p className="text-sm font-black text-slate-950">{title}</p>
                <p className="mt-1 text-xs font-medium leading-6 text-slate-600">{text}</p>
            </div>
        </div>
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
