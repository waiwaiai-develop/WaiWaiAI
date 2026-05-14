'use client';

import { useState } from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import CategoryFilter from '@/components/blog/CategoryFilter';
import type { BlogPost } from '@/lib/blog';

interface BlogPageProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogPageContent({ posts, categories }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filtered = selectedCategory
    ? posts.filter((p) => p.category === selectedCategory)
    : posts;
  const featuredPost = filtered[0];
  const listPosts = filtered.slice(1);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,99,235,0.045)_1px,transparent_1px),linear-gradient(0deg,rgba(37,99,235,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-50 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-120px] top-24 hidden h-80 w-80 lg:block" aria-hidden="true">
        <img src="/brand/logo-symbol.png" alt="" className="h-full w-full object-contain opacity-[0.06]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-0">
        <section className="grid min-w-0 gap-10 border-b border-slate-200 pb-10 md:grid-cols-[0.9fr_1.1fr] md:items-end md:pb-14">
          <div className="min-w-0">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-blue-700 sm:mb-5 sm:text-[11px]">Knowledge</p>
            <h1 className="text-[40px] font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[56px]">
              AI活用を、
              <br />
              現場目線で
              <br />
              読み解く。
            </h1>
          </div>
          <div className="min-w-0 border-l-0 border-slate-200 md:border-l md:pl-10">
            <p className="max-w-xl text-sm font-bold leading-7 text-slate-800 sm:text-base sm:leading-8">
              業界別のAI活用、業務自動化、実装の考え方をまとめています。ツール紹介ではなく、現場でどう使うかを軸に整理します。
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-black text-slate-700">
              {['業界別AI活用', '業務自動化', '実装メモ'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/75 px-3 py-2">
                  <BookOpen className="h-4 w-4 text-blue-700" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {featuredPost && (
          <section className="mb-8 grid min-w-0 gap-4 md:mb-10 md:grid-cols-[0.92fr_1.08fr] md:items-stretch md:gap-6">
            <div className="min-w-0 rounded-lg bg-slate-950 p-5 text-white md:p-8">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-200">Latest Note</p>
              <h2 className="mt-5 text-2xl font-black leading-tight tracking-tight md:text-4xl">
                最新の記事
              </h2>
              <p className="mt-4 text-sm font-medium leading-7 text-blue-100/80 md:max-w-sm">
                まず読んでほしい記事を大きく表示しています。
              </p>
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group flex min-h-[240px] min-w-0 flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-[0_24px_80px_-70px_rgba(15,23,42,0.75)] transition hover:-translate-y-0.5 hover:border-blue-200 md:min-h-[260px] md:p-8"
            >
              <div className="min-w-0">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-black text-slate-500">
                  <span className="text-blue-700">{featuredPost.category}</span>
                  <span>{featuredPost.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readingTime}分
                  </span>
                </div>
                <h3 className="break-words text-2xl font-black leading-tight tracking-tight text-slate-950 transition group-hover:text-blue-700 md:text-3xl">
                  {featuredPost.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-sm font-medium leading-7 text-slate-600">
                  {featuredPost.description}
                </p>
              </div>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-blue-700">
                記事を読む
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          </section>
        )}

        {listPosts.length > 0 && (
          <section>
            <div className="mb-4 flex items-end justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl font-black tracking-tight text-slate-950">記事一覧</h2>
              <p className="text-xs font-black text-slate-500">{filtered.length}件</p>
            </div>
            <div className="grid grid-cols-1 gap-0 border-y border-slate-200 md:grid-cols-2 md:border-l">
              {listPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </section>
        )}

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-slate-500">
              このカテゴリの記事はまだありません
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
