import type { ElProps } from '$lib/components'

export const AUTOCOMPLETE_SIZES = ['sm', 'md', 'lg'] as const
export type AutocompleteSizes = typeof AUTOCOMPLETE_SIZES[number]

export const AUTOCOMPLETE_STATES = ['valid', 'invalid'] as const
export type AutocompleteStates = typeof AUTOCOMPLETE_STATES[number]

export interface AutocompleteProps extends Partial<ElProps> {
	debounce?: number
	disabled?: boolean
	items?: (string | any)[]
	key?: string | ((item: any) => string)
	placeholder?: string
	size?: AutocompleteSizes
	state?: AutocompleteStates
	value?: string | any | any[]
}
