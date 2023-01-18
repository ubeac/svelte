import type { Colors, ElProps } from '$lib/index.js'

export interface RadioProps extends Partial<ElProps> {
	disabled?: boolean
	readonly?: boolean
	value?: any
	checked?: boolean
	description?: string
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
