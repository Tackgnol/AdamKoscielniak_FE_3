import { component$ } from '@builder.io/qwik'
import { Project } from '~/models/dto'
import Card from '~/components/card/card'

interface ProjectProps extends Project {
    show: boolean
    delay?: number
}

export default component$<ProjectProps>(
    ({ Result, Description, Role, Title }) => (
        <Card subTitle={Role} title={Title}>
            <div class="font-bold my-1">Project description</div>
            <div class="text-justify" dangerouslySetInnerHTML={Description} />
            <div class="font-bold my-1">Result</div>
            <div dangerouslySetInnerHTML={Result} />
        </Card>
    )
)
