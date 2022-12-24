import type { Options as RangeSliderOptions, target as RangeSliderTarget } from 'nouislider'

import type { ElProps } from '$lib/components'

export type { RangeSliderOptions, RangeSliderTarget }

export interface RangeSliderProps extends Partial<ElProps> {
	color?: Colors
	value?: any
	options?: RangeSliderOptions
	element?: RangeSliderTarget
}
