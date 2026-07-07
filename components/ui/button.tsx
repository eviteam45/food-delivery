import { cn } from "@/lib/cn";
import { Slot } from "@/components/ui/slot";

type Variant = "primary" | "dark" | "soft" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
  fullWidth?: boolean;
};

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-[0_10px_20px_rgba(255,118,34,0.28)]",
  dark: "bg-ink text-white",
  soft: "bg-peach text-primary",
  ghost: "bg-transparent text-ink",
};

export function Button({
  className,
  variant = "primary",
  fullWidth = true,
  asChild,
  ...props
}: Props) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex h-[62px] items-center justify-center gap-2 rounded-[12px] px-6 text-[14px] font-bold uppercase tracking-[0.06em] transition active:scale-[0.99] disabled:opacity-60",
        fullWidth && "w-full",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
