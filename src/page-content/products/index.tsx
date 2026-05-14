'use client';

import ProductGrid from '@/components/products/ProductGrid';
import ContactCTA from '@/components/ContactCTA';
import { productsData } from '@/data/productsData';

export default function ProductsPageContent() {
  return (
    <div className="pt-24 md:pt-32 pb-0 relative min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div
            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
          >
            DIGITAL PRODUCTS
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
          >
            現場で検証済みの<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">AI実戦テンプレート</span>
          </h1>
          <p
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            代表が自分で使い込んでいるテンプレートやノウハウをパッケージ化。現場で検証済みのものだけをお届けします。
          </p>
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
