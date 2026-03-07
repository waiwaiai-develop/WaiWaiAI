import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/page-content/legal/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'WaiWai AIのプライバシーポリシー。個人情報の取扱いについて定めています。',
};

export default function PrivacyPage() {
  return <PrivacyPolicyContent />;
}
