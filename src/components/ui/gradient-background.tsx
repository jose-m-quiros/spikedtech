export function GradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[46rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(20,104,130,0.18),transparent_66%)]" />
      <div className="absolute -left-56 top-[34rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/[0.07] blur-[130px]" />
      <div className="absolute -right-52 top-[56rem] h-[36rem] w-[36rem] rounded-full bg-emerald-400/[0.06] blur-[150px]" />
      <div className="grid-surface grid-drift absolute inset-x-0 top-0 h-[58rem] opacity-70" />
    </div>
  );
}
