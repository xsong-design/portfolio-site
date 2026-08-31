"use client";

import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import StickyTheater from "@/components/StickyTheater";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="page-pad pt-[clamp(3rem,6vw,5rem)] pb-4">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6">
            <span className="font-mono text-[clamp(3rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.85] text-accent opacity-30">
              01
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-text">
              selected work<span className="text-accent">.</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <StickyTheater projects={projects} />

      <div className="page-pad pb-[clamp(3rem,6vw,5rem)] flex justify-end -mt-8 relative z-10">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-accent-text hover:text-accent-hover"
          style={{
            transition: "color 0.2s, gap 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
          data-hover
        >
          View all work
          <span className="text-sm inline-block transition-transform duration-400 ease-smooth group-hover:translate-x-1.5">
            &rarr;
          </span>
        </Link>
      </div>

      <SectionDivider label="background" />

      <section className="page-pad py-[clamp(4rem,8vw,6rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[clamp(2rem,4vw,4rem)] items-start">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6">
              <span className="font-mono text-[clamp(3rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.85] text-accent opacity-30">
                02
              </span>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-text">
                about<span className="text-accent">.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="pt-2">
              <p className="text-[1.0625rem] leading-[1.75] text-text-secondary max-w-[500px]">
                Product designer at Meta building{" "}
                <em className="font-display font-medium text-text">
                  enterprise messaging tools
                </em>{" "}
                for millions of businesses. I care about making complex systems
                feel simple and bringing craft to every interaction.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 mt-8 font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-accent-text hover:text-accent-hover"
                style={{
                  transition: "color 0.2s, gap 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
                data-hover
              >
                More about me
                <span className="text-sm inline-block transition-transform duration-400 ease-smooth group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
