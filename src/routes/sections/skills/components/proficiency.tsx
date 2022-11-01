import { component$ } from '@builder.io/qwik'

interface ProficiencyProps {
    name: string
    proficiency: number
}

export default component$<ProficiencyProps>(({ name, proficiency }) => {
    const proficiencyConverted = `${proficiency * 100}%`

    return (
        <div>
            <div class="flex flex-row justify-between">
                <div class="text-lg font-serif font-bold">{name}</div>
                <div>{proficiencyConverted}</div>
            </div>
            <div class="bg-gray-300 h-2">
                <div
                    class="bg-black h-full"
                    style={{ width: proficiencyConverted }}
                ></div>
            </div>
        </div>
    )
})
