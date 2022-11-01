import { component$, Resource, useResource$ } from '@builder.io/qwik'
import Hobby from '~/routes/sections/hobbies/components/hobby'
import { Hobby as HobbyModel } from '~/models/dto'
import Title from '~/components/title/title'
import { BaseService } from '~/services/base'
import { getIcon } from '~/utils/getIcon'

export default component$(() => {
    const hobbyResource = useResource$<HobbyModel[]>(() => {
        const fetcher = new BaseService('hobby')
        return fetcher.getAll<HobbyModel>()
    })

    return (
        <div class=" bg-gray-100 py-9">
            <div className="container m-auto">
                <Title title="My hobbies" />
                <Resource
                    value={hobbyResource}
                    onResolved={(hobbies) => (
                        <div className="flex flex-row justify-between flex-wrap mx-auto">
                            {hobbies &&
                                hobbies.map((h) => {
                                    const icon = getIcon(h.FAIcon)
                                    return (
                                        <Hobby
                                            title={h.Name}
                                            description={h.Description}
                                        >
                                            {icon}
                                        </Hobby>
                                    )
                                })}
                        </div>
                    )}
                />
            </div>
        </div>
    )
})
