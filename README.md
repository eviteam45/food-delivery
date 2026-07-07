# Foodly — Food Delivery App (mobile)

A full mobile implementation of the [Food Delivery App (Community)](https://www.figma.com/design/zMyKBe9OvUp1vV5PmlzlL9/Food-Delivery-App--Community-) Figma design, built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Zustand**.

Mobile-only by design: the app renders inside a centered 440px device frame.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

Open **`/screens`** for an index that links to every screen.

## Tech stack

| | |
| --- | --- |
| Framework | Next.js 16.2 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4 (`@theme` tokens) |
| Language | TypeScript (strict) |
| State | Zustand + `persist` (localStorage) |
| Icons | `lucide-react` + custom SVG marks |

## What's implemented (all ~50 Figma frames)

| Flow | Routes |
| --- | --- |
| Onboarding & Auth | `/` (splash), `/onboarding`, `/location`, `/login`, `/signup`, `/forgot-password`, `/verification` |
| Home & Browse | `/home`, `/home/v2`, `/home/v3`, `/search`, `/category/[slug]`, `/offer`, `/filter`, `/restaurant/[id]` |
| Food & Cart | `/food/[id]`, `/cart` (view + edit modes) |
| Checkout | `/payment` (+ `?empty=1` no-card state), `/payment/add-card`, `/payment-success` |
| Orders & Tracking | `/orders` (ongoing/history), `/tracking`, `/call`, `/chat`, `/reviews` |
| Profile | `/menu`, `/profile`, `/edit-profile`, `/address`, `/add-address`, `/notifications` |
| Seller / Chef | `/seller`, `/seller/orders`, `/seller/food`, `/seller/food/new`, `/seller/food/[id]`, `/seller/menu`, `/seller/withdraw-success` |

## Authentication & accounts

The app has a working client-side auth layer (`store/auth.ts`, persisted to localStorage):

- **Sign up** (`/signup`) — validates name, email format, password length (≥6) and confirmation, and rejects duplicate emails. Creates the account and signs you in.
- **Log in** (`/login`) — validates required fields and email format, and only proceeds on matching credentials (otherwise shows *"Incorrect email or password."*). Honors a `?next=` redirect.
- **Protected checkout** — the order flow is gated by `<RequireAuth>`. "Place Order" sends signed-out users to `/login?next=/payment`, and `/payment` / `/payment-success` can't be reached directly without a session.
- **Profile** (`/profile`, `/edit-profile`) — shows the signed-in user's real name, email, phone and bio. Editing saves back to the account (and keeps login working if you change your email).
- **Avatar picker** — the pencil on Edit Profile opens a file picker; the image is downscaled to ≤256px and stored as a compact JPEG data URL (`lib/image.ts`), then shown across Profile, Menu, and the greeting.
- **Personalized UI** — the home greeting and menu summary use *your* name/photo, not placeholder data.

> ⚠️ **Demo only.** Accounts live in the browser's localStorage and passwords are stored in plain text — appropriate for this front-end template, **not** for production. A real deployment must authenticate against a backend and never persist raw passwords client-side.

## Cart & ordering

- Add-to-cart, quantity steppers, remove, and live totals flow through a persisted Zustand store (`store/cart.ts`).
- The cart badge and other persisted-state UI use a small `useHydrated()` gate (`lib/use-hydrated.ts`) so server and first client render match — no hydration mismatches.
- Restaurant pages have interactive category filtering with an empty-state per category.

## Design system

- **Colors** — primary `#FF7622`, ink `#181C2E`, surfaces `#F0F5FA`, extracted from the Figma nodes and exposed as Tailwind v4 `@theme` tokens in `app/globals.css`.
- **Fonts** — Sen (headings/body) + Poppins (labels) via `next/font/google`.
- **Icons** — `lucide-react` (Feather-style, matching the Figma icon set) plus a few custom SVG marks (brand logos, delivery van) in `components/icons.tsx`.

Real dish/avatar photography lives in `public/food` and `public/avatars`.

## Project structure

```
app/            App Router routes (one folder per screen)
components/
  app/          Feature components (cards, headers, cart button, …)
  auth/         AuthLayout + <RequireAuth> guard
  ui/           Reusable primitives (Field, Button, Thumb, …)
data/menu.ts    Mock catalog: categories, restaurants, foods, helpers
store/          Zustand stores: cart.ts, auth.ts
lib/            Helpers: cn, use-hydrated, image (avatar downscaling)
public/         Real imagery (food, avatars)
```

## Notes on Next.js 16

This project follows the version-matched docs bundled in `node_modules/next/dist/docs` (per `AGENTS.md`). Dynamic route `params` are awaited as Promises, and `useSearchParams` usage is wrapped in `<Suspense>`.
