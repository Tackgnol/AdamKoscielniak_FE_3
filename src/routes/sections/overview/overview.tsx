import { component$ } from '@builder.io/qwik'
import Job from '~/components/job/job'
import Project from '~/components/project/project'

export default component$(() => (
    <div class="m-4">
        <div class="text-black text-2xl text-center mb-4 font-mono">
            My current work
        </div>
        <div class="flex justify-center m-auto flex-wrap">
            <Job
                Id={1}
                time="Aug 1, 2021 - Now"
                Employer="Sii Polska"
                Skills={['react']}
                Responsibilities={['React Front End developer']}
                Position="Experienced Software Engineer"
                Projects={[]}
            />
            <Project
                Title="Vampire Helper"
                Role="Developer"
                Description="Creating a Discord.js bot to help run Vampire the Masquarade games. Support narration events, skill tests, player messaging"
                Result="In progress"
            />
        </div>
    </div>
))
