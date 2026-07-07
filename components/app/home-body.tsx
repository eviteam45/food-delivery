import type { ReactNode } from "react";
import { HomeHeader } from "@/components/app/home-header";
import { Greeting } from "@/components/app/greeting";
import { HomeSearchBar } from "@/components/app/home-search-bar";
import { SectionHeader } from "@/components/ui/section-header";
import { CategoryPillRail } from "@/components/app/category-pill-rail";
import { CategoryCardRail } from "@/components/app/category-card-rail";
import { RestaurantList } from "@/components/app/restaurant-list";
import { categories, restaurants } from "@/data/menu";

export type HomeVariant = "pills" | "cards" | "cards-plain";

/**
 * Category rail per home variant. Adding a new home layout means adding an
 * entry here — no edits to HomeBody itself (open/closed).
 */
const categoryRailByVariant: Record<HomeVariant, ReactNode> = {
  pills: <CategoryPillRail categories={categories} />,
  cards: <CategoryCardRail categories={categories} showPrice />,
  "cards-plain": <CategoryCardRail categories={categories} />,
};

export function HomeBody({ variant = "pills" }: { variant?: HomeVariant }) {
  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <HomeHeader />

      <div className="px-6">
        <Greeting className="mt-5" />
        <HomeSearchBar className="mt-4" />
      </div>

      <section className="mt-7">
        <SectionHeader
          title="All Categories"
          href="/category/all"
          className="px-6"
        />
        {categoryRailByVariant[variant]}
      </section>

      <section className="mt-7">
        <SectionHeader
          title="Open Restaurants"
          href="/category/all"
          className="px-6"
        />
        <RestaurantList restaurants={restaurants} className="mt-5" />
      </section>
    </div>
  );
}
