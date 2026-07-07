import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Sunburst } from "@/components/brand/sunburst";

export function AuthTop({
  title,
  subtitle,
  back,
}: {
  title: string;
  subtitle?: React.ReactNode;
  back?: string;
}) {
  return (
    <div className="relative overflow-hidden px-6 pb-16 pt-14 text-center">
      {/* faint rays, top-left */}
      <Sunburst
        className="-left-24 -top-24 h-[260px] w-[260px]"
        from="#262b42"
        to="#262b42"
        opacity={0.9}
      />
      {/* dashed decorative curve, right */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-6 top-0 h-full w-40 opacity-70"
        viewBox="0 0 160 460"
        fill="none"
      >
        <path
          d="M150 -20C150 120 60 150 120 260C170 350 90 430 150 470"
          stroke="#7a4a2e"
          strokeWidth="2"
          strokeDasharray="6 10"
          strokeLinecap="round"
        />
      </svg>

      {back && (
        <Link
          href={back}
          aria-label="Back"
          className="absolute left-6 top-12 inline-flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white text-ink"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </Link>
      )}

      <h1 className="relative mt-8 text-[30px] font-extrabold text-white">
        {title}
      </h1>
      {subtitle && (
        <p className="relative mx-auto mt-2 max-w-[280px] text-[16px] leading-6 text-white/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function AuthLayout({
  children,
  ...top
}: React.ComponentProps<typeof AuthTop> & { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-ink">
      <AuthTop {...top} />
      <div className="flex-1 rounded-t-[24px] bg-white px-6 pb-10 pt-9">
        {children}
      </div>
    </div>
  );
}
