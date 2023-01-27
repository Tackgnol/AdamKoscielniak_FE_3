import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
    return (
        <div class="flex flex-grow justify-center ml-2 py-3 flex-col border-l-4 border-black w-full xl:w-10/12 2xl:w-[90%] px-5 gap-5">
            <Slot />
        </div>
    )
})
