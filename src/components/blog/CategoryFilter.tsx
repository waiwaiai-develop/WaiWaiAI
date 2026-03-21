'use client';

import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex overflow-x-auto gap-2 mb-10 pb-1 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap scrollbar-none"
    >
      <button
        onClick={() => onSelect(null)}
        className={`shrink-0 px-4 py-2 text-sm font-bold transition-all border ${
          selected === null
            ? 'bg-stone-900 text-white border-stone-900'
            : 'bg-white text-stone-600 border-stone-200 hover:border-amber-300 hover:text-amber-700'
        }`}
      >
        すべて
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 text-sm font-bold transition-all border ${
            selected === cat
              ? 'bg-stone-900 text-white border-stone-900'
              : 'bg-white text-stone-600 border-stone-200 hover:border-amber-300 hover:text-amber-700'
          }`}
        >
          {cat}
        </button>
      ))}
    </motion.div>
  );
}
