import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
    return (
        <div className="antialiased bg-gradient-to-b from-black to-gray-900 flex font-sans items-center justify-center min-h-screen px-12">
            <div className="flex h-72 items-stretch max-w-2xl min-w-md overflow-hidden w-full">
                <Slot />
            </div>
        </div>
    )
})
