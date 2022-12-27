import type { Colors, ElProps } from '$lib/components'

export type SpinnerSizes = 'sm' | 'lg'
export type SpinnerShapes = 'border' | 'grow'

export interface SpinnerProps extends Partial<ElProps> {
	color?: Colors
	size?: SpinnerSizes
	role?: string
	animate?: SpinnerShapes
}
