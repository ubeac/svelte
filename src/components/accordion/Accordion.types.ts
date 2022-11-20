import type { Writable } from 'svelte/store'

import type { SharedProps } from '../base/El.type'

export interface AccordionProps extends SharedProps {
	open?: boolean
	id?: string
}

export interface AccordionsProps extends SharedProps {
	group?: string
	persistent?: boolean
}

export interface AccordionBodyProps extends SharedProps {
	//
}

export interface AccordionHeaderProps extends SharedProps {
	//
}

export interface AccordionTitleProps extends SharedProps {
	//
}

export type AccordionContext = Writable<{ id?: string; open?: boolean }>

export type AccordionsContext = Writable<{ group: string; persistent: boolean; children: any[] }>
