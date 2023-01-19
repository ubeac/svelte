import type { ElProps } from '$lib'

export type OffcanvasPlacements = 'top' | 'end' | 'bottom' | 'start'

export interface OffcanvasProps extends Partial<ElProps> {
	placement?: OffcanvasPlacements
	noScroll?: boolean
	backdrop?: boolean
	autoClose?: boolean
	show?: boolean
	close?: () => void
}

export interface OffcanvasBodyProps extends Partial<ElProps> {
	//
}

export interface OffcanvasHeaderProps extends Partial<ElProps> {
	title?: string
}
