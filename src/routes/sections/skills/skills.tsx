import { component$, Resource, useResource$ } from '@builder.io/qwik'
import { SkillGroup } from '~/models/dto'
import Skill from '~/routes/sections/skills/components/skill'
import Title from '~/components/title/title'
import { BaseService } from '~/services/base'

export default component$(() => {
    const skillResource = useResource$<SkillGroup[]>(() => {
        const fetcher = new BaseService('skill')
        return fetcher.getAll<SkillGroup>()
    })

    return (
        <div className="container m-auto py-9">
            <Title title="My skills" />
            <Resource
                value={skillResource}
                onResolved={(skills: SkillGroup[]) => (
                    <div className="flex flex-row flex-wrap justify-around gap-8">
                        {skills &&
                            skills.map((s) => (
                                <Skill Skills={s.Skills} Name={s.Name} />
                            ))}
                    </div>
                )}
                onRejected={() => <span>Error...</span>}
                onPending={() => <span>Loading...</span>}
            />
        </div>
    )
})
