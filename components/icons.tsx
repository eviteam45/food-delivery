import { cn } from "@/lib/cn";

type IconProps = { className?: string };

/** Delivery van used in rating rows ("Free" delivery). */
export function DeliveryTruck({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-[18px] w-[18px]", className)}
    >
      <path d="M2 6.5A1.5 1.5 0 0 1 3.5 5h9A1.5 1.5 0 0 1 14 6.5V16H2V6.5Z" />
      <path d="M14 9h3.6a2 2 0 0 1 1.7 1l2.2 3.4a2 2 0 0 1 .3 1V16h-8V9Z" />
      <circle cx="6" cy="18" r="1.8" />
      <circle cx="18" cy="18" r="1.8" />
      <path d="M8 18h8" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-6 w-6", className)}>
      <path d="M14 8.5V6.8c0-.8.2-1.3 1.5-1.3H17V2.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v1.8H8v3h2.5V21H14v-8.5h2.4l.4-3H14Z" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-6 w-6", className)}>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4-.6.2-1.3.2-1.9.1a4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
    </svg>
  );
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-6 w-6", className)}>
      <path d="M16.4 12.8c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.4 2-1.4 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.5 2.1 1 0 1.4-.6 2.6-.6s1.5.6 2.6.6 1.7-1 2.4-2c.7-1.1 1-2.2 1-2.3-.1 0-2.1-.8-2.2-3.1ZM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.8 2.5.9.1 1.8-.4 2.4-1.1Z" />
    </svg>
  );
}

/** Small utensils mark used for restaurant chips. */
export function DishMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)}>
      <circle cx="12" cy="12" r="11" fill="#FFE1CE" />
      {/* fork */}
      <path
        d="M9 6v4M9 6c-1 0-1.6.7-1.6 2s.6 2 1.6 2m0-4c1 0 1.6.7 1.6 2s-.6 2-1.6 2m0 0v6"
        stroke="#FF7622"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* knife */}
      <path
        d="M15.5 6c-1.2 1-1.6 3.2-1.2 5.2.2 1 .9 1 1.2.4V18"
        stroke="#FF7622"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
