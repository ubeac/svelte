import type { ElProps } from '../Base/El.type'

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
