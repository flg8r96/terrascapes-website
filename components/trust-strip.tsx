import { Handshake, MapPin, ShieldCheck, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: ShieldCheck, title: "Licensed", detail: "& Insured" },
  { icon: Star, title: "5-Star", detail: "Rated" },
  { icon: Handshake, title: "Free", detail: "Estimates" },
  { icon: MapPin, title: "Locally", detail: "Owned" },
];

export function TrustStrip() {
  return (
    <div className="relative z-20 mx-auto -mt-16 max-w-[1320px] px-5 lg:px-8">
      <div className="grid overflow-hidden rounded-md border border-white/15 bg-[#07100d]/95 shadow-[0_30px_80px_rgba(0,0,0,.28)] backdrop-blur lg:grid-cols-4">
        {items.map(({ icon: Icon, title, detail }, index) => (
          <div
            key={title}
            className={cn(
              "flex min-h-[110px] items-center gap-5 border-white/10 px-7 py-6",
              index < items.length - 1 && "border-b lg:border-b-0 lg:border-r",
            )}
          >
            <Icon className="h-9 w-9 shrink-0 text-[var(--brand)]" strokeWidth={1.6} />
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-white">{title}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/80">{detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
