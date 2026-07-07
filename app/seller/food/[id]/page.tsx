import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, MapPin, Star } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { BottomNav } from "@/components/app/bottom-nav";
import {
  Soup,
  Drumstick,
  Bean,
  Nut,
  Flame,
  Carrot,
  Salad,
  Citrus,
} from "lucide-react";

const ingredients = [
  { icon: Soup, label: "Salt" },
  { icon: Drumstick, label: "Chicken" },
  { icon: Bean, label: "Onion", sub: "(Alergy)" },
  { icon: Nut, label: "Garlic" },
  { icon: Flame, label: "Pappers", sub: "(Alergy)" },
  { icon: Carrot, label: "Ginger" },
  { icon: Salad, label: "Broccoli" },
  { icon: Citrus, label: "Orange" },
  { icon: Nut, label: "Walnut" },
];

export default async function ChefFoodDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params;
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <header className="flex items-center gap-4 px-6 pt-4">
        <IconButton href="/seller/food" aria-label="Back">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </IconButton>
        <h1 className="text-[17px] font-bold text-ink">Food Details</h1>
        <Link href="/seller/food/new" className="ml-auto text-[15px] font-medium text-primary">
          EDIT
        </Link>
      </header>

      <div className="flex-1 px-6 pb-4">
        {/* image with chips */}
        <div className="relative mt-4 flex h-[240px] items-end justify-between overflow-hidden rounded-[24px] p-4">
          <Image src="/food/biryani.jpg" alt="Chicken Thai Biriyani" fill sizes="440px" className="object-cover" />
          <span className="absolute inset-0 bg-black/10" />
          <span className="relative z-10 rounded-full bg-white px-5 py-2 text-[15px] text-ink-2">Breakfast</span>
          <div className="relative z-10 mb-3 flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={i === 2 ? "h-2 w-5 rounded-full bg-white" : "h-2 w-2 rounded-full bg-white/50"}
              />
            ))}
          </div>
          <span className="relative z-10 rounded-full bg-white px-5 py-2 text-[15px] text-ink-2">Delivery</span>
        </div>

        <div className="mt-5 flex items-start justify-between">
          <h1 className="text-[24px] font-bold text-ink">Chicken Thai Biriyani</h1>
          <span className="text-[24px] font-bold text-ink">$60</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[15px] text-muted">
            <MapPin className="h-4 w-4" /> Kentucky 39495
          </span>
          <span className="flex items-center gap-1.5 text-[15px] font-bold text-ink">
            <Star className="h-4 w-4 fill-primary text-primary" /> 4.9
            <span className="ml-1 font-normal text-muted">(10 Reviews)</span>
          </span>
        </div>

        <hr className="my-6 border-line" />

        <p className="caps-label text-[14px] text-ink-2">Ingredents</p>
        <div className="mt-4 grid grid-cols-5 gap-y-6">
          {ingredients.map((ing, i) => {
            const Icon = ing.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <span className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-peach">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <span className="text-[13px] text-muted-3">{ing.label}</span>
                {ing.sub && <span className="-mt-1 text-[11px] text-muted">{ing.sub}</span>}
              </div>
            );
          })}
        </div>

        <hr className="my-6 border-line" />

        <h2 className="text-[18px] font-bold text-ink">Description</h2>
        <p className="mt-3 text-[15px] leading-6 text-muted">
          Lorem ipsum dolor sit amet, consetdur Maton adipiscing elit. Bibendum in
          vel, mattis et amet dui mauris turpis.
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
