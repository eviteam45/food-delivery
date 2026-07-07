"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/cn";

export function SearchBar({
  value,
  onChange,
  placeholder = "Search dishes, restaurants",
  onClear,
  autoFocus,
  readOnly,
  onClick,
  className,
}: {
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  onClear?: () => void;
  autoFocus?: boolean;
  readOnly?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-[62px] items-center gap-3 rounded-[10px] bg-surface-2 px-5",
        className,
      )}
      onClick={onClick}
    >
      <Search className="h-5 w-5 text-muted-3" />
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        readOnly={readOnly}
        className="flex-1 bg-transparent text-[14px] text-ink placeholder:text-muted-3 focus:outline-none"
      />
      {value && onClear && (
        <button
          onClick={onClear}
          aria-label="Clear"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c8ccd6] text-white"
        >
          <X className="h-3.5 w-3.5" strokeWidth={3} />
        </button>
      )}
    </div>
  );
}
