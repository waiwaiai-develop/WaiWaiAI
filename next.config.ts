import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // Fix for React 19 compatibility with some libraries
  reactStrictMode: true,
};

export default nextConfig;
