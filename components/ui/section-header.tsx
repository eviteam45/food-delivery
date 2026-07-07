import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function SectionHeader({
  title,
  href,
  actionLabel = "See All",
  className,
}: {
  title: string;
  href?: string;
  actionLabel?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h2 className="text-[20px] font-bold text-ink-2">{title}</h2>
      {href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-[14px] text-muted-4"
        >
          {actionLabel}
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
