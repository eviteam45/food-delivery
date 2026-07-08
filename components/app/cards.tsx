"use client";

import Link from "next/link";
import { Plus, Star } from "lucide-react";
import { Thumb } from "@/components/ui/thumb";
import { RatingRow } from "@/components/ui/rating-row";
import { useCart } from "@/store/cart";
import type { Food, Restaurant } from "@/data/menu";
import { cn } from "@/lib/cn";

/** Big restaurant card used on Home. */
export function RestaurantCard({ r }: { r: Restaurant }) {
  return (
    <Link href={`/restaurant/${r.id}`} className="block">
      <Thumb src={r.image} alt={r.name} className="h-[137px] w-full rounded-[16px]" />
      <h3 className="mt-3 text-[20px] font-bold text-ink-2">{r.name}</h3>
      <p className="mt-0.5 text-[14px] text-muted">{r.tags.join(" - ")}</p>
      <RatingRow
        rating={r.rating}
        delivery={r.delivery}
        time={r.time}
        className="mt-3"
      />
    </Link>
  );
}

/** Grid product card with the image popping above a white card + add button. */
export function FoodCard({ food }: { food: Food }) {
  const add = useCart((s) => s.add);
  const size = food.sizes?.[1] ?? 14;

  return (
    <div className="relative pt-[52px]">
      <Link
        href={`/food/${food.id}`}
        className="block rounded-[22px] bg-white px-4 pb-4 pt-[70px] shadow-[0_20px_40px_rgba(24,28,46,0.08)]"
      >
        <Thumb
          src={food.image}
          alt={food.name}
          className="absolute left-1/2 top-0 h-[120px] w-[135px] -translate-x-1/2 rounded-[18px]"
        />
        <h3 className="truncate text-[16px] font-bold text-ink-2">{food.name}</h3>
        <p className="mt-1 truncate text-[14px] text-muted">{food.restaurant}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[18px] font-bold text-ink">${food.price}</span>
        </div>
      </Link>
      <button
        aria-label={`Add ${food.name}`}
        onClick={() =>
          add({
            id: `${food.id}-${size}`,
            foodId: food.id,
            name: food.name,
            price: food.price,
            size,
          })
        }
        className="absolute bottom-4 right-4 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_16px_rgba(255,118,34,0.35)] active:scale-90"
      >
        <Plus className="h-5 w-5" strokeWidth={2.5} />
      </button>
    </div>
  );
}

/** Small list row used in Search "Suggested Restaurants". */
export function SuggestRow({
  name,
  rating,
  href = "#",
  image,
}: {
  name: string;
  rating: number;
  href?: string;
  image?: string;
}) {
  return (
    <Link href={href} className="flex items-center gap-4 border-b border-line py-4">
      <Thumb src={image} alt={name} className="h-[60px] w-[60px] rounded-[12px]" />
      <div>
        <h3 className="text-[16px] text-ink-2">{name}</h3>
        <span className="mt-1 flex items-center gap-1.5 text-[14px] font-bold text-ink">
          <Star className="h-4 w-4 fill-primary text-primary" />
          {rating.toFixed(1)}
        </span>
      </div>
    </Link>
  );
}

/** Category pill for Home V1 (circle thumb + label). */
export function CategoryPill({
  label,
  active,
  onClick,
  image,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  image?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-[80px] shrink-0 items-center gap-2 rounded-[26px] pl-2 pr-6 shadow-[0_10px_24px_rgba(24,28,46,0.06)]",
        active ? "bg-primary-tint" : "bg-white",
      )}
    >
      <Thumb src={image} alt={label} className="h-[55px] w-[55px] rounded-full" />
      <span className="text-[16px] font-bold text-ink-2">{label}</span>
    </button>
  );
}

/** Category card for Home V2/V3 (square thumb + name, optional price). */
export function CategoryCard({
  name,
  price,
  href = "#",
  image,
}: {
  name: string;
  price?: number;
  href?: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      className="flex w-[150px] shrink-0 flex-col rounded-[24px] bg-white p-3 shadow-[0_16px_34px_rgba(24,28,46,0.08)]"
    >
      <Thumb src={image} alt={name} className="h-[120px] w-full rounded-[18px]" />
      <span className="mt-3 px-1 text-[18px] font-bold text-ink-2">{name}</span>
      {price != null && (
        <span className="mt-1 flex items-center justify-between px-1 pb-1">
          <span className="text-[14px] text-muted">Starting</span>
          <span className="text-[16px] font-bold text-ink">${price}</span>
        </span>
      )}
    </Link>
  );
}
