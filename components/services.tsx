import Image from "next/image";
import { BrickWall, Droplets, Flame, Flower2, Shovel } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

function Cactus({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21V8" />
      <path d="M12 14H9.5A2.5 2.5 0 0 1 7 11.5V10" />
      <path d="M12 11h2.5A2.5 2.5 0 0 0 17 8.5V7" />
      <path d="M8 21h8" />
    </svg>
  );
}

const services = [
  {
    title: "Landscape Design & Install",
    copy: "Custom desert landscapes that feel intentional, architectural, and distinctly yours.",
    image: "/images/service-design.jpg",
    icon: Shovel,
  },
  {
    title: "Hardscaping",
    copy: "Pavers, walls, patios, steps, and walkways engineered for lasting curb appeal.",
    image: "/images/service-hardscape.jpg",
    icon: BrickWall,
  },
  {
    title: "Outdoor Living",
    copy: "Fire features, kitchens, pergolas, shade structures, and resort-level gathering spaces.",
    image: "/images/service-outdoor.jpg",
    icon: Flame,
  },
  {
    title: "Irrigation & Drip Systems",
    copy: "Efficient, precise watering systems designed for Las Vegas heat and water conservation.",
    image: "/images/service-irrigation.jpg",
    icon: Droplets,
  },
  {
    title: "Turf Removal & Xeriscape",
    copy: "Low-water conversions that replace ordinary lawns with sophisticated desert design.",
    image: "/images/service-xeriscape.jpg",
    icon: Cactus,
  },
  {
    title: "Landscape Maintenance",
    copy: "Detail-driven care that protects the design, health, and presentation of your landscape.",
    image: "/images/service-maintenance.jpg",
    icon: Flower2,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[var(--cream)] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="text-center">
          <p className="eyebrow">Our services</p>
          <h2 className="section-title mt-3 text-[var(--ink)]">Complete outdoor solutions</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
            Design, construction, planting, irrigation, and care—delivered as one cohesive outdoor transformation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {services.map(({ title, copy, image, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.055} className="h-full">
              <article className="group h-full overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_10px_30px_rgba(18,20,18,.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(18,20,18,.12)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <div className="p-5">
                  <Icon className="mb-4 h-7 w-7 text-[var(--brand)]" strokeWidth={1.5} />
                  <h3 className="min-h-[3.3rem] font-serif text-[1.03rem] leading-tight text-[var(--ink)]">{title}</h3>
                  <p className="mt-3 text-[12px] leading-5 text-black/55">{copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Button>View all services</Button>
        </Reveal>
      </div>
    </section>
  );
}
