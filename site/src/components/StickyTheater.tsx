"use client";

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface StickyTheaterProps {
  projects: Project[];
}

const STAGE_QUERY = "(min-width: 768px) and (min-height: 640px)";

export default function StickyTheater({ projects }: StickyTheaterProps) {
  const theaterRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(false);
  const prefersReduced = useReducedMotion();

  useLayoutEffect(() => {
    const mq = window.matchMedia(STAGE_QUERY);
    const update = () => setStage(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pinned = stage && !prefersReduced;

  useEffect(() => {
    if (!pinned) return;

    const theater = theaterRef.current;
    if (!theater) return;

    let raf = 0;
    const update = () => {
      const rect = theater.getBoundingClientRect();
      const scrollInto = -rect.top;
      const segment = theater.offsetHeight / (projects.length + 1);
      let idx = Math.floor(scrollInto / segment);
      idx = Math.max(0, Math.min(projects.length - 1, idx));
      const local = segment > 0 ? (scrollInto - idx * segment) / segment : 0;

      const visible =
        rect.top < window.innerHeight && rect.bottom > 0 && scrollInto >= 0;
      setInView(visible);
      setActiveIndex(idx);
      setProgress(Math.max(0, Math.min(1, local)));
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
  }, [projects.length, pinned]);

  if (!pinned) {
    return (
      <div className="page-pad py-10 md:py-16 space-y-16 md:space-y-24">
        {projects.map((project, i) => (
          <ProjectSlide key={project.slug} project={project} index={i} flow />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={theaterRef}
      className="relative"
      style={{ height: `${(projects.length + 1) * 100}vh` }}
      aria-label="Selected projects"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {projects.map((project, i) => {
          const isActive = i === activeIndex;
          const isExiting = i === activeIndex - 1;
          return (
            <div
              key={project.slug}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1)",
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 20 : isExiting ? 10 : 0,
              }}
              aria-hidden={!isActive}
            >
              <ProjectSlide
                project={project}
                index={i}
                active={isActive}
                exiting={isExiting}
                progress={isActive ? progress : 0}
              />
            </div>
          );
        })}
      </div>

      <div
        className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2.5 md:flex"
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
            className="block h-1.5 w-1.5 rounded-full transition-all duration-300"
            style={{
              background:
                i === activeIndex
                  ? "var(--color-accent)"
                  : "rgba(245,245,245,0.55)",
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
  exiting = false,
  progress = 0.5,
  flow = false,
}: {
  project: Project;
  index: number;
  active?: boolean;
  exiting?: boolean;
  progress?: number;
  flow?: boolean;
}) {
  const indexStr = String(index + 1).padStart(2, "0");
  const imageEnter = flow ? 0 : active ? 0 : exiting ? -56 : 72;
  const textEnter = flow ? 0 : active ? 0 : exiting ? -16 : -28;
  const imageDrift = !flow && active ? (0.5 - progress) * 40 : 0;
  const textDrift = !flow && active ? (progress - 0.5) * 16 : 0;

  const text = (
    <motion.div
      className="relative min-w-0"
      initial={false}
      animate={{ x: textEnter, opacity: flow || active ? 1 : 0 }}
      transition={
        flow
          ? { duration: 0 }
          : { type: "spring", stiffness: 100, damping: 18, mass: 1.2 }
      }
    >
      <div style={{ transform: `translate3d(${textDrift}px, 0, 0)` }}>
      <div className="relative z-20 max-w-[34ch] md:pr-10">
        <p className="font-mono text-[0.6875rem] font-medium tracking-[0.18em] text-accent-text">
          {indexStr}
        </p>
        <Link
          href={`/work/${project.slug}`}
          className="mt-2 block font-display text-[clamp(1.75rem,2.8vw,2.65rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-text transition-colors duration-300 hover:text-accent-text"
          data-hover
          tabIndex={active || flow ? 0 : -1}
        >
          {project.title}
        </Link>
        <p className="mt-4 text-[0.9375rem] font-medium leading-snug text-text">
          {project.company}
        </p>
        <p className="mt-5 text-[0.9375rem] leading-[1.6] text-text-secondary">
          {project.cardSummary ?? project.description}
        </p>
        {project.metric ? (
          <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-display text-[1.5rem] font-semibold leading-none tracking-[-0.02em] text-accent-text">
              {project.metric.value}
            </span>
            <span className="text-[0.875rem] leading-snug text-text-secondary">
              {project.metric.label}
            </span>
          </p>
        ) : null}
      </div>
      </div>
    </motion.div>
  );

  const image = (
    <motion.div
      className="relative z-10 h-[clamp(8.5rem,30svh,16rem)] w-full sm:ml-[-2rem] sm:h-72 sm:w-[calc(100%+2rem)] md:ml-[-2.5rem] md:h-[min(80svh,calc(100svh-6.5rem))] md:w-[calc(100%+2.5rem)]"
      initial={false}
      animate={{ x: imageEnter }}
      transition={
        flow
          ? { duration: 0 }
          : { type: "spring", stiffness: 200, damping: 25, mass: 1 }
      }
    >
      <div className="absolute inset-0" style={{ transform: `translate3d(${imageDrift}px, 0, 0)` }}>
      <div
        aria-hidden
        className="absolute -bottom-3 -left-4 z-0 hidden h-16 w-28 bg-accent/40 sm:block"
      />
      <Link
        href={`/work/${project.slug}`}
        className="group absolute inset-0 z-10 block overflow-hidden bg-text md:right-0"
        data-hover
        tabIndex={active || flow ? 0 : -1}
        aria-label={project.title}
      >
        {project.cardImage ? (
          <img
            src={project.cardImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
            style={{ objectPosition: project.cardFocus ?? "center" }}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
            style={{ background: "linear-gradient(145deg, #1a1a1a, #2d2d2d)" }}
          >
            <span className="p-8 text-center font-display text-[clamp(1.75rem,3vw,3rem)] font-bold leading-[1.1] text-white/10">
              {project.imageText.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </span>
          </div>
        )}
      </Link>
      </div>
    </motion.div>
  );

  return (
    <div
      className={
        flow
          ? "grid grid-cols-1 items-center gap-6 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] sm:gap-0"
          : "grid h-full w-full grid-cols-1 items-center gap-6 px-[var(--page-pad)] pb-8 pt-[4.75rem] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-0 md:pr-0"
      }
    >
      <div className="relative z-0 order-2 min-w-0 sm:order-1">{text}</div>
      <div className="relative z-10 order-1 min-w-0 sm:order-2">{image}</div>
    </div>
  );
}
