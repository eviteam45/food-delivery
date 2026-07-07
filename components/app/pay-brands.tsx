import { cn } from "@/lib/cn";

export function MastercardMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 30" className={cn("h-6", className)} fill="none">
      <circle cx="19" cy="15" r="11" fill="#EB001B" />
      <circle cx="29" cy="15" r="11" fill="#F79E1B" />
      <path
        d="M24 6.5a11 11 0 0 1 0 17 11 11 0 0 1 0-17Z"
        fill="#FF5F00"
      />
    </svg>
  );
}

export function VisaMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-extrabold italic tracking-tight text-[#1A1F71]",
        className,
      )}
      style={{ fontSize: 22 }}
    >
      VISA
    </span>
  );
}

export function PaypalMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-7", className)} fill="none">
      <path
        d="M11 26 13 6h7c3.3 0 5.4 1.8 5 5.2-.5 3.9-3.3 5.8-7.2 5.8h-2.3L14.6 26H11Z"
        fill="#009CDE"
      />
      <path
        d="M8 24 10 4h7c3.3 0 5.4 1.8 5 5.2-.5 3.9-3.3 5.8-7.2 5.8h-2.3L11.6 24H8Z"
        fill="#003087"
      />
    </svg>
  );
}

export function CashMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7", className)}
      fill="none"
      stroke="#FF7622"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="19" cy="10" r="5" />
      <path d="M19 8.5v3M17.5 10h3" />
      <path d="M4 22c3-2 6-2 9 0 2 1.3 4 1.3 6 0l7-4" />
      <path d="M4 22v4M28 18v4" />
    </svg>
  );
}
