import type {
	AutocompleteProps,
	CheckboxGroupProps,
	CheckboxProps,
	DatePickerProps,
	ElProps,
	FieldsetProps,
	FileUploaderProps,
	InputProps,
	InputStates,
	RadioGroupProps,
	SelectProps,
	SwitchProps,
} from '$lib/components/index.js'

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
export interface FormFileUploaderProps extends Partial<FormFieldProps>, Partial<FileUploaderProps> {}

export interface FormTextAreaProps extends Partial<FormInputProps> {
	rows?: number | string
}

export interface FormDatePickerProps extends Partial<FormFieldProps>, Partial<DatePickerProps> {}
export interface FormRadioGroupProps extends Partial<FormFieldProps>, Partial<RadioGroupProps> {}

export interface FormSelectProps extends Partial<FormFieldProps>, Partial<SelectProps> {}

export interface FormSwitchProps extends Partial<FormFieldProps>, Partial<SwitchProps> {}

export interface FormFieldsetProps extends Partial<FormFieldProps>, Partial<FieldsetProps> {}
