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
    subtitle: "Redesigning how businesses manage message delivery at scale",
    description:
      "Redesigning how businesses manage and optimize message delivery at scale",
    company: "Meta",
    year: "2025",
    imageText: ["Marketing", "Message", "Liquidity"],
    role: "Product Designer",
    team: "Design, PM, Eng — 8 people",
    timeline: "Q3-Q4 2025 (6 months)",
    heroImage: "/images/work/mml-hero.jpg",
    featured: true,
    order: 1,
  },
  {
    slug: "driver-tipping-walmart",
    title: "Driver Tipping at Walmart",
    subtitle:
      "Designing a fair and transparent tipping experience for delivery drivers",
    description:
      "Designing a tipping experience for delivery drivers in the Walmart ecosystem",
    company: "Walmart",
    year: "2024",
    imageText: ["Driver", "Tipping"],
    role: "Product Designer",
    team: "Design, PM, Eng, Research — 6 people",
    timeline: "Q1-Q2 2024 (5 months)",
    heroImage: "/images/work/dtwm-hero.jpg",
    featured: true,
    order: 2,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
