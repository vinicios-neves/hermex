import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VehicleCard } from "./VehicleCard";

const meta: Meta<typeof VehicleCard> = {
  title: "Molecules/VehicleCard",
  component: VehicleCard,
  argTypes: {
    name: { control: "text" },
    category: { control: "text" },
    pricePerDay: { control: "number" },
  },
};
export default meta;

type Story = StoryObj<typeof VehicleCard>;

export const Default: Story = {
  args: {
    imageSrc: "https://placehold.co/280x160/e7e7e7/444?text=HB20",
    name: "Hyundai HB20 1.0",
    category: "Hatch Manual",
    pricePerDay: 120,
  },
};

export const SUV: Story = {
  args: {
    imageSrc: "https://placehold.co/280x160/e7e7e7/444?text=Renegade",
    name: "Jeep Renegade 1.3",
    category: "Suv Automático",
    pricePerDay: 140,
  },
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
      <VehicleCard
        imageSrc="https://placehold.co/280x160/e7e7e7/444?text=HB20"
        name="Hyundai HB20 1.0"
        category="Hatch Manual"
        pricePerDay={120}
      />
      <VehicleCard
        imageSrc="https://placehold.co/280x160/e7e7e7/444?text=Honda+City"
        name="Honda City"
        category="Hatch Automático"
        pricePerDay={130}
      />
      <VehicleCard
        imageSrc="https://placehold.co/280x160/e7e7e7/444?text=Renegade"
        name="Jeep Renegade 1.3"
        category="Suv Automático"
        pricePerDay={140}
      />
    </div>
  ),
};
