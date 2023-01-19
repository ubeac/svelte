import type { Colors, ElProps } from '$lib'

declare type progressSizes = 'sm' | 'md'

export interface ProgressProps extends Partial<ElProps> {
	color?: Colors
	value?: string | number
	size?: progressSizes
	indeterminate?: boolean
	striped?: boolean | 'animated'
	label?: string
}
