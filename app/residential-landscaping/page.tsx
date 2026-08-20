import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { getServicePage } from "@/lib/service-pages";

// Content here is Hardscaping, not residential landscaping — see the comment
// on this entry in lib/service-pages.ts for why the URL stayed as-is.
const page = getServicePage("residential-landscaping");
const SITE_URL = "https://terrascapeslv.com";

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${SITE_URL}/${page.slug}`,
    siteName: "TerraScapes Landscaping",
    images: [{ url: page.heroImage, width: 2400, height: 1500, alt: page.heroImageAlt }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.metaDescription,
    images: [page.heroImage],
  },
};

export default function HardscapingPage() {
  return <ServicePageContent page={page} />;
}
