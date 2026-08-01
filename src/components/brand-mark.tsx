import Image from "next/image";

interface BrandMarkProps {
  className?: string;
  showWordmark?: boolean;
}

export function BrandMark({
  className = "",
  showWordmark = true,
}: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-md border border-white/20 bg-white shadow-[0_0_24px_rgba(94,234,212,0.12)]">
        <Image
          alt=""
          className="scale-[1.9] object-cover"
          height={1024}
          priority
          src="/spikedtech-logo.png"
          width={1024}
        />
      </span>
      {showWordmark ? (
        <span className="text-sm font-extrabold text-white sm:text-base">
          SPIKEDTECH
        </span>
      ) : null}
    </div>
  );
}
