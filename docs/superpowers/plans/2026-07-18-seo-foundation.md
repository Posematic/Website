# Posematic SEO Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Posematic homepage crawlable, understandable, shareable, and materially lighter while preserving accurate pre-launch positioning.

**Architecture:** A server-safe site identity module will provide one source of truth for metadata, discovery routes, and homepage JSON-LD. Next.js metadata conventions will expose canonical, robots, sitemap, and Open Graph data. Existing section components will receive focused copy edits, and the unoptimized GIF will be replaced by a reduced-motion-safe video component.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Next.js Metadata API, Schema.org JSON-LD, FFmpeg, Node.js integration verifier.

## Global Constraints

- Canonical production origin is `https://posematic.art`.
- Scope is the homepage SEO foundation only; do not add FAQ, About, comparison, or guide pages.
- Primary topic signals are “sketch to pose” and “3D pose reference app for artists.”
- Use “AI” only with an explicit qualifier such as “non-generative.”
- Allow search/retrieval crawlers and opt out of separately controlled training crawlers.
- Do not publish pricing, ratings, downloads, release dates, or current availability in structured data.
- Add no runtime dependencies.
- Keep `app/page.tsx` composition-only.
- Do not commit unless the user explicitly requests a commit.

---

## File Map

- Create `app/lib/site.ts`: canonical site identity, metadata copy, public entity facts, and absolute URL helper.
- Create `app/lib/structuredData.ts`: homepage `WebSite`, `Organization`, and `SoftwareApplication` JSON-LD graph.
- Modify `app/layout.tsx`: complete root metadata.
- Modify `app/page.tsx`: emit safely serialized homepage JSON-LD.
- Create `app/robots.ts`: crawler policy and sitemap reference.
- Create `app/sitemap.ts`: canonical homepage sitemap entry.
- Create `app/opengraph-image.tsx`: generated 1200×630 social card.
- Modify `app/components/Hero.tsx`: balanced keyword-forward H1 and opening definition.
- Modify `app/components/SketchToPose.tsx`: answer-first product explanation.
- Modify `app/components/Explainer.tsx`: typo correction and optimized preview media.
- Modify `app/components/HeroBackdrop.tsx`: mark the background image decorative.
- Modify `app/components/Team.tsx`: remove inaccurate “placeholder” portrait descriptions.
- Modify `app/components/PreviewPlayer.tsx`: reusable reduced-motion-safe preview renderer.
- Create `public/images/posematic_posing_ver2.mp4`: compressed H.264 loop.
- Create `public/images/posematic_posing_poster.webp`: static fallback/poster.
- Delete `public/images/posematic_posing_ver2.gif`: remove the replaced 21 MB delivery asset.
- Create `scripts/verify-seo.mjs`: integration checks against a running production server.
- Modify `package.json`: add `seo:verify`.

### Task 1: Add a failing SEO integration verifier

**Files:**
- Create: `scripts/verify-seo.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: `BASE_URL` environment variable, defaulting to `http://localhost:3000`.
- Produces: exit code `0` when homepage metadata/discovery/schema requirements pass; nonzero with a specific assertion message otherwise.

- [ ] **Step 1: Add the verifier**

The verifier must fetch `/`, `/robots.txt`, `/sitemap.xml`, and `/opengraph-image`, assert successful responses, and check:

```js
import assert from "node:assert/strict";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const fetchText = async (path) => {
  const response = await fetch(new URL(path, baseUrl));
  assert.equal(response.ok, true, `${path} returned ${response.status}`);
  return response.text();
};

const html = await fetchText("/");
const robots = await fetchText("/robots.txt");
const sitemap = await fetchText("/sitemap.xml");
await fetchText("/opengraph-image");

assert.match(html, /<title>Posematic — Sketch-to-Pose 3D Reference for Artists<\/title>/);
assert.match(html, /rel="canonical" href="https:\/\/posematic\.art\/?"/);
assert.match(html, /property="og:title"/);
assert.match(html, /name="twitter:card" content="summary_large_image"/);
assert.match(html, /Sketch to Pose: 3D reference that keeps up with/);
assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);

const jsonLdMatches = [
  ...html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ),
];
assert.equal(jsonLdMatches.length, 1);
const graph = JSON.parse(jsonLdMatches[0][1]);
assert.deepEqual(
  graph["@graph"].map((entry) => entry["@type"]),
  ["WebSite", "Organization", "SoftwareApplication"],
);

assert.match(robots, /Sitemap: https:\/\/posematic\.art\/sitemap\.xml/);
assert.match(robots, /User-agent: OAI-SearchBot[\s\S]*Allow: \//);
assert.match(robots, /User-agent: GPTBot[\s\S]*Disallow: \//);
assert.match(robots, /User-agent: Google-Extended[\s\S]*Disallow: \//);
assert.match(sitemap, /<loc>https:\/\/posematic\.art\/<\/loc>/);

console.log("SEO verification passed");
```

Add the script:

