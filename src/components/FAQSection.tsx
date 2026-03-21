'use client';

import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'AIシステム開発の料金はどのくらいですか？',
    answer:
      'AIエージェント構築は30万円〜、フルスクラッチ開発は30万円〜、DX/RPA自動化は15万円〜、AI/ITコンサルティングは5万円〜となっています。要件に応じて詳細なお見積もりをご提示します。まずは無料でご相談ください。',
  },
  {
    question: 'どのような業種・業界に対応していますか？',
    answer:
      'コンサルティング、士業（法律・税理・行政書士等）、人材・マッチング業、不動産業、製造業、小売業など、幅広い業種に対応しています。特に社内ナレッジの活用や業務自動化ニーズの高い業界での実績が豊富です。',
  },
  {
    question: 'セキュリティはどうなっていますか？',
    answer:
      'Azure OpenAIやAWSの閉域網で運用し、社外秘情報の漏洩防止ガードレールを厳密に設計します。RAGシステムでは社内ドキュメントのみを参照する設計で、インターネット上の情報と混同することはありません。',
  },
  {
    question: '導入までの期間はどのくらいかかりますか？',
    answer:
      'AIエージェント構築は2-4週間、DX/RPA自動化は1-2週間、フルスクラッチ開発は要件により1-3ヶ月程度です。MVP（プロトタイプ）は最速1週間で提供可能なケースもあります。',
  },
  {
    question: '既存のシステム（Slack、kintone等）と連携できますか？',
    answer:
      'はい、可能です。Slack、Microsoft Teams、Zendesk、kintone、Salesforce、freeeなど、主要なSaaSとのAPI連携が可能です。既存ワークフローへの組み込みもスムーズに行えます。',
  },
  {
    question: 'AI導入の効果は実際にどのくらい出ますか？',
    answer:
      '導入企業様では、問い合わせ対応工数80%削減（月200時間の余白創出）、月間成約率250%向上、データ入力ミス0件化などの実績があります。ROI（投資対効果）を重視した提案を心がけています。',
  },
  {
    question: '導入後のサポートはありますか？',
    answer:
      'はい、月額10万円の「AI顧問パック」で継続的なサポートを提供しています。専属のAI専門家が戦略立案から実行まで伴走します。また、システムの保守運用サポートも行っています。',
  },
  {
    question: 'どのAIモデルを使用していますか？',
    answer:
      '主にAzure OpenAI（GPT-4等）、AWS Bedrock、Google CloudのVertex AIなど、お客様のセキュリティ要件に応じて最適なモデルを選定します。日本語での精度が高いモデルを優先的に採用しています。',
  },
];

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section id="faq" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-amber-500" />
                <span className="text-amber-600 font-bold text-xs tracking-widest uppercase">
                  FAQ
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
                よくある質問
              </h2>
              <p className="text-stone-500 max-w-2xl text-lg">
                AI導入やシステム開発について、よくいただく質問をまとめました。
                <br />
                その他のご質問はお気軽にご相談ください。
              </p>
            </motion.div>

            {/* FAQ List */}
            <div className="divide-y divide-stone-200 border-t border-stone-200">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-5 flex items-center justify-between text-left group"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-bold text-stone-900 text-base md:text-lg group-hover:text-amber-700 transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center text-stone-400 group-hover:text-amber-600 transition-colors">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-stone-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <p className="text-stone-500 mb-4">その他のご質問があればお気軽にどうぞ</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 transition-colors"
              >
                無料で相談する
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
