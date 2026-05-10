import type { Metadata } from 'next';
import BookingCancelContent from '@/page-content/booking/cancel';

export const metadata: Metadata = {
    title: '予約のキャンセル | WaiWai AI',
    robots: { index: false, follow: false },
};

export default function BookingCancelPage() {
    return <BookingCancelContent />;
}
