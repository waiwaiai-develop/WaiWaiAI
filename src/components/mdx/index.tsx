import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import PaymentLinkButton from '@/components/blog/PaymentLinkButton';

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-12 mb-6 leading-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-200 leading-snug"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl md:text-2xl font-bold text-slate-800 mt-8 mb-3 leading-snug"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="text-lg font-bold text-slate-800 mt-6 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-slate-700 text-lg leading-relaxed mb-6 font-medium"
      {...props}
    />
  ),
  a: (props) => (
    <Link
      href={props.href || '#'}
      className="text-blue-600 hover:text-blue-800 underline underline-offset-2 decoration-blue-300 hover:decoration-blue-600 transition-colors font-semibold"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc list-outside pl-6 mb-6 space-y-2 text-slate-700 text-lg"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-outside pl-6 mb-6 space-y-2 text-slate-700 text-lg"
      {...props}
    />
  ),
  li: (props) => (
    <li className="leading-relaxed font-medium" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-blue-400 bg-blue-50/50 pl-6 py-4 my-6 rounded-r-xl text-slate-700 italic font-medium"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded-md text-[0.9em] font-mono font-semibold"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-slate-900 text-slate-100 rounded-2xl p-6 overflow-x-auto mb-6 text-sm leading-relaxed border border-slate-800 shadow-lg"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto mb-6 rounded-xl border border-slate-200">
      <table className="w-full text-left" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="bg-slate-50 px-4 py-3 font-bold text-slate-800 text-sm border-b border-slate-200"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-4 py-3 text-slate-700 text-sm border-b border-slate-100"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-slate-200" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-2xl shadow-lg my-8 w-full"
      alt={props.alt || ''}
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-bold text-slate-900" {...props} />
  ),
  PaymentLinkButton,
};
