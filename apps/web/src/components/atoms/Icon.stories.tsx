import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    name: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Search: Story = { args: { name: "search" } };
export const AccountCircle: Story = { args: { name: "account_circle" } };
export const Login: Story = { args: { name: "login" } };
export const CalendarMonth: Story = { args: { name: "calendar_month" } };
export const LocationOn: Story = { args: { name: "location_on" } };
export const KeyboardArrowDown: Story = { args: { name: "keyboard_arrow_down" } };

export const Gallery: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      {["search", "account_circle", "login", "calendar_month", "location_on", "keyboard_arrow_down"].map(
        (name) => (
          <div key={name} style={{ textAlign: "center" }}>
            <Icon name={name} />
            <div style={{ fontSize: 12, marginTop: 4 }}>{name}</div>
          </div>
        ),
      )}
    </div>
  ),
};
