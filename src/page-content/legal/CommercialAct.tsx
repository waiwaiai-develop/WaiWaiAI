'use client';

import { motion } from 'framer-motion';

export default function CommercialAct() {
    const rows = [
        { label: '販売業者', value: 'WaiWai AI 株式会社' },
        { label: '運営統括責任者名', value: '代表取締役 久保田慧' },
        {
            label: '所在地',
            value: '〒150-0043 東京都渋谷区道玄坂１丁目１０−８ 渋谷道玄坂東急ビル 2F-C',
        },
{ label: 'メールアドレス', value: 'kei.kubota@waiwaiai.com' },
        {
            label: '販売価格',
            value: '各サービス・ソリューションの詳細ページまたは個別契約書・御見積書に記載された金額となります。消費税は別途加算されます。',
        },
        {
            label: '商品代金以外の必要料金',
            list: [
                '消費税（税別価格の場合）',
                '銀行振込手数料（銀行振込をご利用の場合はお客様負担）',
                'インターネット接続料金・通信料金等',
                'クラウドインフラ費用等の実費（別途契約書にて定めます）',
            ],
        },
        {
            label: '支払方法',
            value: '銀行振込、請求書払い',
        },
        {
            label: '支払時期',
            value: '個別契約書にて定めた期日までにお支払いください。特段の定めがない場合は、請求書発行日から30日以内とします。',
        },
        {
            label: '役務の提供時期',
            value: '個別契約書に定める期間に従い提供いたします。お申込み確認後、速やかにサービスの提供を開始いたします。',
        },
        {
            label: '役務の提供方法',
            value: 'オンライン（クラウド上でのシステム提供、リモートでのコンサルティング等）を主としますが、個別契約の定めにより訪問対応を行う場合があります。',
        },
        {
            label: '動作環境',
            value: 'Google Chrome、Safari、Microsoft Edge、Firefoxの各最新版を推奨します。インターネット接続環境が必要です。',
        },
        {
            label: '返品・キャンセルについて',
            content: (
                <div className="space-y-2">
                    <p>提供するサービスの性質上、サービス提供開始後のキャンセル・返金は原則としてお受けできません。</p>
                    <p>ただし、以下の場合はこの限りではありません。</p>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>契約書に別途返金条件が定められている場合</li>
                        <li>納品物に契約不適合（瑕疵）がある場合は、個別契約の定めに従い修補または代金減額にて対応いたします</li>
                        <li>サービス提供開始前のキャンセルについては、個別にご相談ください</li>
                    </ul>
                </div>
            ),
        },
        {
            label: '契約不適合責任',
            value: '納品物が契約の内容に適合しない場合、納品後30日以内にご連絡いただければ、当社の費用負担にて修補対応いたします。詳細は個別契約の定めに従います。',
        },
    ];

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
                        {rows.map((row, i) => (
                            <div
                                key={row.label}
                                className={`flex flex-col md:flex-row py-5 ${i < rows.length - 1 ? 'border-b border-slate-100' : ''}`}
                            >
                                <div className="md:w-1/3 font-bold text-slate-900 mb-2 md:mb-0">{row.label}</div>
                                <div className="md:w-2/3">
                                    {row.value && <span>{row.value}</span>}
                                    {row.list && (
                                        <ul className="list-disc pl-4 space-y-1">
                                            {row.list.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {row.content && row.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 pt-6 border-t border-slate-100 text-sm text-slate-400 font-medium">
                        <p>制定日：2025年1月23日</p>
                        <p>最終改定日：2026年3月15日</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
