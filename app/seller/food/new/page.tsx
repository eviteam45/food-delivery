"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronDown,
  UploadCloud,
  Check,
  Soup,
  Drumstick,
  Bean,
  Nut,
  Flame,
  Carrot,
  Leaf,
  Apple,
  Grape,
  Salad,
  Citrus,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const basic = [
  { icon: Soup, label: "Salt", on: true },
  { icon: Drumstick, label: "Chicken", on: false },
  { icon: Bean, label: "Onion", on: true },
  { icon: Nut, label: "Garlic", on: false },
  { icon: Flame, label: "Peppers", on: true },
  { icon: Carrot, label: "Ginger", on: false },
];
const fruit = [
  { icon: Leaf, label: "Avocado" },
  { icon: Apple, label: "Apple" },
  { icon: Grape, label: "Blueberry" },
  { icon: Salad, label: "Broccoli" },
  { icon: Citrus, label: "Orange" },
  { icon: Nut, label: "Walnut" },
];

function IngredientCircle({
  Icon,
  label,
  on,
}: {
  Icon: typeof Soup;
  label: string;
  on?: boolean;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <span
        className={cn(
          "flex h-[60px] w-[60px] items-center justify-center rounded-full",
          on ? "bg-peach" : "border border-line bg-white",
        )}
      >
        <Icon className={cn("h-6 w-6", on ? "text-primary" : "text-ink-2")} />
      </span>
      <span className="text-[13px] text-muted-3">{label}</span>
    </div>
  );
}

export default function AddNewItemsPage() {
  const router = useRouter();
  const [pickup, setPickup] = useState(true);
  const [delivery, setDelivery] = useState(false);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <header className="flex items-center gap-4 px-6 pt-4">
        <IconButton href="/seller/food" aria-label="Back">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </IconButton>
        <h1 className="text-[17px] font-bold text-ink">Add New Items</h1>
        <button className="ml-auto text-[15px] font-medium text-primary">RESET</button>
      </header>

      <form
        className="flex-1 px-6 pb-8"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/seller/food");
        }}
      >
        <p className="caps-label mt-7 text-[14px] text-ink-2">Item Name</p>
        <input
          placeholder="Mazalichiken Halim"
          className="mt-3 h-[62px] w-full rounded-[10px] border border-line px-5 text-[15px] text-ink placeholder:text-muted-3 focus:outline-none"
        />

        <p className="caps-label mt-7 text-[14px] text-ink-2">Upload Photo/Video</p>
        <div className="no-scrollbar mt-3 flex gap-4 overflow-x-auto">
          <div className="relative h-[130px] w-[130px] shrink-0 overflow-hidden rounded-[16px]">
            <Image src="/food/chicken3.jpg" alt="Item photo" fill sizes="130px" className="object-cover" />
          </div>
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex h-[130px] w-[130px] shrink-0 flex-col items-center justify-center gap-3 rounded-[16px] border border-dashed border-[#c9cee0] bg-[#fafbff]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9ebfb]">
                <UploadCloud className="h-5 w-5 text-[#5b5fef]" />
              </span>
              <span className="text-[14px] text-muted-3">Add</span>
            </div>
          ))}
        </div>

        <p className="caps-label mt-7 text-[14px] text-ink-2">Price</p>
        <div className="mt-3 flex items-center gap-5">
          <input
            placeholder="$50"
            className="h-[62px] w-[130px] shrink-0 rounded-[10px] border border-line px-5 text-[15px] text-ink placeholder:text-muted-3 focus:outline-none"
          />
          <Checkbox label="Pick up" checked={pickup} onChange={() => setPickup((v) => !v)} />
          <Checkbox label="Delivery" checked={delivery} onChange={() => setDelivery((v) => !v)} />
        </div>

        <p className="caps-label mt-7 text-[14px] text-ink-2">Ingredents</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[17px] text-ink-2">Basic</span>
          <button type="button" className="flex items-center gap-1 text-[14px] text-muted-4">
            See All <ChevronDown className="h-4 w-4" />
          </button>
        </div>
        <div className="no-scrollbar mt-4 flex gap-4 overflow-x-auto">
          {basic.map((b) => (
            <IngredientCircle key={b.label} Icon={b.icon} label={b.label} on={b.on} />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-[17px] text-ink-2">Fruit</span>
          <button type="button" className="flex items-center gap-1 text-[14px] text-muted-4">
            See All <ChevronDown className="h-4 w-4" />
          </button>
        </div>
        <div className="no-scrollbar mt-4 flex gap-4 overflow-x-auto">
          {fruit.map((f) => (
            <IngredientCircle key={f.label} Icon={f.icon} label={f.label} />
          ))}
        </div>

        <p className="caps-label mt-7 text-[14px] text-ink-2">Details</p>
        <textarea
          rows={4}
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipscing elit. Bibendum in vel, mattis et amet dui mauris turpis."
          className="mt-3 w-full resize-none rounded-[10px] border border-line px-5 py-4 text-[15px] text-muted-3 focus:outline-none"
        />

        <Button type="submit" className="mt-7">
          Save Changes
        </Button>
      </form>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button type="button" onClick={onChange} className="flex items-center gap-2">
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[6px] border",
          checked ? "border-primary text-primary" : "border-[#c9cee0] text-transparent",
        )}
      >
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
      <span className="whitespace-nowrap text-[16px] text-ink-2">{label}</span>
    </button>
  );
}
