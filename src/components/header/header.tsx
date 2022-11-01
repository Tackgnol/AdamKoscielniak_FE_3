import { component$ } from '@builder.io/qwik'
import AK from '~/../public/AK.png'
import Menu from '~/components/menu/menu'

export default component$(() => {
    return (
        <div class="sticky top-0 w-full min-h-[80px] bg-black text-white flex flex-row justify-between z-50">
            <div class="my-auto px-6">
                <img
                    src={AK}
                    class="w-49 h-45"
                    alt="Adams Initials as a logo"
                />
            </div>
            <div class=" my-auto px-6">
                <Menu />
            </div>
        </div>
    )
})
