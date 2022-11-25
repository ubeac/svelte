// import type { Writable } from 'svelte/store'
import type { ElProps } from '$lib/components'

export interface AccordionsProps extends Partial<ElProps> {
	group?: string
	persistent?: boolean
}

export interface AccordionProps extends Partial<ElProps> {
	open?: boolean
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

// export type AccordionContext = Writable<{ id?: string; open?: boolean }>

// export type AccordionsContext = Writable<{ group: string; persistent: boolean; children: any[] }>
