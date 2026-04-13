import Image from "next/image";

export interface LogoProps {
  variant?: "default" | "inverted";
}

export function Logo({ variant = "default" }: LogoProps) {
  const src =
    variant === "default" ? "/logo.svg" : "/logo-inverted.svg";

  return (
    <Image
      src={src}
      alt="Hermex"
      width={180}
      height={60}
      priority
    />
  );
}
