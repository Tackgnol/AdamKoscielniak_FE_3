import { $, component$, PropFunction, Slot } from '@builder.io/qwik'

interface AccordionCardProps {
    active: boolean
    panelId: string
    onChange$?: PropFunction<(panel: string) => void>
}

export default component$<AccordionCardProps>(
    ({ active, onChange$, panelId }) => {
        const handleClick$ = $(() => {
            if (typeof onChange$ !== 'undefined') {
                onChange$(panelId)
            }
        })

        return (
            <button
                className={`min-h-14 border border-black focus:outline-none ${
                    active
                        ? 'bg-gray-400 cursor-auto'
                        : 'bg-gray-900 cursor-pointer'
                }`}
                onClick$={handleClick$}
            >
                <div className="flex items-center justify-between h-12 px-3 font-semibold ">
                    <div className="truncate text-white">
                        <Slot name="text" />
                    </div>
                    <Slot name="icon" />
                </div>
                <div
                    className={`max-h-0 overflow-hidden transition-all duration-3"max-h-giant"   ""             active ? 'max-h-giant' : ''
                    } bg-white`}
                >
                    <Slot name="contents" />
                </div>
            </button>
        )
    }
)
