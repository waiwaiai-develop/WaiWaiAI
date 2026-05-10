import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ROISimulator from '@/components/ROISimulator';
import HomeUseCases from '@/components/home/HomeUseCases';
import HomeCaseStudy from '@/components/home/HomeCaseStudy';
import HomeTechnology from '@/components/home/HomeTechnology';

export const metadata: Metadata = {
  title: 'AIネイティブ開発・ITコンサルティング・DX推進 | WaiWai AI 株式会社',
  description:
    '中小企業のAI導入・業務効率化を支援するAIネイティブ開発会社。AI活用コンサルティング（5万円〜）、AIシステム開発（30万円〜）、DX・RPA自動化（15万円〜）で確実なROI実現。IT人材不在でも安心。問い合わせ工数80%削減・成約率2.5倍などの実績。AI顧問として月額対応も可能。東京都。',
  keywords: [
    'AI開発', 'AIネイティブ', 'ITコンサルティング', 'DX推進', 'RAG', 'LLM', 'RPA',
    '業務自動化', 'AIエージェント', 'チャットボット開発', '社内AI', 'Azure OpenAI',
    'システム開発', 'Next.js', 'React', 'フルスクラッチ開発', '業務効率化',
    'コスト削減', 'AI導入支援', '東京', 'AIシステム開発会社',
    '中小企業 AI導入', 'AI活用 コンサルティング', 'AI業務効率化', 'DX推進 中小企業',
    'AI顧問', 'AIトランスフォーメーション', '中小企業向けAI'
  ],
  openGraph: {
    title: 'WaiWai AI 株式会社 | 中小企業のAI導入・DX推進支援',
    description:
      '中小企業のAI導入・業務効率化を支援するAIネイティブ開発会社。AI活用コンサルティング・AIシステム開発・RPA自動化を一気通貫で提供。IT人材不在でも対応可能。',
    type: 'website',
    url: 'https://waiwaiai.com',
  },
  alternates: {
    canonical: 'https://waiwaiai.com',
  },
};

// HomePage Schema
const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'WaiWai AI 株式会社 | AIネイティブ開発・ITコンサルティング',
  description:
    'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進・RPA自動化を一気通貫で支援。',
  url: 'https://waiwaiai.com',
  mainEntity: {
    '@type': 'Organization',
    name: 'WaiWai AI 株式会社',
  },
  offers: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'AI開発・ITコンサルティングサービス',
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      <Hero />
      <HomeUseCases />
      <HomeCaseStudy />
      <ROISimulator />
      <HomeTechnology />
    </>
  );
}
