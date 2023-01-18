import type { ElProps } from '$lib/index.js'

export const AUTOCOMPLETE_SIZES = ['sm', 'md', 'lg'] as const
export type AutocompleteSizes = typeof AUTOCOMPLETE_SIZES[number]

export const AUTOCOMPLETE_STATES = ['valid', 'invalid'] as const
export type AutocompleteStates = typeof AUTOCOMPLETE_STATES[number]

export type AutocompleteLoad<T = any> = (query: string) => Promise<T[]>

export interface AutocompleteProps extends Partial<ElProps> {
	/**
	 * List of available items.
	 */
	items?: (string | any)[]
	/**
	 * Enable or disable create new option if there is no option.
	 */
	create?: boolean
	/**
	 * Set the FormAutocomplete disabled.
	 */
	disabled?: boolean
	/**
	 * Set placeholder for the FormAutocomplete
	 */
	placeholder?: string
	/**
	 * Enable or disable sorting
	 */
	sort?: boolean
	/**
	 * Load more options using async function.
	 */
	load?: AutocompleteLoad<string | number | any>
	/**
	 * the text Value of FormAutocomplete
	 */
	value?: string | any | any[]
	/**
	 * Choose multiple items.
	 */
	multiple?: boolean
	/**
	 * Set validation state of Autocomplete
	 */
	state?: AutocompleteStates
	/**
	 * TODO
	 */
	key?: string
	/**
	 * TODO
	 */
	text?: string
}
