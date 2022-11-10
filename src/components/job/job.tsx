import { component$, useStore } from '@builder.io/qwik'
import Card from '~/components/card/card'
import { Job } from '~/models/dto'
import Responsibilities from '~/components/job/components/responsibilities'
import Tags from '~/components/tag/tags'
import ProjectsLG from '~/routes/sections/jobs/projectsLG'
import Sidebar from '~/components/sideBar/sidebar'

interface JobProps extends Job {}

export default component$<JobProps>(
    ({ Responsibilities: Res, Skills, time, Position, Employer, Projects }) => {
        const store = useStore({ show: false })
        return (
            <div class="flex flex-row ">
                <Card title={Employer} subTitle={time}>
                    <div class="italic text-2xl text-gray-400">{Position}</div>
                    <Responsibilities responsibilities={Res} />

                    <Tags tags={Skills} />
                    <Sidebar
                        icon="arrow"
                        onClick$={() => {
                            store.show = !store.show
                        }}
                        text="Projects"
                    />
                </Card>

                <ProjectsLG projects={Projects} show={store.show} />
            </div>
        )
    }
)
