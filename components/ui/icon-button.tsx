import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
};

/** The round 45px control used for back / menu / actions across the design. */
export function IconButton({ children, href, onClick, className, ...rest }: Props) {
  const cls = cn(
    "inline-flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-surface text-ink transition active:scale-95",
    className,
  );
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  );
}
