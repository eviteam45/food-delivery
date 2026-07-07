import { MoreHorizontal, Star } from "lucide-react";
import { ScreenHeader } from "@/components/ui/screen-header";
import { Thumb } from "@/components/ui/thumb";
import { avatar } from "@/data/menu";
import { cn } from "@/lib/cn";

const reviews = [
  {
    date: "20/12/2020",
    title: "Great Food and Service",
    stars: 5,
    body: "This Food so tasty & delicious. Breakfast so fast Delivered in my place. Chef is very friendly. I'm really like chef for Home Food Order. Thanks.",
  },
  {
    date: "20/12/2020",
    title: "Awesome and Nice",
    stars: 4,
    body: "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
  },
  {
    date: "20/12/2020",
    title: "Awesome and Nice",
    stars: 4,
    body: "This Food so tasty & delicious.",
  },
  {
    date: "20/12/2020",
    title: "Awesome and Nice",
    stars: 4,
    body: "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <ScreenHeader title="Reviews" back="/orders" />

      <div className="mt-4 space-y-8 pl-6 pr-6">
        {reviews.map((r, i) => (
          <div key={i} className="flex gap-4">
            <Thumb src={avatar(i + 1)} alt={r.title} className="mt-4 h-[75px] w-[75px] shrink-0 rounded-full" />
            <div className="flex-1 rounded-[16px] bg-surface-2 p-5">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-muted-3">{r.date}</span>
                <MoreHorizontal className="h-5 w-5 text-muted" />
              </div>
              <h3 className="mt-2 text-[18px] font-bold text-ink">{r.title}</h3>
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className={cn(
                      "h-4 w-4",
                      n <= r.stars
                        ? "fill-primary text-primary"
                        : "fill-transparent text-primary",
                    )}
                  />
                ))}
              </div>
              <p className="mt-3 text-[15px] leading-6 text-muted-3">{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
