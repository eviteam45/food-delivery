"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Menu, Plus, Bell, User } from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
  { href: "/seller", icon: LayoutGrid, label: "Dashboard" },
  { href: "/seller/orders", icon: Menu, label: "Orders" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
  { href: "/menu", icon: User, label: "Profile" },
];

export function BottomNav() {
  const path = usePathname();
  return (
    <nav className="sticky bottom-0 z-20 flex items-center justify-around rounded-t-[24px] bg-white px-6 pb-6 pt-4 shadow-[0_-8px_30px_rgba(24,28,46,0.06)]">
      <NavItem item={items[0]} active={path === items[0].href} />
      <NavItem item={items[1]} active={path.startsWith("/seller/orders")} />

      <Link
        href="/seller/food/new"
        aria-label="Add"
        className="flex h-[58px] w-[58px] -translate-y-3 items-center justify-center rounded-full border-2 border-primary bg-peach text-primary"
      >
        <Plus className="h-7 w-7" strokeWidth={2.5} />
      </Link>

      <NavItem item={items[2]} active={path === items[2].href} />
      <NavItem item={items[3]} active={path === items[3].href} />
    </nav>
  );
}

function NavItem({
  item,
  active,
}: {
  item: { href: string; icon: typeof Bell; label: string };
  active: boolean;
}) {
  const Icon = item.icon;
  return (
    <Link href={item.href} aria-label={item.label} className="p-1">
      <Icon
        className={cn("h-6 w-6", active ? "text-primary" : "text-muted")}
        strokeWidth={active ? 2.4 : 2}
      />
    </Link>
  );
}
