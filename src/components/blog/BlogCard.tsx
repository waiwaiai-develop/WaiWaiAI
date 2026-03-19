'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

const categoryColors: Record<string, string> = {
  '不動産': 'bg-amber-100 text-amber-800',
  '飲食': 'bg-orange-100 text-orange-800',
  '建設': 'bg-emerald-100 text-emerald-800',
  '人材': 'bg-purple-100 text-purple-800',
  'AI活用': 'bg-blue-100 text-blue-700',
  '自動化': 'bg-sky-100 text-sky-800',
  '開発': 'bg-indigo-100 text-indigo-800',
};

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const colorClass = categoryColors[post.category] || 'bg-slate-100 text-slate-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 100, damping: 20 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-[0_4px_20px_-6px_rgba(59,130,246,0.08)] hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${colorClass}`}>
            {post.category}
          </span>
          <span className="text-slate-400 text-sm font-mono">{post.date}</span>
          <span className="flex items-center gap-1 text-slate-400 text-sm ml-auto">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}分
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
          {post.title}
        </h3>

        <p className="text-slate-600 font-medium leading-relaxed mb-4 line-clamp-2">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-slate-500 font-semibold">
                #{tag}
              </span>
            ))}
          </div>
          <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:border-blue-200 transition-all shrink-0">
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:rotate-45 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
