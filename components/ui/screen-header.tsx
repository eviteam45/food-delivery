import { ChevronLeft } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/lib/cn";

type Props = {
  title?: string;
  back?: string;
  onBack?: () => void;
  right?: React.ReactNode;
  className?: string;
};

/** Standard top bar: round back button, centered/leading title, optional right slot. */
export function ScreenHeader({ title, back = "..", onBack, right, className }: Props) {
  return (
    <header className={cn("flex items-center gap-4 px-6 pt-3", className)}>
      {onBack ? (
        <IconButton onClick={onBack} aria-label="Back">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </IconButton>
      ) : (
        <IconButton href={back} aria-label="Back">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </IconButton>
      )}
      {title ? (
        <h1 className="text-[17px] font-bold text-ink">{title}</h1>
      ) : (
        <span />
      )}
      <div className="ml-auto">{right}</div>
    </header>
  );
}
