import { Star, Clock } from "lucide-react";
import { cn } from "@/lib/cn";
import { DeliveryTruck } from "@/components/icons";

export function RatingRow({
  rating = 4.7,
  delivery = "Free",
  time = "20 min",
  className,
  size = "md",
}: {
  rating?: number;
  delivery?: string;
  time?: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const icon = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";
  const text = size === "sm" ? "text-[13px]" : "text-[14px]";
  return (
    <div className={cn("flex items-center gap-6 text-ink", text, className)}>
      <span className="flex items-center gap-1.5 font-bold">
        <Star className={cn(icon, "fill-primary text-primary")} />
        {rating}
      </span>
      <span className="flex items-center gap-1.5 font-normal">
        <DeliveryTruck className={cn(icon, "text-primary")} />
        {delivery}
      </span>
      <span className="flex items-center gap-1.5 font-normal">
        <Clock className={cn(icon, "text-primary")} />
        {time}
      </span>
    </div>
  );
}
