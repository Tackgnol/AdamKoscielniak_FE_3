import { component$, Resource } from '@builder.io/qwik'
import { RequestHandler, useEndpoint } from '@builder.io/qwik-city'
import { LoginCookie } from '~/models/dto'

export const onGet: RequestHandler = async ({ response, cookie }) => {
    const loginCookie = cookie.get('akLogin')?.json<LoginCookie>()
    if (!loginCookie?.token) {
        throw response.redirect('/login')
    }
}

export default component$(() => {
    const auth = useEndpoint()
    return (
        <Resource onResolved={() => <span>Dupa</span>} value={auth}></Resource>
    )
})
