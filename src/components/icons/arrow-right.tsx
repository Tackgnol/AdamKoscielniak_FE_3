import { component$ } from '@builder.io/qwik'

interface MorphArrorProps {
    morphed?: boolean
}

export default component$<MorphArrorProps>(({ morphed = false }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#fff"
        stroke="#fff"
        width={16}
        height={16}
        class={`morphArrow ${morphed ? 'reversed' : 'normal'}`}
    >
        <path />
    </svg>
))
