import { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/cn";

/** Minimal Slot: merges className onto a single child element. */
export function Slot({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  if (!isValidElement(children)) return null;
  const child = children as React.ReactElement<{ className?: string }>;
  return cloneElement(child, {
    ...props,
    className: cn(child.props.className, className),
  });
}
