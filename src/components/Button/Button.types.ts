import type { ElProps } from '../Base/El.type'

// Button Types
declare type ButtonTypes = 'submit' | 'button' | 'reset' | undefined
declare type ButtonTags = 'button' | 'a' | 'input' | undefined
declare type ButtonSizes = 'small' | 'large' | undefined
declare type ButtonValues = string | undefined
export interface ButtonProps extends Partial<ElProps> {
	color?: Colors
	outline?: boolean
	link?: boolean
	type?: ButtonTypes
	value?: ButtonValues
	size?: ButtonSizes
	loading?: boolean
	active?: boolean
	disabled?: boolean
	toggle?: boolean
	pill?: boolean
	tile?: boolean
}
