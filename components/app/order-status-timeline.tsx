import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

/** Radiating burst shown on the in-progress step. */
function Burst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="none">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" />
      </g>
    </svg>
  );
}

export type OrderStatusTimelineProps = {
  steps: string[];
  /** Index of the step currently in progress. Earlier steps are complete. */
  current: number;
  className?: string;
};

/**
 * Vertical order-progress tracker. Completed steps show an orange check with
 * highlighted text, the in-progress step shows an orange burst, and upcoming
 * steps are muted.
 */
export function OrderStatusTimeline({
  steps,
  current,
  className,
}: OrderStatusTimelineProps) {
  return (
    <ol className={cn("relative", className)}>
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        const isLast = i === steps.length - 1;

        return (
          <li key={label} className="relative flex gap-4 pb-7 last:pb-0">
            {!isLast && (
              <span
                className={cn(
                  "absolute left-[15px] top-8 h-[calc(100%-2rem)] w-0.5",
                  done ? "bg-primary" : "bg-line",
                )}
                aria-hidden
              />
            )}
            <span
              className={cn(
                "z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                done || active
                  ? "bg-primary text-white"
                  : "bg-[#e6e9ef] text-muted-3",
              )}
            >
              {active ? (
                <Burst />
              ) : (
                <Check className="h-4 w-4" strokeWidth={3} />
              )}
            </span>
            <span
              className={cn(
                "pt-1 text-[16px]",
                done ? "font-medium text-primary" : "text-muted-3",
              )}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
