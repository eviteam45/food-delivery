"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Thumb } from "@/components/ui/thumb";
import { PageIndicator } from "@/components/ui/page-indicator";

const slides = [
  {
    title: "All your favorites",
    body: "Get all your loved foods in one once place, you just place the orer we do the rest",
  },
  {
    title: "Order from choosen chef",
    body: "Get all your loved foods in one once place, you just place the orer we do the rest",
  },
  {
    title: "Free delivery offers",
    body: "Get all your loved foods in one once place, you just place the orer we do the rest",
  },
  {
    title: "Best deals & offers",
    body: "Get all your loved foods in one once place, you just place the orer we do the rest",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [i, setI] = useState(0);
  const last = i === slides.length - 1;

  const next = () => (last ? router.push("/login") : setI((v) => v + 1));

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-between bg-white px-6 pb-10 pt-16">
      <Thumb className="mt-6 h-[300px] w-[240px] rounded-[24px]" />

      <div className="flex flex-col items-center text-center">
        <h1 className="text-[26px] font-extrabold text-ink">{slides[i].title}</h1>
        <p className="mt-4 max-w-[300px] text-[16px] leading-6 text-muted-4">
          {slides[i].body}
        </p>
        <PageIndicator count={slides.length} active={i} className="mt-8" />
      </div>

      <div className="w-full">
        <Button onClick={next}>{last ? "Get Started" : "Next"}</Button>
        <button
          onClick={() => router.push("/login")}
          className="mt-5 w-full text-center text-[16px] font-medium text-muted-4"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
