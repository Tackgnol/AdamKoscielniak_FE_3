import { component$ } from '@builder.io/qwik'
import { ProjectProps } from '~/models/props'
import Project from '~/components/project/project'

export default component$<ProjectProps>(({ projects }) => (
    <div class="flex flex-row justify-between lg:visible">
        {projects &&
            projects.map((p) => (
                <Project
                    Description={p.Description}
                    Result={p.Result}
                    Title={p.Title}
                    Role={p.Role}
                />
            ))}
    </div>
))
