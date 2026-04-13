import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavLink } from "./NavLink";

const meta: Meta<typeof NavLink> = {
  title: "Molecules/NavLink",
  component: NavLink,
  argTypes: {
    icon: { control: "text" },
    label: { control: "text" },
    href: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof NavLink>;

export const Cadastro: Story = {
  args: {
    icon: "account_circle",
    label: "Cadastro",
    href: "/cadastro",
  },
};

export const LoginLink: Story = {
  args: {
    icon: "login",
    label: "Login",
    href: "/login",
  },
};

export const AllLinks: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      <NavLink icon="account_circle" label="Cadastro" href="/cadastro" />
      <NavLink icon="login" label="Login" href="/login" />
    </div>
  ),
};
