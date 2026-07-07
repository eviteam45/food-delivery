"use client";

import { useState } from "react";
import { FoodCard } from "@/components/app/cards";
import { categories, type Food } from "@/data/menu";

/**
 * Interactive menu section for a restaurant page: category chips that filter
 * the product grid on the client. Server component passes in the food list.
 */
export function RestaurantMenu({ foods }: { foods: Food[] }) {
  const [active, setActive] = useState("all");

  const shown =
    active === "all" ? foods : foods.filter((f) => f.category === active);
  const activeName =
    categories.find((c) => c.slug === active)?.name ?? "All";

  return (
    <>
      <div className="no-scrollbar mt-6 flex gap-4 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActive(c.slug)}
            className={`shrink-0 rounded-full px-7 py-2.5 text-[14px] font-bold transition-colors ${
              c.slug === active
                ? "bg-primary text-white"
                : "border border-line text-ink-2"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <h2 className="mt-7 text-[20px] font-bold text-ink-2">
        {activeName} ({shown.length})
      </h2>

      {shown.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 gap-5">
          {shown.map((f) => (
            <FoodCard key={f.id} food={f} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-[14px] text-muted">
          No {activeName.toLowerCase()} on the menu yet.
        </p>
      )}
    </>
  );
}
