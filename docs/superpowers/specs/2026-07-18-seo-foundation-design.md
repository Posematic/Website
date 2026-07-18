# Posematic SEO Foundation Design

**Date:** 2026-07-18  
**Status:** Approved for implementation planning  
**Scope:** Technical SEO and homepage optimization only

## Goal

Make `https://posematic.art/` easy for search engines and AI search/retrieval systems to crawl, understand, index, preview, and cite while preserving Posematic's artist-first positioning and pre-launch accuracy.

## Decisions

- Optimize the existing homepage; do not add FAQ, About, comparison, or guide pages in this release.
- Use “sketch to pose” and “3D pose reference app for artists” as the primary topic signals.
- Use “AI” only with an explicit qualifier such as “non-generative” or “artist-controlled.”
- Preserve the brand voice while making the hero heading and opening copy descriptive.
- Allow search and retrieval crawlers, but opt out of model-training crawlers where providers expose separate controls.
- Include only facts already visible and verifiable on the site in structured data. Do not publish launch pricing or imply that the app is currently downloadable.
- Do not add `llms.txt`; Google states that it does not use AI text files for Search or its generative Search features.

## Current-State Findings

- The live homepage returns its substantive content in fetched HTML. Server rendering is working and crawlability is not blocked by client-side rendering.
- `https://posematic.art/robots.txt` and `https://posematic.art/sitemap.xml` both return 404.
- Root metadata contains only a generic title and description. It has no metadata base, canonical URL, Open Graph metadata, Twitter card metadata, or explicit indexing policy.
- The homepage has one H1, but it contains a grammar error and does not identify the product category.
- The first paragraph mentions Sketch to Pose but does not directly define Posematic as a 3D pose reference app.
- No JSON-LD structured data is present.
- The LinkedIn organization URL and public contact email are already visible in the footer.
- `public/images/posematic_posing_ver2.gif` is approximately 21 MB and is rendered with image optimization disabled.
- The live page is already discoverable for “sketch to pose,” supporting a focused strengthening of that association.

## Architecture

### Site identity model

Create a small server-safe module under `app/lib/` that owns canonical site identity:

- production origin
- brand name
- concise product description
- public contact email
- LinkedIn URL
- logo path
- primary keywords

Metadata routes, root metadata, and JSON-LD will consume this model so URLs and descriptions cannot drift independently.

### Metadata and discovery routes

Extend the root `Metadata` export with:

- `metadataBase`
- a concise, descriptive title
- a homepage description
- canonical alternate
- Open Graph website metadata
- Twitter summary-large-image metadata
- explicit index/follow directives

Add:

- `app/robots.ts` with the sitemap URL, a general allow rule, explicit search/retrieval crawler access, and explicit training-crawler opt-outs
- `app/sitemap.ts` containing the canonical homepage URL
- a share image using a Next.js metadata image convention

Crawler policy:

- Allow standard crawlers, including Googlebot and Bingbot.
- Allow OAI-SearchBot, Claude-SearchBot, and PerplexityBot.
- Disallow GPTBot and ClaudeBot because they are separately documented as model-training crawlers.
- Disallow Google-Extended for Google's separate Gemini/Vertex generative-use control. This does not block Googlebot or control Google Search and AI Overview eligibility.

### Structured data

Render one server-generated JSON-LD `@graph` on the homepage containing:

- `WebSite` for the preferred site name and canonical URL
- `Organization` for Posematic, its URL, logo, public contact point, and LinkedIn identity
- `SoftwareApplication` for the pre-launch design application, linked to the organization

The software entity may describe the visible product category and intended mobile platforms, but it will not include `offers`, ratings, downloads, a release date, or availability claims. JSON-LD text will be serialized safely by escaping `<`.

### Homepage copy

Update only the copy needed to clarify search intent:

- Rewrite the single H1 to lead with “Sketch to Pose” and identify a controllable 3D reference workflow.
- Rewrite the opening paragraph so its first sentence plainly defines Posematic as a 3D pose reference app for artists.
- Keep the “non-generative” qualifier near any use of “AI.”
- Make the Sketch to Pose section begin with a direct, self-contained explanation.
- Correct the “Contemprary” typo.
- Keep claims conservative; do not add unsupported superlatives, market leadership, speed figures, or competitor claims.

