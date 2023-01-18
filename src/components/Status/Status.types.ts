import type { Colors, ElProps } from '$lib/index.js'

export interface StatusProps extends Partial<ElProps> {
	color?: Colors
	lite?: boolean
}
