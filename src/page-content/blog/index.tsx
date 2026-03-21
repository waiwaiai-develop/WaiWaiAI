'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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

  return (
    <div className="pt-24 md:pt-32 pb-24 relative min-h-screen bg-white overflow-hidden">
      <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent z-0" />
      <div className="absolute inset-0 bg-grid-light opacity-50 z-0" />
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
          >
            TECH BLOG
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
          >
            AI × 業界の<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">最前線</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            不動産、飲食、建設…各業界のAI活用事例と、自社で実践しているAI開発の裏側を公開しています。
          </motion.p>
        </div>

        {/* Filter */}
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg font-medium">
              このカテゴリの記事はまだありません
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
