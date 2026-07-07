"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, LogOut } from "lucide-react";
import { ScreenHeader } from "@/components/ui/screen-header";
import { Thumb } from "@/components/ui/thumb";
import { avatar } from "@/data/menu";
import { useAuth } from "@/store/auth";
import { useHydrated } from "@/lib/use-hydrated";

export default function ProfilePage() {
  const router = useRouter();
  const currentUser = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);
  const hydrated = useHydrated();

  // Ignore the persisted user until hydrated so the first client render matches
  // the server (which has no localStorage) — avoids a hydration mismatch.
  const user = hydrated ? currentUser : null;

  const name = user?.name ?? "Guest";
  const email = user?.email ?? "Not signed in";

  const info = [
    { icon: <User className="h-5 w-5 text-primary" />, label: "Full Name", value: name },
    { icon: <Mail className="h-5 w-5 text-[#5b5fef]" />, label: "Email", value: email },
    { icon: <Phone className="h-5 w-5 text-[#2b9bf4]" />, label: "Phone Number", value: user?.phone || "Not set" },
  ];

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <div className="min-h-[100dvh] bg-white pb-10">
      <ScreenHeader
        title="Personal Info"
        back="/menu"
        right={
          <Link href="/edit-profile" className="text-[15px] font-bold uppercase text-primary underline">
            Edit
          </Link>
        }
      />

      <div className="mt-8 flex items-center gap-5 px-6">
        <Thumb src={user?.avatar || avatar(5)} alt={name} className="h-[100px] w-[100px] rounded-full" />
        <div>
          <h2 className="text-[24px] font-bold text-ink">{name}</h2>
          <p className="mt-1 text-[16px] text-muted">{user?.bio || "I love fast food"}</p>
        </div>
      </div>

      <div className="mt-8 px-6">
        <div className="space-y-5 rounded-[20px] bg-surface-2 px-5 py-6">
          {info.map((row, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white">
                {row.icon}
              </span>
              <div>
                <p className="caps-label text-[13px] text-ink-2">{row.label}</p>
                <p className="mt-0.5 text-[15px] text-muted-3">{row.value}</p>
              </div>
            </div>
          ))}
        </div>

        {user ? (
          <button
            onClick={handleLogout}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-[16px] border border-line py-4 text-[16px] font-bold text-red-500 active:scale-[0.99]"
          >
            <LogOut className="h-5 w-5" />
            Log Out
          </button>
        ) : (
          <Link
            href="/login"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-[16px] bg-primary py-4 text-[16px] font-bold text-white active:scale-[0.99]"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}
