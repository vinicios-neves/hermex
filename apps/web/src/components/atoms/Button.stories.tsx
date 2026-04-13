import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary"] },
    fullWidth: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "Ver detalhes" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Buscar" },
};

export const FullWidth: Story = {
  args: { variant: "primary", fullWidth: true, children: "Ver detalhes" },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Button variant="primary">Ver detalhes</Button>
      <Button variant="secondary">Buscar</Button>
    </div>
  ),
};
