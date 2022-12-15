import type { ElProps } from '../Base'

export interface CheckboxProps extends Partial<ElProps> {
	color?: Colors
	description?: string
	label?: string
	inline?: boolean
	value?: boolean
}

export interface CheckboxGroupProps extends Partial<ElProps> {
	inline?: boolean
	color?: Colors
	items?: Array<any>
	value?: Array<any>
}
