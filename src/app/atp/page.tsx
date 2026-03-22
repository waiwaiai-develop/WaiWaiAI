import type { Metadata } from 'next';
import ATPPageContent from '@/page-content/atp/index';

export const metadata: Metadata = {
    title: 'AI Transformation Partner（ATP）| AI部門をインストールする',
    description:
        '御社専属のAI部門を月額10万円から。大手企業でAI普及率60%を達成した実績を持つWaiWai AIが、戦略立案・AIによる自動実装・KPI計測まで一気通貫で支援。東証グロース上場企業の顧問実績あり。',
    keywords: [
        'AI顧問', 'AI導入支援', 'AI業務改善', 'DX推進', 'AI自動化',
        'AI部門', 'AIトランスフォーメーション', '業務効率化',
        '中小企業 AI', 'AI導入 費用', 'AIコンサルティング',
        'KPI自動計測', 'AI実装', '月額AI顧問',
    ],
    openGraph: {
        title: 'AI Transformation Partner | WaiWai AI',
        description:
            '御社専属のAI部門を月額10万円から。戦略・自動実装・KPI計測まで一気通貫で支援。',
        type: 'website',
    },
    alternates: {
        canonical: 'https://waiwaiai.com/atp',
    },
};

const atpSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Transformation Partner（ATP）',
    description: '御社専属のAI部門を月額で。戦略立案・AIによる自動実装・KPI計測まで一気通貫で支援するサービス。',
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
        name: 'ATP料金プラン',
        itemListElement: [
            {
                '@type': 'Offer',
                name: 'Entry',
                description: 'まず1つ、AIで変えてみる。業務診断＆AI化、月1回MTG、KPIレポート。',
                price: '100000',
                priceCurrency: 'JPY',
            },
            {
                '@type': 'Offer',
                name: 'Standard',
                description: 'AI部門を月額でレンタル。月2回MTG、月3件の自動化実装、KPIダッシュボード。',
                price: '250000',
                priceCurrency: 'JPY',
            },
            {
                '@type': 'Offer',
                name: 'Transform',
                description: '会社ごとAI化する。週1回MTG、無制限実装、社内AI推進者育成。',
                price: '500000',
                priceCurrency: 'JPY',
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
