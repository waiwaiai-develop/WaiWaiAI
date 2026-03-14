'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
                        プライバシーポリシー
                    </h1>
                    <p className="text-slate-500 font-medium tracking-widest text-sm">PRIVACY POLICY</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-blue-50 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.08)] prose prose-slate max-w-none text-slate-600 leading-loose"
                >
                    <p className="mb-8">
                        WaiWai AI 株式会社（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第1条（個人情報の定義）</h2>
                    <p>
                        「個人情報」とは、個人情報の保護に関する法律（以下、「個人情報保護法」といいます。）第2条第1項に定める「個人情報」を指し、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できるもの、または個人識別符号が含まれるものをいいます。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第2条（個人情報の収集方法）</h2>
                    <p>当社は、以下の場合に個人情報を取得することがあります。</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
                        <li>お問い合わせフォームからのご連絡時</li>
                        <li>サービスのお申込み・ご契約時</li>
                        <li>メール・電話等でのやり取り時</li>
                        <li>名刺交換その他の営業活動を通じた取得</li>
                        <li>本ウェブサイトの閲覧時（Cookie等による自動取得を含みます）</li>
                    </ul>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第3条（個人情報の利用目的）</h2>
                    <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>当社サービスの提供・運営のため</li>
                        <li>ユーザーからのお問い合わせに回答するため（本人確認を含む）</li>
                        <li>契約の履行、請求書の送付、代金の請求のため</li>
                        <li>サービスの新機能、更新情報、キャンペーン等のご案内のため</li>
                        <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                        <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定および利用停止のため</li>
                        <li>当社サービスの改善・新サービスの開発のため</li>
                        <li>利用状況の統計・分析のため</li>
                        <li>上記の利用目的に付随する目的</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第4条（利用目的の変更）</h2>
                    <p>
                        当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第5条（個人情報の第三者提供）</h2>
                    <p>
                        当社は、以下の場合を除き、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mt-4 mb-4">
                        <li>法令に基づく場合</li>
                        <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第6条（個人情報の委託）</h2>
                    <p>
                        当社は、利用目的の達成に必要な範囲において、個人情報の取扱いの全部または一部を外部に委託する場合があります。この場合、当社は委託先に対し、個人情報の安全管理が図られるよう適切な監督を行います。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第7条（個人情報の安全管理）</h2>
                    <p>
                        当社は、個人情報の正確性および安全性を確保するために、以下のセキュリティ対策を講じ、個人情報の漏洩、滅失またはき損の防止に努めます。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
                        <li>SSL/TLS暗号化通信の使用</li>
                        <li>アクセス権限の管理・制限</li>
                        <li>個人情報を取り扱う従業者に対する教育・研修の実施</li>
                        <li>個人情報の取扱いに関する規程の整備・運用</li>
                    </ul>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第8条（個人情報の開示・訂正・削除）</h2>
                    <p>
                        ユーザーは、当社が保有する自己の個人情報について、開示・訂正・追加・削除・利用停止または第三者提供の停止を請求することができます。ご請求があった場合、本人確認を行ったうえで、合理的な期間内に対応いたします。なお、開示等の請求に際しては、当社所定の手続きにより、本人確認のための書類をご提出いただく場合があります。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第9条（Cookie（クッキー）の使用について）</h2>
                    <p>
                        本ウェブサイトでは、ユーザーの利便性向上およびアクセス解析のためにCookieを使用する場合があります。Cookieの使用により個人を特定する情報は取得しておりません。ブラウザの設定によりCookieの受け入れを拒否することが可能ですが、その場合、本ウェブサイトの一部機能がご利用いただけない場合があります。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第10条（アクセス解析ツールの使用）</h2>
                    <p>
                        本ウェブサイトでは、Googleによるアクセス解析ツールを使用する場合があります。これらのツールはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ます。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第11条（外部サービスの利用）</h2>
                    <p>
                        当社は、本サービスの提供にあたり、以下の外部サービスを利用する場合があります。各サービスの利用にあたっては、それぞれのプライバシーポリシーが適用されます。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
                        <li>クラウドインフラサービス（AWS、Google Cloud、Azure等）</li>
                        <li>AI関連サービス（OpenAI、Anthropic等）</li>
                        <li>メール配信サービス</li>
                        <li>決済代行サービス</li>
                    </ul>
                    <p>
                        当社は、これらのサービスに個人情報を提供する場合、必要最小限の情報のみを提供し、適切な安全管理措置を講じます。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第12条（プライバシーポリシーの変更）</h2>
                    <p>
                        本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第13条（お問い合わせ窓口）</h2>
                    <p>本ポリシーに関するお問い合わせは、下記までお願いいたします。</p>
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
