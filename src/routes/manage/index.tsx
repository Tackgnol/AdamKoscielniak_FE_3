
import {component$, Resource} from "@builder.io/qwik";
import {RequestHandler, useEndpoint} from "@builder.io/qwik-city";

export const onGet:RequestHandler= async ({  response }) => {
    throw response.redirect('/login')
}

export default component$(() => {
  const auth = useEndpoint();
  return <Resource onResolved={() => (<span>Dupa</span>)} value={auth}></Resource>
})
