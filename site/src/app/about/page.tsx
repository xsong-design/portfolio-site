import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "I\u2019m Xiao Song, a product designer at Meta focused on enterprise messaging \u2014 making complex systems feel simple.",
  path: "/about",
});

const experience = [
  {
    company: "Meta",
    role: "Product Designer",
    period: "2024 – Present",
    description:
      "Business Messaging, Engagement team. Designing enterprise messaging tools for WhatsApp Business Platform — marketing message delivery, subscriber management, and business settings.",
  },
  {
    company: "Walmart",
    role: "Product Designer",
    period: "2023 – 2024",
    description:
      "Delivery Experience team. Designed end-to-end delivery experiences including driver tipping, order tracking, and last-mile logistics interfaces.",
  },
  {
    company: "Previous Role",
    role: "Product Designer",
    period: "2021 – 2023",
    description:
      "Placeholder — Xiao will add previous experience details here.",
  },
];

const skills = [
  {
    category: "Design",
    items: "Figma, FigJam, Adobe Creative Suite, Sketch",
  },
  {
    category: "Prototyping",
    items: "Framer, Principle, ProtoPie",
  },
  {
    category: "Research",
    items: "User interviews, usability testing, A/B testing, survey design",
  },
  {
    category: "Technical",
    items: "HTML, CSS, React, TypeScript, design systems",
  },
  {
    category: "Domains",
    items: "Enterprise SaaS, messaging platforms, complex workflows, e-commerce",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 page-pad">
      {/* ─── Intro ─── */}
      <ScrollReveal>
        <p className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-text-muted mb-6">
          about
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-text max-w-3xl">
          I design systems that make
          <br />
          complexity feel{" "}
          <span className="text-accent">inevitable.</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="mt-10 text-[1.0625rem] leading-[1.85] text-text-secondary max-w-2xl">
          I&apos;m Xiao Song, a product designer at Meta focused on enterprise
          messaging. I work at the intersection of complex business logic and
          human-centered design — transforming intricate workflows into
          interfaces that feel clear and purposeful.
        </p>
      </ScrollReveal>

      {/* ─── Philosophy ─── */}
      <SectionDivider label="philosophy" />
      <section className="py-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <h3 className="font-display text-[1.375rem] font-semibold tracking-[-0.02em] text-text mb-4">
                Systems thinking first
              </h3>
              <p className="text-[0.9375rem] leading-[1.75] text-text-secondary">
                Before pixels, I map relationships — between users, data, and
                business logic. This creates interfaces that scale gracefully and
                adapt to evolving needs without accumulating design debt.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[1.375rem] font-semibold tracking-[-0.02em] text-text mb-4">
                Craft at every scale
              </h3>
              <p className="text-[0.9375rem] leading-[1.75] text-text-secondary">
                From the timing of a micro-animation to the information
                architecture of a platform, I sweat the details that compound
                into exceptional experiences. Great design lives in the tension
                between complexity and clarity.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── Experience ─── */}
      <SectionDivider label="experience" />
      <section className="py-12">
        <ScrollReveal>
          <h2 className="font-display text-[1.75rem] font-bold tracking-[-0.02em] text-text mb-10">
            Experience
          </h2>
        </ScrollReveal>
        <div className="space-y-0 max-w-3xl">
          {experience.map((exp, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div className="py-8 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-[1.125rem] font-semibold text-text">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-text-muted">{exp.role}</p>
                  </div>
                  <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-text-muted shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[0.9375rem] leading-[1.7] text-text-secondary">
                  {exp.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Skills ─── */}
      <SectionDivider label="skills & tools" />
      <section className="py-12">
        <ScrollReveal>
          <h2 className="font-display text-[1.75rem] font-bold tracking-[-0.02em] text-text mb-10">
            Skills &amp; Tools
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
          {skills.map((skill, i) => (
            <ScrollReveal key={i} delay={0.08 * (i + 1)}>
              <div>
                <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text block mb-3">
                  {skill.category}
                </span>
                <p className="text-sm leading-[1.6] text-text-secondary">
                  {skill.items}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 mt-8 border-t border-border">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.02em] text-text mb-6">
            Want to work together?
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-accent-text hover:text-accent-hover"
            style={{
              transition:
                "color 0.2s, gap 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
            data-hover
          >
            Get in touch
            <span className="text-sm inline-block transition-transform duration-400 ease-smooth group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
