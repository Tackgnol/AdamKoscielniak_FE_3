import { component$ } from '@builder.io/qwik'
import Tag from '~/components/tag/tag'

interface TagsProps {
    tags: string[]
}

export default component$<TagsProps>(({ tags }) => (
    <div class="mt-auto flex flex-wrap flex-row gap-3">
        {tags.map((t) => (
            <Tag tag={t} />
        ))}
    </div>
))
