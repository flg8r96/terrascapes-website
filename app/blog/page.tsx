import Image from "next/image";
import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { LeadFocus } from "@/components/lead-focus";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts } from "@/lib/blog-posts";

const SITE_URL = "https://terrascapeslv.com";
const TITLE = "Landscaping Tips & Answers | TerraScapes Landscaping Blog";
const DESCRIPTION =
  "Answers to common Las Vegas landscaping questions — turf, hardscape, irrigation, and more — from TerraScapes Landscaping.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    siteName: "TerraScapes Landscaping",
    locale: "en_US",
    type: "website",
  },
};

function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  return (
    <main>
      <LeadFocus />
      <SiteHeader />

      <section className="dark-texture relative min-h-[320px] overflow-hidden pt-[78px]">
        <div className="relative mx-auto flex min-h-[320px] max-w-[1440px] flex-col justify-center px-5 py-16 lg:px-8">
          <Reveal>
            <p className="eyebrow">From the yard</p>
            <h1 className="section-title mt-3 max-w-2xl text-white">Landscaping tips &amp; answers</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Straight answers to the questions Las Vegas homeowners actually search for — turf, hardscape,
              irrigation, and more.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06} className="h-full">
              <a
                href={`/blog/${post.slug}`}
                className="group block h-full overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_10px_30px_rgba(18,20,18,.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(18,20,18,.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">
                    {fmtDate(post.publishedDate)}
                  </p>
                  <h2 className="mt-2 font-serif text-lg leading-tight text-[var(--ink)]">{post.title}</h2>
                  <p className="mt-3 text-[13px] leading-6 text-black/55">{post.excerpt}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
      <Contact />
      <SiteFooter />
    </main>
  );
}
