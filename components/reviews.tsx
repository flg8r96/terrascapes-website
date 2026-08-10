import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

const reviews = [
  {
    quote:
      "TerraScapes took our blank, boring yard and turned it into our favorite part of the house. The team was professional, on time, and the results are stunning.",
    name: "Jennifer M.",
    city: "Summerlin, NV",
  },
  {
    quote:
      "From design to installation, everything was top notch. Their attention to detail and workmanship is second to none. Highly recommend.",
    name: "Mark D.",
    city: "Henderson, NV",
  },
  {
    quote:
      "Our front yard was all grass and wasted water. They transformed it into a beautiful desert landscape that looks amazing year-round.",
    name: "Sarah T.",
    city: "Las Vegas, NV",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-[#060a08] px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:items-stretch">
        <Reveal className="flex flex-col justify-center">
          <p className="eyebrow">What our clients say</p>
          <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">5-star reviews</h2>
          <div className="mt-6 flex gap-1 text-[var(--brand)]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-4 text-sm text-white/65">120+ reviews on Google</p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.08} className="h-full">
              <article className="h-full rounded-md border border-white/8 bg-white/[0.045] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,.03)]">
                <div className="font-serif text-5xl leading-none text-[var(--brand)]">“</div>
                <p className="-mt-2 text-sm leading-7 text-white/72">{review.quote}</p>
                <div className="mt-6 text-xs font-semibold text-white">— {review.name}</div>
                <div className="mt-1 text-[11px] text-white/45">{review.city}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
