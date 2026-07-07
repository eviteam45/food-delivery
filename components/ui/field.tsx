"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/cn";

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  password?: boolean;
  error?: string;
};

export function Field({ label, password, className, type, error, ...props }: FieldProps) {
  const [show, setShow] = useState(false);
  const inputType = password ? (show ? "text" : "password") : type;
  return (
    <label className="block">
      {label && (
        <span className="caps-label mb-3 block text-[13px] font-medium text-ink-2">
          {label}
        </span>
      )}
      <div className="relative">
        <input
          type={inputType}
          aria-invalid={error ? true : undefined}
          className={cn(
            "h-[62px] w-full rounded-[10px] bg-surface px-5 text-[14px] text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30",
            password && "pr-14",
            error && "ring-2 ring-red-400/60",
            className,
          )}
          {...props}
        />
        {password && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-4"
          >
            {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
      {error && <span className="mt-2 block text-[13px] text-red-500">{error}</span>}
    </label>
  );
}
