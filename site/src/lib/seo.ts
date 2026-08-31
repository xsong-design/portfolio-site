import type { Metadata } from "next";

const SITE_URL = "https://xiaosong.design";
const SITE_NAME = "xiao song.";
const DEFAULT_DESCRIPTION =
  "Product designer at Meta specializing in enterprise messaging, complex workflows, and interaction design.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s — xiao song.",
    default: "xiao song. — product designer",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "xiao song. — product designer",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "xiao song. — product designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "xiao song. — product designer",
    description: DEFAULT_DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const pageUrl = path ? `${SITE_URL}${path}` : SITE_URL;
  const pageImage = image || "/images/og-image.jpg";

  return {
    title,
    description: description || DEFAULT_DESCRIPTION,
    openGraph: {
      title: title ? `${title} — xiao song.` : undefined,
      description: description || DEFAULT_DESCRIPTION,
      url: pageUrl,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: title ? `${title} — xiao song.` : undefined,
      description: description || DEFAULT_DESCRIPTION,
      images: [pageImage],
    },
  };
}

export function generateProjectMetadata({
  title,
  subtitle,
  slug,
  heroImage,
}: {
  title: string;
  subtitle: string;
  slug: string;
  heroImage: string;
}): Metadata {
  return generatePageMetadata({
    title,
    description: subtitle,
    path: `/work/${slug}`,
    image: heroImage,
  });
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Xiao Song",
    jobTitle: "Product Designer",
    worksFor: {
      "@type": "Organization",
      name: "Meta",
    },
    url: SITE_URL,
    sameAs: [
      "https://www.linkedin.com/in/xiaosong",
    ],
    description: DEFAULT_DESCRIPTION,
  };
}

export function generateProjectJsonLd({
  title,
  description,
  slug,
  heroImage,
}: {
  title: string;
  description: string;
  slug: string;
  heroImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: `${SITE_URL}/work/${slug}`,
    image: `${SITE_URL}${heroImage}`,
    author: {
      "@type": "Person",
      name: "Xiao Song",
    },
  };
}
