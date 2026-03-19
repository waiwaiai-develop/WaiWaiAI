import type { Metadata } from 'next';
import ServicesPageContent from '@/page-content/services/index';

export const metadata: Metadata = {
  title: 'サービス・ソリューション',
  description:
    'AIエージェント構築（30万円〜）、フルスクラッチ開発（30万円〜）、DX・RPA自動化（15万円〜）、AI/ITコンサルティング（5万円〜）。WaiWai AIが提供する4つのソリューションで、問い合わせ工数80%削減・成約率2.5倍などの確実なコスト削減と売上向上（ROI）を実現します。Azure OpenAI、React/Next.js、AWS対応。',
  keywords: [
    'AIエージェント構築', 'AIチャットボット開発', 'RAG', 'LLM', 'Azure OpenAI',
    'フルスクラッチ開発', 'Webシステム開発', 'Next.js開発', 'React開発',
    'RPA自動化', 'DX推進', '業務自動化', 'SaaS連携', 'API連携',
    'AIコンサルティング', 'ITコンサルティング', 'DXコンサル', 'IT投資',
    '社内AI', 'カスタマーサポート自動化', 'コスト削減', '業務効率化'
  ],
  openGraph: {
    title: 'サービス・ソリューション | WaiWai AI',
    description:
      'AIエージェント構築、フルスクラッチ開発、DX自動化、AI/ITコンサルティング。問い合わせ工数80%削減・成約率2.5倍など確実なROIを実現する4つのソリューション。',
    type: 'website',
  },
  alternates: {
    canonical: 'https://waiwaiai.com/services',
  },
};

// Service Schema for this page
const servicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI開発・ITコンサルティング',
  provider: {
    '@type': 'Organization',
    name: 'WaiWai AI 株式会社',
  },
  areaServed: {
    '@type': 'Country',
    name: '日本',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AIソリューション・サービス一覧',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'カスタマーサポート完全無人化（AIエージェント構築）',
          description: '最新のLLMとRAG技術を用いた社内専用AIチャットボット構築。24時間365日即時対応で人件費最大80%削減。',
          url: 'https://waiwaiai.com/services#ai-solutions',
        },
        price: '300000',
        priceCurrency: 'JPY',
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'フルスクラッチ自動化システム開発',
          description: '業務フローのボトルネックを解決するリーンなWebシステム開発。MVP最速1週間提供。',
          url: 'https://waiwaiai.com/services#system-development',
        },
        price: '300000',
        priceCurrency: 'JPY',
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '既存業務プロセス（DX）の自動化・RPA',
          description: 'SaaS間データ連携・定型業務の自動化。作業時間90%削減、ヒューマンエラー完全排除。',
          url: 'https://waiwaiai.com/services#dx-automation',
        },
        price: '150000',
        priceCurrency: 'JPY',
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI/ITコンサルティング',
          description: '経営層に寄り添う中立的なIT投資アドバイス。無駄なSaaS解約で数百万〜数千万の利益改善。',
          url: 'https://waiwaiai.com/services#consulting',
        },
        price: '50000',
        priceCurrency: 'JPY',
        priceValidUntil: '2026-12-31',
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicePageSchema),
        }}
      />
      <ServicesPageContent />
    </>
  );
}
