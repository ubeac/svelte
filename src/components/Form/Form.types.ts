import type {
	CheckboxGroupProps,
	CheckboxProps,
	ElProps,
	FieldsetProps,
	InputProps,
	InputStates,
	RadioGroupProps,
	RangeSliderProps,
	RangeSliderTarget,
	SelectProps,
} from '$lib/components'

export interface FormFieldProps extends Partial<ElProps> {
	label?: string
	required?: boolean
	hint?: string
	state?: InputStates
}

export interface FormCheckboxGroupProps extends Partial<FormFieldProps>, Partial<CheckboxGroupProps> {}
export interface FormCheckboxProps extends Partial<FormFieldProps>, Partial<CheckboxProps> {}

export interface FormInputProps extends Partial<FormFieldProps>, Partial<InputProps> {}

export interface FormTextAreaProps extends Partial<FormInputProps> {
	rows?: number | string
}

export interface FormRadioGroupProps extends Partial<FormFieldProps>, Partial<RadioGroupProps> {}

export interface FormSelectProps extends Partial<FormFieldProps>, Partial<SelectProps> {}

export interface FormRangeSliderProps extends Partial<FormFieldProps>, Partial<RangeSliderProps> {
	element?: RangeSliderTarget
}

export interface FormFieldsetProps extends Partial<FormFieldProps>, Partial<FieldsetProps> {}
