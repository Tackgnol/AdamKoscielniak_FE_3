import { component$, Resource, useResource$ } from '@builder.io/qwik'
import Timeline from '~/components/timeline/timeline'
import Title from '~/components/title/title'
import { BaseService } from '~/services/base'
import { School } from '~/models/dto'
import Entry from '~/components/timeline/entry'
import Edu from '~/routes/sections/education/edu'

export default component$(() => {
    const eduResource = useResource$(() => {
        const fetcher = new BaseService('education')
        return fetcher.getAll<School>()
    })
    return (
        <div class="bg-gray-100 py-5">
            <div class="m-auto">
                <Title title="My education" />
                <Resource
                    value={eduResource}
                    onResolved={(edu) => (
                        <Timeline>
                            {edu &&
                                edu.map((e) => (
                                    <Entry>
                                        <Edu {...e} />
                                    </Entry>
                                ))}
                        </Timeline>
                    )}
                    onPending={() => <span>Loading...</span>}
                    onRejected={() => <span>Error!</span>}
                />
            </div>
        </div>
    )
})
