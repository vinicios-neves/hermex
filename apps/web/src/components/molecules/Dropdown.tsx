import { Icon } from "@/components/atoms";

export interface DropdownProps {
  label: string;
  variant?: "default" | "outlined";
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  default:
    "border-brand-secondary-pure text-brand-secondary-pure",
  outlined:
    "border-white text-white",
};

export function Dropdown({
  label,
  variant = "default",
  className = "",
  onClick,
}: DropdownProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 rounded border px-4 py-3 text-base leading-[1.2] cursor-pointer ${variantClasses[variant]} ${className}`}
    >
      <span className="flex-1 text-left">{label}</span>
      <Icon name="keyboard_arrow_down" className="shrink-0" />
    </button>
  );
}
