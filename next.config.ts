import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile Shoora UI package for SSR & App Router
  transpilePackages: ["@cybershoora/shoora-ui"],

  // Optional: strict TypeScript checks
  typescript: {
    ignoreBuildErrors: false
  }
};

export default nextConfig;
