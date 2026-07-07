import type { Metadata, Viewport } from "next";
import { Sen, Poppins } from "next/font/google";
import "./globals.css";
import { MobileFrame } from "@/components/shell/mobile-frame";

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foodly — Food Delivery",
  description: "Order your favourite food, delivered fast.",
};

export const viewport: Viewport = {
  themeColor: "#ff7622",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sen.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full">
        <MobileFrame>{children}</MobileFrame>
      </body>
    </html>
  );
}
