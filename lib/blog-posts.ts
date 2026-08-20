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
  // Overrides the CTA block's default "Need this fixed?" eyebrow — for posts that
  // aren't about fixing a yard problem (e.g. a hiring-decision post).
  ctaEyebrow?: string;
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
  {
    slug: "seamless-indoor-outdoor-transitions-las-vegas",
    title: "Seamless Indoor-Outdoor Transitions: Patio Design Ideas for Las Vegas Homes",
    metaTitle: "Indoor-Outdoor Patio Design Las Vegas | TerraScapes Landscaping",
    metaDescription:
      "Flush thresholds, matching materials, and large-format pavers — how Las Vegas homeowners are blurring the line between indoor and outdoor living.",
    publishedDate: "2026-08-20",
    heroImage: "/images/backyard-after.jpg",
    heroImageAlt: "Patio and backyard living space in a Las Vegas home",
    excerpt:
      "Flush thresholds, matching materials, and large-format pavers are turning Las Vegas patios into a real extension of the living room, not just a slab out back.",
    relatedServiceSlug: "hardscaping",
    sections: [
      {
        heading: "Flush thresholds",
        body: "Setting the patio surface at the same height as interior flooring removes the visual and physical step between inside and outside, so the transition reads as one continuous space instead of two separate areas.",
      },
      {
        heading: "Matching materials inside and out",
        body: "Using a similar stone or tile pattern on the patio as what's already inside carries the same design language through the doorway, instead of the outdoor space feeling like an afterthought.",
      },
      {
        heading: "Large-format pavers",
        body: "Oversized paver slabs cut down on visible grout lines, giving a patio a cleaner, more modern look than smaller traditional pavers — and fewer joints means fewer places for weeds and settling to show up over time.",
      },
      {
        heading: "Built on a base that holds up",
        body: "None of this works long-term without the same engineered base prep that keeps any hardscape flat through Las Vegas' expansive soil and monsoon runoff — the visual effect depends on what's underneath it just as much as the surface itself.",
      },
    ],
  },
  {
    slug: "multi-functional-outdoor-kitchens-las-vegas",
    title: "Multi-Functional Outdoor Kitchens: What Las Vegas Homeowners Are Asking For",
    metaTitle: "Outdoor Kitchen Design Las Vegas | TerraScapes Landscaping",
    metaDescription:
      "Outdoor kitchens are moving past a single grill — built-in seating, durable countertops, and layouts built to handle Las Vegas heat and real entertaining.",
    publishedDate: "2026-08-20",
    heroImage: "/images/service-outdoor.jpg",
    heroImageAlt: "Outdoor kitchen and seating area in a Las Vegas backyard",
    excerpt:
      "Outdoor kitchens have moved past a single built-in grill — homeowners want real cooking capability, durable surfaces, and seating that's part of the design, not folding chairs pulled up after the fact.",
    relatedServiceSlug: "outdoor-living-design",
    sections: [
      {
        heading: "Beyond the grill",
        body: "A built-in grill is still the starting point, but outdoor kitchens are increasingly designed with real counter space and storage around it, so cooking outside works the same way it does in an actual kitchen instead of hovering around one appliance.",
      },
      {
        heading: "Countertops built for the heat",
        body: "Surfaces need to hold up to direct desert sun and summer heat without cracking, fading, or becoming too hot to touch — material choice matters more here than it does in a shaded kitchen indoors.",
      },
      {
        heading: "Seat walls instead of folding chairs",
        body: "Retaining or seat walls built into the layout double as permanent seating around the kitchen and fire feature, so gathering space is part of the design instead of something dragged out for a party and put away after.",
      },
      {
        heading: "Designed around how you actually entertain",
        body: "The best outdoor kitchens are laid out around real use — how people move between cooking, seating, and the rest of the yard — not just where a grill happens to fit.",
      },
    ],
  },
  {
    slug: "hiring-uninsured-landscaping-contractor-risk-las-vegas",
    title: "The Hidden Risk of Hiring the Cheapest Landscaping Company in Las Vegas",
    metaTitle: "Uninsured Contractor Risk: What Las Vegas Homeowners Should Know | TerraScapes Landscaping",
    metaDescription:
      "A lower bid can come with a real cost — if a landscaping contractor isn't properly licensed and insured, liability for an on-site accident can fall back on the homeowner.",
    publishedDate: "2026-08-20",
    heroImage: "/images/hero.jpg",
    heroImageAlt: "Professional landscape crew working on a Las Vegas property",
    excerpt:
      "A lower bid can look appealing until something goes wrong on site — if the contractor isn't properly insured, the liability doesn't just disappear, it often lands on the homeowner.",
    relatedServiceSlug: "residential-landscaping",
    ctaEyebrow: "Hire with confidence",
    sections: [
      {
        heading: "Why the lowest bid can cost more later",
        body: "A big gap between bids is often coming from somewhere — and one of the most common places is insurance. Carrying proper general liability and workers' compensation coverage costs a contractor real money, and cutting it is one of the easiest ways to quote a lower number.",
      },
      {
        heading: "What happens if something goes wrong",
        body: "If a worker is injured on your property and the contractor doesn't carry workers' compensation, or a mistake causes real property damage with no general liability coverage behind it, that exposure doesn't just disappear — it can land on the homeowner instead of the company that was on site.",
      },
      {
        heading: "Higher-value properties carry more exposure",
        body: "The larger and more valuable the property, the more there typically is to lose if something goes wrong — which is exactly why this matters most for homeowners who might assume a landscaping company's insurance status is a given.",
      },
      {
        heading: "How to actually check before you hire",
        body: "Ask directly for proof of current general liability and workers' compensation coverage, and confirm the contractor's Nevada State Contractors Board license is active — a legitimate company will have both ready to show without hesitation.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown blog post slug: ${slug}`);
  return post;
}
