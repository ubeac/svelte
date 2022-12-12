import type { ElProps } from '$lib/components'

declare type DividerAlignments = 'start' | 'center' | 'end'

export interface DividerProps extends Partial<ElProps> {
	color?: Colors
	alignment?: DividerAlignments
}
