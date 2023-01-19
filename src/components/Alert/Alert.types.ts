import type { Colors, ElProps } from '$lib/index.js'

export interface AlertProps extends Partial<ElProps> {
	color?: Colors
	dismissible?: boolean
	icon?: string | undefined
	title?: string | undefined
	value?: boolean
	filled?: boolean
}
