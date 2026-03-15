import type { Metadata } from 'next';
import { Inter, Outfit, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://waiwai-ai.com'),
  icons: {
    icon: '/logo-symbol.png',
    apple: '/logo-symbol.png',
  },
  title: {
    default: 'WaiWai AI 株式会社 | AIネイティブ開発・ITコンサルティング・DX推進',
    template: '%s | WaiWai AI',
  },
  description:
    'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進・RPA自動化を一気通貫で支援。社内AIチャットボット構築、フルスクラッチ開発、業務自動化で問い合わせ工数80%削減・成約率2.5倍などの実績。最先端の技術で、あなたのビジョンを形にします。',
  keywords: [
    'AI開発', 'AIネイティブ', 'ITコンサルティング', 'DX推進', 'RAG', 'LLM', 'RPA', 
    '業務自動化', 'AIエージェント', 'チャットボット開発', '社内AI', 'Azure OpenAI',
    'システム開発', 'Next.js', 'React', 'フルスクラッチ開発', '業務効率化',
    'コスト削減', 'AI導入支援', 'DXコンサル', 'IT投資', 'デジタルトランスフォーメーション'
  ],
  authors: [{ name: 'WaiWai AI 株式会社' }],
  creator: 'WaiWai AI 株式会社',
  publisher: 'WaiWai AI 株式会社',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'WaiWai AI 株式会社',
    title: 'WaiWai AI 株式会社 | AIネイティブ開発・ITコンサルティング',
    description:
      'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進・RPA自動化を一気通貫で支援。問い合わせ工数80%削減・成約率2.5倍などの実績あり。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WaiWai AI 株式会社 - AIネイティブ開発・ITコンサルティング・DX推進',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@waiwai_ai',
    creator: '@waiwai_ai',
    title: 'WaiWai AI 株式会社 | AIネイティブ開発・ITコンサルティング',
    description:
      'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進を一気通貫で支援。最先端の技術で、あなたのビジョンを形にします。',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://waiwai-ai.com',
    languages: {
      'ja-JP': 'https://waiwai-ai.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    // Google Search Console用（設定時に追加）
    // google: 'verification-code',
  },
  category: 'technology',
  classification: 'AI開発, ITコンサルティング, システム開発',
};

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WaiWai AI 株式会社',
  alternateName: ['WaiWai AI', 'ワイワイエーアイ'],
  url: 'https://waiwai-ai.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://waiwai-ai.com/logo-horizontal.png',
    width: 400,
    height: 100,
  },
  description:
    'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進・RPA自動化を一気通貫で支援。',
  slogan: 'AIを味方に、未来を豊かに。',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '東京都',
    addressCountry: 'JP',
  },
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['Japanese'],
  },
  knowsAbout: [
    'AIシステム開発',
    'AI導入コンサルティング',
    'DX推進',
    'RPA自動化',
    'LLM',
    'RAG',
    'Azure OpenAI',
    'Next.js',
    'React',
    '業務効率化',
  ],
  areaServed: {
    '@type': 'Country',
    name: '日本',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AIソリューション',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'カスタマーサポート完全無人化（AIエージェント構築）',
          description: 'LLMとRAG技術を用いた社内専用AIチャットボット構築',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'フルスクラッチ自動化システム開発',
          description: '業務フローのボトルネックを解決するリーンなWebシステム開発',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '既存業務プロセス（DX）の自動化・RPA',
          description: 'SaaS間データ連携・定型業務の自動化',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI/ITコンサルティング',
          description: '経営層に寄り添う中立的なIT投資アドバイス',
        },
      },
    ],
  },
};

// WebSite Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WaiWai AI 株式会社',
  url: 'https://waiwai-ai.com',
  description: 'AIネイティブ開発・ITコンサルティング・DX推進のプロフェッショナル',
  inLanguage: 'ja-JP',
  publisher: {
    '@type': 'Organization',
    name: 'WaiWai AI 株式会社',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://waiwai-ai.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// LocalBusiness Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'WaiWai AI 株式会社',
  image: 'https://waiwai-ai.com/logo-horizontal.png',
  '@id': 'https://waiwai-ai.com',
  url: 'https://waiwai-ai.com',
  telephone: '',
  priceRange: '¥¥',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '東京都',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.6762,
    longitude: 139.6503,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${outfit.variable} ${notoSansJP.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
        <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-500/20 font-sans flex flex-col relative overflow-hidden">
          <div className="fixed inset-0 pointer-events-none z-[-1] bg-white"></div>
          <Navbar />
          <main className="flex-grow z-10">{children}</main>
          <Footer />
        </div>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
