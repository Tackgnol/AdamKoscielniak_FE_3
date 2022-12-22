import {component$, Slot} from "@builder.io/qwik";

interface ColorWrapperProps {
  colorClass:string;
}
export default component$<ColorWrapperProps>(({colorClass}) => (
  <div class={`${colorClass} w-screen`}>
    <Slot/>
  </div>
))
