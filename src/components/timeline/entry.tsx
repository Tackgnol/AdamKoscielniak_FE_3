import { component$, Slot } from '@builder.io/qwik'

export default component$(() => (
    <div class="point">
        <Slot />
    </div>
))
