import type { ElProps, InputSizes, InputStates } from '$lib/index.js'

export interface FileUploaderProps extends Partial<ElProps> {
	accept?: string
	disabled?: boolean
	readonly?: boolean
	multiple?: boolean
	state?: InputStates
	size?: InputSizes
	value?: any
}
