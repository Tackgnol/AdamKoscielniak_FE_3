import { component$ } from '@builder.io/qwik'
import { Skill } from '~/models/dto'
import Proficiency from '~/routes/sections/skills/components/proficiency'

interface SkillProps {
    Name: string
    Skills: Skill[]
}

export default component$<SkillProps>(({ Name, Skills }) => (
    <div class="w-5/12 mx-7">
        <div class="font-serif text-3xl font-extrabold uppercase font-mono">
            {Name}
        </div>
        {Skills &&
            Skills.map((s) => (
                <Proficiency name={s.Name} proficiency={s.Proficiency} />
            ))}
    </div>
))
