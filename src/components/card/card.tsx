import { component$, PropFunction, Slot } from '@builder.io/qwik'
import ArrowRight from '~/components/icons/arrow-right'

interface CardProps {
    title: string
    subTitle?: string
    onClick$?: PropFunction<() => void>
    sideText?: string
    showSidebar?: boolean
}

export default component$<CardProps>(
    ({
        title,
        subTitle,
        onClick$,
        sideText = 'Click me!',
        showSidebar = false,
    }) => (
        <div class="flex flex-row">
            <div
                class={`min-h-[300px] w-96 border border-neutral-400 ${
                    showSidebar ? 'rounded-l-2xl' : 'rounded-2xl'
                } p-7 ml-4 mb-2 flex flex-col`}
            >
                {subTitle && (
                    <div class="text-lg text-gray-300 font-mono">
                        {subTitle}
                    </div>
                )}
                <div class="text-lg font-bold font-mono">{title}</div>
                <Slot />
            </div>
            {showSidebar && (
                <div
                    className="flex bg-black text-white cursor-pointer rounded-r-2xl h-[97.5%] z-40"
                    onClick$={() => {
                        onClick$ && onClick$()
                    }}
                >
                    <div className="flex flex-col justify-evenly items-center">
                        <ArrowRight />
                        <span class="rotate-90 ">{sideText}</span>
                        <ArrowRight />
                    </div>
                </div>
            )}
        </div>
    )
)
