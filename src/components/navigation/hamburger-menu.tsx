"use client";

import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 hover:shadow"
        aria-label="Open navigation menu"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <span className="space-y-1">
          <span className="block h-0.5 w-6 bg-gray-900"></span>
          <span className="block h-0.5 w-6 bg-gray-900"></span>
          <span className="block h-0.5 w-6 bg-gray-900"></span>
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-48 rounded-lg border border-gray-200 bg-white p-3 shadow-lg z-[60]">
          <nav className="flex flex-col gap-2 text-sm font-medium text-gray-900">
            <Link href="/about" onClick={() => setOpen(false)} className="rounded px-2 py-2 transition hover:bg-gray-100">
              About
            </Link>
            <Link
              href="/founders"
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 transition hover:bg-gray-100"
            >
              Founders
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
