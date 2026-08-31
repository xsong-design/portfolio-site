"use client";

import { useState } from "react";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("songxiao16@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard API may not be available */
    }
  };

  return (
    <button
      onClick={copyEmail}
      className="font-mono text-[0.5625rem] font-medium tracking-[0.14em] uppercase px-3 py-1.5 border border-border rounded-sm text-text-muted hover:text-accent-text hover:border-accent transition-colors duration-200"
      data-hover
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
