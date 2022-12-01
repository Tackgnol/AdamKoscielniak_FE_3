import { $, component$, useSignal } from '@builder.io/qwik'
import Accordion from '~/components/accordion'
import AccordionCard from '~/components/accordion/accordionCard'
import Running from '~/components/icons/running'
import ArrowLeft from '~/components/icons/arrow-left'

export default component$(() => {
    const active = useSignal<string>('1')

    const handleChange$ = $((panelId: string) => {
        active.value = panelId
    })

    return (
        <Accordion>
            <AccordionCard
                active={active.value === '1'}
                panelId="1"
                onChange$={handleChange$}
            >
                <div q:slot="icon">
                    <Running color="#FFF" width={32} height={32} />
                </div>
                <div q:slot="text" class="rotate-90">
                    Test
                </div>
                <div q:slot="contents">
                    <div class="flex flex-col">
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                    </div>
                </div>
            </AccordionCard>

            <AccordionCard
                active={active.value === '2'}
                panelId="2"
                onChange$={handleChange$}
            >
                <div q:slot="icon">
                    <ArrowLeft />
                </div>
                <div q:slot="contents">
                    <div className="flex flex-col">
                        <div>test2</div>
                        <div>test2</div>
                        <div>test2</div>
                    </div>
                </div>
            </AccordionCard>

            <AccordionCard
                active={active.value === '3'}
                panelId="3"
                onChange$={handleChange$}
            >
                <div q:slot="icon">
                    <ArrowLeft />
                </div>
                <div q:slot="contents">
                    <div className="flex flex-col">
                        <div>test2</div>
                        <div>test2</div>
                        <div>test2</div>
                    </div>
                </div>
            </AccordionCard>
        </Accordion>
    )
})
