// import type { Placement } from '@popperjs/core'
// export type MenuPlacements = Placement

export const MENU_PLACEMENTS = [
	'auto',
	'auto-start',
	'auto-end',
	'right',
	'right-start',
	'right-end',
	'left',
	'left-start',
	'left-end',
	'top',
	'top-start',
	'top-end',
	'bottom',
	'bottom-start',
	'bottom-end',
] as const

export type MenuPlacements = typeof MENU_PLACEMENTS[number]
