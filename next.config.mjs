import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',

  productionBrowserSourceMaps: true,

  distDir: process.env.DIST_DIR || '.next',

  ...(isGitHubPages && {
    basePath: '/boldnivel-website',
    trailingSlash: true,
  }),

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    unoptimized: true,
  },
};

export default nextConfig;
