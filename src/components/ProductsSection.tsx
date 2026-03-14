'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '200+', label: '月間削減工数', unit: '時間' },
    { value: '250', label: '成約率向上', unit: '% UP' },
    { value: '50,000', label: '月間処理件数', unit: '+' },
    { value: '0', label: 'データ入力ミス', unit: '件' },
];

const products = [
    {
        name: 'WaiWaiAI SNS System',
        tagline: 'SNS自動運用プラットフォーム',
        description: 'AIがSNS投稿を自動生成・予約投稿。複数アカウント管理にも対応し、運用コストを大幅に削減します。',
        status: 'β版受付中',
        image: '/images/product_a.png',
    },
    {
        name: 'EstateAI',
        tagline: '不動産業向けAIソリューション',
        description: '不動産業向けAI。物件情報管理＋顧客対応自動化で、業務効率と顧客満足度を同時に向上させます。',
        status: 'Coming Soon',
        image: '/images/product_b.png',
    },
];

export default function ProductsSection() {
    return (
        <section id="products" className="py-28 lg:py-36 relative overflow-hidden">
            <div className="absolute inset-0 bg-white" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                {/* Stats grid - Stripe style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-28"
                >
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                            Numbers
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                            数字で見る実績
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-8 rounded-2xl bg-white border border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] transition-all duration-300"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
                                    {stat.value}
                                    <span className="text-blue-600">{stat.unit}</span>
                                </div>
                                <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Products */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                            Products
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                            自社プロダクト
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            すぐに現場へ導入し、圧倒的なROIを生み出す独自開発のAIプロダクト。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="group rounded-2xl overflow-hidden border border-blue-100 bg-white hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] transition-all duration-300"
                            >
                                <div className="h-64 sm:h-72 overflow-hidden bg-blue-50/50 relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                                                {product.name}
                                            </h3>
                                            <p className="text-slate-600 text-sm font-medium">
                                                {product.tagline}
                                            </p>
                                        </div>
                                        <span className="shrink-0 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                                            {product.status}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
