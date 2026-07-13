"use client";

import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Thumb } from "@/components/ui/thumb";

export default function LocationPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-14 bg-white px-6 py-16">
      <Thumb className="h-[260px] w-[214px] rounded-[75px]" />

      <div className="w-full">
        <Button onClick={() => router.push("/home")} className="justify-between">
          <span className="mx-auto pl-8">Access Location</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
            <MapPin className="h-4 w-4" />
          </span>
        </Button>
        <p className="caps-label mt-8 text-center text-[16px] leading-6 text-muted-4">
          DFOOD WILL ACCESS YOUR LOCATION
          <br /> ONLY WHILE USING THE APP
        </p>
      </div>
    </div>
  );
}
