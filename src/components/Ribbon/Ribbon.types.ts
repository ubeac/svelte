import type { Colors, ElProps } from '$lib/index.js'

declare type RibbonPositions = undefined | 'top' | 'start' | 'end' | 'bottom'

export interface RibbonProps extends Partial<ElProps> {
	bgColor?: Colors
	elementPosition?: RibbonPositions
}
