import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "d3eu4cyioghqf3.cloudfront.net" },
      { hostname: "product-hub-prd.madeiramadeira.com.br" },
      { hostname: "m.media-amazon.com" },
      { hostname: "http2.mlstatic.com" },
    ],
  },
};

export default nextConfig;
