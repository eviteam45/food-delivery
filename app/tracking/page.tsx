import Link from "next/link";
import { ChevronLeft, MapPin, Phone, MessageSquare } from "lucide-react";
import { Thumb } from "@/components/ui/thumb";
import { OrderStatusTimeline } from "@/components/app/order-status-timeline";
import { avatar } from "@/data/menu";

const trackingSteps = [
  "Your order has been received",
  "The restaurant is preparing your food",
  "Your order has been picked up for delivery",
  "Order arriving soon!",
];

export default function TrackingPage() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col bg-[#cdd4de]">
      <header className="z-10 flex items-center gap-4 px-6 pt-4">
        <Link
          href="/orders"
          aria-label="Back"
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-white"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </Link>
        <h1 className="text-[17px] font-bold text-ink">Track Order</h1>
      </header>

      {/* map + route */}
      <div className="relative min-h-[300px] flex-1 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 390 620"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M285 175 L285 205 Q285 215 275 218 L150 250 Q138 253 135 265 L120 320 Q117 332 108 336 L92 360 Q82 366 82 378 L82 445"
            stroke="url(#route)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <defs>
            <linearGradient id="route" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#FFC529" />
              <stop offset="1" stopColor="#FF7622" />
            </linearGradient>
          </defs>
          {/* origin */}
          <circle cx="285" cy="172" r="9" fill="#fff" stroke="#FFC529" strokeWidth="4" />
        </svg>
        {/* destination pin */}
        <div className="absolute bottom-8 left-[52px] flex h-[92px] w-[92px] items-center justify-center rounded-full bg-danger text-white shadow-lg">
          <MapPin className="h-8 w-8 fill-white/20" />
        </div>
      </div>

      {/* bottom sheet */}
      <div className="rounded-t-[24px] bg-white px-6 pb-8 pt-3">
        <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-[#d9dde5]" />
        <div className="flex gap-4">
          <Thumb src="/food/pasta1.jpg" alt="Order" className="h-[70px] w-[70px] rounded-[16px]" />
          <div className="flex-1">
            <h3 className="text-[20px] font-bold text-ink">Uttora Coffee House</h3>
            <p className="mt-1 text-[15px] text-muted">
              Orderd At 06 Sept, 10:00pm
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-1 text-[16px] text-ink-2">
          <p>
            <span className="font-bold">2x</span> Burger
          </p>
          <p>
            <span className="font-bold">4x</span> Sanwitch
          </p>
        </div>

        {/* estimated delivery time */}
        <div className="mt-7 text-center">
          <p className="text-[34px] font-extrabold leading-none text-ink">
            20 min
          </p>
          <p className="caps-label mt-2 text-[15px] font-medium tracking-wide text-muted-3">
            Estimated Delivery Time
          </p>
        </div>

        {/* order status */}
        <OrderStatusTimeline steps={trackingSteps} current={1} className="mt-7" />

        {/* courier */}
        <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
          <Thumb src={avatar(3)} alt="Robert Fox" className="h-[50px] w-[50px] rounded-full" />
          <div className="flex-1">
            <p className="text-[16px] font-bold text-ink">Robert Fox</p>
            <p className="text-[14px] text-muted">Delivery Guy</p>
          </div>
          <Link
            href="/chat"
            aria-label="Message"
            className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-surface text-primary"
          >
            <MessageSquare className="h-5 w-5" />
          </Link>
          <Link
            href="/call"
            aria-label="Call"
            className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-primary text-white"
          >
            <Phone className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
