import ResumeSheet from "@/components/ResumeSheet";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Resume",
  description:
    "Xiao Song’s resume — product designer. Most recently at Meta. WhatsApp marketing messages in Ads Manager, Parcels at DoorDash, and earlier work at Walmart.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <main className="resume-page pt-32 pb-24 page-pad">
      <div className="no-print flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-text-muted mb-6">
              resume
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-text">
              Resume<span className="text-accent">.</span>
            </h1>
          </div>
          <a
            href="/xiao-song-resume.pdf"
            download
            className="font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-accent-text hover:text-accent-hover transition-colors duration-200 border border-accent/30 hover:border-accent px-4 py-2.5 rounded-sm inline-flex items-center gap-2 self-start sm:self-auto"
            data-hover
          >
            Download PDF <span className="text-sm">↓</span>
          </a>
      </div>

      <div className="max-w-[1060px]">
        <ResumeSheet />
      </div>
    </main>
  );
}
