"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface StickyTheaterProps {
  projects: Project[];
}

export default function StickyTheater({ projects }: StickyTheaterProps) {
  const theaterRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const theater = theaterRef.current;
    if (!theater) return;

    let raf = 0;
    const update = () => {
      const rect = theater.getBoundingClientRect();
      const scrollInto = -rect.top;
      const segment = theater.offsetHeight / (projects.length + 1);
      let idx = Math.floor(scrollInto / segment);
      idx = Math.max(0, Math.min(projects.length - 1, idx));

      const visible =
        rect.top < window.innerHeight && rect.bottom > 0 && scrollInto >= 0;
      setInView(visible);
      setActiveIndex(idx);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [projects.length, prefersReduced]);

  if (prefersReduced) {
    return (
      <div className="page-pad py-16 space-y-16">
        {projects.map((project, i) => (
          <ProjectSlide key={project.slug} project={project} index={i} static />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={theaterRef}
      className="relative"
      style={{ height: `${(projects.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center items-center overflow-hidden page-pad">
        {projects.map((project, i) => {
          const isActive = i === activeIndex;
          const isExiting = i === activeIndex - 1;
          return (
            <div
              key={project.slug}
              className="absolute inset-0 flex flex-col justify-center items-center page-pad pointer-events-none"
              style={{
                opacity: isActive ? 1 : isExiting ? 0.3 : 0,
                transform: isActive
                  ? "scale(1) translateY(0)"
                  : isExiting
                    ? "scale(0.92) translateY(-40px)"
                    : "scale(1.05) translateY(0)",
                transition:
                  "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 20 : isExiting ? 10 : 0,
              }}
            >
              <ProjectSlide
                project={project}
                index={i}
                active={isActive}
              />
            </div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div
        className="fixed right-5 top-1/2 -translate-y-1/2 z-30 flex-col gap-2.5 hidden sm:flex"
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: inView ? "auto" : "none",
        }}
        aria-hidden
      >
        {projects.map((p, i) => (
          <span
            key={p.slug}
            className="block w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background:
                i === activeIndex
                  ? "var(--color-accent)"
                  : "var(--color-border-strong)",
              transform: i === activeIndex ? "scale(1.5)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectSlide({
  project,
  index,
  active = true,
  static: isStatic = false,
}: {
  project: Project;
  index: number;
  active?: boolean;
  static?: boolean;
}) {
  const indexStr = String(index + 1).padStart(2, "0");

  return (
    <div className="w-full max-w-[1060px] flex flex-col items-center">
      <Link
        href={`/work/${project.slug}`}
        className="group block w-full"
        data-hover
        tabIndex={active || isStatic ? 0 : -1}
      >
        <div
          className="relative w-full overflow-hidden bg-text aspect-[3/2] sm:aspect-video"
          style={{
            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center group-hover:scale-[1.03]"
            style={{
              background: "linear-gradient(145deg, #1a1a1a, #2d2d2d)",
              transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-center text-white/[0.08] leading-[1.1] p-8">
              {project.imageText.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </span>
          </div>
        </div>
      </Link>

      <div
        className="flex gap-6 sm:gap-8 items-start w-full mt-6 sm:mt-8"
        style={
          isStatic
            ? undefined
            : {
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(40px)",
                transition:
                  "opacity 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s",
              }
        }
      >
        <span className="font-mono text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-accent opacity-30 shrink-0">
          {indexStr}
        </span>
        <div className="min-w-0 pt-1">
          <Link
            href={`/work/${project.slug}`}
            className="font-display text-[1.25rem] sm:text-[1.375rem] font-semibold tracking-[-0.01em] leading-[1.2] text-text hover:text-accent-text transition-colors duration-300"
            data-hover
            tabIndex={active || isStatic ? 0 : -1}
          >
            {project.title}
          </Link>
          <p className="mt-2 text-[0.9375rem] leading-[1.6] text-text-secondary max-w-md">
            {project.description}
          </p>
          <p className="mt-3 font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-text-muted">
            {project.company} &middot; {project.year}
          </p>
        </div>
      </div>
    </div>
  );
}
