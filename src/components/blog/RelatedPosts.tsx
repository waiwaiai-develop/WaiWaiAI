import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-stone-200">
      <h2 className="text-2xl font-bold text-stone-900 mb-8">関連記事</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-stone-50 p-6 border border-stone-200 hover:border-amber-300 transition-all"
          >
            <span className="text-xs font-bold text-amber-600 mb-2 block">{post.category}</span>
            <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2 leading-tight">
              {post.title}
            </h3>
            <p className="text-sm text-stone-500 line-clamp-2 mb-3">{post.description}</p>
            <span className="flex items-center gap-1 text-sm text-amber-600 font-semibold">
              読む <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
