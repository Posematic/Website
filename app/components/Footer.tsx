import Image from "next/image";
import Link from "next/link";
import { PAGE_EDGE, PAGE_MAX } from "@/app/lib/pageLayout";
import { FOCUS_RING, LINK_MUTED_SM } from "@/app/lib/uiTokens";
import type { LucideIcon } from "lucide-react";
import { Linkedin } from "lucide-react";

const footerLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#product", label: "Product" },
  { href: "#vision", label: "Features" },
  { href: "#team", label: "Team" },
  { href: "#waitlist", label: "Early access" },
] as const;

const social: readonly {
  href: string;
  label: string;
  icon: LucideIcon;
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
      <div className={`flex flex-col gap-10 ${PAGE_MAX}`}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
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
              <p className="text-[0.8125rem] font-medium tracking-[-0.01em] text-white desktop:text-sm wide:text-[0.9375rem]">
                Posematic
              </p>
              <a
                href="mailto:posematic.team@gmail.com"
                className={`mt-0.5 block ${LINK_MUTED_SM}`}
              >
                posematic.team@gmail.com
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={`text-sm ${LINK_MUTED_SM}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3.5 sm:justify-end">
            {social.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  className={`text-white/50 transition-colors duration-200 hover:text-white ${FOCUS_RING} rounded-md`}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-[22px] w-[22px] desktop:h-6 desktop:w-6" strokeWidth={1.5} />
                </Link>
              );
            })}
          </div>
        </div>

        <p className="text-center text-[11px] text-[var(--color-text-tertiary)] sm:text-left desktop:text-xs">
          © {new Date().getFullYear()} Posematic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
