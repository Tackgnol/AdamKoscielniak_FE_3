import { component$, PropFunction } from '@builder.io/qwik'

interface ButtonProps {
    name: string
    onClick$: PropFunction<() => void>
    bordered?: boolean
}

export default component$<ButtonProps>(({ name, onClick$, bordered }) => (
    <button
        class={`transition-transform bg-black text-white ${
            bordered
                ? 'rounded-full border-white border-4'
                : 'rounded-none hover:border-b-2 '
        }  text-2xl px-3 min-w-[100px] max-h-20 `}
        onClick$={() => {
            onClick$()
        }}
    >
        {name}
    </button>
))
