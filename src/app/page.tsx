import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'AI Hospitality | WaiWai AI 株式会社',
  description:
    'AIを味方に、未来を豊かに。WaiWai AIは、AI導入・業務自動化・社内AI活用を、空間コンシェルジュNaluとともに静かに進めるAI Hospitality体験として届けます。',
  keywords: [
    'AI開発', 'AIネイティブ', 'ITコンサルティング', 'DX推進', 'RAG', 'LLM', 'RPA',
    '業務自動化', 'AIエージェント', 'チャットボット開発', '社内AI', 'Azure OpenAI',
    'システム開発', 'Next.js', 'React', 'フルスクラッチ開発', '業務効率化',
    'コスト削減', 'AI導入支援', '東京', 'AIシステム開発会社',
    '中小企業 AI導入', 'AI活用 コンサルティング', 'AI業務効率化', 'DX推進 中小企業',
    'AI顧問', 'AIトランスフォーメーション', '中小企業向けAI'
  ],
  openGraph: {
    title: 'WaiWai AI 株式会社 | AI Hospitality',
    description:
      'AIをツールではなく、寄り添う存在として設計するWaiWai AIの新しいAI Hospitality体験。',
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
  name: 'WaiWai AI 株式会社 | AI Hospitality',
  description:
    'AIを味方に、未来を豊かに。AI導入・業務自動化・社内AI活用を、寄り添う体験として届けるAI Hospitalityサイト。',
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
    </>
  );
}
