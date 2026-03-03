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
                        WaiWai AI（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第1条（個人情報）</h2>
                    <p>
                        「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報（個人識別情報）を指します。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第2条（個人情報の収集方法）</h2>
                    <p>
                        当社は、ユーザーが利用登録やお問い合わせをする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。）などから収集することがあります。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第3条（個人情報を収集・利用する目的）</h2>
                    <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                        <li>当社サービスの提供・運営のため</li>
                        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                        <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                        <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                        <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                        <li>上記の利用目的に付随する目的</li>
                    </ol>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第4条（利用目的の変更）</h2>
                    <p>
                        当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第5条（個人情報の第三者提供）</h2>
                    <p>
                        当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
                        <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                    </ul>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第6条（プライバシーポリシーの変更）</h2>
                    <p>
                        本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-blue-100 pb-2">第7条（お問い合わせ窓口）</h2>
                    <p>
                        本ポリシーに関するお問い合わせは、Webサイトの「お問い合わせ」フォームよりお願いいたします。
                    </p>

                    <div className="mt-12 pt-8 border-t border-slate-100 text-sm text-slate-400 font-medium">
                        制定日：2026年3月1日
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
