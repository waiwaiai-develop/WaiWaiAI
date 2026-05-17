import type { NextConfig } from 'next';
import path from 'path';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, './'),
  pageExtensions: ['ts', 'tsx', 'mdx'],
  devIndicators: false,
  images: {
    formats: ['image/webp'],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'one-dark-pro' }],
    ],
  },
});

export default withMDX(nextConfig);
