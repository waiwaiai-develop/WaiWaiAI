import type { Metadata } from 'next';
import { Inter, Outfit, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AiAssistant from '@/components/AiAssistant';
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import GradientMesh from '@/components/GradientMesh';
import ScrollProgress from '@/components/ScrollProgress';
import TouchRipple from '@/components/TouchRipple';
import BottomFloatingNav from '@/components/BottomFloatingNav';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://waiwai-ai.com'),
  icons: {
    icon: '/logo-symbol.png',
    apple: '/logo-symbol.png',
  },
  title: {
    default: 'WaiWai AI 株式会社 | AIネイティブ開発・ITコンサルティング',
    template: '%s | WaiWai AI',
  },
  description:
    'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進を一気通貫で支援。最先端の技術で、あなたのビジョンを形にします。',
  keywords: ['AI開発', 'AIネイティブ', 'ITコンサルティング', 'DX推進', 'RAG', 'LLM', 'RPA', '業務自動化', 'AIエージェント'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'WaiWai AI',
    title: 'WaiWai AI 株式会社 | AIネイティブ開発・ITコンサルティング',
    description:
      'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進を一気通貫で支援。最先端の技術で、あなたのビジョンを形にします。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WaiWai AI 株式会社 | AIネイティブ開発・ITコンサルティング',
    description:
      'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進を一気通貫で支援。',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${outfit.variable} ${notoSansJP.variable}`}>
      <body className="bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
        {/* Futuristic overlays */}
        <CustomCursor />
        <TouchRipple />
        <ScrollProgress />
        <GradientMesh />
        <ParticleBackground />
        <div className="scanline-overlay" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        <BottomFloatingNav />

        <div className="min-h-screen flex flex-col relative z-[1]">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <AiAssistant />
        </div>

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'WaiWai AI',
              url: 'https://waiwai-ai.com',
              logo: 'https://waiwai-ai.com/logo-horizontal.png',
              description:
                'AIネイティブ開発会社。AIシステム開発・導入コンサルティング・DX推進を一気通貫で支援',
              address: {
                '@type': 'PostalAddress',
                addressLocality: '東京都',
                addressCountry: 'JP',
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
