import type { ElProps } from '../Base'

export interface SwitchProps extends Partial<ElProps> {
	/**
	 * Color of Switch
	 */
	color?: Colors

	/**
	 * Description of Switch
	 */
	description?: string

	/**
	 * The color of escription
	 */
	descriptionColor?: string

	/**
	 * Show Multiple switch buttons in same line
	 */
	inline?: boolean

	/**
	 * Set id for Switch element.
	 */
	id?: string

	/**
	 * Forward all native Events
	 */
	forwardEvents?: any
	/**
	 * Sets text of Switch
	 */
	text?: string

	/**
	 * Value of Switch
	 */
	value?: boolean
}
