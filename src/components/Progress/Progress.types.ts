import type { ElProps } from '$lib/components'

declare type progressSizes = undefined | 'sm' | 'md'
export interface ProgressProps extends Partial<ElProps> {
	color?: Colors
	minValue?: string
	maxValue?: string
	currentValue?: string
	progressSize?: progressSizes
	indeterminate?: boolean
	visuallyHidden?: boolean
}
