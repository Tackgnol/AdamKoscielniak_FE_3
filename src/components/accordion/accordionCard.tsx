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
            <div
                className={`${
                    active ? 'active' : ''
                } bg-center bg-cover bg-white card cursor-pointer flex-grow m-2 min-w-14 overflow-hidden relative rounded-3xl transition-base`}
                onClick$={() => {
                    handleClick$()
                }}
            >
                <div className="absolute bg-gradient-to-b bottom-0 from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-base translate-y-1/2 z-10"></div>
                <div className="absolute bottom-0 flex label left-0 mb-3 ml-2 transition-base z-20">
                    <div>
                        <Slot name="text" />
                        <div className="bg-gray-900 flex flex-col h-10 icon items-center justify-center mr-3 rounded-full text-black-500 w-10">
                            <Slot name="icon" />
                        </div>
                    </div>
                    <Slot name="contents" />
                </div>
            </div>
        )
    }
)
