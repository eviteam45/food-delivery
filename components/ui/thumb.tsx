import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Image tile. Renders a real photo when `src` is provided, otherwise a
 * slate/peach gradient placeholder that mirrors the template's gray boxes.
 */
export function Thumb({
  className,
  rounded = "rounded-[20px]",
  tone = "slate",
  src,
  alt = "",
  sizes = "(max-width: 440px) 60vw, 260px",
}: {
  className?: string;
  rounded?: string;
  tone?: "slate" | "peach" | "dark";
  src?: string;
  alt?: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-[#e6e9ef]", rounded, className)}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  const tones = {
    slate: "bg-gradient-to-br from-[#aab4c2] to-[#93a0b3]",
    peach: "bg-gradient-to-br from-[#ffd9c2] to-[#ffbf9c]",
    dark: "bg-white/5",
  };
  return <div className={cn(rounded, tones[tone], className)} aria-hidden />;
}
