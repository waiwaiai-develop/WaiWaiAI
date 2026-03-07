import type { Metadata } from 'next';
import TermsOfServiceContent from '@/page-content/legal/TermsOfService';

export const metadata: Metadata = {
  title: '利用規約',
  description: 'WaiWai AIの利用規約。本サービスの利用条件を定めています。',
};

export default function TermsPage() {
  return <TermsOfServiceContent />;
}
