import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-white/10 px-5 py-20 lg:px-8">
      <Image src="/images/cta.jpg" alt="Desert landscaping at twilight" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/72" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="eyebrow">Start your transformation</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl">Ready to transform your yard?</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Leave your number and we’ll call you right back — usually within minutes — and translate your
            goals into a clear, buildable plan.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#contact" size="lg" className="w-full sm:w-auto">
            <Phone className="mr-2 h-4 w-4" /> (702) 600-1167
          </Button>
          <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto">Get a free estimate</Button>
        </div>
      </div>
    </section>
  );
}
