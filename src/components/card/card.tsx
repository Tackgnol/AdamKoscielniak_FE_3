import { component$, PropFunction, Slot } from '@builder.io/qwik'
import MorphArrow from '~/components/icons/morphArrowLR'

type sideBarPosition = 'bottom' | 'right'

interface CardProps {
    title: string
    subTitle?: string
    onClick$?: PropFunction<() => void>
    sideText?: string
    sidebar?: sideBarPosition
    open?: boolean
}

// TODO: Clean this up, add a getSidebar styles function and move sidebar to a separate component
export default component$<CardProps>(
    ({
        title,
        subTitle,
        onClick$,
        sideText = 'Click me!',
        sidebar,
        open = false,
    }) => {
        const sidebarDirection =
            sidebar === 'right' ? 'rounded-l-2xl' : 'rounded-t-2xl'

        return (
            <div
                class={`flex w-full flex-grow min-h-14 ${
                    sidebar === 'bottom' ? 'flex-col' : 'flex-row'
                }`}
            >
                <div
                    class={`w-96 md:w-full sm:w-full border border-neutral-400 ${
                        sidebar ? sidebarDirection : 'rounded-2xl'
                    } p-7 flex flex-col h-full flex-grow`}
                >
                    {subTitle && (
                        <div class="text-lg text-gray-300 font-mono">
                            {subTitle}
                        </div>
                    )}
                    <div class="text-lg font-bold font-mono">{title}</div>
                    <Slot />
                </div>
                {sidebar && (
                    <div
                        className={`project__link flex bg-black text-white cursor-pointer ${
                            sidebar === 'right'
                                ? 'rounded-r-2xl'
                                : 'rounded-b-2xl'
                        } z-40`}
                        onClick$={() => {
                            onClick$ && onClick$()
                        }}
                    >
                        <div
                            className={`flex ${
                                sidebar === 'right' ? 'flex-col' : 'flex-row'
                            } justify-evenly items-center btn-text flex-grow`}
                        >
                            <MorphArrow active={open} />
                            <span
                                class={`${
                                    sidebar === 'right' ? 'rotate-90' : ''
                                }`}
                            >
                                {sideText}
                            </span>
                            <MorphArrow active={open} />
                        </div>
                    </div>
                )}
            </div>
        )
    }
)
