"use client";

import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/app/search-bar";

/** Read-only search field on Home that opens the dedicated search screen. */
export function HomeSearchBar({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <SearchBar
      className={className}
      readOnly
      onClick={() => router.push("/search")}
    />
  );
}
