"use client";

import { useEffect } from "react";

// Every phone and email tap on the site points at #contact (the estimate form)
// instead of dialing or opening a mail client — that's how we capture the lead.
// Scroll straight to the form's FIRST field (name), not the top of the #contact
// section: on pages like /w the section opens with headings and photos, so a
// plain hash jump left the form below the fold (and scrolled the page UP when
// tapped from below the forms). Then focus the field and pulse it so people
// fill the form top-to-bottom. Pages without #lead-name keep the hash jump.
export function LeadFocus() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a[href="#contact"]');
      if (!link) return;
      const field = document.getElementById("lead-name") as HTMLInputElement | null;
      if (!field) return;
      event.preventDefault();
      if (window.location.hash !== "#contact") {
        window.history.pushState(null, "", "#contact");
      }
      field.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => {
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
