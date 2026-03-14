'use client';

import { motion } from 'framer-motion';

const rows = [
    { label: '販売業者', value: 'WaiWai AI 株式会社' },
    { label: '運営統括責任者', value: '久保田 慧（Kei Kubota）' },
    { label: '所在地', value: '東京都渋谷区神宮前六丁目23番4号 桑野ビル2階' },
    { label: '電話番号', value: 'お問い合わせフォームよりご連絡ください。\n請求があった場合は遅滞なく開示いたします。' },
    { label: 'メールアドレス', value: 'お問い合わせフォームよりご連絡ください。\n請求があった場合は遅滞なく開示いたします。' },
    { label: '販売URL', value: 'https://waiwai-ai.com' },
    { label: '販売価格', value: '各サービス・ソリューションごとの個別契約書または御見積書に記載された金額とします。\n消費税は別途申し受けます。' },
    { label: '商品代金以外の必要料金', value: '・銀行振込手数料（銀行振込をご利用の場合はお客様のご負担）\n・インターネット接続料金、通信料金等はお客様のご負担\n・クラウドインフラ費用等の実費が発生する場合は、別途個別契約書にて定めます' },
    { label: '支払方法', value: '銀行振込' },
    { label: '支払時期', value: '個別契約書にて定めた期日までにお支払いいただきます。\n原則として、サービス提供月の翌月末払いとなります。' },
    { label: '役務の提供時期', value: '個別契約書に定めた期間とします。\nお申込み確認後、双方合意のスケジュールに基づき、速やかに提供を開始いたします。' },
    { label: '返品・キャンセルについて', value: '提供するサービスの性質上、契約締結後およびサービス提供開始後のキャンセル・返金は原則としてお受けできません。\nただし、納品物に契約内容と異なる瑕疵がある場合は、個別契約の定めに基づき対応いたします。' },
    { label: '動作環境', value: 'Google Chrome / Safari / Microsoft Edge 各最新版を推奨\nインターネット接続環境が必要です。' },
];

export default function CommercialAct() {
    return (
        <div className="pt-32 pb-24 relative min-h-screen">
            <div className="absolute inset-0 bg-[#0f1115]" />

            <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <p className="text-[#7c5bf5] font-semibold tracking-widest uppercase text-sm mb-4">
                        Legal
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                        特定商取引法に基づく表記
                    </h1>
                    <p className="text-[#5a5a6e] font-medium tracking-widest text-sm">
                        SPECIFIED COMMERCIAL TRANSACTIONS ACT
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-2xl border border-white/[0.06] bg-[#16181f] p-8 md:p-12"
                >
                    <div className="space-y-0">
                        {rows.map((row, index) => (
                            <div
                                key={row.label}
                                className={`flex flex-col md:flex-row py-6 ${
                                    index < rows.length - 1 ? 'border-b border-white/[0.06]' : ''
                                }`}
                            >
                                <div className="md:w-1/3 font-semibold text-white mb-2 md:mb-0 text-sm">
                                    {row.label}
                                </div>
                                <div className="md:w-2/3 text-[#8b8b9e] text-sm leading-relaxed whitespace-pre-line">
                                    {row.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-8 text-[#5a5a6e] text-xs"
                >
                    最終更新日: 2026年3月14日
                </motion.p>
            </div>
        </div>
    );
}
