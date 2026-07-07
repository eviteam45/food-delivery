"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Thumb } from "@/components/ui/thumb";
import { useCart } from "@/store/cart";
import { RequireAuth } from "@/components/auth/require-auth";

export default function PaymentSuccessPage() {
  return (
    <RequireAuth next="/payment-success">
      <PaymentSuccessInner />
    </RequireAuth>
  );
}

function PaymentSuccessInner() {
  const router = useRouter();
  const clear = useCart((s) => s.clear);

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-white px-8 text-center">
      <Thumb className="h-[240px] w-[300px] rounded-[24px]" />
      <h1 className="mt-10 text-[30px] font-extrabold text-ink">
        Congratulations!
      </h1>
      <p className="mt-4 max-w-[300px] text-[16px] leading-6 text-muted">
        You successfully maked a payment, enjoy our service!
      </p>

      <div className="absolute inset-x-0 bottom-8 px-6">
        <Button onClick={() => router.push("/tracking")}>Track Order</Button>
      </div>
    </div>
  );
}
