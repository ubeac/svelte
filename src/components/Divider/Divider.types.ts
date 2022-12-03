import type { ElProps } from '$lib/components'

declare type dividerPositions = undefined | 'left' | 'center' | 'right'
export interface DividerProps extends Partial<ElProps> {
	color?: Colors
	dividerPosition?: dividerPositions
}
