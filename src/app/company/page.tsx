import type { Metadata } from 'next';
import CompanyPageContent from '@/page-content/CompanyPage';

export const metadata: Metadata = {
  title: '会社概要',
  description:
    'WaiWai AIの会社概要。「AIを味方に、未来を豊かに。」をミッションに、AIシステム開発・ITコンサルティング・DX推進を一気通貫で支援します。',
  openGraph: {
    title: '会社概要 | WaiWai AI',
    description:
      '「AIを味方に、未来を豊かに。」WaiWai AIの会社情報・ミッション・事業内容をご紹介します。',
  },
};

export default function CompanyPage() {
  return <CompanyPageContent />;
}
