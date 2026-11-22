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
    ];
  },
  // Watering stake tag v9 prints HTTPS://TERRASCAPESLV.COM/W (uppercase keeps the
  // QR at version 2, level Q). Routes are case-sensitive, so /W is served from the
  // /w page by a rewrite: one hop, address bar stays /W. PERMANENT: every printed
  // tag depends on /W returning the landing page. Never remove or redirect it.
  async rewrites() {
    return [{ source: "/W", destination: "/w" }];
  },
};

export default nextConfig;
