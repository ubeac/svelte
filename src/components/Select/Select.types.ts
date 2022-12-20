import type { ElProps } from '$lib/components'

declare type SelectSizes = 'sm' | 'md' | 'lg' | undefined
declare type SelectStates = 'valid' | 'invalid' | undefined

export interface SelectProps extends Partial<ElProps> {	
	value?: Array<any> | any
	size?: number | string
    selectSize?: SelectSizes
	disabled?: boolean
    multiple?: boolean
    items?: Array<any>
    selected?: boolean
    placeholder?: string
    state?:SelectStates
}
