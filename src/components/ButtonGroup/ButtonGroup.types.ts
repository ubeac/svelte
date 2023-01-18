import type { ElProps } from '$lib/components/index.js'

// Button Group Types
declare type ButtonGroupSizes = 'sm' | 'lg' | 'md' | undefined
export interface ButtonGroupProps extends Partial<ElProps> {
	size?: ButtonGroupSizes
	vertical?: boolean
}
