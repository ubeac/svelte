import type { ElProps } from '../Base'

export interface RadioProps extends Partial<ElProps> {
	disabled?: boolean
	placeholder?: string
	readonly?: boolean
	value?: any
	checked?: boolean
	name?: string
	label?: string
	color?: Colors
}
