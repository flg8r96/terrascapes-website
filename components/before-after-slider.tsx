"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useState } from "react";

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-md border border-white/15 bg-black">
      <Image src={after} alt={afterAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
        <div className="relative h-full" style={{ width: `${10000 / position}%` }}>
          <Image src={before} alt={beforeAlt} fill className="object-cover object-left" sizes="(max-width: 1024px) 100vw, 33vw" />
        </div>
      </div>

      <div className="absolute inset-y-0 w-px bg-white" style={{ left: `${position}%` }}>
        <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-lg">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>

      <span className="absolute left-3 top-3 rounded-sm bg-black/75 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">Before</span>
      <span className="absolute right-3 top-3 rounded-sm bg-[var(--brand)] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">After</span>

      <input
        type="range"
        min="5"
        max="95"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Move slider to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
