import type { Colors } from '$lib/types'

import type { SharedProps } from '../base/El.type'

export const ALERT_VARIANTS = ['outlined', 'filled', 'ghost'] as const
export type AlertVariants = typeof ALERT_VARIANTS[number]

// TODO find better alternative to Omit...
export interface AlertProps extends Omit<SharedProps, 'color'> {
	color?: Colors
	dismissible?: boolean
	icon?: string | undefined
	title?: string | undefined
	variant?: AlertVariants
	value?: boolean
}
