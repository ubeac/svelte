import type { Colors, ElProps } from '$lib/components/index.js'

declare type CardStampPositions = undefined | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
declare type CardStampSizes = undefined | 'sm' | 'md' | 'lg'

export interface StampProps extends Partial<ElProps> {
	bgColor?: Colors
	textColor?: Colors
	iconPosition?: CardStampPositions
	size?: CardStampSizes
	icon?: string
}
