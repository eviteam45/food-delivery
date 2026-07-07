"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sunburst } from "@/components/brand/sunburst";
import { Logo } from "@/components/brand/logo";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.push("/onboarding"), 2000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <button
      onClick={() => router.push("/onboarding")}
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-white"
      aria-label="Continue"
    >
      {/* gray rays top-left */}
      <Sunburst
        className="-left-24 -top-24 h-[320px] w-[320px]"
        from="#e6e9ef"
        to="#e6e9ef"
      />
      {/* orange rays bottom-right */}
      <Sunburst
        className="-bottom-32 -right-28 h-[420px] w-[420px]"
        from="#ff7622"
        to="#ffd27a"
      />
      <Logo size={56} className="relative" />
    </button>
  );
}
