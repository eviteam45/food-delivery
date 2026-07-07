"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/auth-top";
import { Button } from "@/components/ui/button";

export default function VerificationPage() {
  const router = useRouter();
  const [code, setCode] = useState(["2", "0", "1", "5"]);
  const [seconds, setSeconds] = useState(50);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const setDigit = (i: number, v: string) => {
    const d = v.replace(/\D/g, "").slice(-1);
    setCode((c) => c.map((x, idx) => (idx === i ? d : x)));
    if (d && i < 3) refs.current[i + 1]?.focus();
  };

  return (
    <AuthLayout
      title="Verification"
      subtitle={
        <>
          We have sent a code to your email
          <br />
          <span className="font-bold text-white">example@gmail.com</span>
        </>
      }
      back="/forgot-password"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="caps-label text-[14px] font-medium text-ink-2">Code</span>
        <span className="text-[14px] text-ink-2">
          <span className="font-bold underline">Resend</span>{" "}
          {seconds > 0 ? `in.${seconds}sec` : ""}
        </span>
      </div>

      <div className="mb-9 flex justify-between gap-4">
        {code.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            inputMode="numeric"
            value={d}
            onChange={(e) => setDigit(i, e.target.value)}
            className="h-[62px] w-[62px] rounded-[10px] bg-surface text-center text-[24px] font-bold text-ink focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        ))}
      </div>

      <Button onClick={() => router.push("/home")}>Verify</Button>
    </AuthLayout>
  );
}
