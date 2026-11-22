import type { NextConfig } from "next";

// Standalone deploy (Railway, its own project) — served at the domain root,
// so no basePath/assetPrefix/static export like the nested command-center
// preview copy needs. unoptimized keeps parity with that copy (no `sharp`
// dependency to worry about on the build).
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // /turf-removal-xeriscape was renamed to /turf-removal-installation shortly after
  // launch (see lib/service-pages.ts) — a manual GSC indexing request already went out
  // for the old URL, so redirect it instead of leaving a dead end for that crawl.
  async redirects() {
    return [
      {
        source: "/turf-removal-xeriscape",
        destination: "/turf-removal-installation",
        permanent: true,
      },
      // Short path for a future watering stake tag (v9+). Uppercase
      // HTTPS://TERRASCAPESLV.COM/W keeps the QR in alphanumeric mode.
      // Temporary, so the destination can change without browsers caching it.
      { source: "/w", destination: "/watering-stake", permanent: false },
      { source: "/W", destination: "/watering-stake", permanent: false },
    ];
  },
};

export default nextConfig;
