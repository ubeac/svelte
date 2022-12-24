import type {
	AutocompleteProps,
	CheckboxGroupProps,
	CheckboxProps,
	ElProps,
	InputProps,
	InputStates,
	RadioGroupProps,
} from '$lib/components'

export interface FormFieldProps extends Partial<ElProps> {
	/**
	 * Set the text label of FormField
	 */
	label?: string

	/**
	 * Set the FormField required
	 */
	required?: boolean
	/**
	 * Define hint for the FormField
	 */
	hint?: string
	/**
	 * Set the validation state of FormField
	 */
	state?: InputStates
}

export interface FormAutocompleteProps extends Partial<FormFieldProps>, Partial<AutocompleteProps> {}

export interface FormCheckboxGroupProps extends Partial<FormFieldProps>, Partial<CheckboxGroupProps> {}
export interface FormCheckboxProps extends Partial<FormFieldProps>, Partial<CheckboxProps> {}

export interface FormInputProps extends Partial<FormFieldProps>, Partial<InputProps> {}

export interface FormTextAreaProps extends Partial<FormInputProps> {
	rows?: number | string
}

export interface FormRadioGroupProps extends Partial<FormFieldProps>, Partial<RadioGroupProps> {}
