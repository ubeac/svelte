import type { ElProps } from '../Base/El.type'

export interface ButtonProps extends Partial<ElProps> {
	color?: Colors
	outline?: BooleanValues
	link?: BooleanValues
	type?: ButtonTypes
	value?: ButtonValues
	size?: ButtonSizes
	state?: ButtonStates
	toggle?: BooleanValues
}
