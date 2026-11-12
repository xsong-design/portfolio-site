import type { MDXComponents } from "mdx/types";

function StrategyPair() {
  return (
    <figure className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 border border-border">
        <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-border">
          <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text mb-3">
            Ads
          </p>
          <p className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-text leading-snug">
            Reach new people
          </p>
        </div>
        <div className="p-6 sm:p-8">
          <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text mb-3">
            Marketing messages
          </p>
          <p className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-text leading-snug">
            Retain the people you already reached
          </p>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
        New people vs people who already opted in
      </figcaption>
    </figure>
  );
}

function SendPair() {
  return (
    <figure className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 border border-border">
        <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-border">
          <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text mb-3">
            Trigger send
          </p>
          <p className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-text leading-snug">
            Order confirmed, shipped, delivered
          </p>
        </div>
        <div className="p-6 sm:p-8 bg-accent/10">
          <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text mb-3">
            Audience send
          </p>
          <p className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-text leading-snug">
            Coupons and sales to a list
          </p>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
        Status messages vs marketing messages — I focused on audience send
      </figcaption>
    </figure>
  );
}

function SparkParties() {
  const parties = [
    {
      id: "Walmart",
      label: "A Spark fleet, and more time slots",
    },
    {
      id: "Customers",
      label: "Budget-sensitive — know what a grocery tip is for",
    },
    {
      id: "Drivers",
      label: "Earnings that make Walmart worth committing to",
    },
  ];

  return (
    <figure className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-border">
        {parties.map((party, i) => (
          <div
            key={party.id}
            className={`p-6 sm:p-8 ${
              i < parties.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-border"
                : ""
            }`}
          >
            <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text mb-3">
              {party.id}
            </p>
            <p className="font-display text-[1.25rem] font-semibold tracking-[-0.02em] text-text leading-snug">
              {party.label}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
        Three sides of the same tipping problem
      </figcaption>
    </figure>
  );
}

function WhatsAppPaths() {
  const paths = [
    { id: "01", label: "Trigger send", note: "Order status" },
    { id: "02", label: "Audience send", note: "Campaigns" },
    { id: "03", label: "Service messages", note: "Post-purchase help" },
  ];

  return (
    <figure className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-border">
        {paths.map((path, i) => (
          <div
            key={path.id}
            className={`p-6 sm:p-8 ${
              i < paths.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-border"
                : ""
            } ${path.id === "03" ? "bg-accent/10" : ""}`}
          >
            <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text mb-3">
              {path.id}
            </p>
            <p className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-text leading-snug">
              {path.label}
            </p>
            <p className="mt-2 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
              {path.note}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
        Three WhatsApp message paths through Meta
      </figcaption>
    </figure>
  );
}

function CampaignLevels() {
  const levels = [
    { id: "L3", label: "Campaign" },
    { id: "L2", label: "Ad set", note: "Where we shipped" },
    { id: "L1", label: "Ad" },
  ];

  return (
    <figure className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-border">
        {levels.map((level, i) => (
          <div
            key={level.id}
            className={`p-6 sm:p-8 ${
              i < levels.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-border"
                : ""
            } ${level.note ? "bg-accent/10" : ""}`}
          >
            <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text mb-3">
              {level.id}
            </p>
            <p className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-text leading-snug">
              {level.label}
            </p>
            {level.note ? (
              <p className="mt-2 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
                {level.note}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <figcaption className="mt-3 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
        Budget for a mixed campaign is set at L2
      </figcaption>
    </figure>
  );
}

function TippingTried() {
  const options = [
    {
      id: "01",
      label: "Percent or dollars",
      note: "15% / 20% of the order vs $3 / $5",
    },
    {
      id: "02",
      label: "Empty or preselected",
      note: "A module they opt into vs a tip that stays on unless they remove it",
    },
    {
      id: "03",
      label: "Above wallet or in the grocery cart",
      note: "Ask at payment vs sit with the grocery order",
    },
  ];

  return (
    <figure className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-border">
        {options.map((option, i) => (
          <div
            key={option.id}
            className={`p-6 sm:p-8 ${
              i < options.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-border"
                : ""
            }`}
          >
            <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text mb-3">
              {option.id}
            </p>
            <p className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-text leading-snug">
              {option.label}
            </p>
            <p className="mt-2 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
              {option.note}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
        Combine exploration screens into one board when mocks are in
      </figcaption>
    </figure>
  );
}

function ExploreOptions() {
  const options = [
    { id: "01", label: "Manual split control" },
    { id: "02", label: "L3 campaign onboarding" },
    { id: "03", label: "L2 global banner" },
  ];

  return (
    <figure className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-border">
        {options.map((option, i) => (
          <div
            key={option.id}
            className={`p-6 sm:p-8 ${
              i < options.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-border"
                : ""
            }`}
          >
            <p className="font-mono text-[0.5625rem] font-medium tracking-[0.15em] uppercase text-accent-text mb-3">
              {option.id}
            </p>
            <p className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-text leading-snug">
              {option.label}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
        One frame for the directions we did not ship — replace with a combined exploration board
      </figcaption>
    </figure>
  );
}

function FigureSlot({
  title,
  caption,
}: {
  title: string;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <div className="flex aspect-[16/9] items-center justify-center border border-border bg-text/[0.03] px-6">
        <p className="font-mono text-[0.5625rem] font-medium tracking-[0.14em] uppercase text-text-muted text-center leading-relaxed">
          {title}
        </p>
      </div>
      {caption ? (
        <figcaption className="mt-3 font-mono text-[0.5625rem] font-medium tracking-[0.12em] uppercase text-text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export const mdxComponents: MDXComponents = {
  StrategyPair,
  SendPair,
  SparkParties,
  TippingTried,
  WhatsAppPaths,
  CampaignLevels,
  ExploreOptions,
  FigureSlot,
  h2: ({ children }) => (
    <h2 className="font-display text-[1.75rem] font-bold tracking-[-0.02em] text-text mb-6 mt-16 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-[1.25rem] font-semibold tracking-[-0.01em] text-text mb-4 mt-10">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[1.0625rem] leading-[1.85] text-text-secondary mb-5 last:mb-0">
      {children}
    </p>
  ),
  ul: ({ children }) => <ul className="space-y-3 mb-6">{children}</ul>,
  ol: ({ children }) => <ol className="space-y-4 mb-6">{children}</ol>,
  li: ({ children }) => (
    <li className="text-[1.0625rem] leading-[1.85] text-text-secondary pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-accent before:font-mono before:text-sm">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-text">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="font-display font-medium text-text not-italic">
      {children}
    </em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-accent pl-6 my-8">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-border my-12" />,
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt ?? ""}
      className="w-full my-10 border border-border"
    />
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent-text underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors duration-200"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
};
