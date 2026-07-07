"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Map,
  ShoppingBag,
  Heart,
  Bell,
  CreditCard,
  HelpCircle,
  Command,
  Settings,
  LogOut,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { ScreenHeader } from "@/components/ui/screen-header";
import { IconButton } from "@/components/ui/icon-button";
import { Thumb } from "@/components/ui/thumb";
import { avatar } from "@/data/menu";
import { useAuth } from "@/store/auth";
import { useHydrated } from "@/lib/use-hydrated";

type Row = { icon: React.ReactNode; label: string; href: string };

const groups: Row[][] = [
  [
    { icon: <User className="h-5 w-5 text-primary" />, label: "Personal Info", href: "/profile" },
    { icon: <Map className="h-5 w-5 text-[#5b5fef]" />, label: "Addresses", href: "/address" },
  ],
  [
    { icon: <ShoppingBag className="h-5 w-5 text-[#2b9bf4]" />, label: "Cart", href: "/cart" },
    { icon: <Heart className="h-5 w-5 text-[#9d5bef]" />, label: "Favourite", href: "/home" },
    { icon: <Bell className="h-5 w-5 text-[#f6a609]" />, label: "Notifications", href: "/notifications" },
    { icon: <CreditCard className="h-5 w-5 text-[#2b9bf4]" />, label: "Payment Method", href: "/payment" },
  ],
  [
    { icon: <HelpCircle className="h-5 w-5 text-primary" />, label: "FAQs", href: "/menu" },
    { icon: <Command className="h-5 w-5 text-[#22c1a6]" />, label: "User Reviews", href: "/reviews" },
    { icon: <Settings className="h-5 w-5 text-[#5b5fef]" />, label: "Settings", href: "/menu" },
  ],
  [{ icon: <LogOut className="h-5 w-5 text-danger" />, label: "Log Out", href: "/login" }],
];

export default function MenuPage() {
  const router = useRouter();
  const currentUser = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);
  const hydrated = useHydrated();
  const user = hydrated ? currentUser : null;

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <ScreenHeader
        title="Profile"
        back="/home"
        right={
          <IconButton aria-label="More">
            <MoreHorizontal className="h-6 w-6" />
          </IconButton>
        }
      />

      <div className="mt-6 flex items-center gap-5 px-6">
        <Thumb src={user?.avatar || avatar(5)} alt={user?.name ?? "Guest"} className="h-[100px] w-[100px] rounded-full" />
        <div>
          <h2 className="text-[24px] font-bold text-ink">{user?.name ?? "Guest"}</h2>
          <p className="mt-1 text-[16px] text-muted">{user?.bio || "I love fast food"}</p>
        </div>
      </div>

      <div className="mt-8 space-y-5 px-6">
        {groups.map((g, gi) => (
          <div key={gi} className="rounded-[20px] bg-surface-2 px-4">
            {g.map((row, ri) =>
              row.label === "Log Out" ? (
                <button
                  key={ri}
                  onClick={handleLogout}
                  className="flex w-full items-center gap-4 py-4 text-left"
                >
                  <span className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white">
                    {row.icon}
                  </span>
                  <span className="flex-1 text-[16px] text-ink-2">{row.label}</span>
                  <ChevronRight className="h-5 w-5 text-muted" />
                </button>
              ) : (
                <Link
                  key={ri}
                  href={row.href}
                  className="flex items-center gap-4 py-4"
                >
                  <span className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white">
                    {row.icon}
                  </span>
                  <span className="flex-1 text-[16px] text-ink-2">{row.label}</span>
                  <ChevronRight className="h-5 w-5 text-muted" />
                </Link>
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
