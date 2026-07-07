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
            { c: "left-6 top-20 rotate-12", s: "h-4 w-4 bg-white/80" },
            { c: "right-8 top-24 -rotate-12", s: "h-5 w-5 bg-white/70" },
            { c: "left-14 top-40 rotate-45", s: "h-3 w-3 bg-white/60" },
            { c: "right-16 top-48 rotate-6", s: "h-4 w-4 bg-white/80" },
            { c: "left-24 top-16 -rotate-45", s: "h-2.5 w-2.5 bg-white/60" },
            { c: "right-24 top-44 rotate-12", s: "h-3 w-3 bg-white/70" },
          ].map((t, i) => (
            <span
              key={i}
              className={`absolute ${t.s} ${t.c}`}
              style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
            />
          ))}
          <span className="absolute left-10 top-32 h-6 w-6 rounded-full border-2 border-white/50" />
          <span className="absolute right-12 top-36 h-3 w-3 rounded-full bg-white/60" />

          <h1 className="mt-6 whitespace-nowrap text-[40px] font-extrabold leading-none text-white drop-shadow">
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