### Demo media performance

Replace the 21 MB animated GIF delivery with a compressed web video:

- supply WebM and/or MP4 according to measured browser compatibility and output size
- retain an informative accessible label or nearby text
- use `autoplay`, `muted`, `loop`, and `playsInline`
- provide a static poster/fallback
- avoid eager loading below the fold
- show a non-animated fallback when the user prefers reduced motion

No new runtime dependency is required.

## Data Flow

1. The site identity module provides canonical facts.
2. The root layout consumes those facts for page metadata.
3. Robots and sitemap metadata routes consume the same canonical origin.
4. The homepage consumes a JSON-LD builder based on the same facts.
5. Visible copy and structured data describe the same product and organization.
6. Crawlers receive the metadata, JSON-LD, and visible copy in server-rendered HTML.

## Error and Consistency Handling

- Metadata routes are static and must build without request-time data.
- Canonical URLs must always be absolute and use `https://posematic.art`.
- Structured data must omit unknown facts instead of inventing defaults.
- The share image must have a stable route and valid dimensions.
- The video must retain a fallback if a source cannot play.
- Robots rules must not accidentally disallow the homepage or search-specific crawlers.

## Verification

Implementation is complete only when:

1. ESLint passes for all changed source files.
2. A production Next.js build passes.
3. `/`, `/robots.txt`, `/sitemap.xml`, and the social image route return successful responses locally.
4. Fetched homepage HTML contains the revised H1, canonical link, description, Open Graph tags, and JSON-LD.
5. `robots.txt` references the canonical sitemap and reflects the approved crawler policy.
6. `sitemap.xml` contains exactly the canonical homepage in this release.
7. JSON-LD parses as JSON and is checked with Schema.org Validator; Google Rich Results Test is used only for supported Google result types.
8. The revised page has exactly one H1 and no broken internal anchor targets.
9. The demo media transfer size is materially lower than the current 21 MB GIF.
10. A before/after mobile Lighthouse run records SEO and performance results; regressions are investigated rather than hidden.

Search Console and Bing Webmaster Tools submission remain deployment/account tasks. Their verification tokens will not be invented or committed.

## Explicitly Deferred

- FAQ content and FAQ schema
- `llms.txt`
- comparison and alternative pages
- workflow guides or blog infrastructure
- a separate About or Team route
- analytics vendor selection and event tracking
- Search Console and Bing account configuration
- off-site backlinks, community mentions, Product Hunt, press, and app-store optimization
- pricing or offer schema

## Evaluation

This scope fixes every confirmed blocking or high-impact foundation gap without manufacturing thin pages or unverifiable claims. It improves crawl discovery, title relevance, entity clarity, social previews, and a major media performance risk. It intentionally does not promise rankings: authority-building content, links, and measurement data will be needed in later releases.

The design departs from the original SEO document where current official guidance differs:

- Google can render JavaScript, although server-rendered textual content remains the safest and fastest-to-process format.
- FAQ structured data is not a general-purpose rich-result opportunity.
- Search/retrieval crawlers and model-training crawlers are separate controls.
- Google says no special AI markup or `llms.txt` file is required for AI Overviews or AI Mode.
- Structured data helps machines understand entities but is not proof that an LLM will cite the page.

## Primary References

- Google Search Central, “AI features and your website”: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central, “Influencing title links”: https://developers.google.com/search/docs/appearance/title-link
- Google Search Central, “Control your snippets”: https://developers.google.com/search/docs/appearance/snippet
- Google Search Central, “Organization structured data”: https://developers.google.com/search/docs/appearance/structured-data/organization
- Google Search Central, “Site names”: https://developers.google.com/search/docs/appearance/site-names
- Next.js, “Metadata and OG images”: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Next.js, `robots.txt`: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- Next.js, `sitemap.xml`: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- OpenAI crawler documentation: https://developers.openai.com/api/docs/bots
- Anthropic crawler documentation: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity crawler documentation: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
