import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
    return (
        <div className="antialiased bg-gradient-to-b to-gray-900 flex font-sans items-center justify-center px-12">
            <div className="flex items-stretch min-h-full max-w-2xl min-w-md overflow-hidden w-full">
                <Slot />
            </div>
        </div>
    )
})
