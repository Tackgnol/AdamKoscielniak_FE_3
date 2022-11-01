import { component$, Resource, useResource$ } from '@builder.io/qwik'
import Badge from '~/components/badge/badge'
import Backgrounded from '~/components/containers/backgrounded'
import { BaseService } from '~/services/base'
import { Count } from '~/models/dto'
import { getIcon } from '~/utils/getIcon'

export default component$(() => {
    const countResource = useResource$<Count[]>(() => {
        const fetcher = new BaseService('summary/counts')
        return fetcher.getAll<Count>()
    })

    return (
        <div>
            <Resource
                value={countResource}
                onResolved={(counts: Count[]) => (
                    <Backgrounded bgClass="bg-summary">
                        {counts &&
                            counts.map((c) => {
                                const icon = getIcon(c.faIcon)
                                return (
                                    <Badge text={c.name} value={c.count}>
                                        {icon}
                                    </Badge>
                                )
                            })}
                    </Backgrounded>
                )}
                onRejected={() => <span>Error</span>}
                onPending={() => <span>Loading...</span>}
            />
        </div>
    )
})
