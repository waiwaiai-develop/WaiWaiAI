import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
    const cases = [
        {
            category: 'AIエージェント構築',
            title: '社内ナレッジ検索AI導入で、\n月間200時間の工数削減',
            metric1: { label: '問い合わせ対応', value: '-80%' },
            metric2: { label: '即戦力化', value: '2倍' }
        },
        {
            category: 'システム・アプリ開発',
            title: '受発注業務の完全自動化による\nリードタイム半減',
            metric1: { label: '処理時間', value: '-50%' },
            metric2: { label: '人的ミス', value: '0件' }
        },
        {
            category: 'DX・RPAコンサルティング',
            title: '年間5,000時間の入力作業を\nすべて自動化',
            metric1: { label: '自動化率', value: '100%' },
            metric2: { label: 'コスト削減', value: '¥2,500万' }
        }
    ];

    return (
        <section id="cases" className="py-24 lg:py-40 relative bg-white border-t border-slate-100 overflow-hidden">
            {/* Ambient Backgrounds for depth */}
            <div className="absolute inset-0 bg-blue-50/30"></div>


            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Intro Text (Sticky) */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-widest mb-6 backdrop-blur-md">
                                    CASES & ROI
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                                    数字が証明する、<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">圧倒的ROI</span>
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                                    単なる「システムの導入」ではありません。<br />
                                    私たちが約束するのは、劇的なコスト削減と生産性の飛躍的な向上という「結果」のみです。
                                </p>
                                <div className="hidden lg:block">
                                    <Link to="/cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white bg-slate-900 hover:bg-blue-600 font-bold transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-blue-600/30 hover:-translate-y-1 group">
                                        すべての導入実績を見る
                                        <ArrowDown className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Cascading Case Cards */}
                    <div className="lg:w-2/3 space-y-8 lg:space-y-12 pb-24">
                        {cases.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-150px" }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
                                className="group bg-white/80 backdrop-blur-2xl p-8 lg:p-10 rounded-[2.5rem] border border-white shadow-[0_10px_40px_-10px_rgba(59,130,246,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.2)] hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                            >


                                <div className="relative z-10 flex flex-col h-full">
                                    <span className="text-sm font-black text-slate-400 tracking-wider mb-4">{item.category}</span>
                                    <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-8 leading-[1.3] whitespace-pre-line tracking-tight">
                                        {item.title}
                                    </h3>

                                    <div className="mt-auto grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100/50 group-hover:bg-white group-hover:border-blue-100 transition-all duration-500">
                                            <div className="text-xs font-bold text-slate-500 mb-1">{item.metric1.label}</div>
                                            <div className="text-3xl font-black text-blue-600 tracking-tighter">{item.metric1.value}</div>
                                        </div>
                                        <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100/50 group-hover:bg-white group-hover:border-blue-100 transition-all duration-500">
                                            <div className="text-xs font-bold text-slate-500 mb-1">{item.metric2.label}</div>
                                            <div className="text-3xl font-black text-sky-500 tracking-tighter">{item.metric2.value}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <div className="lg:hidden mt-12 text-center">
                            <Link to="/cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white bg-slate-900 hover:bg-blue-600 font-bold transition-all duration-300 shadow-xl w-full">
                                すべての導入実績を見る
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
