import { ScreenHeader } from "@/components/ui/screen-header";
import { Thumb } from "@/components/ui/thumb";
import { RatingRow } from "@/components/ui/rating-row";
import { RestaurantMenu } from "@/components/app/restaurant-menu";
import { CartButton } from "@/components/app/cart-button";
import { getRestaurant, foods } from "@/data/menu";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const r = getRestaurant(id);

  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <ScreenHeader
        title="Restaurant View"
        back="/home"
        right={<CartButton />}
      />

      <div className="px-6">
        <Thumb src={r?.image} alt={r?.name} className="mt-5 h-[190px] w-full rounded-[26px]" />

        <h1 className="mt-6 text-[24px] font-bold text-ink">
          {r?.name ?? "Spicy Restaurant"}
        </h1>
        <p className="mt-3 text-[14px] leading-6 text-muted">
          Maecenas sed diam eget risus varius blandit sit amet non magna.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>
        <RatingRow className="mt-4" />

        <RestaurantMenu foods={foods} />
      </div>
    </div>
  );
}
