import { $, component$ } from '@builder.io/qwik'
import Button from '~/components/button/button'

export default component$(() => {
    const first$ = $(() => {
        console.log('test')
    })

    return (
        <>
            <Button name="one" onClick$={first$} />
            <Button name="two" onClick$={() => {}} />
            <Button name="three" onClick$={() => {}} bordered={true} />
        </>
    )
})
