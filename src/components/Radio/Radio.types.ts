import type { ElProps } from '../Base'

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
