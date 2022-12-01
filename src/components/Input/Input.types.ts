import type { ElProps } from '../Base'

export const INPUT_SIZES = ['sm', 'md', 'lg'] as const
export type InputSizes = typeof INPUT_SIZES[number]

export interface InputProps extends Partial<ElProps> {
	disabled?: boolean
	placeholder?: string
	readonly?: boolean
	size?: InputSizes
	value?: unknown
}
