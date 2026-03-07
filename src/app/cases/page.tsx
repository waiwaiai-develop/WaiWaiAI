import type { Metadata } from 'next';
import CasesPageContent from '@/page-content/cases/index';

export const metadata: Metadata = {
  title: '導入事例',
  description:
    'WaiWai AIが実際にコスト削減・売上向上（ROI）を実現したプロジェクト事例。社内ナレッジAI導入で問い合わせ工数80%削減、DXプラットフォーム開発で成約率2.5倍など。',
  openGraph: {
    title: '導入事例 | WaiWai AI',
    description:
      '問い合わせ工数80%削減、成約率2.5倍。WaiWai AIが実現したROI事例をご紹介します。',
  },
};

export default function CasesPage() {
  return <CasesPageContent />;
}
