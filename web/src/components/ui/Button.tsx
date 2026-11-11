import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
}

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
    href?: never;
  };

type InternalLinkProps = CommonProps &
  Omit<LinkProps, "className" | "children"> & {
    to: string;
    href?: never;
  };

type ExternalLinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: never;
  };

type ButtonProps = NativeButtonProps | InternalLinkProps | ExternalLinkProps;

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    fullWidth = false,
  } = props;

  const baseStyles =
    "group inline-flex items-center justify-center gap-3 rounded-full font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aepy-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-aepy-orange text-white hover:-translate-y-1 hover:bg-aepy-burnt",
    secondary:
      "border border-aepy-orange text-aepy-chocolate hover:bg-aepy-orange hover:text-aepy-cream hover:-translate-y-1",
    ghost: "text-aepy-chocolate hover:bg-aepy-orange/10 hover:text-aepy-orange",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-4 text-sm sm:text-base",
  };

  const styles = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("to" in props && props.to) {
    return (
      <Link {...props} className={styles}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a {...props} className={styles}>
        {children}
      </a>
    );
  }

  const { to, href, ...buttonProps } = props as NativeButtonProps;
  return (
    <button {...buttonProps} className={styles}>
      {children}
    </button>
  );
};

export default Button;
