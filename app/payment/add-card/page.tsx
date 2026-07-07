"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/auth";

export default function AddCardPage() {
  const router = useRouter();
  const currentUser = useAuth((s) => s.user);
  const [holder, setHolder] = useState("");

  // Prefill with the signed-in user's name after mount (keeps SSR markup stable).
  useEffect(() => {
    if (currentUser?.name) setHolder(currentUser.name);
  }, [currentUser]);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <header className="flex items-center gap-4 px-6 pt-4">
        <button
          onClick={() => router.back()}
          aria-label="Close"
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-surface text-ink"
        >
          <X className="h-5 w-5" strokeWidth={2.5} />
        </button>
        <h1 className="text-[17px] font-bold text-ink">Add Card</h1>
      </header>

      <form
        className="flex flex-1 flex-col px-6 pt-8"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/payment-success");
        }}
      >
        <div className="space-y-6">
          <Field
            label="Card Holder Name"
            value={holder}
            onChange={(e) => setHolder(e.target.value)}
            placeholder="Your name"
          />
          <Field label="Card Number" placeholder="2134 ____ ____ ____" />
          <div className="flex gap-4">
            <Field label="Expire Date" placeholder="mm/yyyy" className="w-full" />
            <Field label="CVC" placeholder="***" className="w-full" />
          </div>
        </div>

        <Button type="submit" className="mt-auto mb-8">
          Add &amp; Make Payment
        </Button>
      </form>
    </div>
  );
}
