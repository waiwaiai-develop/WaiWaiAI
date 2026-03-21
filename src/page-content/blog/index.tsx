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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 justify-center mb-6"
          >
            <div className="w-12 h-px bg-amber-500" />
            <span className="text-amber-600 text-xs font-semibold tracking-[0.3em] uppercase">Tech Blog</span>
            <div className="w-12 h-px bg-amber-500" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight mb-6"
          >
            AI × 業界の<span className="text-gradient-amber">最前線</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 max-w-2xl mx-auto font-medium leading-relaxed"
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
            <p className="text-stone-500 text-lg font-medium">
              このカテゴリの記事はまだありません
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
