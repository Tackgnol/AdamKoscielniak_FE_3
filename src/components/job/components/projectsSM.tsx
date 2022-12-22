import { $, component$, useSignal } from '@builder.io/qwik'
import Accordion from '~/components/Accordion'
import AccordionCard from '~/components/Accordion/accordionCard'
import { ProjectProps } from '~/models/props'

export default component$<ProjectProps>(({ projects }) => {
    const active = useSignal<string>(projects[0]?.Title)

    const handleChange$ = $((panelId: string) => {
        active.value = panelId
    })

    return (
        <div class="container m-auto w-96 h-96 pt-9">
            <Accordion>
                {projects &&
                    projects.map((p) => (
                        <AccordionCard
                            onChange$={handleChange$}
                            active={active.value === p.Title}
                            panelId={p.Title}
                        >
                            <div className="font-bold my-1">
                                Project description
                            </div>
                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={p.Description}
                            />
                            <div className="font-bold my-1">Result</div>
                            <div dangerouslySetInnerHTML={p.Result} />
                        </AccordionCard>
                    ))}
            </Accordion>
        </div>
    )
})
