import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        category: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.company || !formData.name || !formData.email || !formData.category || !formData.message) {
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

        // Mock API call delay (e.g., waiting for backend response)
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            // Success
            setStatus('success');
            setFormData({ company: '', name: '', email: '', phone: '', category: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage('送信に失敗しました。時間をおいて再度お試しください。');
        }
    };

    return (
        <section id="contact-form" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                        無料でご相談・お問い合わせ
                    </h2>
                    <p className="text-slate-600 font-medium max-w-2xl mx-auto">
                        AI導入や開発に関するご相談、お見積りのご依頼など、お気軽にお問い合わせください。
                        担当者より通常1〜2営業日以内にご返信いたします。
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">送信が完了しました</h3>
                                <p className="text-slate-600 mb-8 max-w-md">
                                    お問い合わせいただきありがとうございます。内容を確認次第、担当者よりご連絡させていただきます。
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
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
                                className="space-y-6"
                            >
                                {status === 'error' && (
                                    <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm font-bold border border-red-100">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        {errorMessage}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            会社名 <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider">必須</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="株式会社WaiWai"
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            ご担当者名 <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider">必須</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="山田 太郎"
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            メールアドレス <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider">必須</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="info@example.com"
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            電話番号 <span className="bg-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider">任意</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="03-0000-0000"
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                        ご相談種別 <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider">必須</span>
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        disabled={status === 'submitting'}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 appearance-none"
                                        style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                                    >
                                        <option value="" disabled>選択してください</option>
                                        <option value="AI導入・開発に関するご相談">AI導入・開発に関するご相談</option>
                                        <option value="無料のコスト削減診断を希望">無料のコスト削減診断を希望</option>
                                        <option value="協業・アライアンスについて">協業・アライアンスについて</option>
                                        <option value="法人化・採用について">法人化・採用について</option>
                                        <option value="その他">その他</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                        お問い合わせ内容 <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider">必須</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="現在抱えている課題や、実現したい要件などをご自由にお書きください。まだ具体的に決まっていなくても構いません。"
                                        disabled={status === 'submitting'}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 resize-y"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none"
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
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
