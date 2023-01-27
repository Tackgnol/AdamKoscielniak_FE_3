import { $, component$, useSignal } from '@builder.io/qwik'
import Accordion from '~/components/Accordion'
import AccordionCard from '~/components/Accordion/accordionCard'
import Briefcase from '~/components/icons/briefcase'
import ZipCard from '~/components/zipCard'

export default component$(() => {
    const active = useSignal<string>('1')

    const handleChange$ = $((panelId: string) => {
        active.value = panelId
    })

    return (
        <div class="container m-auto w-96 h-96 pt-9">
            <ZipCard firstHeader="Projects" secondHeader="Info">
                <div q:slot="static">SII Polska</div>
                <div q:slot="first">
                    <div className="lg:w-96 w-full p-7 flex flex-col">
                        <div className="text-lg font-bold font-mono">GFT</div>
                        <div className="italic text-2xl text-gray-400">
                            Experienced Software Engineer
                        </div>

                        <ul className="list-disc list-inside mt-1">
                            <li className="m-1">React Developer</li>
                            <li className="m-1">Python Developer</li>
                            <li className="m-1">
                                Managing the cloud build of the front end
                            </li>
                        </ul>
                    </div>
                </div>
                <div q:slot="second">
                    <Accordion>
                        <AccordionCard
                            onChange$={handleChange$}
                            active={active.value === '1'}
                            panelId="1"
                        >
                            <div
                                q:slot="contents"
                                className="transform transition-base"
                            >
                                <>
                                    <div className="font-bold my-1">
                                        Project description
                                    </div>
                                    <div
                                        className="text-justify"
                                        dangerouslySetInnerHTML={`Description`}
                                    />
                                    <div className="font-bold my-1">Result</div>
                                    <div dangerouslySetInnerHTML={`Result`} />
                                </>
                            </div>
                            <div q:slot="icon">
                                <Briefcase
                                    color="#FFF"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div q:slot="text">{`Info`}</div>
                        </AccordionCard>
                        <AccordionCard
                            onChange$={handleChange$}
                            active={active.value == '2'}
                            panelId="2"
                        >
                            <div
                                q:slot="contents"
                                className="transform transition-base"
                            >
                                <>
                                    <div className="font-bold my-1">
                                        Project description
                                    </div>
                                    <div
                                        className="text-justify"
                                        dangerouslySetInnerHTML={`Description`}
                                    />
                                    <div className="font-bold my-1">Result</div>
                                    <div dangerouslySetInnerHTML={`Result`} />
                                </>
                            </div>
                            <div q:slot="icon">
                                <Briefcase
                                    color="#FFF"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div q:slot="text">{`Projects`}</div>
                        </AccordionCard>
                    </Accordion>
                </div>
            </ZipCard>
        </div>
    )
})
