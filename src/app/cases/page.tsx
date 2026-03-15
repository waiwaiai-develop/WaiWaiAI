import type { Metadata } from 'next';
import CasesPageContent from '@/page-content/cases/index';

export const metadata: Metadata = {
  title: '導入事例・成功事例',
  description:
    'WaiWai AIが実際にコスト削減・売上向上（ROI）を実現したプロジェクト事例。社内ナレッジAI導入で問い合わせ工数80%削減・月200時間の余白創出、DXプラットフォーム開発で成約率2.5倍・データ入力ミス0件化など。コンサルティング、士業、人材マッチング業界での実績。',
  keywords: [
    'AI導入事例', 'AI活用事例', 'DX成功事例', 'RAG導入事例', '社内AI事例',
    '業務自動化事例', 'コスト削減事例', 'システム開発事例', 'AIチャットボット事例',
    '問い合わせ対応自動化', '業務効率化事例', 'コンサルティング業DX', '人材業DX'
  ],
  openGraph: {
    title: '導入事例・成功事例 | WaiWai AI',
    description:
      '問い合わせ工数80%削減、成約率2.5倍、月200時間の余白創出。WaiWai AIが実現したROI事例をご紹介します。',
    type: 'website',
  },
  alternates: {
    canonical: 'https://waiwai-ai.com/cases',
  },
};

// Case Studies Schema
const caseStudiesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Article',
      headline: '社内ナレッジ検索AIの導入で、問い合わせ工数を月間200時間削減',
      description: 'コンサルティング・士業（従業員300名）での社内AIチャットボット導入事例。問い合わせ対応時間80%削減、新人オンボーディング期間半減を実現。',
      author: {
        '@type': 'Organization',
        name: 'WaiWai AI 株式会社',
      },
      publisher: {
        '@type': 'Organization',
        name: 'WaiWai AI 株式会社',
        logo: {
          '@type': 'ImageObject',
          url: 'https://waiwai-ai.com/logo-horizontal.png',
        },
      },
      datePublished: '2024-01-01',
      dateModified: '2024-12-01',
      about: {
        '@type': 'Thing',
        name: 'RAG AIエージェント構築',
      },
    },
    {
      '@type': 'Article',
      headline: 'DXプラットフォーム開発で、アナログ業務を撤廃し成約率2.5倍へ',
      description: '人材マッチング業（従業員150名）でのDXプラットフォーム開発事例。月間成約率250%向上、データ入力ミス0件化を実現。',
      author: {
        '@type': 'Organization',
        name: 'WaiWai AI 株式会社',
      },
      publisher: {
        '@type': 'Organization',
        name: 'WaiWai AI 株式会社',
        logo: {
          '@type': 'ImageObject',
          url: 'https://waiwai-ai.com/logo-horizontal.png',
        },
      },
      datePublished: '2024-01-01',
      dateModified: '2024-12-01',
      about: {
        '@type': 'Thing',
        name: 'フルスクラッチ開発',
      },
    },
  ],
};

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudiesSchema),
        }}
      />
      <CasesPageContent />
    </>
  );
}
