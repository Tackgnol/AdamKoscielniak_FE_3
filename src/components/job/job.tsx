import { component$, useStore } from '@builder.io/qwik'
import Card from '~/components/card/card'
import { Job } from '~/models/dto'
import Responsibilities from '~/components/job/components/responsibilities'
import Tags from '~/components/tag/tags'
import ProjectsLG from '~/routes/sections/jobs/projectsLG'

interface JobProps extends Job {}

export default component$<JobProps>(
    ({ Responsibilities: Res, Skills, time, Position, Employer, Projects }) => {
        const store = useStore({ show: false })
        return (
            <div class="flex flex-row ">
                <Card
                    title={Employer}
                    subTitle={time}
                    onClick$={() => {
                        store.show = !store.show
                    }}
                    sideText="Projects"
                    showSidebar={Projects.length > 0}
                    open={store.show}
                >
                    <div class="italic text-2xl text-gray-400">{Position}</div>
                    <Responsibilities responsibilities={Res} />

                    <Tags tags={Skills} />
                </Card>

                <ProjectsLG projects={Projects} show={store.show} />
            </div>
        )
    }
)
