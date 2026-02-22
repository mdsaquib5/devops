import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  // Optimize for modern browsers to reduce polyfill overhead
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Target modern browsers (ES2020+) to eliminate unnecessary polyfills
  experimental: {
    optimizePackageImports: ['react-icons'],
    optimizeCss: true,
    optimizeServerReact: true,
  },
  // CSS optimization for faster loading
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
