import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { LeadFocus } from "@/components/lead-focus";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Transformations } from "@/components/transformations";
import { TrustStrip } from "@/components/trust-strip";

export default function HomePage() {
  return (
    <main>
      <LeadFocus />
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <Services />
      <Transformations />
      <Reviews />
      <CTA />
      <Contact />
      <SiteFooter />
    </main>
  );
}
