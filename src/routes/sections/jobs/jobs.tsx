import { component$, Resource, useResource$ } from '@builder.io/qwik'
import Timeline from '~/components/timeline/timeline'
import Title from '~/components/title/title'

import { BaseService } from '~/services/base'
import Entry from '~/components/timeline/entry'
import Job from '~/components/job/job'
import { Job as JobModel } from '~/models/dto'
import JobSM from '~/components/job/jobSM'

export default component$(() => {
    const jobsResource = useResource$<JobModel[]>(async () => {
        const fetcher = new BaseService('experience')
        return fetcher.getAll<JobModel>()
    })

    return (
        <div class="mx-auto container flex flex-col h-full w-full my-4">
            <Title title="My experience" />
            <Resource
                value={jobsResource}
                onResolved={(jobs) => {
                    return (
                        <Timeline>
                            {jobs &&
                                jobs.map((e) => (
                                    <>
                                        <Entry>
                                            <div class="hidden w-full xl:flex 2xl:flex lg:flex">
                                                <Job {...e} />
                                            </div>
                                        </Entry>
                                        <div class="flex w-full xl:hidden 2xl:hidden lg:hidden">
                                            <JobSM {...e} />
                                        </div>
                                    </>
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
