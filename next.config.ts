import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    theme: {
      extend: {
        fontFamily: {
          seria: ["Seria", "serif"],
        },
      },
    },
    plugins: [],
};

export default nextConfig;
