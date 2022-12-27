import type { ElProps } from '../Base'

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
	label?: string

	/**
	 * Value of Switch
	 */
	value?: boolean
	checked?: boolean
	description?: string
	role?: string
	type?: string
}
