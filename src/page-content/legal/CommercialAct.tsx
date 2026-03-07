'use client';

import { motion } from 'framer-motion';

export default function CommercialAct() {
    return (
        <div className="pt-32 pb-24 relative min-h-screen bg-white">
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent z-[-1]"></div>
            <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        特定商取引法に基づく表記
                    </h1>
                    <p className="text-slate-500 font-medium tracking-widest text-sm">SPECIFIED COMMERCIAL TRANSACTIONS ACT</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-blue-50 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)]"
                >
                    <div className="space-y-0 text-slate-700">
                        <div className="flex flex-col md:flex-row py-5 border-b border-slate-100">
                            <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">販売業者</div>
                            <div className="md:w-2/3">WaiWai AI (法人化準備中)</div>
                        </div>

                        <div className="flex flex-col md:flex-row py-5 border-b border-slate-100">
                            <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">運営統括責任者名</div>
                            <div className="md:w-2/3">（代表者名）</div>
                        </div>

                        <div className="flex flex-col md:flex-row py-5 border-b border-slate-100">
                            <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">所在地</div>
                            <div className="md:w-2/3">
                                〒000-0000<br />
                                （住所を記載）
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row py-5 border-b border-slate-100">
                            <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">電話番号</div>
                            <div className="md:w-2/3">お問い合わせよりご請求いただければ、遅滞なく開示いたします。</div>
                        </div>

                        <div className="flex flex-col md:flex-row py-5 border-b border-slate-100">
                            <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">メールアドレス</div>
                            <div className="md:w-2/3">info@example.com （お問い合わせフォームをご利用ください）</div>
                        </div>

                        <div className="flex flex-col md:flex-row py-5 border-b border-slate-100">
                            <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">販売価格</div>
                            <div className="md:w-2/3">各サービス・ソリューションごとの契約書または御見積書に記載された金額となります。</div>
                        </div>

                        <div className="flex flex-col md:flex-row py-5 border-b border-slate-100">
                            <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">商品代金以外の必要料金</div>
                            <div className="md:w-2/3">銀行振込手数料（銀行振込をご利用の場合）、インターネット接続料金、通信料金等はお客様のご負担となります。クラウドインフラ費用等の実費は別途契約書にて定めます。</div>
                        </div>

                        <div className="flex flex-col md:flex-row py-5 border-b border-slate-100">
                            <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">支払方法と支払時期</div>
                            <div className="md:w-2/3">銀行振込。支払時期は個別契約書にて定めた期日とします。</div>
                        </div>

                        <div className="flex flex-col md:flex-row py-5">
                            <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">返品・キャンセルについて</div>
                            <div className="md:w-2/3">提供サービスの性質上、契約締結後およびサービス提供開始後のキャンセル・返金はお受けできません。納品物の瑕疵に関する事項は、個別契約に基づくものとします。</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
