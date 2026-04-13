import Image from "next/image";

export interface VehicleImageProps {
  src: string;
  alt: string;
}

export function VehicleImage({ src, alt }: VehicleImageProps) {
  return (
    <div className="relative w-[280px] h-[160px] bg-neutral-details rounded overflow-hidden">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}
