'use client';

interface CategoryFilterProps {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="mb-8 flex max-w-full gap-2 overflow-x-auto border-b border-slate-200 py-4 md:mb-10 md:flex-wrap scrollbar-none">
      <button
        onClick={() => onSelect(null)}
        className={`min-h-10 shrink-0 rounded-lg border px-4 text-sm font-black transition-all ${
          selected === null
            ? 'border-blue-700 bg-blue-700 text-white shadow-[0_12px_30px_-20px_rgba(37,99,235,0.9)]'
            : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700'
        }`}
      >
        すべて
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`min-h-10 shrink-0 rounded-lg border px-4 text-sm font-black transition-all ${
            selected === cat
              ? 'border-blue-700 bg-blue-700 text-white shadow-[0_12px_30px_-20px_rgba(37,99,235,0.9)]'
              : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
