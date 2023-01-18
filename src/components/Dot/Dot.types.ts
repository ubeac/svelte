import type { Colors, ElProps } from '$lib/components'

export interface DotProps extends Partial<ElProps> {
	color?: Colors
	animated?: boolean
	indicator?: boolean
}
