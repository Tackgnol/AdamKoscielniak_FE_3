import Running from '~/components/icons/running'
import D20 from '~/components/icons/d20'
import Puzzle from '~/components/icons/puzzle'
import Disc from '~/components/icons/disc'
import Medal from '~/components/icons/medal'
import Clock from '~/components/icons/clock'
import Ul from '~/components/icons/ul'
import File from '~/components/icons/file'
import { JSX } from '@builder.io/qwik/jsx-runtime'
import { IconProps } from '~/models/props'

export const getIcon = (prompt: string, props?: IconProps) => {
    let component: JSX.Element = <div />
    switch (prompt) {
        case 'fa-running':
            component = <Running {...props} />
            break
        case 'fa-dice-d20':
            component = <D20 {...props} />
            break
        case 'fa-puzzle-piece':
            component = <Puzzle {...props} />
            break
        case 'fa-compact-disc':
            component = <Disc {...props} />
            break
        case 'fa-medal':
            component = <Medal {...props} />
            break
        case 'fa-clock':
            component = <Clock {...props} />
            break
        case 'fa-list-ul':
            component = <Ul {...props} />
            break
        case 'fa-file-alt':
            component = <File {...props} />
            break
    }
    return component
}
