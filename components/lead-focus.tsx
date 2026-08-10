"use client";

import { useEffect } from "react";

// Every phone and email tap on the site points at #contact (the estimate form)
// instead of dialing or opening a mail client — that's how we capture the lead.
// After the browser scrolls to the form, focus the FIRST field (name) and pulse
// it so people fill the form top-to-bottom.
export function LeadFocus() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a[href="#contact"]');
      if (!link) return;
      window.setTimeout(() => {
        const field = document.getElementById("lead-name") as HTMLInputElement | null;
        if (!field) return;
        field.focus({ preventScroll: true });
        field.classList.remove("lead-pulse");
        void field.offsetWidth; // reflow so the animation restarts on repeat taps
        field.classList.add("lead-pulse");
      }, 480);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
