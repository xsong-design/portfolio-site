import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
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
