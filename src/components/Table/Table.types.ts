import type { Writable } from 'svelte/store'

import type { ElProps } from '$lib/components'

type TableSizes = 'sm' | 'md'

export interface TableProps extends Partial<ElProps> {
	/**
	 * Removes border between Rows.
	 */
	border?: boolean
	/**
	 * Change the background color of Row on mouse hover.
	 */
	hover?: boolean
	/**
	 * Set different background color for even and odd rows.
	 */
	striped?: boolean
	/**
	 * Disable wraping text inside Cells.
	 */
	wrap?: boolean
	/**
	 * Set table size
	 */
	size?: TableSizes
	/**
	 * Prefix of table's parent element
	 */
	tableParentCssPrefix?: string
}

export interface TableHeadProps extends Partial<ElProps> {
    // 
}

export interface TableBodyProps extends Partial<ElProps> {
	//
}

export interface TableCellProps extends Partial<ElProps> {
	//
}

export interface TableFootProps extends Partial<ElProps> {
	//
}
export interface TableRowProps extends Partial<ElProps> {
	//
}
