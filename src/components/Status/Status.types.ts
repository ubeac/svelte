import type { ElProps } from '$lib/components/index.js'

export interface StatusProps extends Partial<ElProps> {
	color?: Colors
	lite?: boolean
}
