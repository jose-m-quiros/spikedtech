"use client";

import { BrainCircuit, Code2, Network, ShieldCheck, Smartphone, Workflow } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent } from "react";

const serviceIcons = {
  automation: Workflow,
  cloud: ShieldCheck,
  code: Code2,
  intelligence: BrainCircuit,
  integration: Network,
  mobile: Smartphone,
} as const;

export interface ServiceCardProps {
  accent: "cyan" | "emerald" | "sky";
  description: string;
  icon: keyof typeof serviceIcons;
  title: string;
}

const accentStyles = {
  cyan: "border-cyan-200/20 bg-cyan-300/10 text-cyan-100",
  emerald: "border-emerald-200/20 bg-emerald-300/10 text-emerald-100",
  sky: "border-sky-200/20 bg-sky-300/10 text-sky-100",
} as const;

export function MagneticCard({ accent, description, icon, title }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = serviceIcons[icon];
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 18, stiffness: 220 });
  const springY = useSpring(y, { damping: 18, stiffness: 220 });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.045);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.045);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      className="h-full"
      onPointerLeave={resetPosition}
      onPointerMove={handlePointerMove}
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex h-full min-h-64 flex-col rounded-lg border border-white/[0.1] bg-white/[0.035] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl"
        transition={{ duration: 0.24 }}
        whileHover={shouldReduceMotion ? undefined : { borderColor: "rgba(148, 235, 225, 0.35)", y: -5 }}
      >
        <span className={`mb-7 grid h-11 w-11 place-items-center rounded-md border ${accentStyles[accent]}`}>
          <Icon aria-hidden="true" size={21} strokeWidth={1.7} />
        </span>
        <h3 className="text-xl font-semibold leading-7 text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
        <span className="mt-auto pt-7 text-sm font-medium text-slate-300">Explorar servicio</span>
      </motion.div>
    </motion.article>
  );
}