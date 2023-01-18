import type { ElProps } from '$lib/index.js'

export interface PageProps extends Partial<ElProps> {
	title?: string
	preTitle?: string
}

export interface PageBodyProps extends Partial<ElProps> {}
export interface PageHeaderProps extends Partial<ElProps> {}
