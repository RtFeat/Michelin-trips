import { formatStars, type Stars } from "@/data/places";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  value: Stars;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClass = {
  sm: "text-sm tracking-[0.18em]",
  md: "text-base tracking-[0.22em]",
  lg: "text-xl tracking-[0.28em]",
};

export function StarRating({ value, size = "md", className }: StarRatingProps) {
  return (
    <span
      className={cn(
        "inline-block font-display text-accent",
        sizeClass[size],
        className,
      )}
      aria-label={`${value} из 3`}
    >
      {formatStars(value)}
    </span>
  );
}
