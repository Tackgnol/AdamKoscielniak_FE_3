import { component$ } from '@builder.io/qwik'

interface TagProps {
    tag: string
}

export default component$<TagProps>(({ tag }) => (
    <span class="bg-gray-300 text-white cursor-pointer rounded-full px-4 py-1 hover:bg-white hover:text-gray-300 transition ease-in-out duration-700">
        {tag}
    </span>
))
