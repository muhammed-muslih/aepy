import type { HTMLAttributes } from "react";

type CardVariant = "default" | "soft" | "dark" | "outline";
type CardPadding = "none" | "sm" | "md" | "lg";
type CardRadius = "md" | "lg" | "xl" | "2xl";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  radius?: CardRadius;
}

const Card = ({
  children,
  variant = "default",
  padding = "md",
  radius = "xl",
  className = "",
  ...props
}: CardProps) => {
  const variants: Record<CardVariant, string> = {
    default: "bg-white text-aepy-chocolate",

    soft: "bg-aepy-cream text-aepy-chocolate",

    dark: "bg-aepy-chocolate text-aepy-cream",

    outline:
      "border border-aepy-chocolate/15 bg-transparent text-aepy-chocolate",
  };

  const paddings: Record<CardPadding, string> = {
    none: "p-0",
    sm: "p-3",
    md: "p-5",
    lg: "p-6 sm:p-8",
  };

  const radiuses: Record<CardRadius, string> = {
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl",
    "2xl": "rounded-[2rem]",
  };

  const styles = [
    "relative",
    variants[variant],
    paddings[padding],
    radiuses[radius],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${styles} cursor-pointer`} {...props}>
      {children}
    </div>
  );
};

export default Card;
