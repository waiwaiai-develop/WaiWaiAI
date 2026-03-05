import { motion } from 'framer-motion';
import { Network, Building2, MapPin, Mail, ArrowRight, Turtle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanySection() {
    return (
        <section className="py-24 lg:py-32 relative bg-white overflow-hidden border-t border-slate-100">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Mission / Copy */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-widest mb-6 backdrop-blur-md">
                                <Turtle className="w-5 h-5 text-blue-500" /> OUR MISSION
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">AIを味方に</span><br />
                                <span className="relative inline-block mt-2">
                                    未来を豊かに。
                                    <div className="absolute bottom-2 left-0 w-full h-4 bg-sky-200/60 -z-10 -rotate-1"></div>
                                </span>
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                                <strong className="text-slate-900">「WaiWai」</strong>という社名は、ハワイの言葉で<strong className="text-blue-600">「豊かさ」</strong>を意味します。
                                ハワイで幸運の象徴とされるウミガメ（ホヌ）のように、クライアントの事業に長く確実な繁栄をもたらす存在でありたいという願いを込めています。
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                                単なるシステム開発会社ではありません。私たちはテクノロジーを手段とし、クライアントの「IT化の遅れ」というボトルネックを破壊し、圧倒的な利益と価値を創出する実行部隊です。
                            </p>

                            <Link to="/company" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-1">
                                会社概要と実績を見る
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Premium Glass Card */}
                    <div className="order-1 lg:order-2 relative perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, rotateY: -15, x: 40 }}
                            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="glass-card p-8 md:p-12 relative overflow-hidden group"
                        >
                            {/* Decorative lighting inside the card */}


                            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-100">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner border border-blue-100">
                                    <Building2 className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">WaiWai AI</h3>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">法人化準備中</p>
                                </div>
                            </div>

                            <ul className="space-y-6 relative z-10 text-slate-700 font-medium">
                                {[
                                    { icon: <Network className="w-5 h-5 text-blue-500" />, label: "事業内容", value: "AI導入支援・システム開発・DX化推進" },
                                    { icon: <MapPin className="w-5 h-5 text-blue-500" />, label: "所在地", value: "〒000-0000 住所を記載" },
                                    { icon: <Mail className="w-5 h-5 text-blue-500" />, label: "連絡先", value: "info@example.com" }
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-blue-50/50 flex items-center justify-center shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                                            <p className="text-slate-800">{item.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
