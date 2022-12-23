import type { Options } from 'nouislider'

import type { ElProps } from '$lib/components'

declare type Orientations = 'horizontal' | 'vertical'

export interface RangeSliderProps extends Partial<ElProps> {
	color?: Colors
	value?: any
	options: Options
	orientation?: Orientations
}
