import { component$ } from '@builder.io/qwik'

interface ResponsibilitiesProps {
    responsibilities: string[]
}

export default component$<ResponsibilitiesProps>(({ responsibilities }) => (
    <ul class="list-disc list-inside mt-1">
        {responsibilities.map((r) => (
            <li class="m-1">{r}</li>
        ))}
    </ul>
))
