export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedDate: string; // ISO yyyy-mm-dd
  heroImage: string;
  heroImageAlt: string;
  excerpt: string;
  // Slug into lib/service-pages.ts — the CTA at the bottom of the post links here.
  relatedServiceSlug: string;
  sections: { heading: string; body: string }[];
};

// PLACEHOLDER-CONTENT: informational posts aimed at long-tail, lower-competition
// searches that happen before someone is ready to hire a landscaper — each one
// bridges to a real existing service page rather than making a new, unverified
// service claim (e.g. the turf post recommends real sod/xeriscape, not synthetic
// turf sales, since that's what TerraScapes actually offers per lib/service-pages.ts).
// Written by us, service-accurate, not lorem ipsum — swap for TerraScapes' real
// voice/expertise later.
export const blogPosts: BlogPost[] = [
  {
    slug: "artificial-turf-smells-like-urine-las-vegas",
    title: "Why Does My Artificial Turf Smell Like Urine — And What Actually Fixes It",
    metaTitle: "Artificial Turf Urine Smell: Causes & Fixes (Las Vegas) | TerraScapes Landscaping",
    metaDescription:
      "Dog urine smell in synthetic turf, explained — what causes it, how to clean it yourself, and when replacing the turf is the real fix. Las Vegas.",
    publishedDate: "2026-08-20",
    heroImage: "/images/service-xeriscape.jpg",
    heroImageAlt: "Backyard turf area in a Las Vegas home",
    excerpt:
      "Pet urine smell in artificial turf is one of the most common complaints we hear — here's what's actually causing it and when cleaning stops being enough.",
    relatedServiceSlug: "turf-removal-installation",
    sections: [
      {
        heading: "Why urine smell builds up in synthetic turf",
        body: "Artificial turf doesn't absorb liquid the way soil does — urine sits in the infill and backing instead of draining away, and bacteria breaking it down is what produces the smell. Heat makes it worse: Las Vegas summers accelerate the bacterial growth that causes odor.",
      },
      {
        heading: "What actually helps",
        body: "Regular rinsing with a hose breaks up concentrated spots before they set in. For odor that's already there, a diluted Simple Green and water solution poured through the turf and rinsed out addresses a lot of buildup that plain water alone won't touch.",
      },
      {
        heading: "When cleaning stops being enough",
        body: "Turf infill only holds so much before the backing itself starts holding odor permanently — at that point no amount of cleaning solution fixes it, because the smell is coming from the material itself, not just the surface.",
      },
      {
        heading: "Replacing it instead of fighting it",
        body: "When turf is past the point cleaning can fix, TerraScapes replaces it with real sod or a full xeriscape conversion — either one solves the odor problem permanently instead of managing it every few weeks.",
      },
    ],
  },
  {
    slug: "why-are-my-pavers-cracking-sinking-las-vegas",
    title: "Why Are My Pavers Cracking or Sinking? (Las Vegas Soil Explained)",
    metaTitle: "Cracking or Sinking Pavers in Las Vegas: Causes & Fixes | TerraScapes Landscaping",
    metaDescription:
      "Pavers cracking, sinking, or heaving in Las Vegas usually comes down to base prep and expansive soil — here's what's actually happening and how to fix it right.",
    publishedDate: "2026-08-20",
    heroImage: "/images/service-hardscape.jpg",
    heroImageAlt: "Paver patio installation in a Las Vegas backyard",
    excerpt:
      "If a paver patio or walkway is cracking, sinking, or shifting after just a couple of summers, the problem almost always started below the surface, not with the pavers themselves.",
    relatedServiceSlug: "hardscaping",
    sections: [
      {
        heading: "It's rarely the pavers themselves",
        body: "Pavers are a rigid, thin surface sitting on top of a base — when that base moves, the pavers crack, sink, or heave right along with it. The material on top is almost never the actual point of failure.",
      },
      {
        heading: "Las Vegas soil makes this worse",
        body: "Much of the Las Vegas Valley sits on expansive clay and caliche, soil that shifts with moisture changes more than most regions ever have to plan for. A base built for a milder climate often fails here within a few years.",
      },
      {
        heading: "What proper base prep actually looks like",
        body: "A compacted, engineered base — not just leveled dirt — is what keeps a patio or walkway flat through seasonal soil movement and monsoon runoff. It's invisible once the job's done, which is exactly why it's the step that gets skipped.",
      },
      {
        heading: "Fixing it right instead of patching around it",
        body: "Re-setting a few sunken pavers without addressing the base underneath just delays the same problem — TerraScapes rebuilds the base itself when hardscape starts failing, not just the surface on top.",
      },
    ],
  },
  {
    slug: "why-is-my-water-bill-so-high-las-vegas-landscape",
    title: "Why Is My Water Bill So High? What Your Landscape Might Be Wasting",
    metaTitle: "High Water Bill? Landscape Irrigation Waste in Las Vegas | TerraScapes Landscaping",
    metaDescription:
      "A spike in your Las Vegas water bill is often coming from the yard, not the house — here's what to check and how a drip system fixes it for good.",
    publishedDate: "2026-08-20",
    heroImage: "/images/service-irrigation.jpg",
    heroImageAlt: "Drip irrigation system in a Las Vegas landscape",
    excerpt:
      "Before assuming a leak inside the house, it's worth checking the yard first — irrigation is one of the most common, most fixable sources of a surprise water bill.",
    relatedServiceSlug: "irrigation-drip-systems",
    sections: [
      {
        heading: "Spray irrigation loses more water than it looks like",
        body: "Overspray onto pavement, wind drift, and evaporation in Las Vegas heat all waste water before it ever reaches a plant's roots — spray systems are usually the biggest hidden cost in an irrigation bill.",
      },
      {
        heading: "One schedule doesn't fit every plant",
        body: "Turf, shrubs, and trees all need different amounts of water — a single blanket schedule almost always overwaters some zones just to keep the thirstiest one alive, which shows up directly on the bill.",
      },
      {
        heading: "Broken components waste water quietly",
        body: "A cracked line, a stuck valve, or a broken emitter can run for weeks without an obvious sign — the yard doesn't necessarily look flooded, the bill just climbs.",
      },
      {
        heading: "What a drip conversion actually changes",
        body: "Converting planting beds from spray to drip, and zoning irrigation by plant type with a smart controller, cuts the waste at the source instead of just watching the bill and hoping it goes down.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown blog post slug: ${slug}`);
  return post;
}
