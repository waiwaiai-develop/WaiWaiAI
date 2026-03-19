import type { Metadata } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogPageContent from '@/page-content/blog';

export const metadata: Metadata = {
  title: 'ブログ | AI × 業界の最前線',
  description:
    '不動産・飲食・建設など各業界のAI活用事例と、AI開発の実践ノウハウを公開。WaiWai AIの技術ブログ。',
  keywords: [
    'AI活用', 'AI事例', '業務効率化', 'DX', '不動産AI', '飲食AI', '建設AI',
    'Claude Code', 'AI開発', 'AIエージェント', 'RPA', '自動化',
  ],
  openGraph: {
    title: 'ブログ | WaiWai AI',
    description: '各業界のAI活用事例と、AI開発の実践ノウハウを公開。',
    type: 'website',
  },
  alternates: {
    canonical: 'https://waiwaiai.com/blog',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'WaiWai AI Tech Blog',
  url: 'https://waiwaiai.com/blog',
  description: '各業界のAI活用事例と、AI開発の実践ノウハウを公開。',
  publisher: {
    '@type': 'Organization',
    name: 'WaiWai AI 株式会社',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = getAllCategories(posts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogPageContent posts={posts} categories={categories} />
    </>
  );
}
