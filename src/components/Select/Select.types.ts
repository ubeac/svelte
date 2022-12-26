import type { ElProps } from '$lib/components/index.js'

export const SELECT_SIZES = ['sm', 'md', 'lg'] as const
export type SelectSizes = typeof SELECT_SIZES[number]

export const SELECT_STATES = ['valid', 'invalid'] as const
export type SelectStates = typeof SELECT_STATES[number]

export interface SelectProps extends Partial<ElProps> {
	value?: Array<any> | any
	size?: number | string
	selectSize?: SelectSizes
	disabled?: boolean
	multiple?: boolean
	items?: Array<any>
	selected?: boolean
	placeholder?: string
	state?: SelectStates
}
