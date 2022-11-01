import { component$, Slot } from '@builder.io/qwik'

interface HobbyProps {
    title: string
    description: string
}

export default component$<HobbyProps>(({ title, description }) => (
    <div class="flex flex-col items-center p-8 w-80">
        <div>
            <Slot />
        </div>
        <div class="my-5">{title}</div>
        <div class="font-serif text-gray-400 text-justify">{description}</div>
    </div>
))
