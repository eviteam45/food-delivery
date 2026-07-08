"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, ChevronDown, Plus } from "lucide-react";
import { ScreenHeader } from "@/components/ui/screen-header";
import { Button } from "@/components/ui/button";
import {
  MastercardMark,
  VisaMark,
  PaypalMark,
  CashMark,
} from "@/components/app/pay-brands";
import { useCart, cartTotal } from "@/store/cart";
import { RequireAuth } from "@/components/auth/require-auth";
import { cn } from "@/lib/cn";

const methods = [
  { id: "cash", label: "Cash", node: <CashMark /> },
  { id: "visa", label: "Visa", node: <VisaMark /> },
  { id: "mastercard", label: "Mastercard", node: <MastercardMark /> },
  { id: "paypal", label: "Paypal", node: <PaypalMark /> },
];

function PaymentInner() {
  const router = useRouter();
  const params = useSearchParams();
  const empty = params.get("empty") === "1";
  const [selected, setSelected] = useState("mastercard");
  const items = useCart((s) => s.items);
  const total = cartTotal(items) || 96;

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <ScreenHeader title="Payment" back="/cart" />

      <div className="flex-1 px-6">
        {/* method tiles */}
        <div className="no-scrollbar mt-8 flex gap-4 overflow-x-auto pb-3">
          {methods.map((m) => {
            const on = selected === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                className="flex shrink-0 flex-col items-center gap-3"
              >
                <span
                  className={cn(
                    "relative flex h-[90px] w-[100px] items-center justify-center rounded-[16px]",
                    on ? "border-2 border-primary bg-white" : "bg-surface",
                  )}
                >
                  {m.node}
                  {on && (
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                  )}
                </span>
                <span className="text-[16px] text-ink-2">{m.label}</span>
              </button>
            );
          })}
        </div>

        {/* saved card or empty state */}
        {empty ? (
          <div className="mt-6 rounded-[16px] bg-surface px-6 py-8 text-center">
            <div className="relative mx-auto h-[190px] w-[290px] overflow-hidden rounded-[18px] bg-gradient-to-br from-[#ff9247] to-[#ff6b1c]">
              {/* geometric accents */}
              <span
                className="absolute -top-8 right-10 h-[280px] w-14 rotate-[40deg] bg-[#ea3b2f]"
                aria-hidden
              />
              <span
                className="absolute bottom-3 right-16 h-11 w-11 bg-[#ffc42e]"
                style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
                aria-hidden
              />
              <span
                className="absolute -bottom-6 -right-6 h-20 w-20 rotate-45 bg-white/95"
                aria-hidden
              />

              {/* mastercard logo */}
              <div className="absolute left-6 top-7 flex">
                <span className="h-7 w-7 rounded-full bg-[#ff4d4d]" />
                <span className="-ml-3 h-7 w-7 rounded-full bg-white/85" />
              </div>
              {/* placeholder number + name */}
              <div className="absolute left-6 top-[96px] h-4 w-44 rounded bg-white/45" />
              <div className="absolute left-6 top-[124px] h-3 w-24 rounded bg-white/35" />
            </div>
            <h3 className="mt-6 text-[18px] font-bold text-ink">
              No master card added
            </h3>
            <p className="mt-2 text-[16px] leading-6 text-muted-4">
              You can add a mastercard and save it for later
            </p>
          </div>
        ) : (
          <div className="mt-6 flex items-center gap-4 rounded-[16px] bg-surface-2 px-6 py-6">
            <div className="flex-1">
              <p className="text-[16px] font-bold text-ink">Master Card</p>
              <div className="mt-3 flex items-center gap-3">
                <MastercardMark className="h-5" />
                <span className="whitespace-nowrap text-[18px] tracking-[0.25em] text-muted-3">
                  ************
                </span>
                <span className="ml-auto text-[16px] text-ink">436</span>
              </div>
            </div>
            <ChevronDown className="h-5 w-5 text-ink" />
          </div>
        )}

        <Link
          href="/payment/add-card"
          className="mt-6 flex h-[62px] items-center justify-center gap-3 rounded-[12px] border border-dashed border-line text-[16px] font-bold uppercase tracking-wide text-primary"
        >
          <Plus className="h-5 w-5" strokeWidth={3} /> Add New
        </Link>
      </div>

      {/* footer */}
      <div className="px-6 pb-8 pt-4">
        <div className="mb-4 flex items-baseline gap-3">
          <span className="caps-label text-[16px] text-muted">Total:</span>
          <span className="text-[32px] font-bold text-ink">${total}</span>
        </div>
        <Button onClick={() => router.push("/payment-success")}>
          Pay &amp; Confirm
        </Button>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <RequireAuth next="/payment">
      <Suspense>
        <PaymentInner />
      </Suspense>
    </RequireAuth>
  );
}
