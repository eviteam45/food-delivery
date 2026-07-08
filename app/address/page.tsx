import Link from "next/link";
import { Home, Briefcase, SquarePen, Trash2 } from "lucide-react";
import { ScreenHeader } from "@/components/ui/screen-header";
import { Button } from "@/components/ui/button";

const addresses = [
  {
    icon: <Home className="h-7 w-7 text-[#2b9bf4]" />,
    label: "HOME",
    value: "2464 Royal Ln. Mesa, New Jersey 45463",
  },
  {
    icon: <Briefcase className="h-7 w-7 text-[#9d5bef]" />,
    label: "WORK",
    value: "3891 Ranchview Dr. Richardson, California 62639",
  },
];

export default function AddressPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white pb-8">
      <ScreenHeader title="My Address" back="/menu" />

      <div className="mt-6 flex-1 space-y-5 px-6">
        {addresses.map((a, i) => (
          <div key={i} className="flex items-center gap-4 rounded-[20px] bg-surface px-4 py-6">
            <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-white">
              {a.icon}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-medium text-ink-2">{a.label}</span>
                <div className="flex gap-4 text-primary">
                  <button aria-label="Edit">
                    <SquarePen className="h-5 w-5" />
                  </button>
                  <button aria-label="Delete">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="mt-2 text-[15px] leading-6 text-muted-3">{a.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6">
        <Button asChild>
          <Link href="/add-address">Add New Address</Link>
        </Button>
      </div>
    </div>
  );
}
