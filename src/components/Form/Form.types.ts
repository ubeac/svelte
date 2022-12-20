import type { ElProps, InputProps, InputStates, RadioGroupProps } from '$lib/components'

export interface FormFieldProps extends Partial<ElProps> {
	label?: string
	required?: boolean
	hint?: string
	state?: InputStates
}

export interface FormInputProps extends Partial<FormFieldProps>, Partial<InputProps> {}

export interface FormTextAreaProps extends Partial<FormInputProps> {
	rows?: number | string
}

export interface FormRadioGroupProps extends Partial<FormFieldProps>, Partial<RadioGroupProps> {}
