import type { ElProps } from '$lib/components'

declare type CardStatusPositions = undefined | 'top' | 'bottom' | 'start'
declare type CardStatusSizes = undefined | 'sm' | 'md' | 'lg'

export interface CardProps extends Partial<ElProps> {
	title?: string
	stacked?: boolean
	statusCssPrefix?: string
	status?: boolean
	statusColor?: Colors
	statusPosition?: CardStatusPositions
	statusSize?: CardStatusSizes
}

export interface CardFooterProps extends Partial<ElProps> {
	transparent?: boolean
}

declare type CardMediaPositions = undefined | 'top' | 'start' | 'middle' | 'end' | 'bottom'
export interface CardMediaProps extends Partial<ElProps> {
	mediaPosition?: CardMediaPositions
}

// export const CARD_MEDIA_PLACEMENTS = ['top', 'start', 'middle', 'end', 'bottom'] as const
// export type CardMediaPlacements = typeof CARD_MEDIA_PLACEMENTS[number]
