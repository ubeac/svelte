import type { ElProps } from '$lib/components'

declare type CardStampPositions = undefined | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
declare type CardStampSizes = undefined | 'sm' | 'md' | 'lg'
export interface StampProps extends Partial<ElProps> {
	color?: Colors
	iconPosition?: CardStampPositions
	size?: CardStampSizes
	icon?: string
}
