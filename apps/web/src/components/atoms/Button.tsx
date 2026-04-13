import { type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const variantClasses = {
  primary:
    "bg-brand-primary-pure hover:bg-brand-primary-dark text-white",
  secondary:
    "bg-brand-secondary-pure hover:bg-brand-secondary-dark text-white",
};

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded px-4 py-3 font-body text-base leading-[1.2] transition-colors cursor-pointer ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
