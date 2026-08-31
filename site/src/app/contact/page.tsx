import ScrollReveal from "@/components/ScrollReveal";
import CopyEmailButton from "@/components/CopyEmailButton";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch with Xiao Song — product designer at Meta.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 page-pad">
      <ScrollReveal>
        <p className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-text-muted mb-6">
          contact
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-text">
          Let&apos;s connect<span className="text-accent">.</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="mt-8 text-[1.0625rem] leading-[1.75] text-text-secondary max-w-xl">
          Interested in working together, have a question, or just want to say
          hello? I&apos;d love to hear from you.
        </p>
      </ScrollReveal>

      {/* Email */}
      <ScrollReveal delay={0.3}>
        <div className="mt-16 pt-8 border-t border-border max-w-xl">
          <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-text-muted block mb-4">
            Email
          </span>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="mailto:songxiao16@gmail.com"
              className="font-display text-[1.375rem] font-semibold text-text hover:text-accent-text transition-colors duration-300"
              data-hover
            >
              songxiao16@gmail.com
            </a>
            <CopyEmailButton />
          </div>
        </div>
      </ScrollReveal>

      {/* Social links */}
      <ScrollReveal delay={0.45}>
        <div className="mt-12 pt-8 border-t border-border max-w-xl">
          <span className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-text-muted block mb-4">
            Social
          </span>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-muted opacity-50">
                LinkedIn
              </span>
              <span className="font-mono text-[0.5rem] tracking-[0.12em] uppercase text-text-muted opacity-40 border border-border-subtle rounded-sm px-2 py-0.5">
                Coming soon
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-muted opacity-50">
                GitHub
              </span>
              <span className="font-mono text-[0.5rem] tracking-[0.12em] uppercase text-text-muted opacity-40 border border-border-subtle rounded-sm px-2 py-0.5">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
