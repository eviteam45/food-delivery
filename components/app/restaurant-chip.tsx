import { DishMark } from "@/components/icons";
import { cn } from "@/lib/cn";

/** Pill showing which restaurant a dish belongs to. */
export function RestaurantChip({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 pr-5",
        className,
      )}
    >
      <DishMark className="h-6 w-6" />
      <span className="text-[15px] text-ink-2">{name}</span>
    </div>
  );
}
