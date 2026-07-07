import { RestaurantCard } from "@/components/app/cards";
import type { Restaurant } from "@/data/menu";
import { cn } from "@/lib/cn";

/** Vertical list of large restaurant cards used on Home. */
export function RestaurantList({
  restaurants,
  className,
}: {
  restaurants: Restaurant[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-7 px-6", className)}>
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} r={r} />
      ))}
    </div>
  );
}
