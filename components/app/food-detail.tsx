"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenHeader } from "@/components/ui/screen-header";
import { RatingRow } from "@/components/ui/rating-row";
import { DishHero } from "@/components/app/dish-hero";
import { RestaurantChip } from "@/components/app/restaurant-chip";
import { SizeSelector } from "@/components/app/size-selector";
import { IngredientList } from "@/components/app/ingredient-list";
import { PurchaseBar } from "@/components/app/purchase-bar";
import { useCart } from "@/store/cart";
import type { Food } from "@/data/menu";

export function FoodDetail({ food }: { food: Food }) {
  const router = useRouter();
  const add = useCart((s) => s.add);
  const sizes = food.sizes ?? [10, 14, 16];
  const [size, setSize] = useState(sizes[1]);
  const [qty, setQty] = useState(2);

  const addToCart = () => {
    add(
      {
        id: `${food.id}-${size}`,
        foodId: food.id,
        name: food.name,
        price: food.price,
        size,
      },
      qty,
    );
    router.push("/cart");
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <ScreenHeader title="Details" back="/home" />

      <div className="flex-1 px-6 pb-40">
        <DishHero src={food.image} alt={food.name} className="mt-2" />
        <RestaurantChip name={food.restaurant} className="mt-6" />

        <h1 className="mt-5 text-[24px] font-bold text-ink">{food.name}</h1>
        <p className="mt-3 text-[14px] leading-6 text-muted">
          {food.description}
        </p>
        <RatingRow rating={food.rating} className="mt-5" />

        <SizeSelector
          sizes={sizes}
          value={size}
          onChange={setSize}
          className="mt-8"
        />

        <p className="caps-label mt-8 text-[14px] font-medium text-ink">
          Ingredients
        </p>
        <IngredientList className="mt-4" />
      </div>

      <PurchaseBar
        price={food.price}
        qty={qty}
        onQtyChange={setQty}
        onAdd={addToCart}
      />
    </div>
  );
}
