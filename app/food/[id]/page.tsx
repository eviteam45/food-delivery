import { notFound } from "next/navigation";
import { FoodDetail } from "@/components/app/food-detail";
import { getFood } from "@/data/menu";

export default async function FoodPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const food = getFood(id);
  if (!food) notFound();
  return <FoodDetail food={food} />;
}
