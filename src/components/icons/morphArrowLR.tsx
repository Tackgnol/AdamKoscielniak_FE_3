import { component$ } from '@builder.io/qwik'

interface MorphArrowProps {
    active: boolean
}

export default component$<MorphArrowProps>(({ active }) => (
    <span className={`morphArrow ${active ? 'left' : 'right'}`}>
        <span />
        <span />
        <span />
        <span />
        <span />
    </span>
))
