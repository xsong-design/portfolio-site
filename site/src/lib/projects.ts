/**
 * Client-safe project listing data. This mirrors the MDX frontmatter in
 * content/work/ — when you update an MDX file, update this array too.
 * The MDX files are the canonical source; this file exists because client
 * components (homepage, work page) can't import the fs-dependent content.ts.
 */
import type { ProjectFrontmatter } from "./content";

export type Project = ProjectFrontmatter;

export const projects: Project[] = [
  {
    slug: "marketing-message-liquidity",
    title: "Marketing Message Liquidity",
    subtitle:
      "Integrating marketing messages into ads creation so Meta’s optimizations could acquire and retain under one budget",
    description:
      "I was a senior designer on the end-to-end with a Design Lead, then led budget comprehension and reporting after testing showed advertisers did not understand a shared, optimized budget.",
    company: "Meta",
    year: "2022–2024",
    imageText: ["Marketing", "Message", "Liquidity"],
    role: "Senior Product Designer — e2e with Design Lead; then budget comprehension and reporting",
    team: "Marketing Messages, with a Design Lead; later the ads reporting and metrics teams",
    timeline: "Q4 2022 – Q3 2024",
    heroImage: "/images/work/mml-hero.jpg",
    cardImage: "/images/work/mml-chat.jpg",
    cardFocus: "82% center",
    featured: true,
    order: 1,
    cardRole: "Senior designer",
    cardSummary:
      "Marketing messages inside ads creation, so acquiring customers and bringing them back share one budget.",
    metric: {
      value: "$1.4B",
      label: "additional revenue projected by 2026",
    },
  },
  {
    slug: "driver-tipping-walmart",
    title: "Driver Tipping at Walmart",
    subtitle:
      "Move tipping to checkout so Spark drivers get paid, and customers know it is only for grocery delivery",
    description:
      "Post-delivery tips were getting lost. I designed tipping at checkout for Spark grocery delivery — 100% to the driver, and only on the grocery cart in an app that mixed store and fulfillment orders.",
    company: "Walmart",
    year: "2020–2021",
    imageText: ["Driver", "Tipping"],
    role: "Product Designer — Spark driver tipping at checkout",
    team: "Fulfillment",
    timeline: "Nov 2020 – March 2021",
    heroImage: "/images/work/dtwm-hero.jpg",
    cardImage: "/images/work/dtwm-screen.jpg",
    cardFocus: "88% center",
    featured: true,
    order: 2,
    cardRole: "Designer",
    cardSummary:
      "Tipping at checkout for Spark grocery delivery, paid entirely to the driver.",
    metric: {
      value: "20%+",
      label: "tip rates",
    },
  },
  {
    slug: "search-browse-walmart",
    title: "Search & Browse at Walmart",
    subtitle:
      "Hired onto Search & Browse to personalize Walmart.com when a query like AA batteries returned thousands of results",
    description:
      "I joined Walmart to work on Search & Browse — personalizing e-commerce across millions of SKUs — and owned Top Picks and Shop By.",
    company: "Walmart",
    year: "2019–2020",
    imageText: ["Search", "&", "Browse"],
    role: "Product Designer, Search & Browse — Top Picks and Shop By",
    team: "2 UX designers, CX PMs, 2 data scientists, 1 researcher; frontend and backend leads; category specialists",
    timeline: "April 2019 – ~Q1 2020",
    heroImage: "/images/work/search-browse-hero.jpg",
    cardImage: "/images/work/search-screen.jpg",
    cardFocus: "72% center",
    featured: true,
    order: 3,
    cardRole: "Designer",
    cardSummary:
      "Personalize search on Walmart.com, including Top Picks and Shop By.",
    metric: {
      value: "About 20 → 14",
      label: "clicks to cart",
    },
  },
  {
    slug: "scaling-marketing-messages",
    title: "Scaling Marketing Messages",
    subtitle:
      "After Liquidity, getting WhatsApp marketing messages onto more surfaces — Meta Business Suite, partners, and remonetized service messages",
    description:
      "One assignment: scale marketing messages beyond Ads Manager. I focused on audience send in Meta Business Suite, helped bring campaigns onto Shopify and WooCommerce, and worked billing communications when service messages started charging.",
    company: "Meta",
    year: "After Liquidity",
    imageText: ["Scaling", "Marketing", "Messages"],
    role: "Product Designer — audience send, partners, and billing communications",
    team: "Marketing Messages; billing within monetization",
    timeline: "Assignment after Liquidity launched",
    heroImage: "/images/work/scaling-mm-hero.jpg",
    featured: false,
    order: 4,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const list = getFeaturedProjects();
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return list[(index + 1) % list.length];
}
