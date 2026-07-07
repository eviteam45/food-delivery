import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Horizontal scrolling row with a hidden scrollbar. Shared by the home rails. */
export function Rail({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "no-scrollbar flex gap-4 overflow-x-auto px-6 pb-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
