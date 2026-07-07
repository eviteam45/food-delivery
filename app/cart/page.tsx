"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { Button } from "@/components/ui/button";
import { Thumb } from "@/components/ui/thumb";
import { useCart, cartTotal } from "@/store/cart";
import { useAuth } from "@/store/auth";
import { getFood } from "@/data/menu";

export default function CartPage() {
  const router = useRouter();
  const { items, setQty, remove } = useCart();
  const user = useAuth((s) => s.user);
  const [edit, setEdit] = useState(false);
  const total = cartTotal(items);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-ink">
      <header className="flex items-center gap-4 px-6 pt-4">
        <button
          onClick={() => router.push("/home")}
          aria-label="Back"
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white/10 text-white"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </button>
        <h1 className="text-[17px] font-bold text-white">Cart</h1>
        {items.length > 0 && (
          <button
            onClick={() => setEdit((e) => !e)}
            className={`ml-auto text-[14px] font-bold uppercase tracking-wide underline ${
              edit ? "text-success" : "text-primary"
            }`}
          >
            {edit ? "Done" : "Edit Items"}
          </button>
        )}
      </header>

      {/* items */}
      <div className="flex-1 px-6 pt-8">
        {items.length === 0 ? (
          <div className="flex flex-col items-center pt-24 text-center">
            <p className="text-[18px] font-bold text-white">Your cart is empty</p>
            <p className="mt-2 text-[14px] text-white/50">
              Add some delicious food to get started.
            </p>
            <Link
              href="/home"
              className="mt-6 rounded-[12px] bg-primary px-8 py-3 text-[14px] font-bold uppercase tracking-wide text-white"
            >
              Browse food
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {items.map((it) => (
              <div key={it.id} className="flex gap-5">
                <Thumb
                  src={getFood(it.foodId)?.image}
                  alt={it.name}
                  tone="dark"
                  className="h-[130px] w-[130px] shrink-0 rounded-[20px]"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[20px] font-bold leading-tight text-white">
                      {it.name}
                    </h3>
                    {edit && (
                      <button
                        onClick={() => remove(it.id)}
                        aria-label="Remove"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-danger text-white"
                      >
                        <X className="h-4 w-4" strokeWidth={3} />
                      </button>
                    )}
                  </div>
                  <span className="mt-2 text-[20px] font-bold text-white">
                    ${it.price * it.qty}
                  </span>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-[16px] text-white/50">{it.size}&Prime;</span>
                    <QuantityStepper
                      variant="plain"
                      value={it.qty}
                      onChange={(q) => setQty(it.id, q)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* bottom sheet */}
      {items.length > 0 && (
        <div className="rounded-t-[24px] bg-white px-6 pb-8 pt-7">
          <div className="flex items-center justify-between">
            <span className="caps-label text-[14px] text-muted">
              Delivery Address
            </span>
            <Link
              href="/address"
              className="text-[14px] font-bold uppercase text-primary underline"
            >
              Edit
            </Link>
          </div>
          <div className="mt-3 flex h-[62px] items-center rounded-[12px] bg-surface px-5 text-[14px] text-muted-4">
            2118 Thornridge Cir. Syracuse
          </div>

          <div className="mt-7 flex items-center justify-between">
            <span className="flex items-baseline gap-3">
              <span className="caps-label text-[16px] text-muted">Total:</span>
              <span className="text-[32px] font-bold text-ink">${total}</span>
            </span>
            <Link
              href="/cart"
              className="flex items-center gap-1 text-[14px] text-primary"
            >
              Breakdown <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <Button
            className="mt-6"
            onClick={() =>
              router.push(user ? "/payment" : "/login?next=/payment")
            }
          >
            Place Order
          </Button>
        </div>
      )}
    </div>
  );
}
