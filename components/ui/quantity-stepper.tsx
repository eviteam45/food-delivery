"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  variant?: "pill" | "plain";
  className?: string;
};

/** Quantity control: a dark rounded pill (food details) or plain circles (cart). */
export function QuantityStepper({
  value,
  onChange,
  min = 1,
  variant = "pill",
  className,
}: Props) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(value + 1);

  const btn =
    "flex h-[38px] w-[38px] items-center justify-center rounded-full transition active:scale-90";

  if (variant === "plain") {
    return (
      <div className={cn("flex items-center gap-4 text-white", className)}>
        <button type="button" onClick={dec} aria-label="Decrease" className={cn(btn, "bg-white/10")}>
          <Minus className="h-4 w-4" />
        </button>
        <span className="min-w-[16px] text-center text-[16px] font-bold">{value}</span>
        <button type="button" onClick={inc} aria-label="Increase" className={cn(btn, "bg-white/10")}>
          <Plus className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-full bg-ink px-2 py-2 text-white",
        className,
      )}
    >
      <button type="button" onClick={dec} aria-label="Decrease" className={cn(btn, "bg-white/10")}>
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-[18px] text-center text-[16px] font-bold">{value}</span>
      <button type="button" onClick={inc} aria-label="Increase" className={cn(btn, "bg-white/10")}>
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
