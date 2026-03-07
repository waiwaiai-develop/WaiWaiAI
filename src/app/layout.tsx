import type { Metadata } from 'next';
import { Inter, Outfit, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  title: {
    default: 'WaiWai AI | AIシステム開発・ITコンサルティング',
    template: '%s | WaiWai AI',
  },
  description:
    'WaiWai AIは、AIシステム開発・ITコンサルティング・DX推進を一気通貫で支援するテクノロジーパートナーです。LLM/RAGを活用した業務自動化で、確実なROIを実現します。',
  keywords: ['AI開発', 'ITコンサルティング', 'DX推進', 'RAG', 'LLM', 'RPA', '業務自動化', 'AIエージェント'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'WaiWai AI',
    title: 'WaiWai AI | AIシステム開発・ITコンサルティング',
    description:
      'AIシステム開発・ITコンサルティング・DX推進を一気通貫で支援。LLM/RAGを活用した業務自動化で確実なROIを実現します。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WaiWai AI | AIシステム開発・ITコンサルティング',
    description:
      'AIシステム開発・ITコンサルティング・DX推進を一気通貫で支援。確実なROIを実現するテクノロジーパートナー。',
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
        <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-500/20 font-sans flex flex-col relative overflow-hidden">
          <div className="fixed inset-0 pointer-events-none z-[-1] bg-white"></div>
          <Navbar />
          <main className="flex-grow z-10">{children}</main>
          <Footer />
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
              logo: 'https://waiwai-ai.com/logo.png',
              description:
                'AIシステム開発・ITコンサルティング・DX推進を一気通貫で支援するテクノロジーパートナー',
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
