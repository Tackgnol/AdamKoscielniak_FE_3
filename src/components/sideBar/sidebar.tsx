import { component$, PropFunction } from '@builder.io/qwik'
import MorphArrow from '~/components/icons/morphArrowLR'

interface SidebarProps {
    onClick$: PropFunction<() => void>
    text: string
    active?: boolean
}

export default component$<SidebarProps>(
    ({ text, onClick$, active = false }) => (
        <div class="relative w-full h-full p-0">
            <div
                class="h-12 w-12 bg-black text-white cursor-pointer right-0 top-0 absolute block"
                onClick$={() => {
                    onClick$()
                }}
            >
                <div class=" flex justify-between">
                    <MorphArrow active={active} />
                    <span class="rotate-90">{text}</span>
                    <MorphArrow active={active} />
                </div>
            </div>
        </div>
    )
)
