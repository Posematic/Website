import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const social = [
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white">Posematic</p>
          <a
            href="mailto:hello@posematic.com"
            className="mt-1 block text-sm text-[var(--color-text-secondary)] transition hover:text-white"
          >
            hello@posematic.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          {social.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.label}
                href={s.href}
                className="text-white/50 transition hover:text-white"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            );
          })}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-center text-xs text-[var(--color-text-tertiary)] sm:text-left">
        © {new Date().getFullYear()} Posematic. All rights reserved.
      </p>
    </footer>
  );
}
