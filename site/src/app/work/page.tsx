import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { generatePageMetadata } from "@/lib/seo";
import { launch } from "@/lib/launch";

export const metadata = generatePageMetadata({
  title: "Work",
  description:
    "Selected design work by Xiao Song — enterprise messaging at Meta, delivery experience at Walmart.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="pt-32 pb-24 page-pad">
      <ScrollReveal>
        <p className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-text-muted mb-6">
          {launch.wip ? "work in progress" : "projects"}
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-text">
          selected work<span className="text-accent">.</span>
        </h1>
      </ScrollReveal>

      <div className="mt-[clamp(3.5rem,6vw,5rem)] grid grid-cols-1 gap-[clamp(3rem,4vw,4rem)] lg:grid-cols-[7fr_5fr] lg:gap-[clamp(2rem,3vw,3rem)]">
        <ProjectCard project={projects[0]} index={1} delay={0.15} />
        <ProjectCard
          project={projects[1]}
          index={2}
          isPortrait
          isOffset
          delay={0.3}
        />
      </div>
    </main>
  );
}
