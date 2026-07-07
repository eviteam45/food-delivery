import Link from "next/link";

const groups: { title: string; links: [string, string][] }[] = [
  {
    title: "Onboarding & Auth",
    links: [
      ["Splash", "/"],
      ["Onboarding", "/onboarding"],
      ["Location Access", "/location"],
      ["Log In", "/login"],
      ["Sign Up", "/signup"],
      ["Forgot Password", "/forgot-password"],
      ["Verification", "/verification"],
    ],
  },
  {
    title: "Home & Browse",
    links: [
      ["Home V1 (pills)", "/home"],
      ["Home V2 (cards)", "/home/v2"],
      ["Home V3 (cards)", "/home/v3"],
      ["Search", "/search"],
      ["Category — Burger", "/category/burger"],
      ["Offer popup", "/offer"],
      ["Filter sheet", "/filter"],
      ["Restaurant View", "/restaurant/rose-garden"],
    ],
  },
  {
    title: "Food & Cart",
    links: [
      ["Food Details", "/food/pizza-calzone-european"],
      ["My Cart", "/cart"],
    ],
  },
  {
    title: "Checkout",
    links: [
      ["Payment Method", "/payment"],
      ["Payment — no card", "/payment?empty=1"],
      ["Add Card", "/payment/add-card"],
      ["Payment Success", "/payment-success"],
    ],
  },
  {
    title: "Orders & Tracking",
    links: [
      ["My Orders", "/orders"],
      ["Track Order", "/tracking"],
      ["Call Courier", "/call"],
      ["Chat", "/chat"],
      ["Reviews", "/reviews"],
    ],
  },
  {
    title: "Profile & More",
    links: [
      ["Profile Menu", "/menu"],
      ["Personal Info", "/profile"],
      ["Edit Profile", "/edit-profile"],
      ["My Address", "/address"],
      ["Add Address", "/add-address"],
      ["Notifications & Messages", "/notifications"],
    ],
  },
  {
    title: "Seller / Chef",
    links: [
      ["Dashboard", "/seller"],
      ["Running Orders", "/seller/orders"],
      ["My Food List", "/seller/food"],
      ["Add New Item", "/seller/food/new"],
      ["Chef Food Details", "/seller/food/chicken-bhuna"],
      ["Seller Profile", "/seller/menu"],
      ["Withdraw Success", "/seller/withdraw-success"],
    ],
  },
];

export default function ScreensIndex() {
  return (
    <div className="min-h-[100dvh] bg-white px-6 py-8">
      <h1 className="text-[26px] font-extrabold text-ink">Foodly — All Screens</h1>
      <p className="mt-1 text-[15px] text-muted">
        Every screen from the Figma, built with Next.js. Tap to open.
      </p>

      <div className="mt-6 space-y-7">
        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="caps-label text-[13px] font-bold text-primary">
              {g.title}
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {g.links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-[12px] bg-surface px-4 py-3 text-[14px] font-medium text-ink-2 active:scale-95"
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