```json
"seo:verify": "node scripts/verify-seo.mjs"
```

- [ ] **Step 2: Run the current site and confirm the verifier fails**

Run:

```bash
pnpm build
pnpm start
```

In a second shell:

```bash
pnpm seo:verify
```

Expected: failure at `/robots.txt returned 404` or another missing SEO requirement.

### Task 2: Centralize site identity and add discovery metadata

**Files:**
- Create: `app/lib/site.ts`
- Modify: `app/layout.tsx`
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`
- Create: `app/opengraph-image.tsx`

**Interfaces:**
- Produces: `SITE`, `SITE_URL`, and `absoluteUrl(path: string): string`.
- Consumed by: root metadata, robots, sitemap, structured data, and social image.

- [ ] **Step 1: Create the site identity model**

Use immutable verified facts:

```ts
export const SITE_URL = "https://posematic.art";

export const SITE = {
  name: "Posematic",
  title: "Posematic — Sketch-to-Pose 3D Reference for Artists",
  description:
    "Posematic is a non-generative 3D pose reference app for artists. Turn rough sketches into controllable poses and join the early-access waitlist.",
  email: "posematic.team@gmail.com",
  linkedIn: "https://www.linkedin.com/company/posematic/",
  logoPath: "/images/posematic_logo_4px.svg",
  keywords: [
    "sketch to pose",
    "3D pose reference",
    "pose reference app",
    "posing app for artists",
    "pose matching",
  ],
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
```

- [ ] **Step 2: Expand root metadata**

Set `metadataBase`, title, description, application name, canonical, index/follow directives, Open Graph `website` data, and Twitter `summary_large_image` data. Use `SITE` fields and `/opengraph-image` for the social image. Do not emit a `meta keywords` tag; Google ignores it.

- [ ] **Step 3: Add crawler policy**

Return `MetadataRoute.Robots` with:

```ts
rules: [
  { userAgent: "*", allow: "/" },
  {
    userAgent: ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"],
    allow: "/",
  },
  {
    userAgent: ["GPTBot", "ClaudeBot", "Google-Extended"],
    disallow: "/",
  },
],
sitemap: absoluteUrl("/sitemap.xml"),
host: SITE_URL,
```

- [ ] **Step 4: Add the homepage sitemap**

Return one `MetadataRoute.Sitemap` entry with canonical `/`, `changeFrequency: "monthly"`, and `priority: 1`. Omit a synthetic `lastModified` date.

- [ ] **Step 5: Generate a social image**

Use `ImageResponse` with:

```ts
export const alt =
  "Posematic — sketch-to-pose 3D reference app for artists";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
```

Render a dark `#0c0c14` card with a violet/lavender glow, “Posematic,” “Sketch to Pose,” and “Controllable 3D reference for artists.” Use the established design-token values from `globals.css` because CSS variables are unavailable inside `ImageResponse`.

- [ ] **Step 6: Build and inspect metadata routes**

Run:

```bash
pnpm build
```

Expected: exit code `0`; build output includes static `/robots.txt`, `/sitemap.xml`, and `/opengraph-image`.

### Task 3: Add consistent homepage structured data

**Files:**
- Create: `app/lib/structuredData.ts`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `homeJsonLd`, a JSON-serializable `@graph`.
- Consumes: `SITE`, `SITE_URL`, and `absoluteUrl()`.

- [ ] **Step 1: Build the graph**

Create three linked entities:

```ts
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
      author: { "@id": absoluteUrl("/#organization") },
    },
  ],
} as const;
```

- [ ] **Step 2: Render JSON-LD from the server page**

Add one script near the top of the homepage fragment:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
  }}
