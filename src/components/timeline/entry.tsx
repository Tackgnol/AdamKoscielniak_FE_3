import { component$, Slot } from '@builder.io/qwik'

export default component$(() => (
    <div class="flex w-full point flex-wrap">
        <Slot />
    </div>
))
