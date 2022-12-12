import type { ElProps, InputSizes, InputStates } from '$lib/components'

export interface FormFieldProps extends Partial<ElProps> {
	label?: string
	required?: boolean
	hint?: string
	state?: InputStates
}

export interface FormInputProps extends Partial<FormFieldProps> {
	disabled?: boolean
	placeholder?: string
	readonly?: boolean
	size?: InputSizes
	value?: any
	borderRounded?: boolean
	borderFlush?: boolean
}
