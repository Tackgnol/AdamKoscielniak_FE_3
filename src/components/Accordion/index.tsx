import { component$, Slot } from '@builder.io/qwik'

export default component$(() => (
    <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-full">
            <Slot />
        </div>
    </div>
))
