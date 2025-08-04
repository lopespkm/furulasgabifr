import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Permite imagens de qualquer domínio
  },
};

export default nextConfig;
