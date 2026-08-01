"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface ProcessStep {
  deliverable?: string;
  description: string;
  duration?: string;
  title: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ol className="relative space-y-3 before:absolute before:bottom-5 before:left-[1.45rem] before:top-5 before:w-px before:bg-white/[0.12] sm:before:left-[1.7rem]">
      {steps.map((step, index) => (
        <motion.li
          className="relative grid grid-cols-[3rem_1fr] gap-4 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          key={step.title}
          transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ amount: 0.3, once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="z-10 grid h-12 w-12 place-items-center rounded-md border border-cyan-200/20 bg-[#0b1319] text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(94,234,212,0.09)] sm:h-14 sm:w-14">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="rounded-lg border border-white/[0.09] bg-white/[0.025] px-5 py-4 backdrop-blur-md sm:px-6 sm:py-5">
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-400">{step.description}</p>
            {step.deliverable ? (
              <p className="mt-3 flex items-center gap-1.5 text-xs text-cyan-300/80">
                <Check aria-hidden="true" size={12} strokeWidth={2.5} />
                {step.deliverable}
              </p>
            ) : null}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}