import { Button, VehicleImage, Price } from "@/components/atoms";

export interface VehicleCardProps {
  imageSrc: string;
  name: string;
  category: string;
  pricePerDay: number;
  onDetailsClick?: () => void;
}

export function VehicleCard({
  imageSrc,
  name,
  category,
  pricePerDay,
  onDetailsClick,
}: VehicleCardProps) {
  return (
    <div className="flex w-[360px] flex-col items-center gap-4 rounded bg-neutral-white p-8 shadow-elevation-2">
      <VehicleImage src={imageSrc} alt={name} />

      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-body text-[20px] leading-[1.25] text-black">
            {name}
          </h3>
          <p className="font-body text-base leading-[1.2] text-black">
            {category}
          </p>
        </div>

        <Price value={pricePerDay} />

        <Button variant="primary" fullWidth onClick={onDetailsClick}>
          Ver detalhes
        </Button>
      </div>
    </div>
  );
}
