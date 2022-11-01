import { component$, Slot } from '@builder.io/qwik'

interface CardProps {
    title: string
    subTitle?: string
}

export default component$<CardProps>(({ title, subTitle }) => (
    <div class="min-h-[300px] w-96 border border-neutral-400 rounded-2xl p-7 mx-4 mb-2 flex flex-col">
        {subTitle && (
            <div class="text-lg text-gray-300 font-mono">{subTitle}</div>
        )}
        <div class="text-lg font-bold font-mono">{title}</div>
        <Slot />
    </div>
))
