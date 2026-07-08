"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/auth";
import { useHydrated } from "@/lib/use-hydrated";

export default function AddCardPage() {
  const router = useRouter();
  const currentUser = useAuth((s) => s.user);
  const hydrated = useHydrated();

  // Prefill with the signed-in user's name once the persisted store hydrates,
  // then track edits. Deriving (rather than syncing in an effect) keeps the SSR
  // markup stable and avoids a hydration mismatch.
  const [edited, setEdited] = useState<string | null>(null);
  const holder = edited ?? (hydrated ? currentUser?.name ?? "" : "");

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
            onChange={(e) => setEdited(e.target.value)}
            placeholder="Your name"
          />
          <Field
            label="Card Number"
            placeholder="2134 ____ ____ ____"
            className="text-[18px] tracking-wider"
          />
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
