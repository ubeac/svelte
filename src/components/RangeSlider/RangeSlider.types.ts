import type { Options as RangeSliderOptions, target as RangeSliderTarget } from 'nouislider'

import type { ElProps } from '$lib/components'

export type { RangeSliderOptions, RangeSliderTarget }

declare type Directions = 'ltr' | 'rtl'
declare type Orientations = 'horizontal' | 'vertical'
declare type RangeSliderBehaviors = 'drag' | 'drag-all' | 'tap' | 'fixed' | 'snap' | 'unconstrained' | 'none'

export interface RangeSliderProps extends Partial<ElProps> {
	color?: Colors
	value?: any
	element?: RangeSliderTarget
	startValue: string
	step?: number | string
	format?: any
	mode?: string
	min: number | string
	max: number | string
	direction?: Directions
	orientation?: Orientations
	tooltips?: boolean
	connect?: 'lower' | 'upper' | boolean | boolean[]
	behaviour?: RangeSliderBehaviors[]
}
