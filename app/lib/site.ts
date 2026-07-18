export const SITE_URL = "https://posematic.art";

export const SITE = {
  name: "Posematic",
  title: "Posematic — Sketch-to-Pose 3D Reference for Artists",
  description:
    "Posematic is a non-generative 3D pose reference app for artists. Turn rough sketches into controllable poses and join the early-access waitlist.",
  email: "posematic.team@gmail.com",
  linkedIn: "https://www.linkedin.com/company/posematic/",
  logoPath: "/images/posematic-logo-512.png",
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
