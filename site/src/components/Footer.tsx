"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const prefersReduced = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="no-print page-pad pt-[clamp(5rem,8vw,7rem)] pb-[clamp(3rem,5vw,4rem)] border-t border-border">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <Link
              href="/"
              className="font-display text-[1.75rem] font-bold tracking-[-0.03em] text-text hover:text-accent transition-colors duration-300"
              data-hover
            >
              xiao song.
            </Link>
            <p className="mt-[0.375rem] text-sm leading-[1.5] text-text-muted">
              Product Designer at Meta
            </p>
          </div>
          <div className="flex items-center gap-7">
            <a
              href="mailto:songxiao16@gmail.com"
              className="group/link font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-text-muted hover:text-text transition-colors duration-200 relative"
              data-hover
            >
              Email
              <span className="absolute bottom-[-2px] left-0 w-full h-px bg-accent origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-[250ms] ease-smooth" />
            </a>
            <span className="text-border text-xs">/</span>
            <span className="font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-text-muted opacity-50">
              LinkedIn
            </span>
            <span className="text-border text-xs">/</span>
            <span className="font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-text-muted opacity-50">
              GitHub
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Animated divider line */}
      <motion.div
        className="mt-[clamp(3rem,5vw,4rem)] h-px bg-border"
        initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Bottom row */}
      <motion.div
        className="mt-6 flex justify-between items-center"
        initial={
          prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
      >
        <p className="text-[0.6875rem] tracking-[0.02em] text-text-muted">
          &copy; {new Date().getFullYear()} Xiao Song. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="font-mono text-[0.5625rem] font-medium tracking-[0.14em] uppercase text-text-muted hover:text-accent-text transition-colors duration-200"
          data-hover
        >
          &uarr; Top
        </button>
      </motion.div>
    </footer>
  );
}
