import type { NextConfig } from 'next';
import path from 'path';
import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, './'),
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    formats: ['image/webp'],
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'one-dark-pro' }],
    ],
  },
});

export default withMDX(nextConfig);
