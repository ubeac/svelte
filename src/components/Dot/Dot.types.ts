import type { Colors, ElProps } from '$lib/index.js'

export interface DotProps extends Partial<ElProps> {
	color?: Colors
	animated?: boolean
	indicator?: boolean
}
