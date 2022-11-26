import type { ElProps } from '$lib/components'

export interface StatusProps extends Partial<ElProps> {
	/**
	 *  animated of dot status
	 */
	animated?: boolean
	/**
	 * The color of status
	 */
	color?: Colors
	/**
	 * The type of status
	 */
	dot?: boolean
}
