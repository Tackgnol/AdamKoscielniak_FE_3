import { component$ } from '@builder.io/qwik'
import Card from '~/components/card/card'
import { Job } from '~/models/dto'
import Responsibilities from '~/components/job/components/responsibilities'
import Tags from '~/components/tag/tags'
import ZipCard from '~/components/zipCard'
import ProjectsSM from '~/components/job/components/projectsSM'

interface JobProps extends Job {}

export default component$<JobProps>(
    ({ Responsibilities: Res, Skills, time, Position, Employer, Projects }) => {
        return (
            <div class="flex w-full flex-grow ">
                <ZipCard
                    firstHeader="Projects"
                    secondHeader={Projects.length ? 'Info' : undefined}
                >
                    <div class="w-full" q:slot="first">
                        <Card
                            title={Employer}
                            subTitle={time}
                            sideText="Projects"
                        >
                            <div class="italic text-2xl text-gray-400">
                                {Position}
                            </div>
                            <Responsibilities responsibilities={Res} />

                            <Tags tags={Skills} />
                        </Card>
                    </div>
                    <div class=" w-full" q:slot="second">
                        <ProjectsSM projects={Projects} show={true} />
                    </div>
                </ZipCard>
            </div>
        )
    }
)
