import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Price } from "./Price";

const meta: Meta<typeof Price> = {
  title: "Atoms/Price",
  component: Price,
  argTypes: {
    value: { control: "number" },
    period: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Price>;

export const Default: Story = {
  args: { value: 120 },
};

export const Expensive: Story = {
  args: { value: 320 },
};

export const CustomPeriod: Story = {
  args: { value: 800, period: "/semana" },
};
