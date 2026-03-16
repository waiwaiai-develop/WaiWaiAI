'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    Send,
    Loader2,
    AlertCircle,
} from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        category: '',
        message: '',
    });

    const [status, setStatus] = useState<
        'idle' | 'submitting' | 'success' | 'error'
    >('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !formData.company ||
            !formData.name ||
            !formData.email ||
            !formData.category ||
            !formData.message
        ) {
            setStatus('error');
            setErrorMessage('必須項目をすべて入力してください。');
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
            setErrorMessage(
                '送信に失敗しました。時間をおいて再度お試しください。'
            );
        }
    };

    return (
        <section
            id="contact"
            className="py-24 lg:py-32 relative overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full glass text-slate-700 font-bold text-xs tracking-wider uppercase mb-6">
                        Contact Us
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.2]">
                        ビジネスに、<br />
                        <span className="text-gradient-deep">
                            「AIの即戦力」
                        </span>
                        を。
                    </h2>
                    <p className="text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
                        まずは30分、御社の課題をヒアリングさせてください。<br className="hidden md:block" />
                        プロの視点で最短ルートを提示します。
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {/* Trust Badges - ガラススタイル */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            NDA締結可能
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            相見積もり歓迎
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            IT未経験の方も安心サポート
                        </div>
                    </motion.div>

                    {/* Form - ガラススタイル */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div
                            id="contact-form"
                            className="glass-panel p-8 md:p-10"
                        >
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 glass">
                                            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                            送信が完了しました
                                        </h3>
                                        <p className="text-slate-700 mb-8 max-w-md">
                                            お問い合わせいただきありがとうございます。内容を確認次第、担当者よりご連絡させていただきます。
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="px-8 py-3 glass-strong text-slate-700 font-bold rounded-xl hover:bg-white/60 transition-colors"
                                        >
                                            新しく問い合わせをする
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        {status === 'error' && (
                                            <div className="p-4 bg-red-50/80 backdrop-blur-sm text-red-600 rounded-xl flex items-center gap-3 text-sm font-bold border border-red-100">
                                                <AlertCircle className="w-5 h-5 shrink-0" />
                                                {errorMessage}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label htmlFor="contact-company" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    会社名{' '}
                                                    <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider" aria-label="必須項目">
                                                        必須
                                                    </span>
                                                </label>
                                                <input
                                                    id="contact-company"
                                                    type="text"
                                                    name="company"
                                                    required
                                                    aria-required="true"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="株式会社WaiWai"
                                                    disabled={status === 'submitting'}
                                                    className="w-full px-4 py-3.5 rounded-xl glass-input font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label htmlFor="contact-name" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    ご担当者名{' '}
                                                    <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider" aria-label="必須項目">
                                                        必須
                                                    </span>
                                                </label>
                                                <input
                                                    id="contact-name"
                                                    type="text"
                                                    name="name"
                                                    required
                                                    aria-required="true"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="山田 太郎"
                                                    disabled={status === 'submitting'}
                                                    className="w-full px-4 py-3.5 rounded-xl glass-input font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label htmlFor="contact-email" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    メールアドレス{' '}
                                                    <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider" aria-label="必須項目">
                                                        必須
                                                    </span>
                                                </label>
                                                <input
                                                    id="contact-email"
                                                    type="email"
                                                    name="email"
                                                    required
                                                    aria-required="true"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="info@example.com"
                                                    disabled={status === 'submitting'}
                                                    className="w-full px-4 py-3.5 rounded-xl glass-input font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label htmlFor="contact-phone" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    電話番号{' '}
                                                    <span className="bg-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider" aria-label="任意項目">
                                                        任意
                                                    </span>
                                                </label>
                                                <input
                                                    id="contact-phone"
                                                    type="tel"
                                                    name="phone"
                                                    aria-required="false"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="03-0000-0000"
                                                    disabled={status === 'submitting'}
                                                    className="w-full px-4 py-3.5 rounded-xl glass-input font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="contact-category" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                ご相談種別{' '}
                                                <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider" aria-label="必須項目">
                                                    必須
                                                </span>
                                            </label>
                                            <select
                                                id="contact-category"
                                                name="category"
                                                required
                                                aria-required="true"
                                                value={formData.category}
                                                onChange={handleChange}
                                                disabled={status === 'submitting'}
                                                className="w-full px-4 py-3.5 rounded-xl glass-input font-medium text-slate-900 appearance-none cursor-pointer"
                                                style={{
                                                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'right 1rem center',
                                                    backgroundSize: '1em',
                                                }}
                                            >
                                                <option value="" disabled>
                                                    選択してください
                                                </option>
                                                <option value="AI導入・開発に関するご相談">
                                                    AI導入・開発に関するご相談
                                                </option>
                                                <option value="無料のコスト削減診断を希望">
                                                    無料のコスト削減診断を希望
                                                </option>
                                                <option value="協業・アライアンスについて">
                                                    協業・アライアンスについて
                                                </option>
                                                <option value="法人化・採用について">
                                                    法人化・採用について
                                                </option>
                                                <option value="その他">
                                                    その他
                                                </option>
                                            </select>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="contact-message" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                お問い合わせ内容{' '}
                                                <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider" aria-label="必須項目">
                                                    必須
                                                </span>
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                required
                                                aria-required="true"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                placeholder="現在抱えている課題や、実現したい要件などをご自由にお書きください。"
                                                disabled={status === 'submitting'}
                                                className="w-full px-4 py-3.5 rounded-xl glass-input font-medium text-slate-900 resize-y placeholder:text-slate-400"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            aria-busy={status === 'submitting'}
                                            aria-label={status === 'submitting' ? '送信中' : 'お問い合わせを送信する'}
                                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_8px_28px_-4px_rgba(37,99,235,0.45)] hover:shadow-[0_12px_36px_-4px_rgba(37,99,235,0.55)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none hover:-translate-y-0.5"
                                        >
                                            {status === 'submitting' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                                                    送信中...
                                                </>
                                            ) : (
                                                <>
                                                    送信する
                                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}