import { component$ } from '@builder.io/qwik'
import Backgrounded from '~/components/containers/backgrounded'
import Button from '~/components/button/button'

export default component$(() => (
    <Backgrounded bgClass="bg-footer">
        <div class="m-auto">
            <Button name="Download CV" onClick$={() => {}} bordered={true} />
        </div>
    </Backgrounded>
))
