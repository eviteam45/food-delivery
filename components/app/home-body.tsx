"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HomeHeader } from "@/components/app/home-header";
import { SearchBar } from "@/components/app/search-bar";
import { SectionHeader } from "@/components/ui/section-header";
import {
  RestaurantCard,
  CategoryPill,
  CategoryCard,
} from "@/components/app/cards";
import { categories, restaurants } from "@/data/menu";
import { useAuth } from "@/store/auth";
import { useHydrated } from "@/lib/use-hydrated";

type Variant = "pills" | "cards" | "cards-plain";

export function HomeBody({ variant = "pills" }: { variant?: Variant }) {
  const router = useRouter();
  const [active, setActive] = useState("all");
  const currentUser = useAuth((s) => s.user);
  const hydrated = useHydrated();
  const firstName = (hydrated ? currentUser?.name : "")?.split(" ")[0] || "there";

  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <HomeHeader />

      <div className="px-6">
        <p className="mt-5 text-[16px] text-ink-2">
          Hey {firstName}, <span className="font-bold">Good Afternoon!</span>
        </p>
        <SearchBar
          className="mt-4"
          readOnly
          onClick={() => router.push("/search")}
        />
      </div>

      <section className="mt-7">
        <SectionHeader
          title="All Categories"
          href="/category/all"
          className="px-6"
        />

        {variant === "pills" ? (
          <div className="no-scrollbar mt-5 flex gap-4 overflow-x-auto px-6 pb-3">
            {categories.map((c) => (
              <CategoryPill
                key={c.slug}
                label={c.name}
                image={c.image}
                active={active === c.slug}
                onClick={() => setActive(c.slug)}
              />
            ))}
          </div>
        ) : (
          <div className="no-scrollbar mt-5 flex gap-4 overflow-x-auto px-6 pb-3">
            {categories
              .filter((c) => c.slug !== "all")
              .map((c) => (
                <CategoryCard
                  key={c.slug}
                  name={c.name}
                  image={c.image}
                  price={variant === "cards" ? c.startingPrice : undefined}
                  href={`/category/${c.slug}`}
                />
              ))}
          </div>
        )}
      </section>

      <section className="mt-7">
        <SectionHeader
          title="Open Restaurants"
          href="/category/all"
          className="px-6"
        />
        <div className="mt-5 space-y-7 px-6">
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} r={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
