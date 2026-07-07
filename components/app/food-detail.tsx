"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Drumstick, Leaf, Egg, Wheat, Flame } from "lucide-react";
import { ScreenHeader } from "@/components/ui/screen-header";
import { Thumb } from "@/components/ui/thumb";
import { RatingRow } from "@/components/ui/rating-row";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { Button } from "@/components/ui/button";
import { DishMark } from "@/components/icons";
import { useCart } from "@/store/cart";
import type { Food } from "@/data/menu";
import { cn } from "@/lib/cn";

const ingredientIcons = [Drumstick, Leaf, Egg, Wheat, Flame];

export function FoodDetail({ food }: { food: Food }) {
  const router = useRouter();
  const add = useCart((s) => s.add);
  const sizes = food.sizes ?? [10, 14, 16];
  const [size, setSize] = useState(sizes[1]);
  const [qty, setQty] = useState(2);
  const [fav, setFav] = useState(false);

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
        {/* image with heart */}
        <div className="relative mt-2">
          <Thumb src={food.image} alt={food.name} className="h-[220px] w-full rounded-[24px]" />
          <button
            onClick={() => setFav((f) => !f)}
            aria-label="Favourite"
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 backdrop-blur"
          >
            <Heart
              className={cn(
                "h-5 w-5",
                fav ? "fill-primary text-primary" : "fill-white text-white",
              )}
            />
          </button>
        </div>

        {/* restaurant chip */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 pr-5">
          <DishMark className="h-6 w-6" />
          <span className="text-[15px] text-ink-2">{food.restaurant}</span>
        </div>

        <h1 className="mt-5 text-[24px] font-bold text-ink">{food.name}</h1>
        <p className="mt-3 text-[14px] leading-6 text-muted">{food.description}</p>
        <RatingRow rating={food.rating} className="mt-5" />

        {/* size */}
        <div className="mt-8 flex items-center gap-4">
          <span className="caps-label text-[14px] font-medium text-muted-4">
            Size:
          </span>
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={cn(
                "flex h-[62px] w-[62px] items-center justify-center rounded-full text-[16px] font-bold",
                size === s
                  ? "bg-primary text-white"
                  : "bg-surface text-ink-2",
              )}
            >
              {s}&Prime;
            </button>
          ))}
        </div>

        {/* ingredients */}
        <p className="caps-label mt-8 text-[14px] font-medium text-ink">
          Ingredents
        </p>
        <div className="mt-4 flex justify-between">
          {ingredientIcons.map((Icon, i) => (
            <span
              key={i}
              className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-peach"
            >
              <Icon className="h-6 w-6 text-primary" />
            </span>
          ))}
        </div>
      </div>

      {/* sticky bottom bar */}
      <div className="sticky bottom-0 rounded-t-[24px] bg-surface px-6 pb-8 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-[32px] font-bold text-ink">${food.price}</span>
          <QuantityStepper value={qty} onChange={setQty} />
        </div>
        <Button className="mt-6" onClick={addToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
