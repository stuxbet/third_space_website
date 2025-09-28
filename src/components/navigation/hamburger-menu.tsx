"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-muted/40 bg-surface text-foreground shadow-sm transition hover:bg-surface/90"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-[60] w-48 rounded-xl border border-muted/40 bg-popover/95 p-2 text-foreground shadow-lg backdrop-blur"
      >
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/about" className="w-full">
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/founders" className="w-full">
            Founders
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
