import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "brand" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  href,
  children,
  variant = "brand",
  size = "md",
  ...buttonProps
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-[3px] border font-semibold uppercase tracking-[0.08em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variant === "brand" &&
      "border-[var(--brand)] bg-[var(--brand)] text-white hover:border-[var(--brand-strong)] hover:bg-[var(--brand-strong)] hover:-translate-y-0.5",
    variant === "outline" &&
      "border-white/70 bg-black/10 text-white backdrop-blur-sm hover:border-[var(--brand)] hover:bg-[var(--brand)]",
    variant === "ghost" &&
      "border-transparent bg-transparent text-white/80 hover:text-white",
    size === "sm" && "h-10 px-4 text-[11px]",
    size === "md" && "h-12 px-6 text-xs",
    size === "lg" && "h-14 px-8 text-sm",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
