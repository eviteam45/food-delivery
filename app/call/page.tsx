"use client";

import { useRouter } from "next/navigation";
import { MicOff, Volume2, Phone } from "lucide-react";
import { Thumb } from "@/components/ui/thumb";
import { avatar } from "@/data/menu";

export default function CallPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#4b5a6e]">
      <div className="flex-1" />
      <div className="rounded-t-[24px] bg-white px-6 pb-12 pt-12 text-center">
        <Thumb src={avatar(3)} alt="Robert Fox" className="mx-auto h-[160px] w-[160px] rounded-full" />
        <h1 className="mt-6 text-[24px] font-bold text-ink">Robert Fox</h1>
        <p className="mt-1 text-[18px] text-muted">Connecting.......</p>

        <div className="mt-12 flex items-center justify-between px-2">
          <button
            aria-label="Mute"
            className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-surface text-ink"
          >
            <MicOff className="h-6 w-6" />
          </button>

          <button
            onClick={() => router.back()}
            aria-label="End call"
            className="relative flex h-[70px] w-[70px] items-center justify-center rounded-full bg-danger text-white"
          >
            <span className="absolute inset-0 -m-3 rounded-full bg-danger/15" />
            <span className="absolute inset-0 -m-6 rounded-full bg-danger/10" />
            <Phone className="relative h-7 w-7 rotate-[135deg] fill-white" />
          </button>

          <button
            aria-label="Speaker"
            className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-surface text-ink"
          >
            <Volume2 className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
