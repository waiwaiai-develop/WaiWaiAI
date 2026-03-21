'use client';

import { motion } from 'framer-motion';
import ProductGrid from '@/components/products/ProductGrid';
import ContactCTA from '@/components/ContactCTA';
import { productsData } from '@/data/productsData';

export default function ProductsPageContent() {
  return (
    <div className="pt-24 md:pt-32 pb-0 relative min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 justify-center mb-6"
          >
            <div className="w-12 h-px bg-amber-500" />
            <span className="text-amber-600 text-xs font-semibold tracking-[0.3em] uppercase">Digital Products</span>
            <div className="w-12 h-px bg-amber-500" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight mb-6"
          >
            AI時代の<span className="text-gradient-amber">実戦テンプレート</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            WaiWai AIが実際に使っているテンプレートやノウハウをパッケージ化。すぐに使えるデジタル商品をお届けします。
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="mb-24">
          <ProductGrid products={productsData} />
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
