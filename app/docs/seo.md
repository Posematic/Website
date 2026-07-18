# Posematic SEO & AI-Search Optimization Plan

*Prepared for posematic.art — pre-launch waitlist site. Focus: rank for artist reference / posing queries in traditional search AND get cited by AI answer engines (Google AI Overviews, ChatGPT, Perplexity, Gemini, Claude).*

---

## 0. The single most important thing to check first

Posematic.art is a **Next.js app**, and almost the entire page — the mission copy, the "workflow is broken" interviews, the roadmap, the team bios — is rich, keyword-dense text that is your biggest SEO asset. But that asset is worthless if it isn't in the **raw HTML the server returns**.

AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) and, to a growing extent, standard indexers **do not execute JavaScript**. They read the HTML your server sends and nothing more. If your content is client-side rendered, every crawler sees a near-empty shell and you are invisible in both Google and AI answers regardless of how good the copy is.

**Action (do this before anything else):**
- Confirm the site uses SSR or SSG (static generation), not pure client-side rendering. In Next.js this means the marketing page should be a Server Component or use `generateStaticParams` / static export, not a `"use client"` page that fetches copy after load.
- Test it: `curl https://posematic.art/` (or view-source in a browser with JS disabled) and confirm the mission text, interview quotes, and roadmap words are all present in the returned HTML. If they're not, this is priority #1 — nothing else in this plan matters until it's fixed.
- Verify `robots.txt` exists and does **not** block AI crawlers. For a pre-launch brand trying to build awareness, you generally *want* GPTBot, ClaudeBot, PerplexityBot, and Google-Extended allowed. Confirm none are disallowed.
- Confirm a `sitemap.xml` exists and is referenced in `robots.txt`.

Everything below assumes the content is server-rendered and crawlable.

---

## 1. Keyword strategy

### 1a. The positioning problem to solve first
Your brand deliberately avoids the phrase "AI art" (your Keel prep explicitly says that phrase "triggers the wrong category"). That's correct for *positioning*, but it creates an SEO tension: the highest-volume search demand in your space uses words like "AI pose," "pose generator," and "AI reference." You don't have to abandon your positioning — you resolve this by **owning the qualifier**: rank for the high-intent terms while attaching your differentiator ("controllable," "editable," "non-generative," "artist-controlled") right next to them. You capture the search demand *and* reframe it in the same breath.

### 1b. Primary keyword clusters
Organize the site and future content around these clusters. Each cluster = one page or one clearly-marked section.

**Cluster 1 — Core product / branded-category (highest priority):**
- sketch to pose
- sketch to 3D pose
- pose reference app
- 3D pose reference tool
- posing app for artists
- pose matching (your owned term — reinforce it everywhere)

**Cluster 2 — Competitor & alternative intent (high commercial intent):**
- Magic Poser alternative
- Easy Pose alternative
- PoseMyArt alternative
- best posing app for artists
- Magic Poser vs / DesignDoll vs
*(People searching "[competitor] alternative" are the most conversion-ready audience you have. These are dedicated comparison pages, covered in §4.)*

**Cluster 3 — Problem / workflow (informational, strong for AI citation):**
- how to find pose references for drawing
- pose reference for character art
- anatomy reference for artists
- gesture drawing reference
- how to pose a 3D model for drawing reference
- fast pose reference workflow

**Cluster 4 — Audience-qualified:**
- pose reference for illustrators / comic artists / animators / concept artists
- pose tool for digital artists
- reference tool for character artists

**Cluster 5 — Differentiator / values (low volume, high fit, strong for AI answers):**
- non-generative AI art tool
- ethically sourced AI for artists
- artist-controlled pose tool
- AI tools that don't replace artists

### 1c. Keyword placement rules
- **One primary keyword per page/section**, worked naturally into: the H1, the first 100 words, at least one H2, image alt text, and the meta title + description.
- Your current H1 is *"Redefining references that keeps up with your imagination."* It's evocative but **contains none of your keywords** and has a grammar slip ("references that keeps"). Consider an H1 that keeps the brand voice but front-loads intent, e.g. *"Sketch to Pose: controllable 3D reference that keeps up with your imagination."* This puts your #1 keyword phrase in the single most weighted on-page element.
- Don't keyword-stuff. Modern ranking (and every LLM) evaluates semantic completeness, not keyword frequency. Cover the *concepts around* a term (anatomy, camera angle, gesture, silhouette, workflow speed) and you'll rank for far more than the exact phrase.

---

## 2. Technical SEO fundamentals

