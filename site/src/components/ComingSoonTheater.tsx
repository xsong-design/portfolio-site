"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const STAGE_QUERY = "(min-width: 768px) and (min-height: 640px)";

export default function ComingSoonTheater() {
  const theaterRef = useRef<HTMLDivElement>(null);
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
      const travel = theater.offsetHeight - window.innerHeight;
      const local = travel > 0 ? scrollInto / travel : 0;
      const visible =
        rect.top < window.innerHeight && rect.bottom > 0 && scrollInto >= 0;
      setInView(visible);
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
  }, [pinned]);

  const imageDrift = pinned ? (0.5 - progress) * 40 : 0;
  const textDrift = pinned ? (progress - 0.5) * 16 : 0;

  const slide = (
    <div
      className={
        pinned
          ? "grid h-full w-full grid-cols-1 items-center gap-6 px-[var(--page-pad)] pb-8 pt-[4.75rem] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-0 md:pr-0"
          : "grid grid-cols-1 items-center gap-6 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] sm:gap-0"
      }
    >
      <div className="relative z-0 order-2 min-w-0 sm:order-1">
        <motion.div
          className="relative min-w-0"
          initial={false}
          animate={{ opacity: 1 }}
        >
          <div style={{ transform: `translate3d(${textDrift}px, 0, 0)` }}>
            <div className="relative z-20 max-w-[34ch] md:pr-10">
              <p className="font-mono text-[0.6875rem] font-medium tracking-[0.18em] text-accent-text">
                01
              </p>
              <p className="mt-2 font-display text-[clamp(1.75rem,2.8vw,2.65rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-text">
                Work coming soon
              </p>
              <p className="mt-5 text-[0.9375rem] leading-[1.6] text-text-secondary">
                Case studies are still being written. Scroll for the resume.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 order-1 min-w-0 sm:order-2">
        <div className="relative z-10 h-[clamp(8.5rem,30svh,16rem)] w-full sm:ml-[-2rem] sm:h-72 sm:w-[calc(100%+2rem)] md:ml-[-2.5rem] md:h-[min(80svh,calc(100svh-6.5rem))] md:w-[calc(100%+2.5rem)]">
          <div
            className="absolute inset-0"
            style={{ transform: `translate3d(${imageDrift}px, 0, 0)` }}
          >
            <div
              aria-hidden
              className="absolute -bottom-3 -left-4 z-0 hidden h-16 w-28 bg-accent/40 sm:block"
            />
            <div className="absolute inset-0 z-10 overflow-hidden bg-text md:right-0">
              <img
                src="/images/work/coming-soon-agents.jpg"
                alt="Two small agents stacking code like building blocks"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!pinned) {
    return <div className="page-pad py-10 md:py-16">{slide}</div>;
  }

  return (
    <div
      ref={theaterRef}
      className="relative"
      style={{ height: "200vh" }}
      aria-label="Work coming soon"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">{slide}</div>
      <div
        className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 md:block"
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
        aria-hidden
      >
        <span
          className="block h-1.5 w-1.5 rounded-full"
          style={{
            background: "var(--color-accent)",
            transform: "scale(1.5)",
          }}
        />
      </div>
    </div>
  );
}
