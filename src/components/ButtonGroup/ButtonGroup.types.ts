import type { ElProps } from '$lib/components'

// Button Group Types
declare type ButtonGroupSizes = 'sm' | 'lg' | 'md' | undefined
export interface ButtonGroupProps extends Partial<ElProps> {
	size?: ButtonGroupSizes
	vertical?: boolean
}
