import { $, component$, useSignal } from '@builder.io/qwik'
import { ProjectProps } from '~/models/props'
import Accordion from '~/components/accordion'
import AccordionCard from '~/components/accordion/accordionCard'
import Running from '~/components/icons/running'

export default component$<ProjectProps>(({ projects, show }) => {
    const active = useSignal<string>(projects[0]?.Title ?? '')

    const handleChange$ = $((panelId: string) => {
        active.value = panelId
    })

    return (
        <div
            class={`flex flex-row justify-between flex-wrap ${
                show ? 'h-100' : 'h-0'
            } transition-transform`}
        >
            <Accordion>
                {projects &&
                    projects.map((p, index) => (
                        <AccordionCard
                            onChange$={handleChange$}
                            active={p.Title === active.value}
                            panelId={p.Title}
                            key={p.Title}
                        >
                            <div q:slot="contents">
                                <div className="font-bold my-1">
                                    {' '}
                                    Project description
                                </div>
                                <div
                                    className="text-justify"
                                    dangerouslySetInnerHTML={p.Description}
                                />
                                <div className="font-bold my-1">Result</div>
                                <div dangerouslySetInnerHTML={p.Result} />
                            </div>
                            <div q:slot="icon" class="h-1/6">
                                <Running color="#FFF" width={32} height={32} />
                            </div>
                            <div q:slot="text" className="rotate-90 h-5/6">
                                {p.Title}
                            </div>
                        </AccordionCard>
                    ))}
            </Accordion>
        </div>
    )
})
