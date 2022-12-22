import { $, component$, Slot, useSignal } from '@builder.io/qwik'
import MorphArrowTB from '~/components/icons/MorphArrowTB'

interface ZipCardProps {
    firstHeader: string
    secondHeader: string
}
export default component$<ZipCardProps>(({ firstHeader, secondHeader }) => {
    const showFirst = useSignal<boolean>(true)

    const handleClick$ = $(() => {
        showFirst.value = !showFirst.value
    })

    return (
        <div class={`relative w-full h-full bg-gray-100`}>
            <div
                class={`absolute overflow-hidden h-full w-full ${
                    showFirst.value
                        ? 'opacity-100 top-0'
                        : 'opacity-0 top-full h-0'
                } transition-all   duration-500`}
            >
                <Slot name="first" />
            </div>
            <div
                className={`absolute overflow-hidden h-full w-full ${
                    showFirst.value
                        ? 'opacity-0 top-full h-0'
                        : 'opacity-100 top-0'
                } transition-all duration-500`}
            >
                <Slot name="second" />
            </div>
            <div
                onClick$={handleClick$}
                class={`absolute ${
                    showFirst.value ? 'bottom-0' : 'bottom-80'
                } duration-500 w-full bg-black `}
            >
                <div
                    className={`flex flex-row justify-evenly items-center btn-text flex-grow ${
                        showFirst.value ? ' rounded-b-2xl' : ' rounded-t-2xl'
                    } duration-500 h-12`}
                >
                    <MorphArrowTB active={showFirst.value} />
                    <span>{showFirst.value ? firstHeader : secondHeader}</span>
                    <MorphArrowTB active={showFirst.value} />
                </div>
            </div>
        </div>
    )
})
