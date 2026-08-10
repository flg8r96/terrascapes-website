import { BeforeAfterSlider } from "@/components/before-after-slider";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    name: "Front yard conversion — Summerlin",
    before: "/images/front-before.jpg",
    after: "/images/front-after.jpg",
  },
  {
    name: "Backyard retreat — Henderson",
    before: "/images/backyard-before.jpg",
    after: "/images/backyard-after.jpg",
  },
  {
    name: "Desert oasis — Las Vegas",
    before: "/images/oasis-before.jpg",
    after: "/images/oasis-after.jpg",
  },
];

export function Transformations() {
  return (
    <section id="transformations" className="dark-texture border-y border-white/10 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="text-center">
          <p className="eyebrow">Before & after</p>
          <h2 className="section-title mt-3 text-white">Real transformations</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Drag each slider to see how disciplined design and craftsmanship change the way a property feels.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.09}>
              <BeforeAfterSlider
                before={project.before}
                after={project.after}
                beforeAlt={`${project.name} before renovation`}
                afterAlt={`${project.name} after renovation`}
              />
              <h3 className="mt-4 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-white/90">{project.name}</h3>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Button variant="outline">View more before & after</Button>
        </Reveal>
      </div>
    </section>
  );
}
