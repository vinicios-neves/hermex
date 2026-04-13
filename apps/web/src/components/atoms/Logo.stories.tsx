import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Atoms/Logo",
  component: Logo,
  argTypes: {
    variant: { control: "radio", options: ["default", "inverted"] },
  },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: { variant: "default" },
};

export const Inverted: Story = {
  args: { variant: "inverted" },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#23384d", padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};
