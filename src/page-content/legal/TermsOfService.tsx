'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
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
                        利用規約
                    </h1>
                    <p className="text-slate-500 font-medium tracking-widest text-sm">TERMS OF SERVICE</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-blue-50 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] prose prose-slate max-w-none text-slate-600 leading-loose"
                >
                    <p className="mb-8">
                        この利用規約（以下、「本規約」といいます。）は、WaiWai AI 株式会社（以下、「当社」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に同意のうえ、本サービスをご利用いただきます。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第1条（適用）</h2>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                        <li>当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。</li>
                        <li>本規約の規定と個別規定の規定が矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第2条（サービス内容）</h2>
                    <p>当社は、以下のサービスを提供します。各サービスの詳細な内容・仕様は、個別契約書または当社ウェブサイトの記載に従うものとします。</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
                        <li>AIシステム・プロダクトの企画・設計・開発（受託開発）</li>
                        <li>AI導入コンサルティング・技術顧問サービス</li>
                        <li>業務自動化（RPA・GAS・DX推進）</li>
                        <li>AI研修・リテラシー向上支援</li>
                        <li>その他、当社が随時提供するサービス</li>
                    </ul>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第3条（禁止事項）</h2>
                    <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
                        <li>法令または公序良俗に違反する行為</li>
                        <li>犯罪行為に関連する行為</li>
                        <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                        <li>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                        <li>本サービスによって得られた情報を、当社の許諾なく商業的に利用する行為</li>
                        <li>当社のサービスの運営を妨害するおそれのある行為</li>
                        <li>不正アクセスをし、またはこれを試みる行為</li>
                        <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                        <li>不正な目的を持って本サービスを利用する行為</li>
                        <li>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
                        <li>他のユーザーに成りすます行為</li>
                        <li>当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
                        <li>リバースエンジニアリング、逆コンパイル、逆アセンブルその他の方法で本サービスのソースコードを解析する行為</li>
                        <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                        <li>その他、当社が不適切と判断する行為</li>
                    </ul>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第4条（知的財産権）</h2>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>本サービスおよび本ウェブサイトに関する著作権、商標権、特許権その他の知的財産権は、当社または正当な権利を有する第三者に帰属します。</li>
                        <li>受託開発により作成された成果物の知的財産権の帰属については、個別契約書に定めるものとします。個別契約書に定めのない場合は、当社に帰属するものとします。</li>
                        <li>当社が開発に使用した汎用的なツール、ライブラリ、ノウハウ、アルゴリズム等（以下、「汎用的成果物」といいます。）の知的財産権は、個別契約の定めにかかわらず当社に留保されるものとします。</li>
                        <li>ユーザーは、当社の事前の書面による承諾なく、本サービスに関する知的財産権を使用し、または第三者に使用させてはなりません。</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第5条（秘密保持）</h2>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>ユーザーおよび当社は、本サービスの利用に際して相手方から開示を受けた技術上、営業上その他の秘密情報（以下、「秘密情報」といいます。）を、相手方の事前の書面による承諾なく第三者に開示・漏洩してはなりません。</li>
                        <li>前項にかかわらず、以下のいずれかに該当する情報は秘密情報に含まれないものとします。
                            <ul className="list-disc pl-6 space-y-1 mt-2">
                                <li>開示を受けた時点で既に公知であった情報</li>
                                <li>開示を受けた後、自己の責めによらず公知となった情報</li>
                                <li>開示を受けた時点で既に自己が保有していた情報</li>
                                <li>正当な権限を有する第三者から秘密保持義務を負うことなく適法に取得した情報</li>
                                <li>秘密情報を利用することなく独自に開発した情報</li>
                            </ul>
                        </li>
                        <li>本条の義務は、本サービスの利用終了後も3年間存続するものとします。</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第6条（本サービスの提供の停止等）</h2>
                    <p>
                        当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
                        <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                        <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                        <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                        <li>感染症の蔓延、戦争、テロ、暴動、労働争議その他の不可抗力が発生した場合</li>
                        <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                    </ul>
                    <p>当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第7条（利用制限および登録抹消）</h2>
                    <p>
                        当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
                        <li>本規約のいずれかの条項に違反した場合</li>
                        <li>登録事項に虚偽の事実があることが判明した場合</li>
                        <li>当社からの連絡に対し、一定期間返答がない場合</li>
                        <li>本サービスについて、最終の利用から一定期間利用がない場合</li>
                        <li>支払い期日を過ぎてもなお料金の支払いがない場合</li>
                        <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                    </ul>
                    <p>当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第8条（保証の否認および免責事項）</h2>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                        <li>当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。</li>
                        <li>当社は、何らかの理由によって責任を負う場合にも、通常生じうる損害の範囲内かつ有料サービスにおいては代金額（継続的サービスの場合には直近1か月分相当額）の範囲内においてのみ賠償の責任を負うものとします。</li>
                        <li>当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第9条（損害賠償）</h2>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>ユーザーが本規約に違反し、当社に損害を与えた場合、ユーザーは当社に対して当該損害（弁護士費用を含む）を賠償する責任を負うものとします。</li>
                        <li>当社がユーザーに対して損害賠償責任を負う場合、その賠償額は、当該損害の直接の原因となったサービスについてユーザーが当社に支払った対価の総額を上限とします。ただし、当社の故意または重過失による場合はこの限りではありません。</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第10条（個人情報の取扱い）</h2>
                    <p>
                        当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第11条（反社会的勢力の排除）</h2>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>ユーザーは、現在および将来にわたり、自らが暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋、社会運動等標ぼうゴロ、特殊知能暴力集団その他これらに準ずる者（以下、「反社会的勢力」といいます。）に該当しないことを表明し、保証するものとします。</li>
                        <li>当社は、ユーザーが反社会的勢力に該当すると判明した場合、催告なしに本サービスの利用を停止し、契約を解除することができるものとします。この場合、ユーザーに生じた損害について当社は一切の責任を負いません。</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第12条（権利義務の譲渡の禁止）</h2>
                    <p>
                        ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第13条（利用規約の変更）</h2>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</li>
                        <li>変更後の利用規約は、当社ウェブサイトに掲載したときから効力を生じるものとします。</li>
                        <li>本規約の変更後、本サービスの利用を継続した場合には、当該ユーザーは変更後の規約に同意したものとみなします。</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第14条（分離可能性）</h2>
                    <p>
                        本規約のいずれかの条項またはその一部が、法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定および一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第15条（準拠法・管轄裁判所）</h2>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                        <li>本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第16条（お問い合わせ窓口）</h2>
                    <p>本規約に関するお問い合わせは、下記までお願いいたします。</p>
                    <div className="mt-4 p-4 bg-slate-50 rounded-xl">
                        <p className="font-bold text-slate-900">WaiWai AI 株式会社</p>
                        <p>代表取締役：久保田慧</p>
                        <p>メールアドレス：kei.kubota@waiwaiai.com</p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100 text-sm text-slate-400 font-medium">
                        <p>制定日：2025年1月23日</p>
                        <p>最終改定日：2026年3月15日</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
