"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { BottomNav } from "@/components/app/bottom-nav";
import { Thumb } from "@/components/ui/thumb";
import { avatar, dishPhotos } from "@/data/menu";
import { cn } from "@/lib/cn";

const notifications = [
  { name: "Tanbir Ahmed", action: "Placed a new order", time: "20 min ago" },
  { name: "Salim Smith", action: "left a 5 star review", time: "20 min ago" },
  { name: "Royal Bengol", action: "agreed to cancel", time: "20 min ago" },
  { name: "Pabel Vuiya", action: "Placed a new order", time: "20 min ago" },
];

const messages = [
  { name: "Royal Parvej", last: "Sounds awesome!", time: "19:37", unread: 1, online: true },
  { name: "Cameron Williamson", last: "Ok, Just hurry up little bit...", time: "19:37", unread: 2, online: true },
  { name: "Ralph Edwards", last: "Thanks dude.", time: "19:37", unread: 0, online: true },
  { name: "Cody Fisher", last: "How is going...?", time: "19:37", unread: 0, online: true },
  { name: "Eleanor Pena", last: "Thanks for the awesome food man...!", time: "19:37", unread: 0, online: false },
];

export default function NotificationsPage() {
  const [tab, setTab] = useState<"notifications" | "messages">("notifications");

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <header className="flex items-center gap-4 px-6 pt-4">
        <IconButton href="/menu" aria-label="Back">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </IconButton>
        <h1 className="text-[17px] font-bold text-ink">
          {tab === "notifications" ? "Notifications" : "Messages"}
        </h1>
      </header>

      {/* tabs */}
      <div className="mt-4 flex border-b border-line px-6">
        <button
          onClick={() => setTab("notifications")}
          className={cn(
            "flex-1 pb-3 text-[17px] font-bold",
            tab === "notifications"
              ? "border-b-2 border-primary text-primary"
              : "text-muted",
          )}
        >
          Notifications
        </button>
        <button
          onClick={() => setTab("messages")}
          className={cn(
            "flex-1 pb-3 text-[17px] font-bold",
            tab === "messages"
              ? "border-b-2 border-primary text-primary"
              : "text-muted",
          )}
        >
          Messages (3)
        </button>
      </div>

      <div className="flex-1 px-6">
        {tab === "notifications"
          ? notifications.map((n, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-line py-4">
                <Thumb src={avatar(i + 2)} alt={n.name} className="h-[60px] w-[60px] shrink-0 rounded-full" />
                <div className="flex-1">
                  <p className="text-[16px] text-ink">
                    <span className="font-bold">{n.name}</span>{" "}
                    <span className="text-muted-3">{n.action}</span>
                  </p>
                  <p className="mt-1 text-[14px] text-muted">{n.time}</p>
                </div>
                <Thumb src={dishPhotos[i]} alt="" className="h-[60px] w-[60px] shrink-0 rounded-[12px]" />
              </div>
            ))
          : messages.map((m, i) => (
              <Link
                key={i}
                href="/chat"
                className="flex items-center gap-4 border-b border-line py-4"
              >
                <div className="relative shrink-0">
                  <Thumb src={avatar(i + 1)} alt={m.name} className="h-[60px] w-[60px] rounded-full" />
                  <span
                    className={cn(
                      "absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white",
                      m.online ? "bg-green-500" : "bg-[#c8ccd6]",
                    )}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[17px] font-bold text-ink">{m.name}</p>
                  <p
                    className={cn(
                      "mt-1 text-[15px]",
                      m.unread ? "text-ink-2" : "text-muted",
                    )}
                  >
                    {m.last}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[13px] text-ink-2">{m.time}</span>
                  {m.unread > 0 && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-white">
                      {m.unread}
                    </span>
                  )}
                </div>
              </Link>
            ))}
      </div>

      <BottomNav />
    </div>
  );
}
