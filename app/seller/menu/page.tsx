import Link from "next/link";
import {
  User,
  UtensilsCrossed,
  ClipboardList,
  Star,
  Wallet,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

type Row = { icon: React.ReactNode; label: string; href: string };

const groups: Row[][] = [
  [
    { icon: <User className="h-5 w-5 text-primary" />, label: "Personal Info", href: "/profile" },
    { icon: <UtensilsCrossed className="h-5 w-5 text-[#5b5fef]" />, label: "My Food List", href: "/seller/food" },
  ],
  [
    { icon: <ClipboardList className="h-5 w-5 text-[#2b9bf4]" />, label: "Running Orders", href: "/seller/orders" },
    { icon: <Star className="h-5 w-5 text-[#f6a609]" />, label: "Reviews", href: "/reviews" },
    { icon: <Wallet className="h-5 w-5 text-[#22c1a6]" />, label: "Withdraw", href: "/seller/withdraw-success" },
    { icon: <Bell className="h-5 w-5 text-[#9d5bef]" />, label: "Notifications", href: "/notifications" },
  ],
  [
    { icon: <Settings className="h-5 w-5 text-[#5b5fef]" />, label: "Settings", href: "/seller/menu" },
    { icon: <LogOut className="h-5 w-5 text-danger" />, label: "Log Out", href: "/login" },
  ],
];

export default function SellerMenuPage() {
  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <header className="flex items-center gap-4 px-6 pt-4">
        <IconButton href="/seller" aria-label="Back">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </IconButton>
        <h1 className="text-[17px] font-bold text-ink">Profile</h1>
      </header>

      <div className="mt-6 flex items-center gap-5 px-6">
        <div className="h-[100px] w-[100px] rounded-full bg-peach-2" />
        <div>
          <h2 className="text-[24px] font-bold text-ink">Halal Lab</h2>
          <p className="mt-1 text-[16px] text-muted">Restaurant owner</p>
        </div>
      </div>

      <div className="mt-8 space-y-5 px-6">
        {groups.map((g, gi) => (
          <div key={gi} className="rounded-[20px] bg-surface-2 px-4">
            {g.map((row, ri) => (
              <Link key={ri} href={row.href} className="flex items-center gap-4 py-4">
                <span className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white">
                  {row.icon}
                </span>
                <span className="flex-1 text-[16px] text-ink-2">{row.label}</span>
                <ChevronRight className="h-5 w-5 text-muted" />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
