import { cn } from "@/lib/cn";

/** "Food" wordmark with a serving-cloche over the double-o, echoing the splash logo. */
export function Logo({
  className,
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("relative inline-flex select-none items-end", className)}
      style={{ fontSize: size, lineHeight: 1, fontFamily: "var(--font-sans)" }}
    >
      <span className="font-extrabold tracking-tight text-ink">F</span>
      <span className="relative font-extrabold tracking-tight text-primary">
        {/* cloche sits above the two o's */}
        <svg
          viewBox="0 0 60 26"
          className="absolute left-1/2 -translate-x-1/2"
          style={{ width: size * 0.95, top: -size * 0.42 }}
          fill="none"
        >
          <path
            d="M6 22h48c0-13-10.7-19-24-19S6 9 6 22Z"
            fill="#ff7622"
          />
          <circle cx="30" cy="4" r="3.4" fill="#ff7622" />
          <rect x="3" y="22" width="54" height="3.2" rx="1.6" fill="#ff7622" />
        </svg>
        oo
        {/* speed lines under the oo */}
        <span
          className="absolute -bottom-1 left-0 h-[3px] w-[60%] rounded-full bg-primary/70"
          style={{ bottom: -size * 0.12 }}
        />
      </span>
      <span className="font-extrabold tracking-tight text-ink">d</span>
    </div>
  );
}
