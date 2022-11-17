import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <div
      onClick$={() => {
        document.cookie = JSON.stringify({
          akLogin: { token: '"a" refreshToken: '"b"},        })
;      }}
    >
      Hi!
    </div>
  )
;})
;
