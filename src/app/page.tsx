import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Services from '@/components/Services';
import ProductsSection from '@/components/ProductsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'AIネイティブ開発・ITコンサルティング・DX推進 | WaiWai AI 株式会社',
  description:
    'AIネイティブ開発のプロフェッショナル。AIシステム開発（30万円〜）、AI導入コンサルティング（5万円〜）、DX・RPA自動化（15万円〜）で確実なコスト削減と売上向上を実現。社内AIチャットボット構築で問い合わせ工数80%削減・月200時間の余白創出、システム開発で成約率2.5倍などの実績。Azure OpenAI、Next.js、React、AWS対応。東京都。',
  keywords: [
    'AI開発', 'AIネイティブ', 'ITコンサルティング', 'DX推進', 'RAG', 'LLM', 'RPA',
    '業務自動化', 'AIエージェント', 'チャットボット開発', '社内AI', 'Azure OpenAI',
    'システム開発', 'Next.js', 'React', 'フルスクラッチ開発', '業務効率化',
    'コスト削減', 'AI導入支援', '東京', 'AIシステム開発会社'
  ],
  openGraph: {
    title: 'WaiWai AI 株式会社 | AIネイティブ開発・ITコンサルティング・DX推進',
    description:
      'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進・RPA自動化を一気通貫で支援。問い合わせ工数80%削減・成約率2.5倍などの実績あり。',
    type: 'website',
  },
  alternates: {
    canonical: 'https://waiwai-ai.com',
  },
};

// HomePage Schema
const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'WaiWai AI 株式会社 | AIネイティブ開発・ITコンサルティング',
  description:
    'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進・RPA自動化を一気通貫で支援。',
  url: 'https://waiwai-ai.com',
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
      <PainPoints />
      <Services />
      <ProductsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
