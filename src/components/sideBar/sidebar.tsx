import { component$, PropFunction } from '@builder.io/qwik'

interface SidebarProps {
    onClick$: PropFunction<() => void>
    text: string
    icon?: string
}

export default component$<SidebarProps>(({ text, onClick$, icon }) => (
    <div class="relative w-full h-full p-0">
        <div
            class="h-12 w-12 bg-black text-white cursor-pointer right-0 top-0 absolute block"
            onClick$={() => {
                onClick$()
            }}
        >
            <div class=" flex justify-between">
                <i class={icon} />
                <span class="rotate-90">{text}</span>
                <i class={icon} />
            </div>
        </div>
    </div>
))
