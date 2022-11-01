import { component$, Slot } from '@builder.io/qwik'
import Header from '../components/header/header'
import Footer from '~/components/footer/footer'

export default component$(() => {
    return (
        <>
            <main class="flex flex-col aspect-auto w-screen">
                <Header />
                <section>
                    <Slot />
                </section>
                <Footer />
            </main>
        </>
    )
})
