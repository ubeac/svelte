import type { ElProps, InputSizes, InputStates } from '$lib/components'

export interface FileUploaderProps extends Partial<ElProps> {
	accept?: string
	disabled?: boolean
	readonly?: boolean
	multiple?: boolean
	state?: InputStates
	size?: InputSizes
	value?: any
}
