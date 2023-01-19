import type { ElProps } from '$lib'

export interface LabelProps extends Partial<ElProps> {
	/**
	 * Show a required indicator *
	 */
	required?: boolean
	/**
	 * Id of related form element
	 */
	for?: string
}
