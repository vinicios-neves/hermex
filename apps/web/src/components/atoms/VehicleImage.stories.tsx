import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VehicleImage } from "./VehicleImage";

const meta: Meta<typeof VehicleImage> = {
  title: "Atoms/VehicleImage",
  component: VehicleImage,
};
export default meta;

type Story = StoryObj<typeof VehicleImage>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/280x160/e7e7e7/444?text=HB20",
    alt: "Hyundai HB20",
  },
};
