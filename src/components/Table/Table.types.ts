import type { ElProps } from '$lib/components'

type TableResponsiveTypes = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TableSizes = 'sm' | 'md'

export interface TableProps extends Partial<ElProps> {
	/**
	 * Removes border between Rows.
	 */
	border?: boolean | '0' | 0
	/**
	 * Sets color of table.
	 */
	color?: ThemeColors
	/**
	 * Change the background color of Row on mouse hover.
	 */
	hover?: boolean
	/**
	 * Set different background color for even and odd rows.
	 */
	striped?: boolean | 'columns'
	/**
	 * Disable wraping text inside Cells.
	 */
	wrap?: boolean
	/**
	 * TODO
	 */
	sort?: boolean
	/**
	 * Set table size
	 */
	size?: TableSizes
	/**
	 * TODO
	 */
	responsive?: TableResponsiveTypes
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
	/**
	 * Sets color of table cell.
	 */
	 color?: ThemeColors
	 /**
	 * TODO
	 */
     active?: boolean
	  /**
	  * TODO
	  */
	 truncate?: boolean
	 /**
	  * TODO
	  */
	 colspan?: string | number
}

export interface TableFootProps extends Partial<ElProps> {
	//
}
export interface TableRowProps extends Partial<ElProps> {
	/**
	 * Sets color of table row.
	 */
	 color?: ThemeColors
	 /**
	  * TODO
	  */
	 active?: boolean
}
