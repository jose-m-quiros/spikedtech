import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "href"
> {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-cyan-200/20 bg-cyan-300 text-slate-950 shadow-[0_0_36px_rgba(94,234,212,0.2)] hover:bg-cyan-200 hover:shadow-[0_0_46px_rgba(94,234,212,0.34)]",
  secondary:
    "border-white/15 bg-white/[0.045] text-white hover:border-white/30 hover:bg-white/[0.09]",
  ghost:
    "border-transparent text-slate-300 hover:bg-white/[0.06] hover:text-white",
};

export function Button({
  children,
  className = "",
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}
