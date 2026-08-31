import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import {
  getCompiledProject,
  getAdjacentProjects,
  getAllProjectSlugs,
} from "@/lib/content";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getCompiledProject(slug);
  if (!project) return {};

  return generateProjectMetadata({
    title: project.frontmatter.title,
    subtitle: project.frontmatter.subtitle,
    slug: project.frontmatter.slug,
    heroImage: project.frontmatter.heroImage,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = await getCompiledProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const { frontmatter, content } = project;

  const jsonLd = generateProjectJsonLd({
    title: frontmatter.title,
    description: frontmatter.subtitle,
    slug: frontmatter.slug,
    heroImage: frontmatter.heroImage,
  });

  return (
    <main className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back link */}
      <div className="page-pad">
        <ScrollReveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-text-muted hover:text-accent-text transition-colors duration-200"
            data-hover
          >
            &larr; Back to work
          </Link>
        </ScrollReveal>
      </div>

      {/* Hero */}
      <div className="page-pad mt-12">
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-accent-text mb-4">
            {frontmatter.company} &middot; {frontmatter.year}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-text max-w-4xl">
            {frontmatter.title}
          </h1>
          <p className="mt-6 text-[1.0625rem] leading-[1.75] text-text-secondary max-w-2xl">
            {frontmatter.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border">
            {[
              { label: "Role", value: frontmatter.role },
              { label: "Team", value: frontmatter.team },
              { label: "Timeline", value: frontmatter.timeline },
              { label: "Company", value: frontmatter.company },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-text-muted block mb-2">
                  {label}
                </span>
                <p className="text-sm text-text">{value}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* MDX Content */}
      <SectionDivider label="case study" />
      <section className="page-pad py-12">
        <ScrollReveal>
          <div className="max-w-3xl">{content}</div>
        </ScrollReveal>
      </section>

      {/* Next Project */}
      {next && (
        <section className="page-pad py-[clamp(4rem,8vw,6rem)] mt-12 border-t border-border">
          <ScrollReveal>
            <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              Next project
            </p>
            <Link
              href={`/work/${next.frontmatter.slug}`}
              className="group inline-flex items-center gap-3 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-text hover:text-accent-text transition-colors duration-300"
              data-hover
            >
              {next.frontmatter.title}
              <span className="text-accent text-lg inline-block transition-transform duration-400 ease-smooth group-hover:translate-x-2">
                &rarr;
              </span>
            </Link>
          </ScrollReveal>
        </section>
      )}
    </main>
  );
}
