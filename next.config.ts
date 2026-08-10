import type { NextConfig } from "next";

// Standalone deploy (Railway, its own project) — served at the domain root,
// so no basePath/assetPrefix/static export like the nested command-center
// preview copy needs. unoptimized keeps parity with that copy (no `sharp`
// dependency to worry about on the build).
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
