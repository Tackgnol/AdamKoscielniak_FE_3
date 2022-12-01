import { component$, PropFunction, Slot } from '@builder.io/qwik'
import MorphArrow from '~/components/icons/morphArrow'

interface CardProps {
    title: string
    subTitle?: string
    onClick$?: PropFunction<() => void>
    sideText?: string
    showSidebar?: boolean
    open?: boolean
}

export default component$<CardProps>(
    ({
        title,
        subTitle,
        onClick$,
        sideText = 'Click me!',
        showSidebar = false,
        open = false,
    }) => (
        <div class="flex flex-row">
            <div
                class={`min-h-[300px] w-96 border border-neutral-400 ${
                    showSidebar ? 'rounded-l-2xl' : 'rounded-2xl'
                } p-7 ml-4 mb-2 flex flex-col h-fit`}
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
                    className="project__link flex bg-black text-white cursor-pointer rounded-r-2xl z-40"
                    onClick$={() => {
                        onClick$ && onClick$()
                    }}
                >
                    <div className="flex flex-col justify-evenly items-center btn-text">
                        <MorphArrow active={open} />
                        <span class="rotate-90 ">{sideText}</span>
                        <MorphArrow active={open} />
                    </div>
                </div>
            )}
        </div>
    )
)
