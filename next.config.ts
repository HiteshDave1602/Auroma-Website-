import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // 90 is used for low-res source photos that blur further at the default 75.
    qualities: [75, 90],
  },
};

export default nextConfig;
