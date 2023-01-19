import type { Colors, ElProps } from '$lib'

export interface StatusProps extends Partial<ElProps> {
	color?: Colors
	lite?: boolean
}
