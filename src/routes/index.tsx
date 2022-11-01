import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Hello from '~/routes/sections/hello/hello'
import About from '~/routes/sections/about/about'
import Overview from '~/routes/sections/overview/overview'
import Jobs from '~/routes/sections/jobs/jobs'
import Education from '~/routes/sections/education/education'
import Summary from '~/routes/sections/summary/summary'
import Skills from '~/routes/sections/skills/skills'
import Hobbies from '~/routes/sections/hobbies/hobbies'
import Cv from '~/routes/sections/CV/cv'

export default component$(() => {
    return (
        <>
            <Hello />
            <About />
            <Overview />
            <Summary />
            <Jobs />
            <Education />
            <Skills />
            <Hobbies />
            <Cv />
        </>
    )
})

export const head: DocumentHead = {
    title: 'Adam Kościelniak Home',
}