/>
```

Keep all section composition unchanged.

- [ ] **Step 3: Run lint and build**

Run:

```bash
pnpm lint app/page.tsx app/lib/site.ts app/lib/structuredData.ts
pnpm build
```

Expected: both commands exit `0`.

### Task 4: Strengthen visible topic and entity copy

**Files:**
- Modify: `app/components/Hero.tsx`
- Modify: `app/components/SketchToPose.tsx`
- Modify: `app/components/Explainer.tsx`
- Modify: `app/components/HeroBackdrop.tsx`
- Modify: `app/components/Team.tsx`

**Interfaces:**
- Produces: one descriptive H1 and visible copy consistent with metadata/schema.

- [ ] **Step 1: Rewrite the hero heading and opening**

Keep the existing word cycle, but use:

```tsx
Sketch to Pose: 3D reference that keeps up with your&nbsp;
```

Replace the opening paragraph with:

```text
Posematic is an upcoming 3D pose reference app for artists. Turn rough sketches into controllable poses, refine them in 3D, and keep every creative decision in your hands.
```

- [ ] **Step 2: Make Sketch to Pose answer-first**

Use:

```text
Sketch to Pose turns a rough drawing into an editable 3D pose reference without generative output. Our Pose Matching Algorithm maps your sketch into a controllable pose that you can refine in 3D.
```

- [ ] **Step 3: Correct copy and image semantics**

- Change “Contemprary” to “Contemporary.”
- Set the decorative hero backdrop to `alt=""` and `aria-hidden`.
- Change team portrait alt values from “Portrait placeholder for …” to “Portrait of …”; keep actual names consistent.

- [ ] **Step 4: Run focused lint**

Run:

```bash
pnpm lint app/components/Hero.tsx app/components/SketchToPose.tsx app/components/Explainer.tsx app/components/HeroBackdrop.tsx app/components/Team.tsx
```

Expected: exit code `0`.

### Task 5: Replace the 21 MB GIF with reduced-motion-safe video

**Files:**
- Modify: `app/components/PreviewPlayer.tsx`
- Modify: `app/components/Explainer.tsx`
- Create: `public/images/posematic_posing_ver2.mp4`
- Create: `public/images/posematic_posing_poster.webp`
- Delete: `public/images/posematic_posing_ver2.gif`

**Interfaces:**
- `PreviewPlayer` consumes `{ src: string; poster: string; alt: string }`.
- It renders a static Next.js image until client motion preference is known, remains static for reduced-motion users, and renders autoplay video only when motion is allowed.

- [ ] **Step 1: Produce the optimized assets**

Run:

```bash
ffmpeg -y -i public/images/posematic_posing_ver2.gif \
  -vf "fps=10,scale=800:-2:flags=lanczos" \
  -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p \
  -movflags +faststart -an \
  public/images/posematic_posing_ver2.mp4

ffmpeg -y -i public/images/posematic_posing_ver2.gif \
  -frames:v 1 -vf "scale=800:-2:flags=lanczos" \
  -c:v libwebp -quality 82 \
  public/images/posematic_posing_poster.webp
```

Verify:

```bash
du -h public/images/posematic_posing_ver2.{gif,mp4} \
  public/images/posematic_posing_poster.webp
```

Expected: MP4 plus poster are materially below 21 MB.

- [ ] **Step 2: Implement `PreviewPlayer`**

Replace the stub with a client component using `matchMedia("(prefers-reduced-motion: reduce)")`. Initial server/client output must be the poster. Subscribe to preference changes and clean up the listener. When motion is allowed, render:

```tsx
<video
  src={src}
  poster={poster}
  aria-label={alt}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="h-full w-full object-cover"
/>
```

Otherwise render `next/image` with `fill`, `alt`, and the same responsive `sizes` used by the current demo.

- [ ] **Step 3: Use the player in Explainer**

Change the media constants to:

```ts
const POSING_DEMO = {
  src: "/images/posematic_posing_ver2.mp4",
  poster: "/images/posematic_posing_poster.webp",
  alt: "3D pose reference mannequin transitioning from a T-pose to a dynamic pose on a grid",
} as const;
```

Replace the current `Image unoptimized` with `PreviewPlayer`.

- [ ] **Step 4: Delete the replaced GIF**

Delete only `public/images/posematic_posing_ver2.gif`. Leave the unrelated unused GIF for a later cleanup.

- [ ] **Step 5: Run focused verification**

Run:

```bash
pnpm lint app/components/PreviewPlayer.tsx app/components/Explainer.tsx
pnpm build
```

Expected: exit code `0`; no missing media references.

### Task 6: Complete integration verification

**Files:**
- Verify all changed files; no new production files unless a defect is found.

**Interfaces:**
- Consumes the production server.
- Produces objective completion evidence.

- [ ] **Step 1: Run static checks**

```bash
pnpm lint
pnpm build
```

Expected: both exit `0`.

- [ ] **Step 2: Run production SEO checks**

Start one server only:

```bash
pnpm start
```

Then:

```bash
pnpm seo:verify
```

Expected:

```text
SEO verification passed
```

- [ ] **Step 3: Inspect raw HTML and generated routes**

Confirm:

```bash
curl -fsS http://localhost:3000/ > /tmp/posematic-home.html
curl -fsS http://localhost:3000/robots.txt
curl -fsS http://localhost:3000/sitemap.xml
```

Expected: visible hero/product copy and JSON-LD are present in raw HTML; robots references the canonical sitemap; sitemap has only the canonical homepage.

- [ ] **Step 4: Check schema and route semantics**

- Parse the JSON-LD through `scripts/verify-seo.mjs`.
- Check the deployed URL in Schema.org Validator after deployment.
- Use Google Rich Results Test only to inspect supported types; do not expect a special result for `SoftwareApplication` or `Organization`.

- [ ] **Step 5: Record final media reduction**

```bash
du -h public/images/posematic_posing_ver2.mp4 \
  public/images/posematic_posing_poster.webp
```

Expected: combined size is materially below the removed 21 MB GIF.

- [ ] **Step 6: Review the final diff**

```bash
git diff --check
git status --short
```

Confirm the pre-existing untracked `app/docs/seo.md` is untouched and no generated `.next` or package-store content is included.
