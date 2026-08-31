"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const hoveringRef = useRef(false);

  const applyHoverStyles = useCallback((isHovering: boolean) => {
    if (dotRef.current) {
      if (isHovering) {
        dotRef.current.style.width = "52px";
        dotRef.current.style.height = "52px";
        dotRef.current.style.background = "rgba(107,127,107,0.08)";
        dotRef.current.style.border = "1px solid rgba(107,127,107,0.28)";
      } else {
        dotRef.current.style.width = "6px";
        dotRef.current.style.height = "6px";
        dotRef.current.style.background = "var(--color-accent)";
        dotRef.current.style.border = "none";
      }
    }
    if (ringRef.current) {
      if (isHovering) {
        ringRef.current.style.width = "52px";
        ringRef.current.style.height = "52px";
        ringRef.current.style.opacity = "0";
      } else {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.opacity = "0.35";
      }
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches || motionMq.matches) return;

    let dotX = 0,
      dotY = 0,
      ringX = 0,
      ringY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = (e.target as HTMLElement).closest(
        "a, button, [data-hover]"
      );
      const isHovering = !!target;
      if (isHovering !== hoveringRef.current) {
        hoveringRef.current = isHovering;
        applyHoverStyles(isHovering);
      }
    };

    const animate = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      dotX += (mx - dotX) * 0.18;
      dotY += (my - dotY) * 0.18;
      ringX += (mx - ringX) * 0.06;
      ringY += (my - ringY) * 0.06;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      animId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [applyHoverStyles]);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden lg:block rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "var(--color-accent)",
          willChange: "transform, width, height",
          transition:
            "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), background 0.35s, border 0.35s",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden lg:block rounded-full"
        style={{
          width: 36,
          height: 36,
          border: "1px solid var(--color-accent)",
          opacity: 0.35,
          willChange: "transform, width, height",
          transition:
            "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.35s",
        }}
      />
    </>
  );
}
