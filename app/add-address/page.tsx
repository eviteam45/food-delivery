"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, MapPin } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function AddAddressPage() {
  const router = useRouter();
  const [label, setLabel] = useState("Home");

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      {/* map */}
      <div className="relative h-[300px] bg-[#cdd4de]">
        <button
          onClick={() => router.back()}
          aria-label="Back"
          className="absolute left-6 top-4 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-white"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </button>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
          <span className="rounded-[8px] bg-ink px-4 py-2 text-[14px] text-white">
            Move to edit location
          </span>
          <span
            className="-mt-px h-2 w-3 bg-ink"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />
          <span className="mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-primary/15" />
        </div>
      </div>

      {/* form */}
      <form
        className="flex flex-1 flex-col px-6 pb-8 pt-7"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/address");
        }}
      >
        <div className="space-y-6">
          <label className="block">
            <span className="caps-label mb-3 block text-[13px] font-medium text-ink-2">
              Address
            </span>
            <div className="flex h-[62px] items-center gap-3 rounded-[10px] bg-surface px-5">
              <MapPin className="h-5 w-5 text-ink" />
              <span className="text-[14px] text-muted-3">
                3235 Royal Ln. Mesa, New Jersy 34567
              </span>
            </div>
          </label>

          <div className="flex gap-4">
            <Field label="Street" placeholder="Hason Nagar" className="w-full" />
            <Field label="Post Code" placeholder="34567" className="w-full" />
          </div>

          <Field label="Appartment" placeholder="345" />

          <div>
            <span className="caps-label mb-3 block text-[13px] font-medium text-ink-2">
              Label as
            </span>
            <div className="flex gap-4">
              {["Home", "Work", "Other"].map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLabel(l)}
                  className={cn(
                    "rounded-[15px] px-8 py-3 text-[15px] font-medium",
                    label === l ? "bg-primary text-white" : "bg-surface text-ink-2",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button type="submit" className="mt-auto pt-0">
          Save Location
        </Button>
      </form>
    </div>
  );
}
