import { $, component$, useSignal } from '@builder.io/qwik'
import { ProjectProps } from '~/models/props'
import Accordion from '~/components/horizontalAccordion'
import AccordionCard from '~/components/horizontalAccordion/accordionCard'
import Briefcase from '~/components/icons/briefcase'

export default component$<ProjectProps>(({ projects, show }) => {
    const active = useSignal<string>(projects[0]?.Title ?? '')

    const handleChange$ = $((panelId: string) => {
        active.value = panelId
    })

    return (
        <div
            class={`invisible lg:visible flex flex-row justify-between flex-wrap transition-all duration-500 ${
                show
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-3/4'
            } w-full flex-grow 2xl:w-1/2 z-0`}
        >
            <Accordion>
                {projects &&
                    projects.map((p) => (
                        <AccordionCard
                            onChange$={handleChange$}
                            active={p.Title === active.value}
                            panelId={p.Title}
                            key={p.Title}
                        >
                            <div
                                q:slot="contents"
                                class="transform transition-base p-3"
                            >
                                <>
                                    <div className="font-bold my-1">
                                        Project description
                                    </div>
                                    <div
                                        className="text-justify"
                                        dangerouslySetInnerHTML={p.Description}
                                    />
                                    <div className="font-bold my-1">Result</div>
                                    <div dangerouslySetInnerHTML={p.Result} />
                                </>
                            </div>
                            <div q:slot="icon" class="mb-3">
                                <Briefcase
                                    color="#FFF"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div
                                q:slot="text"
                                className="rotate-90 w-max mt-40"
                            >
                                {p.Title}
                            </div>
                        </AccordionCard>
                    ))}
            </Accordion>
        </div>
    )
})
