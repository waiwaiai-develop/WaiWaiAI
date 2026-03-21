import { Clock, Tag, Calendar } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

const categoryColors: Record<string, string> = {
  '不動産': 'bg-amber-100 text-amber-800 border-amber-200',
  '飲食': 'bg-orange-100 text-orange-800 border-orange-200',
  '建設': 'bg-stone-100 text-stone-700 border-stone-200',
  '人材': 'bg-purple-100 text-purple-800 border-purple-200',
  'AI活用': 'bg-stone-100 text-stone-700 border-stone-200',
  '自動化': 'bg-sky-100 text-sky-800 border-sky-200',
  '開発': 'bg-indigo-100 text-indigo-800 border-indigo-200',
};

export default function BlogHeader({ post }: { post: BlogPost }) {
  const colorClass = categoryColors[post.category] || 'bg-stone-100 text-stone-600 border-stone-200';

  return (
    <header className="mb-10">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${colorClass}`}>
          {post.category}
        </span>
        <span className="flex items-center gap-1.5 text-stone-500 text-sm font-medium">
          <Calendar className="w-4 h-4" />
          {post.date}
        </span>
        <span className="flex items-center gap-1.5 text-stone-500 text-sm font-medium">
          <Clock className="w-4 h-4" />
          {post.readingTime}分で読める
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight mb-6">
        {post.title}
      </h1>

      <p className="text-lg md:text-xl text-stone-600 font-medium leading-relaxed mb-6">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 text-sm text-stone-600 bg-stone-100 px-3 py-1 rounded-full font-semibold"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

    </header>
  );
}
