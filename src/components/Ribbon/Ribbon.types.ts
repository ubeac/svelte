import type { Colors, ElProps } from '$lib/components'

declare type RibbonPositions = undefined | 'top' | 'start' | 'end' | 'bottom'

export interface RibbonProps extends Partial<ElProps> {
	bgColor?: Colors
	elementPosition?: RibbonPositions
}
