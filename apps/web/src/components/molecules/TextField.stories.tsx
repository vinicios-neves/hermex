import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Molecules/TextField",
  component: TextField,
  argTypes: {
    icon: { control: "text" },
    placeholder: { control: "text" },
    variant: { control: "radio", options: ["default", "outlined"] },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const SearchDefault: Story = {
  args: {
    icon: "search",
    placeholder: "O que você procura?",
    variant: "default",
  },
};

export const LocationOutlined: Story = {
  args: {
    icon: "location_on",
    placeholder: "Local de retirada",
    variant: "outlined",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#e28634", padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export const DateOutlined: Story = {
  args: {
    icon: "calendar_month",
    placeholder: "Data",
    variant: "outlined",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#e28634", padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};
