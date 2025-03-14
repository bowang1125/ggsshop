/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // 禁用ESLint檢查
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
