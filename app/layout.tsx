import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://terrascapeslv.com";
const TITLE = "TerraScapes Landscaping | Las Vegas Desert Landscape Design";
const DESCRIPTION =
  "Luxury desert landscaping, hardscaping, outdoor living, xeriscape, irrigation, and maintenance in Las Vegas, Henderson, and Summerlin.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "TerraScapes Landscaping",
    images: [{ url: "/images/hero.jpg", width: 2400, height: 1500, alt: "Desert landscaping by TerraScapes" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero.jpg"],
  },
};

// LocalBusiness structured data. Address/phone match the NV Contractors Board
// record for license #0082269 (origin 2017) — see NSCB license lookup. Review
// counts/ratings are intentionally omitted: Google penalizes AggregateRating
// markup that can't be verified against a real review source.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Terrascapes LLC",
  image: `${SITE_URL}/images/hero.jpg`,
  url: SITE_URL,
  telephone: "+17026001167",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4808 Martinelli Ct",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89130",
    addressCountry: "US",
  },
  areaServed: ["Las Vegas, NV", "Henderson, NV", "Summerlin, NV"],
  description: DESCRIPTION,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
