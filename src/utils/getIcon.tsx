import Running from '~/components/icons/running'
import D20 from '~/components/icons/d20'
import Puzzle from '~/components/icons/puzzle'
import Disc from '~/components/icons/disc'
import Medal from '~/components/icons/medal'
import Clock from '~/components/icons/clock'
import Ul from '~/components/icons/ul'
import File from '~/components/icons/file'
import { JSX } from '@builder.io/qwik/jsx-runtime'

export const getIcon = (prompt: string) => {
    let component: JSX.Element = <div />
    switch (prompt) {
        case 'fa-running':
            component = <Running />
            break
        case 'fa-dice-d20':
            component = <D20 />
            break
        case 'fa-puzzle-piece':
            component = <Puzzle />
            break
        case 'fa-compact-disc':
            component = <Disc />
            break
        case 'fa-medal':
            component = <Medal />
            break
        case 'fa-clock':
            component = <Clock />
            break
        case 'fa-list-ul':
            component = <Ul />
            break
        case 'fa-file-alt':
            component = <File />
            break
    }
    return component
}
