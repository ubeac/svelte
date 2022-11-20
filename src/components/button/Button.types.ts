import type { SharedProps } from '../Base/El.type'

export interface ButtonProps extends SharedProps {
	color?: Colors
	tag?: ButtonTags
	outline?: BooleanValues
	link?: BooleanValues
	type?: ButtonTypes
	value?: ButtonValues
	size?: ButtonSizes
	state?: ButtonStates
	toggle?: BooleanValues
}
