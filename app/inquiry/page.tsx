import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Contact } from "@/components/contact";
import { LeadFocus } from "@/components/lead-focus";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustStrip } from "@/components/trust-strip";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://terrascapeslv.com";
const TITLE = "Request a Quote | TerraScapes Landscaping, Las Vegas";
const DESCRIPTION =
  "Tell us about your project and we'll call you back — usually within minutes. Licensed hardscape, turf, and outdoor living design in Las Vegas.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/inquiry" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/inquiry`,
    siteName: "TerraScapes Landscaping",
    images: [{ url: "/images/hero.jpg", width: 2400, height: 1500, alt: "Luxury desert landscape design in a Las Vegas backyard" }],
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

export default function InquiryPage() {
  return (
    <main>
      <LeadFocus />
      <SiteHeader />

      <section className="relative min-h-[480px] overflow-hidden bg-[#050907] pt-[78px]">
        <Image
          src="/images/hero.jpg"
          alt="Luxury desert landscape design in a Las Vegas backyard"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative mx-auto flex min-h-[480px] max-w-[1440px] flex-col justify-center px-5 py-20 lg:px-8">
          <Reveal>
            <p className="eyebrow">Request a Quote</p>
            <h1 className="section-title mt-3 max-w-3xl text-white">
              Let&rsquo;s talk about your project.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              Licensed hardscape, turf, and outdoor living design built for Las Vegas heat and soil.
              Leave your number below and we&rsquo;ll call you back — usually within minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg" className="w-full sm:w-auto">
                Get your quote
              </Button>
              <Button href="tel:+17026001167" variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" /> (702) 600-1167
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustStrip />

      <div className="pt-16" />

      <Contact />
      <SiteFooter />
    </main>
  );
}
