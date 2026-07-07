import Link from "next/link";
import { Thumb } from "@/components/ui/thumb";

const orders = [
  { tag: "#Breakfast", name: "Chicken Thai Biriyani", id: "32053", price: 60, image: "/food/biryani.jpg" },
  { tag: "#Breakfast", name: "Chicken Bhuna", id: "15253", price: 30, image: "/food/curry.jpg" },
  { tag: "#Breakfast", name: "Vegetarian Poutine", id: "21200", price: 35, image: "/food/poutine.jpg" },
  { tag: "#Breakfast", name: "Turkey Bacon Strips", id: "53241", price: 45, image: "/food/bacon.jpg" },
  { tag: "#Breakfast", name: "Veggie Burrito.", id: "58464", price: 40, image: "/food/noodles.jpg" },
];

export default function RunningOrdersPage() {
  return (
    <div className="min-h-[100dvh] bg-[#5b6472]">
      {/* peek of dimmed dashboard */}
      <div className="h-[80px]" />

      <div className="rounded-t-[24px] bg-white px-6 pb-10 pt-3">
        <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-[#d9dde5]" />
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-[22px] font-bold text-ink">20 Running Orders</h1>
          <Link href="/seller" className="text-[14px] font-bold text-primary underline">
            Close
          </Link>
        </div>

        <div className="divide-y divide-line">
          {orders.map((o, i) => (
            <div key={i} className="flex gap-4 py-6">
              <Thumb src={o.image} alt={o.name} className="h-[120px] w-[120px] shrink-0 rounded-[18px]" />
              <div className="flex flex-1 flex-col">
                <span className="text-[15px] font-medium text-primary-soft">{o.tag}</span>
                <h3 className="mt-1 text-[18px] font-bold text-ink">{o.name}</h3>
                <p className="mt-1 text-[15px] text-muted">ID: {o.id}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-[20px] font-bold text-ink">${o.price}</span>
                  <button className="ml-2 rounded-[8px] bg-primary px-6 py-2.5 text-[14px] font-medium text-white">
                    Done
                  </button>
                  <button className="rounded-[8px] border border-danger px-6 py-2.5 text-[14px] font-medium text-danger">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
