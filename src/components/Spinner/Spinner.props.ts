import type { ElProps } from '$lib/components'

export interface SpinnerProps extends Partial<ElProps> {
	color?: Colors
	size?: 'sm' | 'md'
	role?: string
	animate?: 'border' | 'grow'
}
