"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface SectionDividerProps {
  label: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="flex items-center gap-5 page-pad my-[clamp(2rem,4vw,3rem)]">
      <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-text-muted shrink-0">
        {label}
      </span>
      <motion.div
        className="flex-1 h-px bg-border"
        initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}
