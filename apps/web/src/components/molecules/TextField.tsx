import { type InputHTMLAttributes } from "react";
import { Icon } from "@/components/atoms";

type TextFieldOwnProps = {
  icon: string;
  variant?: "default" | "outlined";
};

export type TextFieldProps = TextFieldOwnProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof TextFieldOwnProps>;

const variantClasses = {
  default:
    "border-neutral-details text-neutral-text placeholder:text-neutral-text",
  outlined:
    "border-white text-white placeholder:text-white",
};

export function TextField({
  icon,
  variant = "default",
  className = "",
  ...inputProps
}: TextFieldProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded border px-4 py-3 ${variantClasses[variant]} ${className}`}
    >
      <Icon name={icon} className="shrink-0" />
      <input
        className="w-full bg-transparent text-base leading-[1.2] outline-none placeholder:opacity-100"
        {...inputProps}
      />
    </div>
  );
}
