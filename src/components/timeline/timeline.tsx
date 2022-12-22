import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
    return (
        <div class="flex justify-center m-auto flex-wrap py-3 flex-col border-l-4 border-black w-full xl:w-10/12 2xl:w-3/4 px-5 gap-5">
            <Slot />
        </div>
    )
})
