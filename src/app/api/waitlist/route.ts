import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import {
  CountryCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js";

const DEFAULT_REGION = process.env.NEXT_PUBLIC_DEFAULT_PHONE_REGION ?? "US";

function normalizePhone(raw: string) {
  const region =
    DEFAULT_REGION && DEFAULT_REGION.length === 2
      ? (DEFAULT_REGION.toUpperCase() as CountryCode)
      : undefined;
  const parsed = parsePhoneNumberFromString(raw, region);
  if (!parsed || !parsed.isValid()) {
    throw new Error("INVALID_PHONE");
  }
  return parsed.number; // E.164 format
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const rawPhone = String(form.get("phone") ?? "").trim();

    if (!rawPhone) {
      return NextResponse.json({ ok: false, error: "Missing phone" }, { status: 400 });
    }

    const phone = normalizePhone(rawPhone);
    const key = `waitlist:${phone}`;

    await kv.hset(key, {
      phone,
      createdAt: Date.now(),
      source: form.get("source") ?? "landing-page",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_PHONE") {
      return NextResponse.json({ ok: false, error: "Invalid phone number" }, { status: 400 });
    }

    console.error("waitlist error", error);
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}
