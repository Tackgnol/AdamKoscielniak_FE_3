import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
    return (
        <div className="antialiased bg-gradient-to-b to-gray-900 flex font-sans items-center justify-center pl-12 w-full">
            <div className="flex items-stretch min-w-md overflow-hidden w-full h-full flex-grow">
                <Slot />
            </div>
        </div>
    )
})
