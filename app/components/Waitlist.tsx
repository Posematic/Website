"use client";

import { PAGE_EDGE } from "@/app/lib/pageLayout";
import { useState, type SubmitEvent } from "react";
import { Check, Loader2 } from "lucide-react";

type SubmitState = "idle" | "loading" | "success" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      setMessage("You're registered. We'll let you know when early access opens.");
      setEmail("");
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="waitlist"
      className={`relative scroll-mt-15 py-20 sm:scroll-mt-20 lg:py-28 ${PAGE_EDGE}`}
    >
      <div className="grain relative mx-auto w-full max-w-4xl overflow-hidden rounded-[28px] border border-[var(--color-border-subtle)] p-10 sm:p-14 surface-liquid shadow-[0_20px_60px_rgba(10,5,40,0.5)]">
        <div className="relative z-[1] text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Get notified when we launch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Reserve your spot for an early supporter perk when we ship. Use
            Posematic the way it is meant to be used.
          </p>
          <form
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch"
            onSubmit={handleSubmit}
            noValidate
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email
            </label>
            <input
              id="waitlist-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@studio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-[52px] flex-1 rounded-xl border border-white/15 bg-black/30 px-4 text-[15px] text-white placeholder:text-white/35 focus:border-[var(--color-brand-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]/40"
            />
            <button
              type="submit"
              disabled={state === "loading" || state === "success"}
              className="inline-flex min-h-[52px] min-w-[160px] items-center justify-center gap-2 rounded-xl bg-[var(--color-brand-purple)] px-6 text-[15px] font-medium text-white transition hover:bg-[var(--color-brand-lavender)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Sending
                </>
              ) : state === "success" ? (
                <>
                  <Check className="h-4 w-4" aria-hidden />
                  You&apos;re in
                </>
              ) : (
                "Get early access"
              )}
            </button>
          </form>
          {message ? (
            <p
              className={`mt-4 text-sm ${
                state === "success" ? "text-[var(--color-brand-highlight)]" : "text-red-300"
              }`}
              role="status"
            >
              {message}
            </p>
          ) : (
            <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">
              We only use your email for launch updates and this perk—not a
              newsletter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
