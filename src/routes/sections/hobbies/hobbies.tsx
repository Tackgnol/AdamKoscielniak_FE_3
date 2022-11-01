import { component$, Slot } from "@builder.io/qwik";

interface HobbyProps {
  title: string;
  description: string;
}

export default component$<HobbyProps>(({ title, description }) => (
  <div>
    <div>
      <Slot />
    </div>
    <div>{title}</div>
    <div>{description}</div>
  </div>
));
