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
      className="flex flex-wrap gap-2 mb-10"
    >
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
          selected === null
            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
            : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
        }`}
      >
        すべて
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
            selected === cat
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
          }`}
        >
          {cat}
        </button>
      ))}
    </motion.div>
  );
}
