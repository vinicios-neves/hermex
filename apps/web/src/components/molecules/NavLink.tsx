import Link from "next/link";
import { Icon } from "@/components/atoms";

export interface NavLinkProps {
  icon: string;
  label: string;
  href: string;
}

export function NavLink({ icon, label, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-neutral-text text-base leading-normal"
    >
      <Icon name={icon} />
      <span>{label}</span>
    </Link>
  );
}
