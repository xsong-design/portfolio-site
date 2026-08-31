"use client";

import { Fragment, useRef, useCallback } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  showAccentRect?: boolean;
  isPortrait?: boolean;
  isOffset?: boolean;
  delay?: number;
}

export default function ProjectCard({
  project,
  index,
  showAccentRect = false,
  isPortrait = false,
  isOffset = false,
  delay = 0,
}: ProjectCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rX = (y - 0.5) * -6;
      const rY = (x - 0.5) * 6;
      const shadowX = rY * -2.5;
      const shadowY = 16 + rX * -2;
      imageRef.current.style.transform = `translateY(-8px) perspective(600px) rotateX(${rX}deg) rotateY(${rY}deg)`;
      imageRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 50px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.05)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = "";
    imageRef.current.style.boxShadow = "";
  }, []);

  const indexStr = String(index).padStart(2, "0");

  return (
    <ScrollReveal delay={delay} className={isOffset ? "lg:mt-40" : ""}>
      <Link
        href={`/work/${project.slug}`}
        className="group block relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-hover
      >
        {/* Background index number */}
        <div className="absolute top-[-0.2em] right-0 font-mono text-[clamp(3rem,8vw,5.5rem)] font-bold leading-none tracking-[-0.04em] text-text opacity-[0.06] select-none pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-[0.12]">
          {indexStr}
        </div>

        <div className="relative z-[1]">
          <div className="relative" style={{ overflow: "visible" }}>
            <div
              ref={imageRef}
              className={`relative overflow-hidden bg-text ${
                isPortrait
                  ? "aspect-[4/3] sm:aspect-[4/5]"
                  : "aspect-[4/3]"
              }`}
              style={{
                transition:
                  "transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center overflow-hidden group-hover:scale-[1.04]"
                style={{
                  background: "linear-gradient(145deg, #1a1a1a, #2d2d2d)",
                  transition:
                    "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <span className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-center text-white/[0.07] leading-[1.1] p-8 transition-colors duration-500 group-hover:text-white/[0.12]">
                  {project.imageText.map((line, i) => (
                    <Fragment key={i}>
                      {i > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </span>
              </div>
            </div>

            {showAccentRect && (
              <div
                className="absolute bottom-[-16px] right-[-16px] w-[120px] h-[90px] sm:bottom-[-28px] sm:right-[-28px] sm:w-[180px] sm:h-[130px] bg-accent z-[-1] group-hover:translate-x-2 group-hover:-translate-y-2"
                style={{
                  transition:
                    "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            )}
          </div>

          {/* Meta */}
          <div className="mt-7 pt-5 border-t border-border flex justify-between items-start gap-6">
            <div>
              <h3 className="font-display text-[1.375rem] font-semibold tracking-[-0.02em] leading-[1.2] relative inline transition-colors duration-300 group-hover:text-accent-text">
                {project.title}
                <span
                  className="absolute bottom-[-2px] left-0 w-full h-[1.5px] bg-accent origin-left scale-x-0 group-hover:scale-x-100"
                  style={{
                    transition:
                      "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
              </h3>
              <p className="mt-[0.625rem] text-sm leading-[1.55] text-text-secondary">
                {project.description}
              </p>
            </div>
            <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-text-muted whitespace-nowrap mt-1 transition-colors duration-300 group-hover:text-accent-text">
              {project.company} &middot; {project.year}
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
