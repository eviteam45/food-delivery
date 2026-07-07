"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  name: string;
  email: string;
  phone?: string;
  bio?: string;
  avatar?: string; // data URL of a user-picked image
};

/** Stored account. NOTE: demo/template only — passwords are kept in plain
 * text in localStorage. A real app must authenticate against a backend and
 * never persist raw passwords on the client. */
type Account = User & { password: string };

type Result = { ok: boolean; error?: string };

type AuthState = {
  users: Account[];
  user: User | null;
  register: (name: string, email: string, password: string) => Result;
  login: (email: string, password: string) => Result;
  updateProfile: (patch: Partial<User>) => Result;
  logout: () => void;
};

const normalize = (email: string) => email.trim().toLowerCase();

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      user: null,

      register: (name, email, password) => {
        const e = normalize(email);
        if (get().users.some((u) => normalize(u.email) === e)) {
          return { ok: false, error: "An account with this email already exists." };
        }
        const account: Account = { name: name.trim(), email: e, password };
        set((s) => ({
          users: [...s.users, account],
          user: { name: account.name, email: account.email },
        }));
        return { ok: true };
      },

      login: (email, password) => {
        const e = normalize(email);
        const account = get().users.find((u) => normalize(u.email) === e);
        if (!account || account.password !== password) {
          return { ok: false, error: "Incorrect email or password." };
        }
        set({ user: { name: account.name, email: account.email } });
        return { ok: true };
      },

      updateProfile: (patch) => {
        const current = get().user;
        if (!current) return { ok: false, error: "You are not signed in." };

        const nextEmail = patch.email ? normalize(patch.email) : current.email;
        if (
          nextEmail !== current.email &&
          get().users.some((u) => normalize(u.email) === nextEmail)
        ) {
          return { ok: false, error: "An account with this email already exists." };
        }

        const updated: User = {
          name: patch.name?.trim() || current.name,
          email: nextEmail,
          phone: patch.phone ?? current.phone,
          bio: patch.bio ?? current.bio,
          avatar: patch.avatar ?? current.avatar,
        };

        set((s) => ({
          user: updated,
          users: s.users.map((u) =>
            normalize(u.email) === normalize(current.email)
              ? { ...u, ...updated }
              : u,
          ),
        }));
        return { ok: true };
      },

      logout: () => set({ user: null }),
    }),
    { name: "foodly-auth" },
  ),
);
