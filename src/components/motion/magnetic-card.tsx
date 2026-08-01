"use client";

import { BrainCircuit, Code2, Network, ShieldCheck, Smartphone, TrendingUp, Workflow } from "lucide-react";

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
  result?: string;
  title: string;
}

const accentStyles = {
  cyan: "border-cyan-200/20 bg-cyan-300/10 text-cyan-100",
  emerald: "border-emerald-200/20 bg-emerald-300/10 text-emerald-100",
  sky: "border-sky-200/20 bg-sky-300/10 text-sky-100",
} as const;

export function MagneticCard({ accent, description, icon, result, title }: ServiceCardProps) {
  const Icon = serviceIcons[icon];

  return (
    <article className="h-full">
      <div className="flex h-full min-h-64 flex-col rounded-lg border border-white/[0.1] bg-white/[0.035] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:border-[rgba(148,235,225,0.35)] hover:-translate-y-1">
        <span className={`mb-7 grid h-11 w-11 place-items-center rounded-md border ${accentStyles[accent]}`}>
          <Icon aria-hidden="true" size={21} strokeWidth={1.7} />
        </span>
        <h3 className="text-xl font-semibold leading-7 text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
        {result ? (
          <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-medium text-emerald-300">
            <TrendingUp aria-hidden="true" size={13} strokeWidth={2} />
            {result}
          </div>
        ) : (
          <span className="mt-auto pt-7 text-sm font-medium text-slate-400">
            Explorar servicio →
          </span>
        )}
      </div>
    </article>
  );
}