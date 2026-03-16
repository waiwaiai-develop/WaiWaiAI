'use client';

import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
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
      <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <span className="inline-block py-1.5 px-4 rounded-full glass text-slate-700 font-bold text-xs tracking-wider uppercase mb-6">
                FAQ
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                よくある質問
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                AI導入やシステム開発について、よくいただく質問をまとめました。
                <br />
                その他のご質問はお気軽にご相談ください。
              </p>
            </motion.div>

            {/* FAQ List - ガラススタイル */}
            <div className="space-y-4">
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
                  className="glass-card border border-white/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/20 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                        <HelpCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-bold text-slate-900 text-base md:text-lg">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pl-20">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
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
              <p className="text-slate-500 mb-4">その他のご質問があればお気軽にどうぞ</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-[0_8px_24px_-4px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_32px_-4px_rgba(37,99,235,0.5)]"
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