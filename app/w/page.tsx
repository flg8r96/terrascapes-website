import type { Metadata } from "next";
import Image from "next/image";
import { Check, Droplets, Phone } from "lucide-react";
import { LeadFocus } from "@/components/lead-focus";
import { PhoneLink } from "@/components/phone-link";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StakeLeadForm } from "@/components/stake-lead-form";
import { Button, buttonClasses } from "@/components/ui/button";

// Landing page for people who got the TerraScapes watering stake (promo gift).
// The locked v8 tag's QR encodes the homepage (HTTPS://TERRASCAPESLV.COM/), so
// v8 test tags reach this page through the stake link in components/hero.tsx.
// Tag v9 encodes HTTPS://TERRASCAPESLV.COM/W, served here by a rewrite in next.config.ts.
const TITLE = "Your Watering Stake | TerraScapes Landscaping, Las Vegas";
const DESCRIPTION =
  "Set up your TerraScapes watering stake in 30 seconds, plus watering tips for Las Vegas pots and yards.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/w" },
  // Gift landing page: keep it out of search results and the sitemap.
  robots: { index: false, follow: true },
};

const steps = [
  "Fill a standard 16.9 oz (500 mL) water bottle.",
  "Screw the stake onto the bottle like a cap. Snug is enough.",
  "Flip it over and press the stake into the soil of a potted plant until the tag sits just above the soil.",
  "Refill the bottle when it’s empty.",
];

const tips = [
  {
    title: "Start with moist soil",
    body: "Water the pot first. Damp soil is easier to push the stake into than dry, packed soil.",
  },
  {
    title: "Watch the first bottle",
    body: "How fast it empties depends on the soil, the pot and the weather. Check it after a day or two to learn your plant’s pace.",
  },
  {
    title: "Sun means more refills",
    body: "Pots in full Las Vegas sun dry out much faster than pots in shade, especially in summer.",
  },
  {
    title: "Rinse it now and then",
    body: "Las Vegas water is hard. If the flow slows down, rinse the stake to clear mineral buildup from the holes.",
  },
  {
    title: "Plain water only",
    body: "Skip fertilizer in the bottle. It can clog the small outlet holes.",
  },
  {
    title: "Pots, not yards",
    body: "A stake helps one pot between waterings. Beds and yards need a working drip system.",
  },
];

export default function WateringStakePage() {
  return (
    <main>
      <LeadFocus />
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050907] pt-[78px]">
        <Image
          src="/images/hero.jpg"
          alt="Desert landscaping in a Las Vegas yard"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow">TerraScapes watering stake</p>
            <h1 className="section-title mt-3 max-w-3xl text-white">Watering tips, from your landscaper.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              Thanks for picking up a TerraScapes watering stake. Here’s how to set it up, a few tips for Las Vegas
              pots, and two ways we can help with the rest of your yard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#setup" size="lg" className="w-full sm:w-auto">
                Watch the setup
              </Button>
              <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto">
                Help with my yard
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Setup + tips */}
      {/* One dark ground for the whole page (hero, setup, offers, footer): no cream bands. */}
      <section id="setup" className="scroll-mt-24 border-t border-white/10 bg-[#07100d] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-start gap-12 lg:grid-cols-[360px_1fr] lg:gap-16">
          <Reveal>
            <video
              className="mx-auto aspect-[9/16] w-full max-w-[360px] rounded-md border border-white/10 bg-black shadow-xl"
              src="/videos/watering-stake-setup.mp4"
              poster="/images/watering-stake-poster.jpg"
              controls
              playsInline
              preload="metadata"
            >
              Your browser can’t play this video.
            </video>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">30-second setup</p>
              <h2 className="section-title mt-3 text-white">How to use it</h2>
              <ol className="mt-8 grid gap-4">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-base leading-7 text-white/75">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="mt-14 flex items-center gap-2 font-serif text-3xl text-white">
                <Droplets className="h-6 w-6 text-[var(--brand)]" /> Watering tips
              </h3>
              <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {tips.map((tip) => (
                  <div key={tip.title}>
                    <p className="text-sm font-bold uppercase tracking-[0.08em] text-white">{tip.title}</p>
                    <p className="mt-1.5 text-sm leading-6 text-white/60">{tip.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Offers. id="contact" so the header's Contact / Free Estimate / phone
          (desktop) links land here; LeadFocus focuses #lead-name. */}
      <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-[#07100d] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <p className="eyebrow">Beyond the pot</p>
            <h2 className="section-title mt-3 max-w-3xl text-white">Want a yard that’s this easy?</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              Leave your number and we’ll call you right back, usually within minutes.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/service-outdoor.jpg"
                  alt="Covered patio with an outdoor kitchen, bar seating and a fire feature"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
              </div>
              <div className="p-6 sm:p-8">
              <p className="eyebrow">Option 1</p>
              <h3 className="mt-2 font-serif text-3xl text-white">Redesign your yard</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Start over with a yard built for the desert. One crew designs and builds it.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-white/75">
                {[
                  "Low-water desert plantings and drip irrigation",
                  "Artificial turf, pavers and patios",
                  "Patio covers, BBQ islands and fire features",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" /> {item}
                  </li>
                ))}
              </ul>
              <StakeLeadForm offer="redesign" nameId="lead-name" />
              </div>
            </Reveal>

            <Reveal delay={0.08} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/service-maintenance.jpg"
                  alt="Well-kept desert backyard with a patio, fire pit and pergola"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
              </div>
              <div className="p-6 sm:p-8">
              <p className="eyebrow">Option 2</p>
              <h3 className="mt-2 font-serif text-3xl text-white">Maintain the yard you have</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Like your landscaping? We’ll keep it that way with scheduled visits.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-white/75">
                {[
                  "Irrigation checks for broken emitters and clogged lines",
                  "Pruning and seasonal cleanup",
                  "Small problems caught before plants die",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" /> {item}
                  </li>
                ))}
              </ul>
              <StakeLeadForm offer="maintenance" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-col items-start gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
              <p>Licensed · Bonded · Insured · NV Lic. #0082269, #0094932</p>
              <PhoneLink className={buttonClasses({ variant: "outline", size: "md" })}>
                <Phone className="mr-2 h-4 w-4" /> (702) 600-1167
              </PhoneLink>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
