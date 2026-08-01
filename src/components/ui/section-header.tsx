import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  description?: string;
  eyebrow: string;
  icon: LucideIcon;
  title: string;
}

export function SectionHeader({
  description,
  eyebrow,
  icon: Icon,
  title,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-cyan-200">
        <Icon aria-hidden="true" size={15} strokeWidth={2} />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
