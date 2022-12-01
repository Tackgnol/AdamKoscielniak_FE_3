import { component$, Resource, useResource$ } from '@builder.io/qwik'
import Timeline from '~/components/timeline/timeline'
import Title from '~/components/title/title'

import { BaseService } from '~/services/base'
import Entry from '~/components/timeline/entry'
import Job from '~/components/job/job'
import { Job as JobModel } from '~/models/dto'

export default component$(() => {
    const jobsResource = useResource$<JobModel[]>(async () => {
        const fetcher = new BaseService('experience')
        return fetcher.getAll<JobModel>()
    })

    return (
        <div class="container py-9 m-auto flex flex-col ">
            <Title title="My experience" />
            <Resource
                value={jobsResource}
                onResolved={(jobs) => {
                    return (
                        <Timeline>
                            {jobs &&
                                jobs.map((e) => (
                                    <Entry>
                                        <Job {...e} />
                                    </Entry>
                                ))}
                        </Timeline>
                    )
                }}
                onRejected={() => <span>Error!</span>}
                onPending={() => <span>Loading...</span>}
            />
        </div>
    )
})
