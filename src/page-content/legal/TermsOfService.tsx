'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
    return (
        <div className="pt-32 pb-24 relative min-h-screen bg-white">

            <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                        Legal
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                        利用規約
                    </h1>
                    <p className="text-slate-400 font-medium tracking-widest text-sm">TERMS OF SERVICE</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl border border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] p-8 md:p-12 text-slate-600 leading-relaxed text-sm"
                >
                    <p className="mb-8">
                        この利用規約（以下、「本規約」といいます。）は、WaiWai AI 株式会社（以下、「当社」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第1条（適用）</h2>
                    <p>
                        本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                        当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第2条（禁止事項）</h2>
                    <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>法令または公序良俗に違反する行為</li>
                        <li>犯罪行為に関連する行為</li>
                        <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                        <li>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                        <li>本サービスによって得られた情報を商業的に利用する行為</li>
                        <li>当社のサービスの運営を妨害するおそれのある行為</li>
                        <li>不正アクセスをし、またはこれを試みる行為</li>
                        <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                        <li>不正な目的を持って本サービスを利用する行為</li>
                        <li>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
                        <li>他のユーザーに成りすます行為</li>
                        <li>当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
                        <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                        <li>その他、当社が不適切と判断する行為</li>
                    </ul>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第3条（本サービスの提供の停止等）</h2>
                    <p className="mb-4">
                        当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                        <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                        <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                        <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                    </ul>
                    <p>当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第4条（利用制限および登録抹消）</h2>
                    <p className="mb-4">
                        当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>本規約のいずれかの条項に違反した場合</li>
                        <li>登録事項に虚偽の事実があることが判明した場合</li>
                        <li>当社からの連絡に対し、一定期間返答がない場合</li>
                        <li>本サービスについて、最終の利用から一定期間利用がない場合</li>
                        <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                    </ul>
                    <p>当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第5条（免責事項）</h2>
                    <p>
                        当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。
                        当社は、何らかの理由によって責任を負う場合にも、通常生じうる損害の範囲内かつ有料サービスにおいては代金額（継続的サービスの場合には1か月分相当額）の範囲内においてのみ賠償の責任を負うものとします。
                        当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第6条（準拠法・裁判管轄）</h2>
                    <p>
                        本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第7条（利用規約の変更）</h2>
                    <p>
                        当社は必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
                    </p>

                    <div className="mt-12 pt-8 border-t border-slate-200 text-xs text-slate-400">
                        制定日：2026年3月1日<br />
                        最終更新日：2026年3月14日
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
