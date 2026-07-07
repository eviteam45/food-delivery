"use client";

import { useAuth } from "@/store/auth";
import { useHydrated } from "@/lib/use-hydrated";
import { cn } from "@/lib/cn";

/** First word of a full name, falling back to a friendly default. */
function firstNameOf(name: string | undefined) {
  return name?.trim().split(" ")[0] || "there";
}

/** Personalized home greeting. Gated on hydration so SSR and first client render match. */
export function Greeting({ className }: { className?: string }) {
  const currentUser = useAuth((s) => s.user);
  const hydrated = useHydrated();
  const firstName = firstNameOf(hydrated ? currentUser?.name : undefined);

  return (
    <p className={cn("text-[16px] text-ink-2", className)}>
      Hey {firstName}, <span className="font-bold">Good Afternoon!</span>
    </p>
  );
}
