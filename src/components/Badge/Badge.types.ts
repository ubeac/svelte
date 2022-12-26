import type { ElProps } from '$lib/components/index.js'

export interface BadgeProps extends Partial<ElProps> {
	color?: Colors
	outline?: boolean
	ghost?: boolean
	href?: string
	dot?: boolean
	blink?: boolean
	notification?: boolean
	pill?: boolean
	tile?: boolean
}
