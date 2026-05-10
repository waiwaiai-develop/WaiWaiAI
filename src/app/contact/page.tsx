import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
    title: 'お問い合わせ | WaiWai AI',
    description:
        'WaiWai AIへの通常お問い合わせページです。AI導入、業務自動化、AIシステム開発、協業などについて文章でお問い合わせいただけます。',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <main className="bg-white pt-20">
            <ContactSection />
        </main>
    );
}
