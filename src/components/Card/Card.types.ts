import type { ElProps } from '$lib/components'

export interface CardProps extends Partial<ElProps> {
	title?: string
}

export interface CardFooterProps extends Partial<ElProps> {
	transparent?: boolean
}

declare type CardStatusPositions = undefined | 'top' | 'bottom' | 'start'
// export const CARD_STATUS_SIZES = ['sm', 'md', 'lg'] as const
// export type CardStatusSizes = typeof CARD_STATUS_SIZES[number]
declare type CardStatusSizes = undefined | 'sm' | 'md' | 'lg'

export interface CardStatusProps extends Partial<ElProps> {
	color?: Colors
	colorPosition?: CardStatusPositions
	size?: CardStatusSizes
}

declare type CardStampPositions = undefined | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
declare type CardStampSizes = undefined | 'sm' | 'md' | 'lg'
export interface CardStampProps extends Partial<ElProps> {
	color?: Colors
	iconPosition?: CardStampPositions
	size?: CardStampSizes
	icon?: string
}

export const CARD_MEDIA_PLACEMENTS = ['top', 'start', 'middle', 'end', 'bottom'] as const
export type CardMediaPlacements = typeof CARD_MEDIA_PLACEMENTS[number]

// export const CARD_STAMP_POSITIONS = ['top-start', 'top-end', 'bottom-start', 'bottom-end'] as const
// export type CardStampPositions = typeof CARD_STAMP_POSITIONS[number]

// export const CARD_STAMP_SIZES = ['sm', 'md', 'lg'] as const
// export type CardStampSizes = typeof CARD_STAMP_SIZES[number]

// export const CARD_STATUS_SIZES = ['sm', 'md', 'lg'] as const
// export type CardStatusSizes = typeof CARD_STATUS_SIZES[number]
