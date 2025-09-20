import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["api.microlink.io"],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,

};

export default nextConfig;
