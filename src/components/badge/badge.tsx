import { component$, Slot } from '@builder.io/qwik'

interface BadgeProps {
    text: string
    value: number
}

export default component$<BadgeProps>(({ text, value }) => (
    <div class="w-52 h-52 border-dashed border-white rounded-2xl text-white border-2 flex flex-col justify-center m-auto gap-y-2 p-3">
        <div class="m-auto">
            <Slot />
        </div>
        <div class="font-mono text-5xl font-bold">{value}</div>
        <div class="font-mono text-base">{text}</div>
    </div>
))
