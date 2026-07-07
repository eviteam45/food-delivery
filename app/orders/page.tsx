"use client";

import { useState } from "react";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { ScreenHeader } from "@/components/ui/screen-header";
import { IconButton } from "@/components/ui/icon-button";
import { Thumb } from "@/components/ui/thumb";
import { cn } from "@/lib/cn";

type Order = {
  group: string;
  name: string;
  price: string;
  items: string;
  id: string;
  image: string;
};

const ongoing: Order[] = [
  { group: "Food", name: "Pizza Hut", price: "$35.25", items: "03 Items", id: "#162432", image: "/food/pizza.jpg" },
  { group: "Drink", name: "McDonald", price: "$40.15", items: "02 Items", id: "#242432", image: "/food/burger.jpg" },
  { group: "Drink", name: "Starbucks", price: "$10.20", items: "01 Items", id: "#240112", image: "/food/dessert2.jpg" },
];

const history: Order[] = [
  { group: "Food", name: "Pizza Hut", price: "$35.25", items: "03 Items", id: "#162432", image: "/food/biryani.jpg" },
  { group: "Drink", name: "McDonald", price: "$40.15", items: "02 Items", id: "#242432", image: "/food/sandwich.jpg" },
];

export default function OrdersPage() {
  const [tab, setTab] = useState<"ongoing" | "history">("ongoing");
  const data = tab === "ongoing" ? ongoing : history;

  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <ScreenHeader
        title="My Orders"
        back="/home"
        right={
          <IconButton aria-label="More">
            <MoreHorizontal className="h-6 w-6" />
          </IconButton>
        }
      />

      {/* tabs */}
      <div className="mt-4 flex border-b border-line px-6">
        {(["ongoing", "history"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "flex-1 pb-3 text-center text-[17px] font-bold capitalize",
              tab === t
                ? "border-b-2 border-primary text-primary"
                : "text-muted",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="px-6">
        {data.map((o, i) => (
          <div key={i}>
            <p className="mt-6 text-[16px] text-ink-2">{o.group}</p>
            <div className="mt-3 flex items-center gap-4 border-t border-line pt-4">
              <Thumb src={o.image} alt={o.name} className="h-[70px] w-[70px] rounded-[14px]" />
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-ink">{o.name}</h3>
                <p className="mt-1.5 text-[15px] text-ink-2">
                  <span className="font-bold">{o.price}</span>
                  <span className="mx-2 text-line">|</span>
                  <span className="text-muted-3">{o.items}</span>
                </p>
              </div>
              <span className="self-start text-[15px] text-ink-2 underline">
                {o.id}
              </span>
            </div>

            <div className="mt-4 flex gap-4">
              {tab === "ongoing" ? (
                <>
                  <Link
                    href="/tracking"
                    className="flex h-[45px] flex-1 items-center justify-center rounded-[8px] bg-primary text-[14px] font-bold text-white"
                  >
                    Track Order
                  </Link>
                  <button className="flex h-[45px] flex-1 items-center justify-center rounded-[8px] border border-primary text-[14px] font-bold text-primary">
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/reviews"
                    className="flex h-[45px] flex-1 items-center justify-center rounded-[8px] bg-primary text-[14px] font-bold text-white"
                  >
                    Rate
                  </Link>
                  <Link
                    href="/home"
                    className="flex h-[45px] flex-1 items-center justify-center rounded-[8px] border border-primary text-[14px] font-bold text-primary"
                  >
                    Re-Order
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
