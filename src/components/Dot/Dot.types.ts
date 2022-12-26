import type { ElProps } from '$lib/components/index.js'

export interface DotProps extends Partial<ElProps> {
	color?: Colors
	animated?: boolean
	indicator?: boolean
}
