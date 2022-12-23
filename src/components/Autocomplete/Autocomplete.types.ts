import type { ElProps } from '$lib/components'

export interface AutocompleteProps extends Partial<ElProps> {
	items?: (string | any)[]
	create?: boolean
	disabled?: boolean
	readonly?: boolean
	placeholder?: string
	sort?: boolean
	load?: (query: string) => Promise<any[]>
	value?: string | any | any[]
	multiple?: boolean
	key?: string
	text?: string
}
