import type { Writable } from 'svelte/store'

import type { ElProps } from '$lib/components'

declare type DropdownAlignments = 'start' | 'end'

export interface DropdownProps extends Partial<ElProps> {}

export interface DropdownItemsProps extends Partial<ElProps> {
	show?: boolean
	dark?: boolean
	dropdownAlignment?: DropdownAlignments
	dropdownAlignmentXs?: DropdownAlignments
	dropdownAlignmentSm?: DropdownAlignments
	dropdownAlignmentMd?: DropdownAlignments
	dropdownAlignmentLg?: DropdownAlignments
	dropdownAlignmentXl?: DropdownAlignments
	dropdownAlignmentXxl?: DropdownAlignments
}

export interface DropdownTogglerProps extends Partial<ElProps> {}

export interface DropdownColumnProps extends Partial<ElProps> {}
export interface DropdownColumnsProps extends Partial<ElProps> {}

export type DropdownContext = Writable<{ show?: boolean; margin?: number }>
