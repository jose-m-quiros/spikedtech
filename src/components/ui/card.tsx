import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-white/[0.1] bg-white/[0.035] shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}
