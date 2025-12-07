import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gddnqwbbcrcugvglbfcc.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
