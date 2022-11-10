import { component$ } from '@builder.io/qwik'
import { Project } from '~/models/dto'
import Card from '~/components/card/card'

interface ProjectProps extends Project {
    show: boolean
    delay?: number
}

export default component$<ProjectProps>(
    ({ Title, Role, Result, Description, show = true, delay }) => (
        <div
            class={`${show ? 'projects__show' : ' projects__hidden'}`}
            style={
                typeof delay !== 'undefined'
                    ? {
                          transition: `all ${(delay + 1) * 0.25}s;`,
                      }
                    : {}
            }
        >
            <Card subTitle={Role} title={Title}>
                <div class="font-bold my-1">Project description</div>
                <div
                    class="text-justify"
                    dangerouslySetInnerHTML={Description}
                />
                <div class="font-bold my-1">Result</div>
                <div dangerouslySetInnerHTML={Result} />
            </Card>
        </div>
    )
)
