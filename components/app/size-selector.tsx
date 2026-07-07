"use client";

import { cn } from "@/lib/cn";

/** Controlled size picker (inch options) for the food detail screen. */
export function SizeSelector({
  sizes,
  value,
  onChange,
  className,
}: {
  sizes: number[];
  value: number;
  onChange: (size: number) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="caps-label text-[14px] font-medium text-muted-4">
        Size:
      </span>
      {sizes.map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          aria-pressed={value === s}
          className={cn(
            "flex h-[62px] w-[62px] items-center justify-center rounded-full text-[16px] font-bold",
            value === s ? "bg-primary text-white" : "bg-surface text-ink-2",
          )}
        >
          {s}&Prime;
        </button>
      ))}
    </div>
  );
}
