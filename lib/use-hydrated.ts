"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True only after the component has mounted on the client. Use it to gate UI
 * that depends on persisted (localStorage) state, so the server render and the
 * first client render match — avoiding React hydration mismatches.
 *
 * Implemented with useSyncExternalStore: the server snapshot is `false` and the
 * client snapshot is `true`, so React resolves the switch without a
 * setState-in-effect (and without a hydration mismatch).
 */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
