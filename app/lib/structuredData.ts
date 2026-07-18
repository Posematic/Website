import { absoluteUrl, SITE } from "./site";

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: absoluteUrl("/"),
      name: SITE.name,
    },
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: SITE.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl(SITE.logoPath),
      email: SITE.email,
      sameAs: [SITE.linkedIn],
    },
    {
      "@type": "SoftwareApplication",
      "@id": absoluteUrl("/#software"),
      name: SITE.name,
      url: absoluteUrl("/"),
      description: SITE.description,
      applicationCategory: "DesignApplication",
      applicationSubCategory: "3D pose reference app for artists",
      operatingSystem: "iOS, Android",
      author: {
        "@id": absoluteUrl("/#organization"),
      },
    },
  ],
} as const;
