"use client";

import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const sparkles = [
  "left-10 top-20 h-5 w-5 bg-peach-2",
  "right-14 top-24 h-4 w-4 bg-primary",
  "left-24 top-36 h-4 w-4 bg-primary",
  "right-24 top-40 h-3.5 w-3.5 bg-primary",
  "right-10 top-52 h-6 w-6 bg-peach-2",
  "left-8 top-48 h-3 w-3 bg-primary",
];

const dots = [
  "left-16 top-64 h-2.5 w-2.5 bg-peach-2",
  "right-32 top-32 h-2 w-2 bg-peach-2",
];

export default function WithdrawSuccessPage() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center bg-white px-6 text-center">
      <div className="relative flex h-1/2 w-full items-center justify-center">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className={`absolute ${s}`}
            style={{ clipPath: "polygon(50% 0,61% 39%,100% 50%,61% 61%,50% 100%,39% 61%,0 50%,39% 39%)" }}
          />
        ))}
        {dots.map((d, i) => (
          <span key={`dot-${i}`} className={`absolute rounded-full ${d}`} />
        ))}
        <div className="flex h-[130px] w-[130px] items-center justify-center rounded-full bg-primary">
          <Check className="h-16 w-16 text-white" strokeWidth={3} />
        </div>
      </div>

      <h1 className="mt-2 text-[26px] font-bold text-ink">Withdraw Successful</h1>

      <div className="absolute inset-x-0 bottom-8 px-6">
        <Button onClick={() => router.push("/seller")}>OK</Button>
      </div>
    </div>
  );
}
