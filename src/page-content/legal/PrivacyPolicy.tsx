'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
                        プライバシーポリシー
                    </h1>
                    <p className="text-slate-400 font-medium tracking-widest text-sm">PRIVACY POLICY</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl border border-blue-100 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] p-8 md:p-12 text-slate-600 leading-relaxed text-sm"
                >
                    <p className="mb-8">
                        WaiWai AI 株式会社（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第1条（個人情報）</h2>
                    <p>
                        「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報（個人識別情報）を指します。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第2条（個人情報の収集方法）</h2>
                    <p>
                        当社は、ユーザーがお問い合わせフォームをご利用される際に、氏名、会社名、メールアドレス、電話番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先から収集することがあります。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第3条（個人情報を収集・利用する目的）</h2>
                    <p className="mb-4">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>当社サービスの提供・運営のため</li>
                        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                        <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等および当社が提供する他のサービスの案内のメールを送付するため</li>
                        <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                        <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                        <li>当社サービスの改善、新サービスの開発のため</li>
                        <li>上記の利用目的に付随する目的</li>
                    </ol>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第4条（利用目的の変更）</h2>
                    <p>
                        当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第5条（個人情報の第三者提供）</h2>
                    <p className="mb-4">
                        当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                    </ul>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第6条（個人情報の安全管理）</h2>
                    <p>
                        当社は、個人情報の正確性および安全性を確保するために、セキュリティに万全の対策を講じるとともに、個人情報の漏えい、滅失またはき損の防止およびその他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第7条（個人情報の開示・訂正・削除）</h2>
                    <p>
                        ユーザーは、当社が保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第8条（Cookie等の利用）</h2>
                    <p>
                        当社のウェブサイトでは、サービスの利便性向上やアクセス解析のためにCookieおよび類似技術を使用する場合があります。ユーザーはブラウザの設定によりCookieの受け入れを拒否することができますが、その場合、一部のサービスが利用できなくなることがあります。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第9条（プライバシーポリシーの変更）</h2>
                    <p>
                        本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                    </p>

                    <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">第10条（お問い合わせ窓口）</h2>
                    <p>
                        本ポリシーに関するお問い合わせは、当社ウェブサイトの「お問い合わせ」フォームよりお願いいたします。
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
