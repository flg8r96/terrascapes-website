"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { TerraScapesLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";

// Home-section anchors are prefixed with "/" so they still resolve correctly
// when this header renders on a service page (e.g. /design/) instead of the
// homepage itself. #contact is left bare — every page embeds its own Contact
// section at that id, so it should always scroll locally.
const nav = [
  ["Services", "/#services"],
  ["Before & After", "/#transformations"],
  ["About", "/#about"],
  ["Reviews", "/#reviews"],
  ["Blog", "/blog"],
  ["Contact", "#contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
        <a href="/#top" aria-label="TerraScapes home">
          <TerraScapesLogo compact />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[11px] font-semibold uppercase tracking-[0.11em] text-white/80 transition hover:text-[var(--brand)]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="#contact" className="flex items-center gap-2 text-sm font-semibold text-white">
            <Phone className="h-4 w-4" /> (702) 600-1167
          </a>
          <Button href="#contact" size="sm">Free Estimate</Button>
        </div>

        <button
          type="button"
          className="rounded p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#07100d]/98 px-5 py-5 lg:hidden">
          <nav className="grid gap-4">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-3 text-sm font-semibold uppercase tracking-[0.1em] text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 pt-2 font-semibold text-white"
            >
              <Phone className="h-4 w-4 text-[var(--brand)]" /> (702) 600-1167
            </a>
            <Button href="#contact" className="w-full" onClick={() => setOpen(false)}>Free Estimate</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
