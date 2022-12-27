import type { ILPConfiguration } from 'litepicker/dist/types/interfaces'

import type { ElProps, InputSizes, InputStates } from '$lib/components'

export interface DatePickerProps extends Partial<ElProps> {
	format?: string
	value?: Date | string | number | Array<Date | string | number>
	options?: Partial<ILPConfiguration>
	disabled?: boolean
	placeholder?: string
	readonly?: boolean
	size?: InputSizes
	state?: InputStates
	borderRounded?: boolean
	borderFlush?: boolean
}
