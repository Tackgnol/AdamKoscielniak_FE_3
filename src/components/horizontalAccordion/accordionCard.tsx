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
                    active ? 'active' : 'cursor-pointer'
                } relative bg-center bg-cover bg-white card  flex-grow min-w-max overflow-hidden transition-base p-px`}
                onClick$={() => {
                    handleClick$()
                }}
            >
                <div className="absolute bottom-0 flex items-stretch label left-0 transition-base content h-full ">
                    <div
                        class={`${
                            active ? 'bg-gray-400' : 'bg-gray-900'
                        } flex flex-col icon items-center justify-between mr-1 text-white w-10`}
                    >
                        <Slot name="text" />

                        <Slot name="icon" />
                    </div>
                    <div class="content flex justify-center">
                        <div class="opacity-0 relative transform transition-base translate-x-8 ">
                            <div class="absolute flex-grow w-96">
                                <Slot name="contents" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)
