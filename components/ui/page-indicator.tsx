import { cn } from "@/lib/cn";

export function PageIndicator({
  count,
  active,
  className,
}: {
  count: number;
  active: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-2 rounded-full transition-all",
            i === active ? "w-2 bg-primary" : "w-2 bg-primary/25",
          )}
        />
      ))}
    </div>
  );
}
