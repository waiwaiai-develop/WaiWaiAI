import type { Metadata } from 'next';
import BookingPageContent from '@/page-content/booking/index';

export const metadata: Metadata = {
    title: '無料相談を予約する | WaiWai AI',
    description:
        'WaiWai AI 株式会社との無料相談をオンラインで簡単予約。AI導入・DX推進・業務効率化について、最短即日対応可能。Google Meet でお気軽にご相談ください。',
    openGraph: {
        title: '無料相談を予約する | WaiWai AI',
        description:
            'AI導入・DX推進について無料でご相談いただけます。空き枠からお好きな日時を選んでください。',
        type: 'website',
        url: 'https://waiwaiai.com/booking',
    },
    alternates: {
        canonical: 'https://waiwaiai.com/booking',
    },
};

export default function BookingPage() {
    return <BookingPageContent />;
}
