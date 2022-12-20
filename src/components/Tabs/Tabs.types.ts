import type { Writable } from 'svelte/store'

import type { ElProps } from '../Base'

export type TabType = {
	id: string
	title?: string
	icon?: string
	iconEnd?: string
	disabled?: boolean
}

export interface TabsProps extends Partial<ElProps> {
	pills?: boolean
	fill?: boolean
	activeIndex?: number
	//
}
export interface TabProps extends Partial<ElProps> {
	active?: boolean
	disabled?: boolean
	title?: string
	icon?: string
	iconEnd?: string
}
export interface TabBodyProps extends Partial<ElProps> {
	//
}
export interface TabTitleProps extends Partial<ElProps> {
	//
}
export interface TabHeaderProps extends Partial<ElProps> {
	//
}
export interface TabItemProps extends Partial<ElProps> {
	tab?: TabType
	index?: number
	//
}

export interface CardTabsProps extends TabsProps {}

export type TabsContext = {
	register: (id: string, tab: Partial<TabType>) => number
	unregister: (id: string) => void
	selected: Writable<number>
}
