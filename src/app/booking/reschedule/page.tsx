import type { Metadata } from 'next';
import { Suspense } from 'react';
import BookingRescheduleContent from '@/page-content/booking/reschedule';

export const metadata: Metadata = {
    title: '予約の日程変更 | WaiWai AI',
    robots: { index: false, follow: false },
};

export default function BookingReschedulePage() {
    return (
        <Suspense fallback={null}>
            <BookingRescheduleContent />
        </Suspense>
    );
}
