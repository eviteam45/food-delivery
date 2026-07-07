"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, MoreHorizontal, Star } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { BottomNav } from "@/components/app/bottom-nav";
import { Thumb } from "@/components/ui/thumb";
import { cn } from "@/lib/cn";

const items = [
  { id: "chicken-thai-biriyani", name: "Chicken Thai Biriyani", tag: "Breakfast", price: 60, image: "/food/biryani.jpg" },
  { id: "chicken-bhuna", name: "Chicken Bhuna", tag: "Breakfast", price: 30, image: "/food/curry.jpg" },
  { id: "mazalichiken-halim", name: "Mazalichiken Halim", tag: "Breakfast", price: 25, image: "/food/chicken3.jpg" },
];

const tabs = ["All", "Breakfast", "Lunch", "Dinner"];

export default function MyFoodPage() {
  const [tab, setTab] = useState("All");

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <header className="flex items-center gap-4 px-6 pt-4">
        <IconButton href="/seller" aria-label="Back">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </IconButton>
        <h1 className="text-[17px] font-bold text-ink">My Food List</h1>
      </header>

      <div className="no-scrollbar mt-4 flex gap-8 overflow-x-auto border-b border-line px-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "shrink-0 pb-3 text-[17px] font-medium",
              tab === t
                ? "border-b-2 border-primary font-bold text-primary"
                : "text-ink-2",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 px-6">
        <p className="mt-5 text-[15px] text-muted">Total 03 items</p>
        <div className="divide-y divide-line">
          {items.map((it) => (
            <Link key={it.id} href={`/seller/food/${it.id}`} className="flex gap-4 py-5">
              <Thumb src={it.image} alt={it.name} className="h-[110px] w-[110px] shrink-0 rounded-[18px]" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-[18px] font-bold text-ink">{it.name}</h3>
                  <MoreHorizontal className="h-5 w-5 text-ink" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="rounded-full bg-peach px-4 py-1.5 text-[14px] text-primary">
                    {it.tag}
                  </span>
                  <span className="text-[20px] font-bold text-ink">${it.price}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[15px] font-bold text-ink">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    4.9
                    <span className="ml-1 font-normal text-muted">(10 Review)</span>
                  </span>
                  <span className="text-[15px] text-muted">Pick UP</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
