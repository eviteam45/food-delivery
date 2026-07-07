import { Drumstick, Leaf, Egg, Wheat, Flame } from "lucide-react";
import { ingredients } from "@/data/menu";
import { cn } from "@/lib/cn";

const ingredientIcons = [Drumstick, Leaf, Egg, Wheat, Flame];

/** Row of ingredient icon chips shown under the food description. */
export function IngredientList({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-between", className)}>
      {ingredientIcons.map((Icon, i) => (
        <span
          key={i}
          aria-label={ingredients[i]}
          className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-peach"
        >
          <Icon className="h-6 w-6 text-primary" />
        </span>
      ))}
    </div>
  );
}
