import { Instagram, MapPin, Phone } from "lucide-react";
import { TerraScapesLogo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-[#030605] px-5 pb-7 pt-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <TerraScapesLogo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">Desert landscapes, transformed.</p>
          <a href="#" className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[var(--brand)] hover:text-[var(--brand)]" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
        <div>
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-list">
            <li><a href="/design">Landscape Design & Install</a></li>
            <li><a href="/residential-landscaping">Hardscaping</a></li>
            <li><a href="/outdoor-living-design">Outdoor Living</a></li>
            <li><a href="/irrigation-drip-systems">Irrigation & Drip Systems</a></li>
            <li><a href="/turf-removal-xeriscape">Turf Removal & Xeriscape</a></li>
            <li><a href="/landscape-maintenance">Maintenance</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Quick links</h3>
          <ul className="footer-list">
            <li><a href="/#transformations">Before & After</a></li>
            <li><a href="/#reviews">Reviews</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Contact</h3>
          <div className="grid gap-4 text-sm text-white/60">
            <a href="#contact" className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 text-[var(--brand)]" /> (702) 600-1167</a>
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[var(--brand)]" /> Licensed · Bonded · Insured<br />NV Lic. #0082269, #0094932</div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 pt-7 text-[11px] text-white/38 sm:flex-row sm:justify-between">
        <span>© 2026 TerraScapes Landscaping. All rights reserved.</span>
        <a href="#" className="hover:text-white">Privacy Policy</a>
      </div>
    </footer>
  );
}
