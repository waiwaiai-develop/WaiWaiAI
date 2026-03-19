import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import PaymentLinkButton from '@/components/blog/PaymentLinkButton';

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-14 mb-6 leading-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-5 pb-3 border-b border-slate-200 leading-snug"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl md:text-2xl font-bold text-slate-800 mt-10 mb-4 leading-snug"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="text-lg font-bold text-slate-800 mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-slate-700 text-base md:text-[17px] leading-[1.85] mb-6"
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
      className="list-disc list-outside pl-6 mb-7 space-y-2.5 text-slate-700 text-base md:text-[17px]"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-outside pl-6 mb-7 space-y-2.5 text-slate-700 text-base md:text-[17px]"
      {...props}
    />
  ),
  li: (props) => (
    <li className="leading-[1.8]" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-blue-400 bg-blue-50 pl-6 py-4 my-8 rounded-r-xl text-slate-700 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded-md text-[0.88em] font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-slate-900 text-slate-200 rounded-2xl p-6 overflow-x-auto mb-8 text-sm leading-relaxed border border-slate-700 shadow-lg [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit [&>code]:rounded-none"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-8 rounded-2xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-left border-collapse" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-slate-800 text-white" {...props} />
  ),
  th: (props) => (
    <th
      className="px-5 py-3.5 font-bold text-sm tracking-wide first:rounded-tl-xl last:rounded-tr-xl"
      {...props}
    />
  ),
  tr: (props) => (
    <tr
      className="border-b border-slate-100 even:bg-slate-50/60 hover:bg-blue-50/40 transition-colors"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-5 py-3.5 text-slate-700 text-sm"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-slate-200" />,
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
