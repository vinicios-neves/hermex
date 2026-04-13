export interface PriceProps {
  value: number;
  period?: string;
}

export function Price({ value, period = "/diária" }: PriceProps) {
  return (
    <div className="flex items-center">
      <span className="font-heading text-[25px] font-bold leading-[1.25]">
        R${value}
      </span>
      <span className="font-body text-[20px] leading-[1.2]">{period}</span>
    </div>
  );
}
