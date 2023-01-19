import type { Colors, ElProps } from '$lib'

export interface DotProps extends Partial<ElProps> {
	color?: Colors
	animated?: boolean
	indicator?: boolean
}
