import Image from "next/image";

const platformLabels = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  tiktok: "TikTok",
} as const;

export interface SocialIconProps {
  platform: keyof typeof platformLabels;
  href: string;
}

export function SocialIcon({ platform, href }: SocialIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={`/icons/${platform}.svg`}
        alt={platformLabels[platform]}
        width={32}
        height={32}
      />
    </a>
  );
}
