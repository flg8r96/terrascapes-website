import Image from "next/image";
import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { LeadFocus } from "@/components/lead-focus";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { getServicePage } from "@/lib/service-pages";
import type { BlogPost } from "@/lib/blog-posts";

// Bare YYYY-MM-DD strings parse as UTC midnight, which can roll back a day in any
// timezone behind UTC — parse the Y/M/D parts directly into a local-midnight Date instead.
function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// Shared shell for blog posts — each app/blog/[slug]/page.tsx just supplies its
// BlogPost data and metadata. Same visual language as ServicePageContent.
export function BlogPostContent({ post }: { post: BlogPost }) {
  const relatedService = getServicePage(post.relatedServiceSlug);

  return (
    <main>
      <LeadFocus />
      <SiteHeader />

      <section className="relative min-h-[420px] overflow-hidden bg-[#050907] pt-[78px]">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative mx-auto flex min-h-[420px] max-w-[1440px] flex-col justify-center px-5 py-20 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-5 text-xs text-white/60">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <a href="/blog" className="hover:text-white">Blog</a>
            </nav>
            <p className="eyebrow">{fmtDate(post.publishedDate)}</p>
            <h1 className="section-title mt-3 max-w-3xl text-white">{post.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{post.excerpt}</p>
          </Reveal>
        </div>
      </section>

      {/* PLACEHOLDER-CONTENT: post body pulled from lib/blog-posts.ts, pending real client copy/photos. */}
      <section className="bg-[var(--cream)] px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[760px] gap-8">
          {post.sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.06}>
              <h2 className="font-serif text-2xl text-[var(--ink)] sm:text-3xl">{section.heading}</h2>
              <p className="mt-2 text-sm leading-7 text-black/60 sm:text-base">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dark-texture border-y border-white/10 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1440px] text-center">
          <p className="eyebrow">{post.ctaEyebrow ?? "Need this fixed?"}</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">{relatedService.navLabel}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">{relatedService.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={`/${relatedService.slug}`} size="lg">
              See {relatedService.navLabel}
            </Button>
            <Button href="/blog" variant="outline">More from the blog</Button>
          </div>
        </div>
      </section>

      <CTA />
      <Contact />
      <SiteFooter />
    </main>
  );
}
