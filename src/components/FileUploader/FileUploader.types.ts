import type { ElProps, InputSizes, InputStates } from '$lib'

export interface FileUploaderProps extends Partial<ElProps> {
	accept?: string
	disabled?: boolean
	readonly?: boolean
	multiple?: boolean
	state?: InputStates
	size?: InputSizes
	value?: any
}
