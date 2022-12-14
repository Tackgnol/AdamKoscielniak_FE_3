import { component$ } from '@builder.io/qwik'
import { IconProps } from '~/models/props'
import { defaultIconProps } from '~/models/defaults'

export default component$<IconProps>(
    ({
        width = defaultIconProps.width,
        height = defaultIconProps.height,
        color = defaultIconProps.color,
    }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            width={width}
            height={height}
            stroke={color}
            fill={color}
        >
            <path d="M64 144c26.5 0 48-21.5 48-48s-21.5-48-48-48S16 69.5 16 96s21.5 48 48 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm48-208c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
        </svg>
    )
)
