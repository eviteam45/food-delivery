"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { HomeBody } from "@/components/app/home-body";

export default function OfferPage() {
  const router = useRouter();
  return (
    <div className="relative min-h-[100dvh]">
      <div className="pointer-events-none select-none">
        <HomeBody />
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-ink/40 px-6">
        <div className="relative w-full overflow-hidden rounded-[24px] bg-gradient-to-b from-[#f7b733] to-[#ff7622] px-8 py-12 text-center shadow-2xl">
          <button
            onClick={() => router.push("/home")}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-primary"
          >
            <X className="h-5 w-5" strokeWidth={3} />
          </button>

          {/* confetti */}
          {[
            "left-8 top-24 rotate-12",
            "right-10 top-28 -rotate-12",
            "left-16 top-44 rotate-45",
            "right-20 top-52 rotate-6",
          ].map((c, i) => (
            <span
              key={i}
              className={`absolute h-3 w-3 border-2 border-white/40 ${c}`}
              style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
            />
          ))}

          <h1 className="mt-6 text-[46px] font-extrabold leading-none text-white drop-shadow">
            Hurry Offers!
          </h1>
          <p className="mt-8 text-[34px] font-extrabold tracking-wide text-white">
            #1243CD2
          </p>
          <p className="mt-6 text-[18px] font-bold text-white">
            Use the cupon get 25% discount
          </p>

          <button
            onClick={() => router.push("/home")}
            className="mt-8 w-full rounded-[12px] border-2 border-white py-4 text-[16px] font-bold uppercase tracking-wide text-white"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
