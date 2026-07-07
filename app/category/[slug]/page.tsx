import Link from "next/link";
import { ChevronLeft, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { RestaurantCard, FoodCard } from "@/components/app/cards";
import { SectionHeader } from "@/components/ui/section-header";
import { categories, foods, restaurants } from "@/data/menu";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  const name = cat?.name ?? "All";
  const list =
    slug === "all" ? foods : foods.filter((f) => f.category === slug);
  const shown = list.length ? list : foods;

  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <header className="flex items-center gap-3 px-6 pt-4">
        <IconButton href="/home" aria-label="Back">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </IconButton>
        <button className="flex items-center gap-2 rounded-[30px] bg-white px-6 py-3 text-[14px] font-bold uppercase tracking-wide text-ink shadow-[0_10px_24px_rgba(24,28,46,0.08)]">
          {name}
          <ChevronDown className="h-4 w-4 text-primary" />
        </button>
        <Link
          href="/search"
          aria-label="Search"
          className="ml-auto flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-white"
        >
          <Search className="h-5 w-5" />
        </Link>
        <Link
          href="/filter"
          aria-label="Filter"
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-surface text-ink"
        >
          <SlidersHorizontal className="h-5 w-5 text-primary" />
        </Link>
      </header>

      <div className="px-6">
        <h1 className="mt-6 text-[20px] font-bold text-ink-2">Popular {name}s</h1>
        <div className="mt-4 grid grid-cols-2 gap-5">
          {shown.map((f) => (
            <FoodCard key={f.id} food={f} />
          ))}
        </div>

        <SectionHeader title="Open Resturants" className="mt-10" />
        <div className="mt-5 space-y-7">
          {restaurants.slice(0, 2).map((r) => (
            <RestaurantCard key={r.id} r={r} />
          ))}
        </div>
      </div>
    </div>
  );
}
