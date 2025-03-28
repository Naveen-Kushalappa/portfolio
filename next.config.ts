import type { NextConfig } from "next";

const nextConfig: NextConfig = {
async redirects() {
    return [
      {
        source: '/',
        destination: '/portfolio',
        permanent: true, // or false for a temporary redirect
      },
    ];
  },
};

export default nextConfig;
