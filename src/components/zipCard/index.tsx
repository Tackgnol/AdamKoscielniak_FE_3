import { $, component$, Slot, useSignal } from '@builder.io/qwik'
import MorphArrowLR from '~/components/icons/morphArrowLR'

interface ZipCardProps {
    firstHeader: string
    secondHeader?: string
};

export default component$<ZipCardProps>(({ firstHeader, secondHeader }) => {
    const showFirst = useSignal<boolean>(true)

    const handleClick$ = $(() => {
        showFirst.value = !showFirst.value
    })

    return (
        <div class="flex flex-col overflow-hidden w-full">
            <Slot name="static" />
            <div class="flex flex-row relative">
                <div
                    class={`flex flex-row ${
                        secondHeader ? 'w-[calc(100%_-_3.5rem)]' : 'w-full'
                    } flex-wrap relative ${
                        showFirst.value ? 'left-0' : 'left-14'
                    } `}
                >
                    <div
                        class={`w-full ${
                            showFirst.value
                                ? 'translate-x-0  opacity-100'
                                : '-translate-x-full  max-h-0 opacity-0'
                        } transition-all duration-500`}
                    >
                        <Slot name="first" />
                    </div>
                    <div
                        class={`${
                            showFirst.value
                                ? 'translate-x-full max-h-0 opacity-0'
                                : 'translate-x-0 opacity-100'
                        } transition-all duration-500 `}
                    >
                        <Slot name="second" />
                    </div>
                </div>
                {secondHeader && (
                    <div
                        class={`flex w-14 transition-all duration-500 absolute ${
                            showFirst.value
                                ? 'left-full -translate-x-full'
                                : 'left-0'
                        } h-full`}
                        onClick$={handleClick$}
                    >
                        <div class={`cursor-pointer bg-black text-white`}>
                            <div class=" flex flex-col justify-evenly m-auto w-full h-full">
                                <MorphArrowLR active={showFirst.value} />

                                <span class="rotate-90">
                                    {showFirst.value
                                        ? firstHeader
                                        : secondHeader}
                                </span>

                                <MorphArrowLR active={showFirst.value} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
})
