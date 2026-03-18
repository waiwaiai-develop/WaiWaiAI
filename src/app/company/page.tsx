import type { Metadata } from 'next';
import CompanyPageContent from '@/page-content/CompanyPage';

export const metadata: Metadata = {
  title: '会社概要・企業情報',
  description:
    'WaiWai AI 株式会社の会社概要。「AIを味方に、未来を豊かに。」をミッションに、AIシステム開発・ITコンサルティング・DX推進を一気通貫で支援。東京都を拠点とするAIネイティブ開発会社。',
  keywords: [
    'WaiWai AI', 'ワイワイエーアイ', 'AI開発会社', 'システム開発会社', 
    'ITコンサルティング会社', 'DX推進', '東京都', 'AI企業'
  ],
  openGraph: {
    title: '会社概要・企業情報 | WaiWai AI',
    description:
      '「AIを味方に、未来を豊かに。」WaiWai AIの会社情報・ミッション・事業内容をご紹介します。',
    type: 'website',
  },
  alternates: {
    canonical: 'https://waiwai-ai.com/company',
  },
};

// AboutPage Schema
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: '会社概要・企業情報',
  description: 'WaiWai AI 株式会社の会社情報、ミッション、事業内容について',
  url: 'https://waiwai-ai.com/company',
  mainEntity: {
    '@type': 'Organization',
    name: 'WaiWai AI 株式会社',
    alternateName: 'WaiWai AI',
    description: 'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進を一気通貫で支援。',
    url: 'https://waiwai-ai.com',
    logo: 'https://waiwai-ai.com/logo-horizontal.png',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      postalCode: '150-0043',
      addressRegion: '東京都',
      addressLocality: '渋谷区',
      streetAddress: '道玄坂１丁目１０−８ 渋谷道玄坂東急ビル 2F-C',
      addressCountry: 'JP',
    },
    slogan: 'AIを味方に、未来を豊かに。',
    knowsAbout: [
      'AIシステム開発',
      'AI導入コンサルティング',
      'DX推進',
      'RPA自動化',
      'LLM',
      'RAG',
    ],
  },
};

export default function CompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <CompanyPageContent />
    </>
  );
}
