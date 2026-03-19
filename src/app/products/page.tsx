import type { Metadata } from 'next';
import ProductsPageContent from '@/page-content/products';

export const metadata: Metadata = {
  title: 'デジタル商品',
  description:
    'WaiWai AIが実際に使っているテンプレートやAI活用ノウハウをパッケージ化したデジタル商品。CLAUDE.mdテンプレセット、Obsidian × AI ナレッジ管理テンプレ、不動産AI活用ガイドなど。',
  keywords: [
    'AI テンプレート', 'Claude Code テンプレート', 'Obsidian AI', 'AI活用ガイド',
    '不動産 AI', 'デジタル商品', 'AI開発 ツール',
  ],
  openGraph: {
    title: 'デジタル商品 | WaiWai AI',
    description: 'AI時代の実戦テンプレートとノウハウをパッケージ化。',
    type: 'website',
  },
  alternates: {
    canonical: 'https://waiwai-ai.com/products',
  },
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
