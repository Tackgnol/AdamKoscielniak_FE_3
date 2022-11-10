import { component$ } from '@builder.io/qwik'
import { ProjectProps } from '~/models/props'
import Project from '~/components/project/project'

export default component$<ProjectProps>(({ projects, show }) => (
    <div class={`flex flex-row justify-between `}>
        {projects &&
            projects.map((p, index) => (
                <Project
                    Description={p.Description}
                    Result={p.Result}
                    Title={p.Title}
                    Role={p.Role}
                    show={show}
                    delay={index}
                />
            ))}
    </div>
))
