import type { ElProps } from '../Base'

export const POPUP_PLACEMENTS = [
	'auto',
	'auto-start',
	'auto-end',
	'top',
	'top-start',
	'top-end',
	'bottom',
	'bottom-start',
	'bottom-end',
	'left',
	'left-start',
	'left-end',
	'right',
	'right-start',
	'right-end',
] as const
export type PopupPlacements = typeof POPUP_PLACEMENTS[number]

export type PopupTriggers = Array<'click' | 'focus' | 'hover'> | 'click' | 'focus' | 'hover'

export interface PopupProps extends Partial<ElProps> {
	disabled?: boolean
	fixedPosition?: boolean
	forwardEvents?: any
	popupOffset?: [number, number]
	persistent?: boolean
	placement?: PopupPlacements
	trigger?: PopupTriggers
}

export interface PopupArrowProps extends Partial<ElProps> {
	//
}
