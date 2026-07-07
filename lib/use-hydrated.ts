"use client";

import { useEffect, useState } from "react";

/**
 * True only after the component has mounted on the client. Use it to gate UI
 * that depends on persisted (localStorage) state, so the server render and the
 * first client render match — avoiding React hydration mismatches.
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
