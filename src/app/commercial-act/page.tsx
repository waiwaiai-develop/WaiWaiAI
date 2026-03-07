import type { Metadata } from 'next';
import CommercialActContent from '@/page-content/legal/CommercialAct';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: 'WaiWai AIの特定商取引法に基づく表記。販売業者情報・支払方法等を記載しています。',
};

export default function CommercialActPage() {
  return <CommercialActContent />;
}
