import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Settings, FileSearch, CheckCircle2, PlayCircle, Fingerprint } from 'lucide-react';
import { useRef } from 'react';

export default function ProcessSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const steps = [
        {
            num: "01",
            title: "無料の「コスト削減診断」を実施",
            desc: "専門コンサルタントが現在の業務フローをヒアリング。AIやシステム化による具体的な「削減可能工数」と「導入後のROI」をその場で算出します。",
            points: ["秘密保持契約（NDA）の締結", "業務フローのボトルネック特定", "削減工数・費用のシミュレーション"],
            icon: <Coffee className="w-8 h-8 text-blue-600" />,
            link: "#contact"
        },
        {
            num: "02",
            title: "PoC（概念実証）と緻密な設計",
            desc: "いきなり大規模な開発は行いません。一部の業務プロセスを対象に最小規模のプロトタイプを構築（PoC）し、現場での有用性とリスクを確実に検証します。",
            points: ["要件定義・システムアーキテクチャ設計", "プロトタイプの爆速開発（1〜2週間）", "現場でのテストとフィードバック"],
            icon: <FileSearch className="w-8 h-8 text-sky-600" />,
            link: "/services"
        },
        {
            num: "03",
            title: "本開発・導入と、終わらない伴走",
            desc: "検証結果をもとに本格的なシステム開発・AI実装を行います。導入後は「現場が使いこなせる」まで、徹底的なオンボーディングとチューニングを継続します。",
            points: ["セキュアなインフラ構築・本番環境デプロイ", "マニュアル作成・社内向け操作説明会", "導入効果のモニタリングと改善提案"],
            icon: <Settings className="w-8 h-8 text-indigo-600" />,
            link: "/cases"
        }
    ];

    return (
        <section ref={containerRef} id="process" className="py-32 relative bg-white border-t border-slate-100 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-50 to-white z-0"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">

                <div className="text-center mb-20 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 font-bold text-sm tracking-widest mb-6"
                    >
                        <Fingerprint className="w-4 h-4 text-slate-400" /> ONBOARDING
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
                    >
                        成功への<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">透明な道のり</span>
                    </motion.h2>
                    <p className="text-slate-600 font-medium text-lg lg:text-xl loading-relaxed max-w-2xl mx-auto">
                        不透明な見積もりや、終わりの見えない開発プロセスはありません。<br />
                        最短距離でROI（投資対効果）を証明する、確実な3ステップ。
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Progress Line (Desktop) */}
                    <div className="hidden md:block absolute left-[56px] top-0 bottom-0 w-1 bg-slate-100 rounded-full">
                        <motion.div
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 to-sky-400 rounded-full"
                            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        />
                    </div>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                                className="relative flex flex-col md:flex-row gap-8 lg:gap-16 group"
                            >
                                {/* Left: Number & Icon */}
                                <div className="flex items-start md:items-center gap-6 md:w-48 shrink-0 relative z-10">
                                    {/* Line node */}
                                    <div className="hidden md:flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-white border-4 border-slate-200 group-hover:border-blue-500 transition-colors duration-500 z-10 shadow-sm relative">
                                            <div className="absolute inset-1 rounded-full bg-transparent group-hover:bg-blue-500 transition-colors duration-500"></div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 group-hover:bg-white border text-center border-slate-200 group-hover:border-blue-100 group-hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)] rounded-2xl p-6 transition-all duration-500 w-full md:w-auto relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-2 opacity-10">
                                            <span className="text-6xl font-black">{step.num}</span>
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex justify-center mb-3">
                                                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                                                    {step.icon}
                                                </div>
                                            </div>
                                            <div className="text-xl font-black tracking-tighter text-slate-300 group-hover:text-blue-200 transition-colors">STEP.</div>
                                            <div className="text-4xl font-black tracking-tighter text-slate-900">{step.num}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Content Card */}
                                <div className="flex-1">
                                    <div className="glass-card hover:-translate-y-2 p-8 lg:p-10 h-full flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">
                                            {step.desc}
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            {step.points.map((point, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <span className="text-slate-700 font-bold">{point}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-slate-100">
                                            <a href={step.link} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group/btn w-max shadow-sm">
                                                詳しくはこちら <PlayCircle className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
