import { NextResponse } from "next/server";

type Body = {
  email?: string;
};

/**
 * Stub endpoint — replace with email capture (Resend, Loops, Supabase, etc.).
 */
export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  return NextResponse.json({ ok: true, email });
}
