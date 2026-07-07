"use client";

import Link from "next/link";
import { useCart, cartCount } from "@/store/cart";
import { useHydrated } from "@/lib/use-hydrated";
import { cn } from "@/lib/cn";

function BagGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
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

export function CartButton({ className }: { className?: string }) {
  const items = useCart((s) => s.items);
  const hydrated = useHydrated();
  const count = hydrated ? cartCount(items) : 0;
  return (
    <Link
      href="/cart"
      aria-label="Cart"
      className={cn(
        "relative flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-white active:scale-95",
        className,
      )}
    >
      <BagGlyph />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
