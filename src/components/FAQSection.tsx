'use client';

import { motion, AnimatePresence } from 'framer-motion';
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
              <span className="inline-block py-1.5 px-4 rounded-full glass-shimmer text-blue-700 font-bold text-xs tracking-wider uppercase mb-6 border border-blue-200/40">
                FAQ
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                よくある質問
              </h2>
              <p className="text-slate-700 max-w-2xl mx-auto text-lg">
                AI導入やシステム開発について、よくいただく質問をまとめました。
                <br />
                その他のご質問はお気軽にご相談ください。
              </p>
            </motion.div>

            {/* FAQ List */}
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
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
                    className={`glass-card border overflow-hidden rounded-2xl transition-all duration-300 ${
                      isOpen
                        ? 'border-blue-300/60 shadow-[0_8px_32px_-8px_rgba(37,99,235,0.18)]'
                        : 'border-white/50 hover:border-blue-200/50'
                    }`}
                  >
                    {/* Active left border indicator */}
                    <div className={`flex transition-all duration-300 ${isOpen ? 'border-l-4 border-blue-400' : 'border-l-4 border-transparent'}`}>
                      <div className="flex-1">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/20 transition-colors duration-200"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-100/60 backdrop-blur-sm' : 'glass'}`}>
                              <HelpCircle className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-blue-500'}`} />
                            </div>
                            <span className="font-bold text-slate-900 text-base md:text-lg">
                              {faq.question}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 ml-4 ${
                              isOpen ? 'rotate-180 text-blue-500' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="answer"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 pl-20">
                                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <p className="text-slate-600 mb-4">その他のご質問があればお気軽にどうぞ</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_28px_-4px_rgba(37,99,235,0.45)] hover:shadow-[0_14px_40px_-4px_rgba(37,99,235,0.60)] hover:-translate-y-0.5"
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
