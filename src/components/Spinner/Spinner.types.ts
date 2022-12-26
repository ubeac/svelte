import type { ElProps } from '$lib/components/index.js'

export interface SpinnerProps extends Partial<ElProps> {
	color?: Colors
	size?: 'sm' | 'md'
	role?: string
	animate?: 'border' | 'grow'
}
