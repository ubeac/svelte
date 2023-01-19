import type { Colors, ElProps } from '$lib/index.js'

declare type CardStatusPositions = undefined | 'top' | 'bottom' | 'start'
declare type CardStatusSizes = undefined | 'sm' | 'md' | 'lg'
declare type CardSizes = undefined | 'sm' | 'md' | 'lg'
declare type CardRotateDirections = undefined | 'left' | 'right'
declare type CardStates = undefined | 'active' | 'inactive'
declare type CardMediaPositions = 'top' | 'bottom' | 'start' | 'end'

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
	rotate?: CardRotateDirections
	state?: CardStates
	size?: CardSizes
}

export interface CardHeaderProps extends Partial<ElProps> {
	light?: boolean
}

export interface CardFooterProps extends Partial<ElProps> {
	transparent?: boolean
}

export interface CardMediaProps extends Partial<ElProps> {
	elementPosition?: CardMediaPositions
}
