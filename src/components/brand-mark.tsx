import Image from "next/image";
import icon from "@/app/icon.png";

export function BrandMark() {
  return (
    <span className="brand">
      <Image src={icon} alt="" width={35} height={35} />
      <span>SPIKEDTECH</span>
    </span>
  );
}
