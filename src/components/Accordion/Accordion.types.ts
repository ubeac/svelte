import type { Writable } from 'svelte/store'

import type { ElProps } from '$lib'

export interface AccordionsProps extends Partial<ElProps> {
	group?: string
	persistent?: boolean
}

export interface AccordionProps extends Partial<ElProps> {
	open?: boolean
	title?: string
}

export interface AccordionBodyProps extends Partial<ElProps> {
	//
}

export interface AccordionHeaderProps extends Partial<ElProps> {
	//
}

export interface AccordionTitleProps extends Partial<ElProps> {
	//
}

export type AccordionContext = Writable<{ open?: boolean }>

export type AccordionsContext = Writable<{ persistent: boolean; children: any[] }>
