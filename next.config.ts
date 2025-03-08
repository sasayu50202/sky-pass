import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    domains: ["images.unsplash.com"], // ここに外部画像のドメインを追加
  },
};

export default nextConfig;
