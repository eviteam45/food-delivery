"use client";

import { useState } from "react";
import { Rail } from "@/components/ui/rail";
import { CategoryPill } from "@/components/app/cards";
import type { Category } from "@/data/menu";

/** Home V1 category rail: selectable pills that own their active state. */
export function CategoryPillRail({
  categories,
  initialActive = "all",
}: {
  categories: Category[];
  initialActive?: string;
}) {
  const [active, setActive] = useState(initialActive);

  return (
    <Rail className="mt-5">
      {categories.map((c) => (
        <CategoryPill
          key={c.slug}
          label={c.name}
          image={c.image}
          active={active === c.slug}
          onClick={() => setActive(c.slug)}
        />
      ))}
    </Rail>
  );
}
