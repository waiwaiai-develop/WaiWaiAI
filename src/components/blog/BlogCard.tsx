'use client';

import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPost; index: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex min-h-[240px] min-w-0 flex-col justify-between border-b border-slate-200 bg-white p-5 transition hover:bg-blue-50/40 md:min-h-[260px] md:border-r md:p-7"
    >
      <div className="min-w-0">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-black text-slate-500">
          <span className="text-blue-700">{post.category}</span>
          <span>{post.date}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}分
          </span>
        </div>

        <h3 className="break-words text-xl font-black leading-tight tracking-tight text-slate-950 transition-colors group-hover:text-blue-700 md:text-2xl">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm font-medium leading-7 text-slate-600">
          {post.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex min-w-0 flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs font-bold text-slate-500">
              #{tag}
            </span>
          ))}
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-blue-700">
          読む
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
        </div>
    </Link>
  );
}
