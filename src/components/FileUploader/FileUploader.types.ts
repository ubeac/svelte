import type { ElProps, InputSizes } from '$lib/components'

export interface FileUploaderProps extends Partial<ElProps> {
	accept?: string
	disabled?: boolean
	placeholder?: string
	readonly?: boolean
	size?: InputSizes
	value?: any
}
