"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-6 py-3 text-[14px] transition",
        active
          ? "bg-primary font-bold text-white"
          : "border border-line text-ink-2",
      )}
    >
      {children}
    </button>
  );
}

export default function FilterPage() {
  const router = useRouter();
  const [offers, setOffers] = useState<string[]>([]);
  const [time, setTime] = useState("10-15 min");
  const [price, setPrice] = useState(1);
  const [rating, setRating] = useState(4);

  const toggle = (v: string) =>
    setOffers((o) => (o.includes(v) ? o.filter((x) => x !== v) : [...o, v]));

  return (
    <div className="relative min-h-[100dvh] bg-[#8b96a6]">
      <div className="absolute inset-0 bg-ink/30" />
      <div className="absolute inset-x-0 bottom-0 rounded-t-[24px] bg-white px-6 pb-8 pt-7">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-bold text-ink">Filter your search</h1>
          <button
            onClick={() => router.back()}
            aria-label="Close"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="caps-label mt-7 text-[14px] text-ink-2">Offers</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {["Delivery", "Pick Up", "Offer", "Online payment available"].map(
            (o) => (
              <Chip key={o} active={offers.includes(o)} onClick={() => toggle(o)}>
                {o}
              </Chip>
            ),
          )}
        </div>

        <p className="caps-label mt-7 text-[14px] text-ink-2">Deliver time</p>
        <div className="mt-4 flex gap-3">
          {["10-15 min", "20 min", "30 min"].map((t) => (
            <Chip key={t} active={time === t} onClick={() => setTime(t)}>
              {t}
            </Chip>
          ))}
        </div>

        <p className="caps-label mt-7 text-[14px] text-ink-2">Pricing</p>
        <div className="mt-4 flex gap-4">
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              onClick={() => setPrice(p)}
              className={cn(
                "flex h-[60px] w-[60px] items-center justify-center rounded-full text-[16px] font-bold",
                price === p
                  ? "bg-primary text-white"
                  : "border border-line text-ink-2",
              )}
            >
              {"$".repeat(p)}
            </button>
          ))}
        </div>

        <p className="caps-label mt-7 text-[14px] text-ink-2">Rating</p>
        <div className="mt-4 flex gap-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setRating(n)}
              className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-line"
            >
              <Star
                className={cn(
                  "h-6 w-6",
                  n <= rating
                    ? "fill-primary text-primary"
                    : "fill-[#d9dde5] text-[#d9dde5]",
                )}
              />
            </button>
          ))}
        </div>

        <Button className="mt-9" onClick={() => router.back()}>
          Filter
        </Button>
      </div>
    </div>
  );
}
