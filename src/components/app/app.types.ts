export let APP_BODIES = ['stretch', 'center'] as const
export type AppBodies = typeof APP_BODIES[number]

export let APP_FOOTERS = ['grow', 'start', 'end', 'center'] as const
export type AppFooters = typeof APP_FOOTERS[number]

export let APP_HEADERS = ['grow', 'start', 'end', 'center'] as const
export type AppHeaders = typeof APP_HEADERS[number]

export let APP_STICKIES = [
	'header-start',
	'header',
	'header-end',
	'aside-start',
	'aside-end',
	'footer-start',
	'footer',
	'footer-end',
] as const
export type AppStickies = typeof APP_STICKIES[number][]
