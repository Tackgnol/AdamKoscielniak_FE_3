import { component$ } from '@builder.io/qwik'

interface MorphArrowProps {
    active: boolean
}

export default component$<MorphArrowProps>(({ active }) => (
    <span className={`morphArrowTB ${active ? 'active' : ''}`}>
        <span />
        <span />
    </span>
))
