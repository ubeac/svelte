import type { ElProps } from '$lib/components'

export interface StatusProps extends Partial<ElProps> {
	color?: Colors
	lite?: boolean
}
