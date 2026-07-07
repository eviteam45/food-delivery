"use client";

import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { Button } from "@/components/ui/button";

/** Sticky footer with price, quantity stepper and the add-to-cart action. */
export function PurchaseBar({
  price,
  qty,
  onQtyChange,
  onAdd,
}: {
  price: number;
  qty: number;
  onQtyChange: (qty: number) => void;
  onAdd: () => void;
}) {
  return (
    <div className="sticky bottom-0 rounded-t-[24px] bg-surface px-6 pb-8 pt-6">
      <div className="flex items-center justify-between">
        <span className="text-[32px] font-bold text-ink">${price}</span>
        <QuantityStepper value={qty} onChange={onQtyChange} />
      </div>
      <Button className="mt-6" onClick={onAdd}>
        Add to Cart
      </Button>
    </div>
  );
}
