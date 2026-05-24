import Image from "next/image";
import Link from "next/link";
import { PAGE_EDGE, PAGE_MAX } from "@/app/lib/pageLayout";
import type { LucideIcon } from "lucide-react";
import { Github, Linkedin } from "lucide-react";

const social: readonly {
  href: string;
  label: string;
  icon?: LucideIcon;
  render?: "x";
}[] = [
  {
    href: "https://www.linkedin.com/company/posematic/",
    label: "LinkedIn",
    icon: Linkedin,
  },
] as const;

export function Footer() {
  return (
    <footer className={`border-t border-white/10 py-16 desktop:py-18 wide:py-20 ${PAGE_EDGE}`}>
      <div className={`flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between ${PAGE_MAX}`}>
        <div className="flex items-center gap-3">
          <Image
            src="/images/posematic_logo_4px.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
            aria-hidden
          />
          <div>
            <p className="text-[0.8125rem] font-medium text-white desktop:text-sm wide:text-[0.9375rem]">
              Posematic
            </p>
            <a
              href="mailto:posematic.team@gmail.com"
              className="mt-0.5 block text-[0.8125rem] text-[var(--color-text-secondary)] transition hover:text-white desktop:text-sm wide:text-[0.9375rem]"
            >
              posematic.team@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
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
                {Icon ? (
                  <Icon className="h-[22px] w-[22px] desktop:h-6 desktop:w-6" strokeWidth={1.5} />
                ) : null}
              </Link>
            );
          })}
        </div>
      </div>
      <p
        className={`mt-7 text-center text-[11px] text-[var(--color-text-tertiary)] sm:text-left desktop:text-xs ${PAGE_MAX}`}
      >
        © {new Date().getFullYear()} Posematic. All rights reserved.
      </p>
    </footer>
  );
}
