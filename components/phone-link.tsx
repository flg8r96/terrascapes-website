"use client";

import { AnchorHTMLAttributes, MouseEvent, ReactNode, useEffect, useState } from "react";

const TEL_HREF = "tel:+17026001167";
const FORM_HREF = "#contact";
const MOBILE_QUERY = "(max-width: 1023px)";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type PhoneLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children?: ReactNode;
  onNavigate?: () => void;
};

// Mobile can actually place a call; desktop can't (tel: just triggers an OS
// "choose an app" prompt there, per commit 285f6e3). So this dials on mobile
// and falls back to scrolling to the lead form on desktop (lead-focus.tsx
// handles the scroll/focus once #contact is reached). Starts in the desktop/
// #contact state until the viewport is known, so it never offers a dead dial
// prompt before hydration.
export function PhoneLink({ onNavigate, onClick, ...props }: PhoneLinkProps) {
  const [href, setHref] = useState(FORM_HREF);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const update = () => setHref(mql.matches ? TEL_HREF : FORM_HREF);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // tel: links leave the page with no navigation event for GA4 to see, so
    // record intent-to-call explicitly, same pattern as generate_lead in
    // contact.tsx.
    if (href === TEL_HREF) {
      window.gtag?.("event", "click_to_call", { method: "tel-link" });
    }
    onClick?.(event);
    onNavigate?.();
  }

  return <a {...props} href={href} onClick={handleClick} />;
}
