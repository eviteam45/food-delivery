"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Thumb } from "@/components/ui/thumb";
import { cn } from "@/lib/cn";

/** Dish photo with a favourite toggle overlaid, used on the food detail screen. */
export function DishHero({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const [fav, setFav] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <Thumb src={src} alt={alt} className="h-[220px] w-full rounded-[24px]" />
      <button
        onClick={() => setFav((f) => !f)}
        aria-label="Favourite"
        aria-pressed={fav}
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
  );
}
