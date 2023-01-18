import type { Colors, ElProps } from '$lib/index.js'

export type SpinnerSizes = 'sm' | 'md' | 'lg'
export type SpinnerShapes = 'border' | 'grow'

export interface SpinnerProps extends Partial<ElProps> {
	color?: Colors
	size?: SpinnerSizes
	role?: string
	animate?: SpinnerShapes
}
