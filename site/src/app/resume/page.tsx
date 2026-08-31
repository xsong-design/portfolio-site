import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Resume",
  description:
    "Xiao Song\u2019s resume \u2014 product designer with experience at Meta and Walmart.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <main className="pt-32 pb-24 page-pad">
      <ScrollReveal>
        <p className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-text-muted mb-6">
          resume
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-text">
            Resume<span className="text-accent">.</span>
          </h1>
          <a
            href="#"
            className="font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-accent-text hover:text-accent-hover transition-colors duration-200 border border-accent/30 hover:border-accent px-4 py-2.5 rounded-sm inline-flex items-center gap-2 self-start sm:self-auto"
            data-hover
          >
            Download PDF <span className="text-sm">↓</span>
          </a>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl">
        {/* ─── Experience ─── */}
        <SectionDivider label="experience" />
        <section className="py-8">
          <ScrollReveal>
            <div className="space-y-0">
              <div className="py-6 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-display text-[1.125rem] font-semibold text-text">
                      Meta
                    </h3>
                    <p className="text-sm text-text-muted">
                      Product Designer — Business Messaging, Engagement
                    </p>
                  </div>
                  <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-text-muted shrink-0 mt-1">
                    2024 – Present
                  </span>
                </div>
                <p className="text-sm leading-[1.65] text-text-secondary mt-3">
                  Designing enterprise messaging tools for WhatsApp Business
                  Platform. Led marketing message delivery redesign, subscriber
                  management flows, and business settings architecture.
                </p>
              </div>

              <div className="py-6 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-display text-[1.125rem] font-semibold text-text">
                      Walmart
                    </h3>
                    <p className="text-sm text-text-muted">
                      Product Designer — Delivery Experience
                    </p>
                  </div>
                  <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-text-muted shrink-0 mt-1">
                    2023 – 2024
                  </span>
                </div>
                <p className="text-sm leading-[1.65] text-text-secondary mt-3">
                  Designed end-to-end delivery experiences including driver
                  tipping, order tracking, and last-mile logistics interfaces.
                </p>
              </div>

              <div className="py-6 border-t border-border opacity-50">
                <p className="text-sm text-text-muted italic">
                  Additional experience — Xiao will add details here.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── Education ─── */}
        <SectionDivider label="education" />
        <section className="py-8">
          <ScrollReveal delay={0.1}>
            <div className="py-6 border-t border-border opacity-50">
              <p className="text-sm text-text-muted italic">
                Education details — Xiao will add university, degree, and
                graduation year here.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── Skills ─── */}
        <SectionDivider label="skills" />
        <section className="py-8">
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-t border-border">
              <div>
                <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text block mb-2">
                  Design
                </span>
                <p className="text-sm leading-[1.6] text-text-secondary">
                  Figma, FigJam, Adobe Creative Suite, Sketch
                </p>
              </div>
              <div>
                <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text block mb-2">
                  Prototyping
                </span>
                <p className="text-sm leading-[1.6] text-text-secondary">
                  Framer, Principle, ProtoPie
                </p>
              </div>
              <div>
                <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text block mb-2">
                  Research
                </span>
                <p className="text-sm leading-[1.6] text-text-secondary">
                  User interviews, usability testing, A/B testing, survey design
                </p>
              </div>
              <div>
                <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text block mb-2">
                  Technical
                </span>
                <p className="text-sm leading-[1.6] text-text-secondary">
                  HTML, CSS, React, TypeScript, design systems
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}
