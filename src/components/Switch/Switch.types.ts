import type { Colors, ElProps } from '$lib/index.js'

export interface SwitchProps extends Partial<ElProps> {
	/**
	 * Color of Switch
	 */
	color?: Colors

	/**
	 * Show Multiple switch buttons in same line
	 */
	inline?: boolean

	/**
	 * Set id for Switch element.
	 */
	id?: string

	/**
	 * Sets text of Switch
	 */
	text?: string

	/**
	 * Value of Switch
	 */
	value?: boolean
	checked?: boolean
	reverse?: boolean
	disabled?: boolean
	description?: string
	role?: string
	type?: string
}
