'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Product } from '@/data/productsData';
import { categoryLabels } from '@/data/productsData';

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100, damping: 20 }}
      className="glass-card p-5 md:p-8 flex flex-col h-full group"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
          {categoryLabels[product.category]}
        </span>
        {product.relatedBlogSlug && (
          <Link
            href={`/blog/${product.relatedBlogSlug}`}
            className="text-xs text-slate-500 hover:text-blue-600 transition-colors font-semibold"
          >
            関連記事 →
          </Link>
        )}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {product.title}
      </h3>

      <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow">
        {product.description}
      </p>

      <ul className="space-y-2.5 mb-8">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
        <div>
          <span className="text-3xl font-extrabold text-slate-900">
            ¥{product.price.toLocaleString()}
          </span>
          <span className="text-slate-500 text-sm ml-1">（税込）</span>
        </div>
        {product.stripePaymentLink && product.stripePaymentLink !== '#' ? (
          <a
            href={product.stripePaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            購入する
            <ArrowUpRight className="w-4 h-4" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-200 text-slate-500 font-bold cursor-default">
            準備中
          </span>
        )}
      </div>
    </motion.div>
  );
}
