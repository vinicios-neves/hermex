import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SocialIcon } from "./SocialIcon";

const meta: Meta<typeof SocialIcon> = {
  title: "Atoms/SocialIcon",
  component: SocialIcon,
  argTypes: {
    platform: { control: "radio", options: ["whatsapp", "instagram", "tiktok"] },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#23384d", padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof SocialIcon>;

export const WhatsApp: Story = {
  args: { platform: "whatsapp", href: "#" },
};

export const Instagram: Story = {
  args: { platform: "instagram", href: "#" },
};

export const TikTok: Story = {
  args: { platform: "tiktok", href: "#" },
};

export const AllPlatforms: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <SocialIcon platform="whatsapp" href="#" />
      <SocialIcon platform="instagram" href="#" />
      <SocialIcon platform="tiktok" href="#" />
    </div>
  ),
};
