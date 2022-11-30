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
	bgColor?: Colors
	borderless?: boolean
}

export interface CardHeaderProps extends Partial<ElProps> {
	light?: boolean
}
export interface CardFooterProps extends Partial<ElProps> {
	transparent?: boolean
}

declare type CardMediaPositions = undefined | 'top' | 'bottom'
export interface CardMediaProps extends Partial<ElProps> {
	elementPosition?: CardMediaPositions
}
