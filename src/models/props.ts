import { Project } from '~/models/dto'

export interface ProjectProps {
    show: boolean
    projects: Project[]
}

export interface IconProps {
    width?: number
    height?: number
    color?: string
}
