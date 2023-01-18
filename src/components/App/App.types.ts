import type { ElProps, FooterProps } from '$lib/index.js'

export const THEME_NAMES = ['dark', 'light'] as const
export type Themes = typeof THEME_NAMES[number]

export interface AppProps extends Partial<ElProps> {
	theme?: Themes
}

export interface AppHeaderProps extends Partial<ElProps> {
	theme?: Themes
}

export interface AppFooterProps extends Partial<FooterProps> {
	theme?: Themes
}

export interface AppBodyProps extends Partial<FooterProps> {
	theme?: Themes
}
