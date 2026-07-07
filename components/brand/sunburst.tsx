import { cn } from "@/lib/cn";

/** Radiating rays used in the splash/auth corners. Rendered as a masked conic gradient. */
export function Sunburst({
  className,
  from = "#ff7622",
  to = "#ffd27a",
  opacity = 1,
}: {
  className?: string;
  from?: string;
  to?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute aspect-square", className)}
      style={{
        opacity,
        background: `repeating-conic-gradient(from 0deg, ${from} 0deg 1.6deg, transparent 1.6deg 6deg)`,
        WebkitMaskImage:
          "radial-gradient(closest-side, #000 62%, rgba(0,0,0,0.15) 88%, transparent 100%)",
        maskImage:
          "radial-gradient(closest-side, #000 62%, rgba(0,0,0,0.15) 88%, transparent 100%)",
        // subtle tint gradient overlay
        backgroundBlendMode: "normal",
      }}
    >
      <div
        className="h-full w-full"
        style={{
          background: `radial-gradient(closest-side, transparent 40%, ${to}00 60%, ${to}22 100%)`,
        }}
      />
    </div>
  );
}
