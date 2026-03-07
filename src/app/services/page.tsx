import type { Metadata } from 'next';
import ServicesPageContent from '@/page-content/services/index';

export const metadata: Metadata = {
  title: 'ソリューション',
  description:
    'AIエージェント構築、フルスクラッチ開発、DX・RPA自動化、AI/ITコンサルティング。WaiWai AIが提供する4つのソリューションで、確実なコスト削減と売上向上を実現します。',
  openGraph: {
    title: 'ソリューション | WaiWai AI',
    description:
      'AIエージェント構築、フルスクラッチ開発、DX自動化、AI/ITコンサルティング。確実なROIを実現する4つのソリューション。',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
