import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { getServicePage } from "@/lib/service-pages";

const page = getServicePage("turf-removal-xeriscape");
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

export default function TurfRemovalXeriscapePage() {
  return <ServicePageContent page={page} />;
}
