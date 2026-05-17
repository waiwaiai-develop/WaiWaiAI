import type { Metadata } from 'next';
import ATPPageContent from '@/page-content/atp/index';

export const metadata: Metadata = {
    title: 'AI活用メソッド',
    description:
        'WaiWai AIのAI導入支援プロセスと考え方。現場の課題を起点に、小さく実装し、運用にのせるAI活用メソッドを紹介します。',
    keywords: [
        'AI顧問', 'AI導入支援', 'AI業務改善', 'DX推進', 'AI自動化',
        'AI部門', 'AIトランスフォーメーション', '業務効率化',
        '中小企業 AI', 'AI導入 費用', 'AIコンサルティング',
        'KPI自動計測', 'AI実装', '月額AI顧問',
    ],
    openGraph: {
        title: 'AI活用メソッド | WaiWai AI',
        description:
            '現場の課題を起点に、小さく実装し、運用にのせるWaiWai AIのAI活用メソッド。',
        type: 'website',
        url: 'https://waiwaiai.com/atp',
    },
    alternates: {
        canonical: 'https://waiwaiai.com/atp',
    },
};

const atpSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI活用メソッド',
    description: '現場の課題を起点に、小さくAIを実装し、運用に定着させる導入支援プロセス。',
    provider: {
        '@type': 'Organization',
        name: 'WaiWai AI 株式会社',
    },
    areaServed: {
        '@type': 'Country',
        name: '日本',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI導入支援プロセス',
        itemListElement: [
            {
                '@type': 'Offer',
                name: '課題整理',
                description: '現場の業務を棚卸しし、AI化できる候補を整理する。',
            },
            {
                '@type': 'Offer',
                name: '小さな実装',
                description: '効果が見えやすい業務からAI化し、現場で使える形にする。',
            },
            {
                '@type': 'Offer',
                name: '運用定着',
                description: 'ルール、担当者、改善サイクルを整え、使われ続けるAIにする。',
            },
        ],
    },
};

export default function ATPPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(atpSchema),
                }}
            />
            <ATPPageContent />
        </>
    );
}
