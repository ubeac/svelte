import type { ILPConfiguration } from 'litepicker/dist/types/interfaces'

import type { ElProps } from '../Base'

export interface DatePickerProps extends Partial<ElProps> {
	format?: string
	value?: Date | string | number
	options?: Partial<ILPConfiguration>
}
