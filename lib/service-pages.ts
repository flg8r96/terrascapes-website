export type ServicePage = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  sections: { heading: string; body: string }[];
  // false = page stays live (kept for its indexed-URL SEO value) but isn't
  // linked from the footer or from other service pages' cross-link panels.
  promoted?: boolean;
};

// PLACEHOLDER-CONTENT: all copy below (intro + section body text) is placeholder
// pending the client's actual service copy and photos. Service-accurate, not lorem
// ipsum, but written by us — swap for TerraScapes' real copy before this goes live
// beyond the redirect-preservation purpose it serves today.
export const servicePages: ServicePage[] = [
  {
    slug: "hardscaping",
    navLabel: "Hardscaping",
    eyebrow: "Hardscaping",
    h1: "Hardscaping in Las Vegas, NV",
    metaTitle: "Hardscaping Las Vegas, NV | TerraScapes Landscaping",
    metaDescription:
      "Pavers, walls, patios, and walkways built for Las Vegas heat and soil. TerraScapes designs and installs hardscape that holds up outdoors. Free estimates.",
    heroImage: "/images/service-hardscape.jpg",
    heroImageAlt: "Paver patio and hardscape installation in a Las Vegas backyard",
    intro:
      "Hardscape is the structure a desert landscape is built around — patios, walls, steps, and walkways that hold up to heat, monsoon runoff, and years of use without cracking or shifting.",
    sections: [
      {
        heading: "Pavers, patios, and walkways",
        body: "Paver patios, walkways, and entries are set on a compacted base engineered for Las Vegas' expansive clay and caliche soil, so surfaces stay level instead of heaving after a few summers.",
      },
      {
        heading: "Retaining and seat walls",
        body: "Retaining walls manage grade changes and erosion on sloped lots, while seat walls double as extra gathering space around a patio or fire feature.",
      },
      {
        heading: "Steps, edging, and structure",
        body: "Steps, edging, and border work tie planting beds, turf areas, and hardscape together into one finished grade instead of mismatched sections.",
      },
      {
        heading: "Built for desert conditions",
        body: "Materials and base prep are chosen for direct sun exposure, seasonal monsoon runoff, and expansive soil — the specific conditions that cause hardscape failures in the Las Vegas Valley.",
      },
    ],
  },
  {
    slug: "design",
    navLabel: "Landscape Design",
    eyebrow: "Landscape design",
    h1: "Landscape Design Services in Las Vegas, NV",
    metaTitle: "Landscape Design Las Vegas, NV | TerraScapes Landscaping",
    metaDescription:
      "Custom desert landscape design for Las Vegas properties — site planning, planting design, and hardscape layouts built for the climate. Design-build landscaping in Las Vegas.",
    heroImage: "/images/service-design.jpg",
    heroImageAlt: "Landscape design plan being applied to a Las Vegas desert yard",
    intro:
      "Good desert landscaping starts on paper. Our design process maps how a property is actually used, then builds a plan around grading, drainage, sun exposure, and low-water plantings before a single stone is set.",
    sections: [
      {
        heading: "A plan before a shovel",
        body: "Every project starts with a site walk and a design that accounts for slope, drainage, existing utilities, and how the space will be used — so the install crew is building from a finished plan, not improvising.",
      },
      {
        heading: "Desert-appropriate planting design",
        body: "We design planting palettes around low-water, heat-tolerant species suited to the Mojave climate, arranged for year-round color and structure instead of a yard that only looks good in spring.",
      },
      {
        heading: "Hardscape and layout planning",
        body: "Patios, walkways, retaining walls, and lighting are laid out together with the planting plan, so the finished landscape reads as one design instead of add-ons stacked over time.",
      },
      {
        heading: "From concept to installation",
        body: "TerraScapes designs and builds — the same team that draws the plan installs it, so nothing gets lost in a handoff between a designer and a separate install crew.",
      },
    ],
  },
  {
    slug: "outdoor-living-design",
    navLabel: "Outdoor Living Design",
    eyebrow: "Outdoor living",
    h1: "Outdoor Living Design in Las Vegas, NV",
    metaTitle: "Outdoor Living Design Las Vegas, NV | TerraScapes Landscaping",
    metaDescription:
      "Fire features, outdoor kitchens, pergolas, and shade structures designed for Las Vegas backyards. TerraScapes builds resort-style outdoor living spaces.",
    heroImage: "/images/service-outdoor.jpg",
    heroImageAlt: "Outdoor living space with fire feature and seating in a Las Vegas backyard",
    intro:
      "Las Vegas backyards live outside most of the year. We design outdoor living spaces — kitchens, fire features, shade, and seating — built to handle the heat and get used, not just photographed.",
    sections: [
      {
        heading: "Outdoor kitchens and fire features",
        body: "Built-in grills, counters, and fire features designed around how you actually entertain, using materials rated for outdoor Las Vegas conditions.",
      },
      {
        heading: "Shade structures and pergolas",
        body: "Pergolas, ramadas, and shade sails cut down direct sun exposure so a backyard is usable for more of the day, not just after sunset.",
      },
      {
        heading: "Seating and gathering areas",
        body: "Patios and seating areas are laid out around the fire feature and kitchen so the whole space functions as one outdoor room instead of separate, disconnected zones.",
      },
      {
        heading: "Built to handle the heat",
        body: "Materials, finishes, and plantings around outdoor living spaces are chosen to hold up to direct desert sun and triple-digit summers without cracking, fading, or dying back.",
      },
    ],
  },
  {
    slug: "commercial-landscaping-services",
    navLabel: "Commercial Landscaping",
    eyebrow: "Commercial landscaping",
    h1: "Commercial Landscaping Services in Las Vegas, NV",
    metaTitle: "Commercial Landscaping Las Vegas, NV | TerraScapes Landscaping",
    metaDescription:
      "Commercial landscape installation and maintenance for HOAs, property managers, and businesses in Las Vegas, Henderson, and Summerlin. Licensed and insured.",
    heroImage: "/images/cta.jpg",
    heroImageAlt: "Commercial property landscaping at dusk in Las Vegas",
    intro:
      "TerraScapes works with HOAs, property managers, and commercial owners across the Las Vegas Valley on landscape installation and ongoing maintenance that holds up to shared-property wear and desert conditions.",
    sections: [
      {
        heading: "HOA and property management",
        body: "Common-area landscaping, entry monuments, and community spaces designed and maintained to a consistent standard across the property — a common need for HOAs and managed communities in the valley.",
      },
      {
        heading: "Commercial installation",
        body: "New-build and renovation landscaping for retail, office, and multi-family properties, scoped around water-use requirements and long-term maintenance cost, not just the initial look.",
      },
      {
        heading: "Scheduled maintenance contracts",
        body: "Recurring maintenance — irrigation checks, plant health, seasonal cleanup — keeps commercial properties presentable year-round without a property manager having to coordinate one-off visits.",
      },
      {
        heading: "Licensed and insured for commercial work",
        body: "TerraScapes is licensed, bonded, and insured in Nevada (Lic. #0082269, #0094932), serving commercial properties across Las Vegas, Henderson, and Summerlin.",
      },
    ],
    // Parked for now — page stays live at its original indexed URL, but not
    // linked from the footer or other pages' cross-link panels.
    promoted: false,
  },
  {
    // PLACEHOLDER-CONTENT: an audience-based hub page, not one of the homepage's 6
    // specific-service tiles — same unpromoted treatment as commercial-landscaping-services.
    slug: "residential-landscaping",
    navLabel: "Residential Landscaping",
    eyebrow: "Residential landscaping",
    h1: "Residential Landscaping in Las Vegas, NV",
    metaTitle: "Residential Landscaping Las Vegas, NV | TerraScapes Landscaping",
    metaDescription:
      "Full-service residential landscaping for Las Vegas homeowners — design, hardscape, planting, and ongoing care from one team, start to finish. Licensed and insured.",
    heroImage: "/images/oasis-after.jpg",
    heroImageAlt: "Completed residential desert landscaping in Las Vegas",
    intro:
      "TerraScapes handles residential landscaping the way a homeowner actually experiences it — one team from first design sketch through years of upkeep, not a design firm, a separate install crew, and a maintenance company you have to coordinate yourself.",
    sections: [
      {
        heading: "New yards and full renovations",
        body: "Whether it's a blank lot on a new build or a tired yard that's never worked, we scope the whole project — grading, planting, hardscape, and irrigation — as one plan instead of a patchwork of unrelated fixes.",
      },
      {
        heading: "One team, start to finish",
        body: "The same team that designs your yard installs it and maintains it afterward, so nothing gets lost in a handoff and nobody's guessing what a previous crew intended.",
      },
      {
        heading: "Built around how your family lives outside",
        body: "Kids, pets, entertaining, quiet mornings — the layout follows how the yard actually gets used, not a generic template dropped onto the lot.",
      },
      {
        heading: "Licensed, insured, and local",
        body: "TerraScapes is licensed, bonded, and insured in Nevada (Lic. #0082269, #0094932), serving homeowners across Las Vegas, Henderson, and Summerlin.",
      },
    ],
    promoted: false,
  },
  {
    slug: "irrigation-drip-systems",
    navLabel: "Irrigation & Drip Systems",
    eyebrow: "Irrigation & drip systems",
    h1: "Irrigation & Drip Systems in Las Vegas, NV",
    metaTitle: "Irrigation & Drip Systems Las Vegas, NV | TerraScapes Landscaping",
    metaDescription:
      "Drip irrigation design, installation, and repair for Las Vegas landscapes — efficient watering built for desert plants and water restrictions. Free estimates.",
    heroImage: "/images/service-irrigation.jpg",
    heroImageAlt: "Drip irrigation system watering desert landscaping in Las Vegas",
    intro:
      "Desert landscaping only works if the irrigation behind it is right. We design and install drip and spray systems zoned for how each plant actually uses water, built around Las Vegas Valley Water District restrictions.",
    sections: [
      {
        heading: "Zoned for plant type",
        body: "Trees, shrubs, and turf all use water differently — zoning irrigation by plant type instead of one blanket schedule prevents the overwatering and underwatering that kills desert plantings early.",
      },
      {
        heading: "Drip conversions",
        body: "Converting spray heads to drip on planting beds cuts water waste from overspray and runoff, a common upgrade for older Las Vegas landscapes still running on inefficient original systems.",
      },
      {
        heading: "Controllers and scheduling",
        body: "Smart controllers adjust run times to the season and weather instead of a fixed schedule, keeping plantings healthy through Las Vegas summers without wasting water the rest of the year.",
      },
      {
        heading: "Repair and troubleshooting",
        body: "Broken lines, clogged emitters, and dead zones get diagnosed and fixed directly — irrigation problems are often the real cause behind a landscape that looks like it's failing.",
      },
    ],
  },
  {
    slug: "turf-removal-installation",
    navLabel: "Turf Removal & Installation",
    eyebrow: "Turf removal & installation",
    h1: "Turf Removal & Installation in Las Vegas, NV",
    metaTitle: "Turf Removal & Installation Las Vegas, NV | TerraScapes Landscaping",
    metaDescription:
      "New sod and turf installation, plus turf removal and xeriscape conversion, for Las Vegas yards. TerraScapes handles both directions. Free estimates.",
    heroImage: "/images/service-xeriscape.jpg",
    heroImageAlt: "Xeriscape yard conversion with desert plants and rock in Las Vegas",
    intro:
      "Whether a yard needs new turf put in or old turf taken out for a xeriscape conversion, it's the same underlying work done right — proper grading, soil prep, and materials suited to Las Vegas conditions either direction you're going.",
    sections: [
      {
        heading: "New sod and turf installation",
        body: "New construction, a dead or patchy lawn, or a play area for kids and pets — turf installation starts with grading and soil prep, then real sod laid for a lawn that actually holds up to Las Vegas heat and use.",
      },
      {
        heading: "Turf removal for xeriscape conversion",
        body: "Going the other direction, we remove grass and irrigation down to grade and prep the soil properly, so the xeriscape conversion that replaces it lasts instead of turning into a weedy gravel lot in two years.",
      },
      {
        heading: "Rock, gravel, and low-water plant selection",
        body: "For xeriscape conversions, decomposed granite, boulders, accent rock, and desert-adapted plantings replace turf's water demand while still giving the yard color, shade, and privacy through the year.",
      },
      {
        heading: "Water-district rebate eligible",
        body: "Turf-to-xeriscape conversions are designed to meet Southern Nevada Water Authority rebate requirements where applicable, so the upgrade can help offset its own cost.",
      },
    ],
  },
  {
    slug: "landscape-maintenance",
    navLabel: "Landscape Maintenance",
    eyebrow: "Landscape maintenance",
    h1: "Landscape Maintenance in Las Vegas, NV",
    metaTitle: "Landscape Maintenance Las Vegas, NV | TerraScapes Landscaping",
    metaDescription:
      "Scheduled landscape maintenance for Las Vegas, Henderson, and Summerlin properties — irrigation checks, plant health, and seasonal cleanup. Free estimates.",
    heroImage: "/images/service-maintenance.jpg",
    heroImageAlt: "Maintained desert landscaping with lighting in a Las Vegas yard",
    intro:
      "A desert landscape holds up over time with the right maintenance behind it. We provide scheduled care that protects the design and plant health of a property year-round, not just a one-time cleanup.",
    sections: [
      {
        heading: "Scheduled visits",
        body: "Recurring maintenance visits keep plantings, irrigation, and hardscape in check on a set schedule, so small issues get caught before they turn into a dead plant or a costly repair.",
      },
      {
        heading: "Irrigation checks",
        body: "Routine checks catch broken emitters, clogged lines, and controller issues early — the most common reason a landscape starts declining even though nothing visibly changed.",
      },
      {
        heading: "Seasonal cleanup and pruning",
        body: "Pruning, deadheading, and seasonal cleanup keep desert plantings shaped and healthy through Las Vegas' heat and its shorter cool season.",
      },
      {
        heading: "Protecting the original design",
        body: "Maintenance follows the original design intent — plant spacing, shape, and sightlines — instead of generic upkeep that lets a landscape drift away from how it was designed to look.",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePage {
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown service page slug: ${slug}`);
  return page;
}
