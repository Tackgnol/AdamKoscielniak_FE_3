import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
    return (
        <div class="flex justify-center m-auto flex-wrap flex-col border-l-4 border-black px-7 w-3/4 gap-5">
            <Slot />
        </div>
    )
})
