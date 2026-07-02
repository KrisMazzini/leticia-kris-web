import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "d3eu4cyioghqf3.cloudfront.net" },
    ],
  },
};

export default nextConfig;
