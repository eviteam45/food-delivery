"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useCart, cartCount } from "@/store/cart";
import { cn } from "@/lib/cn";

function MenuGlyph() {
  return (
    <svg viewBox="0 0 20 14" className="h-4 w-5" fill="none">
      <path d="M1 1h18M5 7h14M9 13h10" stroke="#181C2E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BagGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)}>
      <path
        d="M6 8h12l-1 11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L6 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function HomeHeader({
  address = "Halal Lab office",
  menuHref = "/menu",
}: {
  address?: string;
  menuHref?: string;
}) {
  const items = useCart((s) => s.items);
  const count = cartCount(items);

  return (
    <header className="flex items-center justify-between px-6 pt-4">
      <Link
        href={menuHref}
        aria-label="Menu"
        className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-surface active:scale-95"
      >
        <MenuGlyph />
      </Link>

      <div className="flex flex-col items-start">
        <span className="caps-label text-[12px] font-bold text-primary">
          Deliver to
        </span>
        <button className="flex items-center gap-1 text-[14px] text-ink-2">
          {address}
          <ChevronDown className="h-4 w-4 text-ink" />
        </button>
      </div>

      <Link
        href="/cart"
        aria-label="Cart"
        className="relative flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-white active:scale-95"
      >
        <BagGlyph />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-white">
            {count}
          </span>
        )}
      </Link>
    </header>
  );
}
