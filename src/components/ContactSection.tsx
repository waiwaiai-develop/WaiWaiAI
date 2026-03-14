'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Loader2, AlertCircle } from 'lucide-react';

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

    const inputClass = "w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#7c5bf5]/30 focus:border-[#7c5bf5]/50 transition-all font-medium text-white placeholder:text-[#5a5a6e]";

    return (
        <section
            id="contact-form"
            className="py-28 lg:py-36 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#12141a] to-[#0f1115]" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-[#7c5bf5] font-semibold tracking-widest uppercase text-sm mb-4">
                        Contact
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                        お問い合わせ
                    </h2>
                    <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto leading-relaxed">
                        まずは30分、御社の課題をヒアリングさせてください。<br className="hidden md:block" />
                        プロの視点で最短ルートを提示します。
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6 mb-10"
                    >
                        <div className="flex items-center gap-2 text-sm font-medium text-[#8b8b9e]">
                            <CheckCircle2 className="w-4 h-4 text-[#7c5bf5]" />
                            NDA締結可能
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[#8b8b9e]">
                            <CheckCircle2 className="w-4 h-4 text-[#7c5bf5]" />
                            相見積もり歓迎
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[#8b8b9e]">
                            <CheckCircle2 className="w-4 h-4 text-[#7c5bf5]" />
                            IT未経験の方も安心サポート
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="rounded-2xl p-8 md:p-10 border border-white/[0.06] bg-[#16181f]">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-20 h-20 bg-[#7c5bf5]/10 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-[#7c5bf5]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            送信が完了しました
                                        </h3>
                                        <p className="text-[#8b8b9e] mb-8 max-w-md">
                                            お問い合わせいただきありがとうございます。内容を確認次第、担当者よりご連絡させていただきます。
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="px-8 py-3 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold rounded-lg transition-colors border border-white/[0.08]"
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
                                            <div className="p-4 bg-red-500/10 text-red-400 rounded-lg flex items-center gap-3 text-sm font-medium border border-red-500/20">
                                                <AlertCircle className="w-5 h-5 shrink-0" />
                                                {errorMessage}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-[#8b8b9e] flex items-center gap-2">
                                                    会社名
                                                    <span className="bg-[#7c5bf5]/10 text-[#7c5bf5] text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-[#7c5bf5]/20">
                                                        必須
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="株式会社WaiWai"
                                                    disabled={status === 'submitting'}
                                                    className={inputClass}
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-[#8b8b9e] flex items-center gap-2">
                                                    ご担当者名
                                                    <span className="bg-[#7c5bf5]/10 text-[#7c5bf5] text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-[#7c5bf5]/20">
                                                        必須
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="山田 太郎"
                                                    disabled={status === 'submitting'}
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-[#8b8b9e] flex items-center gap-2">
                                                    メールアドレス
                                                    <span className="bg-[#7c5bf5]/10 text-[#7c5bf5] text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-[#7c5bf5]/20">
                                                        必須
                                                    </span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="info@example.com"
                                                    disabled={status === 'submitting'}
                                                    className={inputClass}
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-[#8b8b9e] flex items-center gap-2">
                                                    電話番号
                                                    <span className="bg-white/[0.04] text-[#5a5a6e] text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-white/[0.06]">
                                                        任意
                                                    </span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="03-0000-0000"
                                                    disabled={status === 'submitting'}
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[#8b8b9e] flex items-center gap-2">
                                                ご相談種別
                                                <span className="bg-[#7c5bf5]/10 text-[#7c5bf5] text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-[#7c5bf5]/20">
                                                    必須
                                                </span>
                                            </label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                disabled={status === 'submitting'}
                                                className={`${inputClass} appearance-none`}
                                                style={{
                                                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b8b9e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'right 1rem center',
                                                    backgroundSize: '1em',
                                                }}
                                            >
                                                <option value="" disabled>選択してください</option>
                                                <option value="AI導入・開発に関するご相談">AI導入・開発に関するご相談</option>
                                                <option value="無料のコスト削減診断を希望">無料のコスト削減診断を希望</option>
                                                <option value="協業・アライアンスについて">協業・アライアンスについて</option>
                                                <option value="法人化・採用について">法人化・採用について</option>
                                                <option value="その他">その他</option>
                                            </select>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[#8b8b9e] flex items-center gap-2">
                                                お問い合わせ内容
                                                <span className="bg-[#7c5bf5]/10 text-[#7c5bf5] text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-[#7c5bf5]/20">
                                                    必須
                                                </span>
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                placeholder="現在抱えている課題や、実現したい要件などをご自由にお書きください。"
                                                disabled={status === 'submitting'}
                                                className={`${inputClass} resize-y`}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full py-4 bg-[#7c5bf5] hover:bg-[#6b4ae4] text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none"
                                        >
                                            {status === 'submitting' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    送信中...
                                                </>
                                            ) : (
                                                <>
                                                    送信する
                                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
