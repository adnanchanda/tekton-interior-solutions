import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The catalogue used to live at two paths; keep one.
      { source: "/TektonCatalog.pdf", destination: "/documents/TektonCatalog.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
