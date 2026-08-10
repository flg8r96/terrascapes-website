import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#050907] lg:min-h-[790px]">
      <Image
        src="/images/hero.jpg"
        alt="Illuminated luxury desert landscaping and stone entry at dusk"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.94)_0%,rgba(0,0,0,.78)_34%,rgba(0,0,0,.22)_70%,rgba(0,0,0,.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.35)_0%,transparent_45%,rgba(0,0,0,.55)_100%)]" />

      <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-center px-5 pb-24 pt-36 lg:min-h-[790px] lg:px-8 lg:pb-32 lg:pt-32">
        <div className="max-w-[720px]">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-[var(--brand)]">
              Las Vegas desert landscapes
            </p>
            <h1 className="font-serif text-[clamp(3.5rem,7.8vw,7.5rem)] leading-[0.84] tracking-[-0.04em] text-white">
              Your yard,
              <span className="mt-3 block text-[var(--brand)]">transformed.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="mt-7 text-sm font-bold uppercase tracking-[0.14em] text-white sm:text-base">
              Desert landscapes. Built to inspire.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
              Award-winning design. Expert craftsmanship. Built for the way Las Vegas lives.
            </p>
          </Reveal>

          <Reveal delay={0.22} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" size="lg" className="w-full sm:w-auto">
              <Phone className="mr-2 h-4 w-4" /> (702) 600-1167
            </Button>
            <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto">
              Get a free estimate
            </Button>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-4 text-sm text-white/60">
              No phone tag — leave your number and we’ll call you right back, usually within minutes.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
