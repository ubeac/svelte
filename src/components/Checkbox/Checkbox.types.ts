import type { ElProps } from '../Base'

export interface CheckboxProps extends Partial<ElProps> {
	color?: Colors
	description?: string
	group?: any
	inline?: boolean
	key?: string
	text?: string
	value?: boolean
}
