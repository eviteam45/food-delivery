import { cn } from "@/lib/cn";

/**
 * Self-contained "payment successful" illustration: an orange check badge on a
 * soft peach halo with celebratory confetti. Pure SVG in the brand palette — no
 * image asset, so it stays crisp at any size and needs no network request.
 */
export function SuccessGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 240"
      fill="none"
      role="img"
      aria-label="Payment successful"
      className={cn("h-auto w-[300px]", className)}
    >
      <defs>
        <linearGradient id="badge" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#FF9A52" />
          <stop offset="1" stopColor="#FF7622" />
        </linearGradient>
      </defs>

      {/* halo */}
      <circle cx="150" cy="120" r="78" fill="#FFE7D6" />
      <circle cx="150" cy="120" r="60" fill="#FFD3B8" />

      {/* badge */}
      <circle cx="150" cy="120" r="48" fill="url(#badge)" />
      <circle
        cx="150"
        cy="120"
        r="48"
        stroke="#FF7622"
        strokeOpacity="0.25"
        strokeWidth="8"
      />

      {/* check mark */}
      <path
        d="M131 121l13 13 25-27"
        stroke="#fff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* confetti */}
      <path
        d="M58 60l7 3-3 7-7-3z"
        fill="#FFC529"
        transform="rotate(-12 60 63)"
      />
      <path
        d="M240 54l7 3-3 7-7-3z"
        fill="#FF7622"
        transform="rotate(18 243 57)"
      />
      <circle cx="66" cy="150" r="5" fill="#FF7622" />
      <circle cx="236" cy="150" r="6" fill="#FFC529" />
      <circle cx="150" cy="34" r="4" fill="#181C2E" />
      <path
        d="M40 108l10 4"
        stroke="#FF9A52"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M250 108l10-4"
        stroke="#181C2E"
        strokeOpacity="0.6"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M92 200l4 9"
        stroke="#FFC529"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M208 198l-4 9"
        stroke="#FF7622"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="118" cy="46" r="3" fill="#FF7622" />
      <circle cx="188" cy="52" r="3.5" fill="#FFC529" />
    </svg>
  );
}
