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
        <div class="flex m-auto w-full">
            <Accordion>
                {projects &&
                    projects.map((p) => (
                        <AccordionCard
                            onChange$={handleChange$}
                            active={active.value === p.Title}
                            panelId={p.Title}
                        >
                            <div q:slot="text">{p.Title}</div>
                            <div q:slot="contents" class="p-3">
                                <div className="font-bold">
                                    Project description
                                </div>
                                <div
                                    className="text-justify"
                                    dangerouslySetInnerHTML={p.Description}
                                />
                                <div className="font-bold p-1">Result</div>
                                <div dangerouslySetInnerHTML={p.Result} />
                            </div>
                        </AccordionCard>
                    ))}
            </Accordion>
        </div>
    )
})
