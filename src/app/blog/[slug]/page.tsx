import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import BlogHeader from '@/components/blog/BlogHeader';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogCTA from '@/components/blog/BlogCTA';

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: `${post.title} | WaiWai AI`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['WaiWai AI 株式会社'],
      tags: post.tags,
      images: post.image ? [{ url: post.image, width: 1200, height: 630 }] : undefined,
    },
    alternates: {
      canonical: `https://waiwaiai.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const mod = await import(`@/content/blog/${slug}.mdx`);
  const Content = mod.default;
  const related = await getRelatedPosts(slug, post.category, post.tags);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: post.image ? `https://waiwaiai.com${post.image}` : undefined,
    author: {
      '@type': 'Organization',
      name: 'WaiWai AI 株式会社',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WaiWai AI 株式会社',
      logo: {
        '@type': 'ImageObject',
        url: 'https://waiwaiai.com/logo-horizontal.png',
      },
    },
    mainEntityOfPage: `https://waiwaiai.com/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="pt-24 md:pt-32 pb-24 bg-white border-t border-stone-200 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl mx-auto lg:mx-0 overflow-hidden">
              <BlogHeader post={post} />
              <div>
                <Content />
              </div>
              <BlogCTA />
              <RelatedPosts posts={related} />
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <TableOfContents />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
