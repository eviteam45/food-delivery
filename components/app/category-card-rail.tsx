import { Rail } from "@/components/ui/rail";
import { CategoryCard } from "@/components/app/cards";
import type { Category } from "@/data/menu";

/** Home V2/V3 category rail: link cards, optionally showing a starting price. */
export function CategoryCardRail({
  categories,
  showPrice = false,
}: {
  categories: Category[];
  showPrice?: boolean;
}) {
  return (
    <Rail className="mt-5">
      {categories
        .filter((c) => c.slug !== "all")
        .map((c) => (
          <CategoryCard
            key={c.slug}
            name={c.name}
            image={c.image}
            price={showPrice ? c.startingPrice : undefined}
            href={`/category/${c.slug}`}
          />
        ))}
    </Rail>
  );
}
