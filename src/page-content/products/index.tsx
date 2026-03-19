'use client';

import { motion } from 'framer-motion';
import ProductGrid from '@/components/products/ProductGrid';
import ContactCTA from '@/components/ContactCTA';
import { productsData } from '@/data/productsData';

export default function ProductsPageContent() {
  return (
    <div className="pt-24 md:pt-32 pb-0 relative min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
          >
            DIGITAL PRODUCTS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
          >
            AI時代の<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">実戦テンプレート</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
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