| Item | What to do | Why |
|---|---|---|
| **Meta title** | Current: *"Posematic · Redefining Reference For Artists"* — good brand, but add a keyword. e.g. *"Posematic — Sketch-to-Pose 3D Reference App for Artists"* (~55–60 chars). | Title is the strongest on-page ranking signal and the clickable line in results. |
| **Meta description** | Current one is solid ("Pose Matching, not generative AI. Built by artists from CMU and UMD"). Keep the differentiator, make sure "pose reference" and "sketch to pose" appear. ~150 chars. | Doesn't directly rank, but drives click-through and is often reused verbatim by AI answers. |
| **Single H1** | Ensure exactly one H1 on the page (the hero). All section titles are H2/H3. | Multiple or missing H1s confuse both crawlers and LLMs about the page's topic. |
| **Image alt text** | Your alt text is already unusually good ("Rough ink sketch of a figure in a high side kick pose"). Extend this discipline everywhere and weave keywords in naturally ("3D pose reference mannequin matched from a sketch"). | Alt text is indexed, feeds image search, and gives LLMs context they can't get from the pixels. |
| **Sitemap + robots** | Generate `sitemap.xml` (trivial in Next.js via `app/sitemap.ts`), reference it in `robots.txt`. | Tells crawlers what exists and speeds indexing of a brand-new domain. |
| **Canonical tag** | Add a self-referencing canonical on the homepage. | Prevents duplicate-URL dilution (e.g. trailing slash, www vs non-www). |
| **Core Web Vitals** | You're serving large PNGs through Next/Image (good — it optimizes them), but check the hero and the posing GIF. That `posematic_posing_ver2.gif` is likely heavy; convert to a compressed `.webp` or `.mp4`/video loop. Run PageSpeed Insights and target LCP < 2.5s. | Page speed is a confirmed ranking factor and a bad LCP will tank mobile rankings — critical since you're mobile-first. |
| **HTTPS / mobile** | Already HTTPS and responsive. Confirm no mobile layout breakage via Google's mobile-friendly check. | Table stakes; you appear to pass. |

---

## 3. Structured data (schema markup)

Schema is disproportionately valuable for you because it's how you feed clean, machine-readable facts to both Google (rich results) and LLMs (which lean heavily on structured data for extraction and citation). Add JSON-LD to the homepage:

- **`Organization`** — name (Posematic), url, logo, `sameAs` linking your LinkedIn. This establishes Posematic as a defined *entity*, which is what AI models actually reason about. This is the single highest-leverage schema for AI visibility.
- **`SoftwareApplication`** — applicationCategory (DesignApplication / MultimediaApplication), operatingSystem (iOS, Android), offers (freemium + one-time unlock), a short description. Even pre-launch this defines what the product *is*.
- **`FAQPage`** — once you add an FAQ section (see §5), mark it up. FAQ schema is one of the most reliably-cited structures in AI Overviews.
- **`BreadcrumbList`** — once you have multiple pages (comparison/blog).

Keep the schema facts consistent with your public copy and your accelerator materials — LLMs cross-check entity facts across sources, and contradictions (e.g. team size, founding year, price) reduce trust and citation likelihood.

---

## 4. Content architecture: build pages you don't yet have

Right now Posematic is a **single-page site**. That's fine for a waitlist, but it gives you almost no surface area to rank. Each new page is a new set of queries you can win. Priority order:

**Tier 1 — Comparison / alternative pages (highest ROI, build these first):**
Create a dedicated page for each major competitor:
- `/vs/magic-poser` — "Posematic vs Magic Poser: a faster, sketch-first pose reference tool"
- `/vs/easy-pose`
- `/alternatives/posemy-art`, `/alternatives/designdoll`

These target the "[competitor] alternative" and "[competitor] vs" queries that convert best, and they're *exactly* the format AI answer engines pull from when someone asks "what's a good alternative to Magic Poser?" Structure each page as: the honest one-line comparison, a feature table, "who each tool is best for," and your sketch-to-pose differentiator. Be fair and factual (both Google and LLMs penalize thin, purely promotional comparison spam) — your Keel prep already models this balanced tone.

**Tier 2 — Problem/workflow guides (informational, build AI-citation authority):**
Blog/guide pages that answer the questions your customers actually search:
- "How to find pose references for character drawing (without wasting hours)"
- "Sketch-to-pose: turning rough gesture drawings into 3D reference"
- "Why manual 3D posing apps are slow — and what to do instead"
- "Ethical AI for artists: what non-generative actually means"

These map directly to Clusters 3 and 5. They won't drive immediate signups, but they're what gets you *cited* in AI answers and build topical authority that lifts the whole domain.

**Tier 3 — A proper `/about` or `/team` page:**
Your team section is strong (CMU/UMD, named founders, ScottySpark win). Break it onto its own indexable page with each founder as a named entity. Founder credibility is an E-E-A-T signal (Experience, Expertise, Authoritativeness, Trust) that Google weighs heavily for new brands, and LLMs use named-person entities to assess source authority.

---

## 5. AI-search / GEO-specific optimizations

This is where you can genuinely outrun bigger competitors, because most posing-app incumbents haven't optimized for it. As of 2026, AI Overviews already appear on a meaningful and growing share of searches, and for informational queries the AI answer increasingly intercepts the click before anyone reaches a blue link. The tactics:

