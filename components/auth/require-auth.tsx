"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/auth";

/** Redirects to /login (remembering where to return) when no user is signed in.
 * Waits for the persisted store to hydrate on the client before deciding, so a
 * logged-in user is never bounced on first paint. */
export function useRequireAuth(next: string) {
  const router = useRouter();
  const user = useAuth((s) => s.user);
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    if (ready && !user) {
      router.replace(`/login?next=${encodeURIComponent(next)}`);
    }
  }, [ready, user, next, router]);

  return { user, ready };
}

/** Gate a page's content behind sign-in. */
export function RequireAuth({
  next,
  children,
}: {
  next: string;
  children: React.ReactNode;
}) {
  const { user, ready } = useRequireAuth(next);
  if (!ready || !user) return null;
  return <>{children}</>;
}
