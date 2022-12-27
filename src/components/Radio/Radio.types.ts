import type { ElProps } from '$lib/components'

export interface RadioProps extends Partial<ElProps> {
	disabled?: boolean
	readonly?: boolean
	value?: any
	checked?: boolean
	name?: string
	label?: string
	color?: Colors
	inline?: boolean
	reverse?: boolean
	for?: string
}

export interface RadioGroupProps extends Partial<ElProps> {
	value?: any
	color?: Colors
	inline?: boolean
	reverse?: boolean
	items?: Array<any>
}
