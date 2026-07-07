"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { SearchBar } from "@/components/app/search-bar";
import { SuggestRow, FoodCard } from "@/components/app/cards";
import { CartButton } from "@/components/app/cart-button";
import { foods } from "@/data/menu";

const recent = ["Burger", "Sandwich", "Pizza", "Sandwich"];
const suggested = [
  { name: "Pansi Restaurant", rating: 4.7, image: "/food/pasta2.jpg" },
  { name: "American Spicy Burger Shop", rating: 4.3, image: "/food/burger.jpg" },
  { name: "Cafenio Coffee Club", rating: 4.0, image: "/food/dessert2.jpg" },
];

export default function SearchPage() {
  const [q, setQ] = useState("Pizza");

  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <header className="flex items-center gap-4 px-6 pt-4">
        <IconButton href="/home" aria-label="Back">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </IconButton>
        <h1 className="text-[17px] font-bold text-ink">Search</h1>
        <CartButton className="ml-auto" />
      </header>

      <div className="px-6">
        <SearchBar
          className="mt-5"
          value={q}
          onChange={setQ}
          onClear={() => setQ("")}
        />

        <h2 className="mt-8 text-[20px] font-bold text-ink-2">Recent Keywords</h2>
        <div className="no-scrollbar mt-4 flex gap-4 overflow-x-auto pb-2">
          {recent.map((k, i) => (
            <button
              key={i}
              onClick={() => setQ(k)}
              className="shrink-0 rounded-[15px] border border-line px-6 py-2.5 text-[14px] text-ink-2"
            >
              {k}
            </button>
          ))}
        </div>

        <h2 className="mt-8 text-[20px] font-bold text-ink-2">
          Suggested Restaurants
        </h2>
        <div className="mt-2">
          {suggested.map((s, i) => (
            <SuggestRow key={i} name={s.name} rating={s.rating} image={s.image} href="/restaurant/rose-garden" />
          ))}
        </div>

        <h2 className="mt-8 text-[20px] font-bold text-ink-2">Popular Fast Food</h2>
        <div className="mt-2 grid grid-cols-2 gap-5">
          {foods.slice(0, 2).map((f) => (
            <FoodCard key={f.id} food={f} />
          ))}
        </div>
      </div>
    </div>
  );
}