- **Answer-first passages.** LLMs extract self-contained chunks. Start key sections with a direct, quotable one-to-two sentence answer, *then* elaborate. Example: begin your sketch-to-pose section with *"Sketch to Pose turns a rough sketch into an editable 3D pose reference in seconds, without generative AI."* — a clean, liftable sentence. Your current copy buries this kind of statement mid-paragraph.
- **Add an FAQ section** (and mark it up, §3). Write the literal questions people ask AI: "What is the best sketch-to-pose app?", "Is there a non-generative AI posing tool?", "What's a good Magic Poser alternative?" Answer each in 2–4 sentences. This is the single most citation-friendly format that exists right now.
- **Entity clarity.** Make sure the site states plainly, in text, *what Posematic is* ("Posematic is a non-generative 3D pose reference app for artists"). Don't rely on the reader inferring it from vibe. Models build an entity profile from explicit statements.
- **Off-site brand mentions matter more than backlinks now.** LLMs are trained on and retrieve from places like Reddit (r/ArtistLounge, r/learnart, r/DigitalArt), artist Discords, Product Hunt, Hacker News, YouTube tutorials, and app-store listings. Getting Posematic mentioned by name in those places — even without a link — builds the entity associations that cause a model to surface you. Your $100K influencer plan and community-driven first-10-users strategy actually double as GEO strategy; make sure those mentions consistently pair "Posematic" with "sketch to pose" and "non-generative."
- **Consistency across the web.** Same one-line description, same founding year, same team facts everywhere (site, LinkedIn, Product Hunt, accelerator profiles, app stores). *(Side note tying back to your application materials: you have a stage/market-size/funding-ask discrepancy across your docs — pre-MVP vs "late MVP," $150K vs $250K, $150M vs 100M-person SOM. Beyond the interview risk I flagged earlier, inconsistent public facts also weaken entity trust for AI models. Worth reconciling once, everywhere.)*
- **llms.txt (emerging, low-cost).** Consider adding an `/llms.txt` file — an emerging convention (like robots.txt but for LLMs) that provides a clean markdown summary of your site for AI crawlers. Adoption is early and not universally honored, but it's cheap insurance and signals you're an AI-aware brand.

---

## 6. Off-page & authority (for a brand-new domain)

A domain registered in 2025/26 has near-zero authority, so early links and mentions compound:
- **App Store & Google Play listings** — once live, these are massive SEO/ASO assets and rank in their own right. Optimize the listing title and description with the same keyword clusters (App Store Optimization overlaps heavily with what's above).
- **Product Hunt launch** — strong backlink + concentrated brand-mention burst + exactly the audience LLMs scrape.
- **Founder/press angle** — "CMU/UMD students building a non-generative, artist-first AI tool" is a genuine story hook. Student-founder + ethical-AI + ScottySpark-winner is pitchable to design/art/edu/startup press, each of which is a quality link and an entity mention.
- **Artist community presence** — genuine participation (not spam) in the subreddits and Discords listed above, plus demo videos on YouTube/TikTok/Instagram (which you're funding anyway). Video content increasingly surfaces in both Google and AI results.
- **Backlinks from your own affiliations** — CMU Swartz Center, ScottyLabs, accelerator portfolio pages, and any incubator you join typically link to portfolio companies. These are high-trust `.edu`-adjacent links — claim every one.

---

## 7. Measurement

Set these up now so you have a baseline before the pushes above:
- **Google Search Console** — verify the domain, submit the sitemap, monitor impressions/clicks/queries and indexing coverage. This is non-negotiable and free.
- **Bing Webmaster Tools** — Bing's index feeds ChatGPT search, so this matters more than it used to.
- **Analytics** (GA4 or a privacy-friendly alternative like Plausible) — track waitlist conversion by source.
- **AI-visibility tracking** — periodically ask ChatGPT, Perplexity, Gemini, and Google AI Mode questions like "best sketch to pose app," "Magic Poser alternatives," "non-generative pose reference tool" and record whether Posematic is mentioned. This is the AI-era equivalent of rank tracking; there are paid tools for it, but manual spot-checks cost nothing to start.
- **Core Web Vitals** via Search Console + PageSpeed Insights.

---

## 8. Suggested sequencing

**Now (pre-launch, this month):**
1. Verify server-side rendering / raw-HTML crawlability (§0) — *blocking, do first.*
2. Fix H1 + meta title to include primary keywords (§1c, §2).
3. Add Organization + SoftwareApplication schema (§3).
4. Set up Search Console, Bing Webmaster, analytics, sitemap, robots (§2, §7).
5. Add an FAQ section with schema (§5).

**Next (0–3 months):**
6. Build the top 2–3 competitor comparison pages (§4 Tier 1).
7. Split out an indexable team/about page (§4 Tier 3).
8. Optimize the posing GIF and hero for Core Web Vitals (§2).
9. Product Hunt + press push; start seeding artist-community mentions (§5, §6).

**Ongoing (post-launch):**
10. Publish one workflow/problem guide per few weeks (§4 Tier 2).
11. Optimize app-store listings when live (§6).
12. Monitor AI-answer visibility monthly and iterate (§7).

---

### One-line summary
Make sure the content is in the raw HTML, put your real keywords into the H1/title/schema, add an FAQ and competitor-comparison pages, and treat community mentions as GEO fuel — that combination wins both the blue links and the AI answers, and most of your posing-app competitors haven't done the AI-search half yet.