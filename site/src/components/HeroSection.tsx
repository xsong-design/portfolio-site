"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const DISPLAY = "clamp(3.5rem, 12vw, 9rem)";
const INK = "color-mix(in srgb, var(--color-accent) 65%, transparent)";
const RAIL = "color-mix(in srgb, var(--color-accent) 20%, transparent)";

const RAILS = [
  { id: "ascender", top: "0.12em" },
  { id: "xheight", top: "0.32em" },
  { id: "baseline", top: "0.78em" },
  { id: "descender", top: "1.02em" },
] as const;

type Letter = { id: string; ch: string };

const LETTERS: Letter[] = [
  { id: "x", ch: "x" },
  { id: "i", ch: "i" },
  { id: "a", ch: "a" },
  { id: "o-xiao", ch: "o" },
  { id: "space", ch: "\u00a0" },
  { id: "s", ch: "s" },
  { id: "o-song", ch: "o" },
  { id: "n", ch: "n" },
  { id: "g", ch: "g" },
];

/** Vertical stems only. Spread across the name — not clustered on xiao. */
type Callout = {
  text: string;
  letterId: string;
  side: "above" | "below";
  stemRem: number;
  primary?: boolean;
};

const CALLOUTS: Callout[] = [
  {
    text: "Awake",
    letterId: "i",
    side: "above",
    stemRem: 3.5,
  },
  {
    text: "Meta",
    letterId: "o-xiao",
    side: "above",
    stemRem: 1.25,
    primary: true,
  },
  {
    text: "Livecontrol",
    letterId: "n",
    side: "above",
    stemRem: 3.5,
  },
  {
    text: "Walmart",
    letterId: "s",
    side: "below",
    stemRem: 2.25,
  },
  {
    text: "DoorDash",
    letterId: "g",
    side: "below",
    stemRem: 3.25,
  },
];

/** Gap between stem tip and the letter edge */
const TIP_GAP_PX = 12;

type Tip = { x: number; y: number };

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const noMotion = !!prefersReduced;

  const frameRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const [tips, setTips] = useState<Record<string, Tip>>({});

  const measure = useCallback(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const fr = frame.getBoundingClientRect();
    if (fr.width === 0) return;

    const next: Record<string, Tip> = {};
    for (const c of CALLOUTS) {
      const el = letterRefs.current[c.letterId];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const tipY =
        c.side === "above" ? r.top - TIP_GAP_PX : r.bottom + TIP_GAP_PX;
      next[c.letterId] = {
        x: ((r.left + r.width / 2 - fr.left) / fr.width) * 100,
        y: ((tipY - fr.top) / fr.height) * 100,
      };
    }
    setTips(next);
  }, []);

  useLayoutEffect(() => {
    measure();
    const frame = frameRef.current;
    if (!frame) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(frame);
    window.addEventListener("resize", measure);
    document.fonts?.ready?.then(() => measure());
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <section
      data-hero
      className="relative min-h-[100svh] flex flex-col items-center justify-center page-pad py-[clamp(5rem,12vh,8rem)] overflow-visible"
    >
      <div
        ref={frameRef}
        className="relative"
        style={{
          fontSize: DISPLAY,
          paddingTop: "4.5rem",
          paddingBottom: "5rem",
          paddingLeft: "clamp(2rem, 6vw, 4rem)",
          paddingRight: "clamp(6rem, 14vw, 10rem)",
        }}
      >
        {/* Rails */}
        <div
          className="hidden sm:block absolute left-0 right-0 pointer-events-none z-0"
          style={{ top: "4.5rem", height: "1.1em" }}
          aria-hidden
        >
          {RAILS.map((rail) => (
            <div
              key={rail.id}
              className="absolute left-0 right-0"
              style={{ top: rail.top, borderTop: `1px dotted ${RAIL}` }}
            />
          ))}
        </div>

        {/* Product designer — on the baseline rail (em must use display size, not label size) */}
        <motion.span
          className="hidden sm:block absolute z-20 whitespace-nowrap pointer-events-none"
          style={{
            right: 0,
            top: "calc(4.5rem + 0.78em)",
            transform: "translateY(-50%)",
          }}
          initial={noMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
        >
          <span
            className="font-display italic font-normal tracking-[0.01em]"
            style={{ fontSize: "0.6875rem", color: INK }}
          >
            Product designer
          </span>
        </motion.span>

        <h1
          className="relative z-10 m-0 text-center font-display font-bold leading-[1.1] tracking-[-0.02em] text-text whitespace-nowrap"
          style={{ fontSize: "1em" }}
        >
          {LETTERS.map((letter, i) => (
            <motion.span
              key={letter.id}
              ref={(el) => {
                letterRefs.current[letter.id] = el;
              }}
              data-letter={letter.id}
              className="relative inline-block"
              initial={noMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: EASE,
                delay: 0.04 * Math.min(i, 5),
              }}
            >
              {letter.ch}
            </motion.span>
          ))}
        </h1>

        {/* Vertical callouts — tip sits just off the letter, not on it */}
        <div className="hidden sm:block absolute inset-0 z-20 pointer-events-none">
          {CALLOUTS.map((c, i) => {
            const tip = tips[c.letterId];
            if (!tip) return null;
            const above = c.side === "above";
            const delay = 0.5 + i * 0.06;

            return (
              <motion.div
                key={c.text}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${tip.x}%`,
                  top: `${tip.y}%`,
                  width: "max-content",
                  height: `${c.stemRem}rem`,
                  transform: above
                    ? "translate(-50%, -100%)"
                    : "translate(-50%, 0)",
                  justifyContent: above ? "flex-end" : "flex-start",
                }}
                initial={noMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay }}
              >
                {above && (
                  <span
                    className="font-display italic font-normal tracking-[0.01em] whitespace-nowrap"
                    style={{
                      fontSize: c.primary ? "0.75rem" : "0.6875rem",
                      color: INK,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {c.text}
                  </span>
                )}

                {/* Tip nearest the letter; stem between tip and label — never through the name */}
                {!above && (
                  <span
                    className="shrink-0"
                    style={{
                      width: 3,
                      height: 3,
                      background: INK,
                    }}
                    aria-hidden
                  />
                )}

                <span
                  className="w-px flex-1 min-h-[0.5rem]"
                  style={{ background: INK }}
                  aria-hidden
                />

                {above && (
                  <span
                    className="shrink-0"
                    style={{
                      width: c.primary ? 4 : 3,
                      height: c.primary ? 4 : 3,
                      background: INK,
                    }}
                    aria-hidden
                  />
                )}

                {!above && (
                  <span
                    className="font-display italic font-normal tracking-[0.01em] whitespace-nowrap"
                    style={{
                      fontSize: "0.6875rem",
                      color: INK,
                      marginTop: "0.35rem",
                    }}
                  >
                    {c.text}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.ul
        className="sm:hidden mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 list-none p-0 m-0 max-w-sm"
        initial={noMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
      >
        {[
          "Meta",
          "Product designer",
          "Awake",
          "Livecontrol",
          "DoorDash",
          "Walmart",
        ].map((text) => (
          <li
            key={text}
            className="font-display italic font-normal tracking-[0.01em]"
            style={{ fontSize: "0.6875rem", color: INK }}
          >
            {text}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
