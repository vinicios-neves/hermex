import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Molecules/Dropdown",
  component: Dropdown,
  argTypes: {
    label: { control: "text" },
    variant: { control: "radio", options: ["default", "outlined"] },
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const CategoryFilter: Story = {
  args: {
    label: "Selecione a categoria",
    variant: "default",
  },
};

export const TimeSelector: Story = {
  args: {
    label: "Horário",
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
