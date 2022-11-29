import type { ElProps } from '../Base'

export interface BreadcrumbProps extends Partial<ElProps> {
	/**
	 * Change separator Icon between items
	 */
	separator?: 'arrows' | 'bullets' | 'dots'
}

export interface BreadcrumbItemProps extends Partial<ElProps> {
	/**
	 * Mark this as an active Breadcrumb item
	 */
	active?: boolean
	/**
	 * Set the Href of component
	 */
	href?: string
}
