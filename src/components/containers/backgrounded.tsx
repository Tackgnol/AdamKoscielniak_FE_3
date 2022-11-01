import { component$, Slot } from '@builder.io/qwik'

interface BackgroundedProps {
    bgClass: string
}

export default component$<BackgroundedProps>(({ bgClass }) => (
    <div
        className={`flex ${bgClass} min-h-[360px]  w-full  py-6  bg-no-repeat bg-cover`}
    >
        <div class="container flex flex-row justify-between text-center flex-wrap gap-4 m-auto">
            <Slot />
        </div>
    </div>
))
