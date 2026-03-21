'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

const categoryColors: Record<string, string> = {
  '不動産': 'bg-amber-100 text-amber-800',
  '飲食': 'bg-orange-100 text-orange-800',
  '建設': 'bg-stone-100 text-stone-700',
  '人材': 'bg-purple-100 text-purple-800',
  'AI活用': 'bg-stone-100 text-stone-700',
  '自動化': 'bg-sky-100 text-sky-800',
  '開発': 'bg-indigo-100 text-indigo-800',
};

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const colorClass = categoryColors[post.category] || 'bg-stone-100 text-stone-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 100, damping: 20 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
      >
        <div className="p-5 md:p-7">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${colorClass}`}>
              {post.category}
            </span>
            <span className="text-stone-400 text-sm font-mono">{post.date}</span>
            <span className="flex items-center gap-1 text-stone-400 text-sm ml-auto">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}分
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors leading-tight">
            {post.title}
          </h3>

          <p className="text-stone-600 font-medium leading-relaxed mb-4 line-clamp-2">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-stone-500 font-semibold">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center group-hover:border-amber-300 transition-all shrink-0">
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-amber-500 group-hover:rotate-45 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
