import assert from "node:assert/strict";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const expected = {
  title: "Posematic — Sketch-to-Pose 3D Reference for Artists",
  description:
    "Posematic is a non-generative 3D pose reference app for artists. Turn rough sketches into controllable poses and join the early-access waitlist.",
  canonical: "https://posematic.art",
  logo: "https://posematic.art/images/posematic-logo-512.png",
};

async function fetchResponse(path) {
  const response = await fetch(new URL(path, baseUrl));
  assert.equal(response.ok, true, `${path} returned ${response.status}`);
  return response;
}

async function fetchText(path) {
  return (await fetchResponse(path)).text();
}

function parseAttributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
      match[1],
      match[2],
    ]),
  );
}

function findTag(tags, attribute, value) {
  return tags.find((tag) => tag[attribute] === value);
}

function parseRobotsGroups(contents) {
  return contents
    .trim()
    .split(/\n\s*\n/)
    .map((block) => {
      const directives = block.split("\n").map((line) => {
        const separator = line.indexOf(":");
        assert.notEqual(separator, -1, `Invalid robots line: ${line}`);
        return {
          name: line.slice(0, separator).trim().toLowerCase(),
          value: line.slice(separator + 1).trim(),
        };
      });

      return {
        userAgents: directives
          .filter(({ name }) => name === "user-agent")
          .map(({ value }) => value),
        allow: directives
          .filter(({ name }) => name === "allow")
          .map(({ value }) => value),
        disallow: directives
          .filter(({ name }) => name === "disallow")
          .map(({ value }) => value),
        host: directives
          .filter(({ name }) => name === "host")
          .map(({ value }) => value),
        sitemap: directives
          .filter(({ name }) => name === "sitemap")
          .map(({ value }) => value),
      };
    });
}

async function assertPng(path, width, height) {
  const response = await fetchResponse(path);
  assert.equal(response.headers.get("content-type"), "image/png");

  const bytes = Buffer.from(await response.arrayBuffer());
  assert.equal(bytes.subarray(1, 4).toString("ascii"), "PNG");
  assert.equal(bytes.readUInt32BE(16), width);
  assert.equal(bytes.readUInt32BE(20), height);
}

const html = await fetchText("/");
const robots = await fetchText("/robots.txt");
const sitemap = await fetchText("/sitemap.xml");
const metaTags = [...html.matchAll(/<meta\b[^>]*>/g)].map((match) =>
  parseAttributes(match[0]),
);
const linkTags = [...html.matchAll(/<link\b[^>]*>/g)].map((match) =>
  parseAttributes(match[0]),
);

assert.match(html, new RegExp(`<title>${expected.title}</title>`));
assert.equal(
  findTag(metaTags, "name", "description")?.content,
  expected.description,
);
assert.equal(
  findTag(linkTags, "rel", "canonical")?.href,
  expected.canonical,
);
assert.equal(
  findTag(metaTags, "property", "og:title")?.content,
  expected.title,
);
assert.equal(
  findTag(metaTags, "property", "og:description")?.content,
  expected.description,
);
assert.equal(
  findTag(metaTags, "property", "og:image:width")?.content,
  "1200",
);
assert.equal(
  findTag(metaTags, "property", "og:image:height")?.content,
  "630",
);
assert.match(
  findTag(metaTags, "property", "og:image")?.content ?? "",
  /^https:\/\/posematic\.art\/opengraph-image(?:\?.+)?$/,
);
assert.equal(
  findTag(metaTags, "name", "twitter:card")?.content,
  "summary_large_image",
);
assert.equal(
  findTag(metaTags, "name", "twitter:description")?.content,
  expected.description,
);
assert.equal(
  findTag(metaTags, "name", "twitter:image")?.content,
  "https://posematic.art/opengraph-image",
);
assert.match(
  html,
  /Sketch to Pose: 3D reference that keeps up with/,
);
assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);
assert.match(html, /posematic_posing_ver2\.mp4/);
assert.doesNotMatch(html, /posematic_posing_ver2\.gif/);

const jsonLdMatches = [
  ...html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ),
];
assert.equal(jsonLdMatches.length, 1);

const graph = JSON.parse(jsonLdMatches[0][1]);
assert.equal(graph["@context"], "https://schema.org");
assert.deepEqual(
  graph["@graph"].map((entry) => entry["@type"]),
  ["WebSite", "Organization", "SoftwareApplication"],
);

const [website, organization, software] = graph["@graph"];
assert.deepEqual(website, {
  "@type": "WebSite",
  "@id": "https://posematic.art/#website",
  url: "https://posematic.art/",
  name: "Posematic",
});
assert.equal(organization["@id"], "https://posematic.art/#organization");
assert.equal(organization.name, "Posematic");
assert.equal(organization.url, "https://posematic.art/");
assert.equal(organization.logo, expected.logo);
assert.equal(organization.email, "posematic.team@gmail.com");
assert.deepEqual(organization.sameAs, [
  "https://www.linkedin.com/company/posematic/",
]);
assert.equal(software.applicationCategory, "DesignApplication");
assert.equal(software["@id"], "https://posematic.art/#software");
assert.equal(software.name, "Posematic");
assert.equal(software.url, "https://posematic.art/");
assert.equal(software.description, expected.description);
assert.equal(
  software.applicationSubCategory,
  "3D pose reference app for artists",
);
assert.equal(software.operatingSystem, "iOS, Android");
assert.equal(
  software.author["@id"],
  "https://posematic.art/#organization",
);
for (const forbidden of [
  "offers",
  "aggregateRating",
  "downloadUrl",
  "datePublished",
]) {
  assert.equal(
    Object.hasOwn(software, forbidden),
    false,
    `SoftwareApplication must omit ${forbidden}`,
  );
}

const robotsGroups = parseRobotsGroups(robots);
assert.deepEqual(robotsGroups[0], {
  userAgents: ["*"],
  allow: ["/"],
  disallow: [],
  host: [],
  sitemap: [],
});
assert.deepEqual(robotsGroups[1], {
  userAgents: [
    "OAI-SearchBot",
    "Claude-SearchBot",
    "PerplexityBot",
  ],
  allow: ["/"],
  disallow: [],
  host: [],
  sitemap: [],
});
assert.deepEqual(robotsGroups[2], {
  userAgents: ["GPTBot", "ClaudeBot", "Google-Extended"],
  allow: [],
  disallow: ["/"],
  host: [],
  sitemap: [],
});
assert.deepEqual(robotsGroups[3], {
  userAgents: [],
  allow: [],
  disallow: [],
  host: ["https://posematic.art"],
  sitemap: ["https://posematic.art/sitemap.xml"],
});

assert.deepEqual(
  [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]),
  ["https://posematic.art/"],
);
await assertPng("/opengraph-image", 1200, 630);
await assertPng(new URL(expected.logo).pathname, 512, 512);

console.log("SEO verification passed");
