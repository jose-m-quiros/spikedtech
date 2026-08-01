"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  label: string;
  prefix?: string;
  precision?: number;
  suffix?: string;
  value: number;
}

export function AnimatedCounter({
  label,
  prefix = "",
  precision = 0,
  suffix = "",
  value,
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.55, once: true });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    const multiplier = 10 ** precision;
    const controls = animate(0, value, {
      duration: 1.45,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest * multiplier) / multiplier);
      },
    });

    return () => controls.stop();
  }, [isInView, precision, shouldReduceMotion, value]);

  return (
    <div ref={containerRef} aria-label={`${prefix}${value.toFixed(precision)}${suffix} ${label}`}>
      <p className="text-3xl font-semibold text-white sm:text-4xl">
        {prefix}
        {displayValue.toFixed(precision)}
        {suffix}
      </p>
      <p className="mt-2 text-sm leading-5 text-slate-400">{label}</p>
    </div>
  );
}