import type { ElProps } from '../Base/El.type'

// Badge Types
declare type BadgeShapes = 'pill' | 'default' | 'tile' | undefined

export interface BadgeProps extends Partial<ElProps> {
	color?: Colors
	shape?: BadgeShapes
	outline?: boolean
	ghost?: boolean
	href?: string
	dot?: boolean
	blink?: boolean
	notification?: boolean
}
