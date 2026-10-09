import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

// Plain text page shell for the Privacy Policy and SMS Terms. Required for carrier (A2P 10DLC)
// registration of TerraScapes' work-notification texts: carriers verify both pages exist on
// the business's own website.
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#050907] px-5 pb-16 pt-[118px] text-white lg:px-8">
        <div className="mx-auto max-w-[820px]">
          <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-white/55">Last updated {updated}</p>
        </div>
      </section>
      <section className="bg-[#f6f4ee] px-5 py-14 text-[#1c211e] lg:px-8">
        <div className="mx-auto max-w-[820px] space-y-5 text-[15px] leading-7 [&_h2]:mt-9 [&_h2]:text-xl [&_h2]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1 [&_a]:underline">
          {children}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
