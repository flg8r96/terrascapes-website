import Image from "next/image";
import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { LeadFocus } from "@/components/lead-focus";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { servicePages, type ServicePage } from "@/lib/service-pages";

// Shared shell for the 4 rebuilt service pages (residential/design/outdoor-living/
// commercial) — each app/<slug>/page.tsx just supplies its ServicePage data and
// metadata. Keeps the 4 pages visually identical and on-token without repeating
// the header/hero/footer wiring in every route file.
export function ServicePageContent({ page }: { page: ServicePage }) {
  const otherPages = servicePages.filter((p) => p.slug !== page.slug && p.promoted !== false);

  return (
    <main>
      <LeadFocus />
      <SiteHeader />

      <section className="relative min-h-[480px] overflow-hidden bg-[#050907] pt-[78px]">
        <Image
          src={page.heroImage}
          alt={page.heroImageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative mx-auto flex min-h-[480px] max-w-[1440px] flex-col justify-center px-5 py-20 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-5 text-xs text-white/60">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white/85">{page.navLabel}</span>
            </nav>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="section-title mt-3 max-w-3xl text-white">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg" className="w-full sm:w-auto">Get a free estimate</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLACEHOLDER-CONTENT: section copy pulled from lib/service-pages.ts, pending real client copy/photos. */}
      <section className="bg-[var(--cream)] px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[900px] gap-8">
          {page.sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.06}>
              <h2 className="font-serif text-2xl text-[var(--ink)] sm:text-3xl">{section.heading}</h2>
              <p className="mt-2 text-sm leading-7 text-black/60 sm:text-base">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dark-texture border-y border-white/10 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1440px] text-center">
          <p className="eyebrow">Explore more</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Other services</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {otherPages.map((other) => (
              <Button key={other.slug} href={`/${other.slug}`} variant="outline">
                {other.navLabel}
              </Button>
            ))}
            <Button href="/" variant="ghost">Back to homepage</Button>
          </div>
        </div>
      </section>

      <CTA />
      <Contact />
      <SiteFooter />
    </main>
  );
}
