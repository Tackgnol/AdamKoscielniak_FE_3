import { component$ } from '@builder.io/qwik'

interface TitleProps {
    title: string
}

export default component$<TitleProps>(({ title }) => (
    <div className="text-2xl text-center font-mono my-6">{title}</div>
))
