import type { ElProps } from '../Base'

export interface CheckboxProps extends Partial<ElProps> {
	color?: Colors
	description?: string
	disabled?: boolean
	label?: string
	inline?: boolean
	reverse?: boolean
	value?: boolean
}

export interface CheckboxGroupProps extends Partial<ElProps> {
	inline?: boolean
	color?: Colors
	items?: Array<any>
	reverse?: boolean
	value?: Array<any>
}
