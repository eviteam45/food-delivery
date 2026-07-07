import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";
import { BottomNav } from "@/components/app/bottom-nav";
import { Thumb } from "@/components/ui/thumb";
import { avatar } from "@/data/menu";

function MenuGlyph() {
  return (
    <svg viewBox="0 0 20 14" className="h-4 w-5" fill="none">
      <path d="M1 1h18M5 7h14M9 13h10" stroke="#181C2E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function SellerDashboard() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#f3f4f8]">
      {/* header */}
      <header className="flex items-center justify-between px-6 pt-4">
        <Link
          href="/seller/menu"
          aria-label="Menu"
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white"
        >
          <MenuGlyph />
        </Link>
        <div className="flex flex-col items-start">
          <span className="caps-label text-[12px] font-bold text-primary">Location</span>
          <button className="flex items-center gap-1 text-[16px] text-ink-2">
            Halal Lab office <ChevronDown className="h-4 w-4 text-ink" />
          </button>
        </div>
        <Thumb src={avatar(5)} alt="Profile" className="h-[45px] w-[45px] rounded-full" />
      </header>

      <div className="flex-1 px-6 pb-6">
        {/* stat cards */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[
            { n: "20", l: "Running Orders", href: "/seller/orders" },
            { n: "05", l: "Order Request", href: "/seller/orders" },
          ].map((s) => (
            <Link
              key={s.l}
              href={s.href}
              className="rounded-[16px] bg-white px-5 py-6 shadow-[0_16px_34px_rgba(24,28,46,0.05)]"
            >
              <p className="text-[42px] font-extrabold leading-none text-ink">{s.n}</p>
              <p className="caps-label mt-3 whitespace-nowrap text-[13px] font-bold text-muted">{s.l}</p>
            </Link>
          ))}
        </div>

        {/* revenue */}
        <div className="mt-5 rounded-[16px] bg-white p-5 shadow-[0_16px_34px_rgba(24,28,46,0.05)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[16px] text-ink-2">Total Revenue</p>
              <p className="text-[26px] font-bold text-ink">$2,241</p>
            </div>
            <button className="flex items-center gap-2 rounded-[8px] border border-line px-3 py-2 text-[14px] text-ink-2">
              Daily <ChevronDown className="h-4 w-4" />
            </button>
            <Link href="/seller/orders" className="text-[14px] font-bold text-primary underline">
              See Details
            </Link>
          </div>

          <div className="relative mt-4">
            <svg viewBox="0 0 320 130" className="w-full" fill="none">
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#FF7622" stopOpacity="0.25" />
                  <stop offset="1" stopColor="#FF7622" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M4 95 C30 95 40 70 70 78 C95 84 92 40 118 40 C145 40 150 78 175 74 C205 69 205 48 235 52 C262 55 262 78 290 60 C305 50 312 40 316 30"
                stroke="#FF7622"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M4 95 C30 95 40 70 70 78 C95 84 92 40 118 40 C145 40 150 78 175 74 C205 69 205 48 235 52 C262 55 262 78 290 60 C305 50 312 40 316 30 L316 130 L4 130 Z"
                fill="url(#rev)"
              />
              <line x1="118" y1="40" x2="118" y2="95" stroke="#FF7622" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="118" cy="40" r="6" fill="#fff" stroke="#FF7622" strokeWidth="3" />
            </svg>
            <span className="absolute left-[26%] top-0 -translate-x-1/2 rounded-[8px] bg-ink px-3 py-1.5 text-[14px] font-bold text-white">
              $500
            </span>
          </div>

          <div className="mt-2 flex justify-between text-[12px] text-muted">
            {["10AM", "11AM", "12PM", "01PM", "02PM", "03PM", "04PM"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* reviews */}
        <div className="mt-5 rounded-[16px] bg-white p-5 shadow-[0_16px_34px_rgba(24,28,46,0.05)]">
          <div className="flex items-center justify-between">
            <p className="text-[18px] text-ink-2">Reviews</p>
            <Link href="/reviews" className="text-[14px] font-bold text-primary underline">
              See All Reviews
            </Link>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Star className="h-7 w-7 fill-primary text-primary" />
            <span className="text-[26px] font-bold text-primary">4.9</span>
            <span className="text-[16px] text-ink-2">Total 20 Reviews</span>
          </div>
        </div>

        {/* popular items */}
        <div className="mt-5 rounded-[16px] bg-white p-5 shadow-[0_16px_34px_rgba(24,28,46,0.05)]">
          <div className="flex items-center justify-between">
            <p className="text-[18px] font-bold text-ink-2">Populer Items This Weeks</p>
            <Link href="/seller/food" className="text-[14px] font-bold text-primary underline">
              See All
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Thumb src="/food/biryani.jpg" alt="Popular item" className="h-[150px] w-full rounded-[16px]" />
            <Thumb src="/food/curry.jpg" alt="Popular item" className="h-[150px] w-full rounded-[16px]" />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
