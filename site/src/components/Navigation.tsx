"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const NAV_ITEMS = [
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

function NavLink({
  href,
  children,
  accent,
}: {
  href: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  const lineRef = useRef<HTMLSpanElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      ref={linkRef}
      href={href}
      className={`font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase relative ${
        accent
          ? "text-accent-text hover:text-accent-hover"
          : "text-text-muted hover:text-text"
      }`}
      style={{
        transition: accent
          ? "color 0.2s"
          : "color 0.2s, letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={() => {
        if (lineRef.current) lineRef.current.style.transform = "scaleX(1)";
        if (!accent && linkRef.current)
          linkRef.current.style.letterSpacing = "0.18em";
      }}
      onMouseLeave={() => {
        if (lineRef.current) lineRef.current.style.transform = "scaleX(0)";
        if (!accent && linkRef.current)
          linkRef.current.style.letterSpacing = "0.14em";
      }}
    >
      {children}
      <span
        ref={lineRef}
        className={`absolute bottom-[-4px] left-0 w-full h-px ${
          accent ? "bg-accent-hover" : "bg-accent"
        } origin-left`}
        style={{
          transform: "scaleX(0)",
          transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
        }}
        aria-hidden="true"
      />
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("[data-hero]") as HTMLElement | null;
      const threshold = hero ? hero.offsetHeight * 0.4 : 100;
      setScrolled(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={prefersReduced ? { y: 0 } : { y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between py-[18px] page-pad backdrop-blur-[16px] ${
          scrolled
            ? "bg-bg/[0.92] shadow-[0_1px_0_var(--color-border)]"
            : "bg-bg/80"
        }`}
        style={{ transition: "background 0.4s, box-shadow 0.4s" }}
      >
        <Link
          href="/"
          className="font-display text-[1.25rem] font-bold tracking-[-0.03em] text-text hover:text-accent transition-colors duration-300"
          data-hover
        >
          xiao song.
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <NavLink href="/resume" accent>
            resume ↓
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-[6px] w-6 justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block w-full h-[1.5px] bg-text origin-center"
            animate={
              menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3, ease: EASE }}
          />
          <motion.span
            className="block w-full h-[1.5px] bg-text"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-full h-[1.5px] bg-text origin-center"
            animate={
              menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3, ease: EASE }}
          />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-bg/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10"
          >
            {[...NAV_ITEMS, { href: "/resume", label: "resume" }].map(
              (item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.05,
                    duration: 0.4,
                    ease: EASE,
                  }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-4xl font-bold text-text hover:text-accent transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
