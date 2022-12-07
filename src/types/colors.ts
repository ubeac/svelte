export const COLORS = [
	'primary',
	'secondary',
	'success',
	'warning',
	'danger',
	'info',
	'light',
	'dark',
	'blue',
	'azure',
	'indigo',
	'purple',
	'pink',
	'red',
	'orange',
	'yellow',
	'lime',
	'green',
	'teal',
	'cyan',
] as const

export type Colors = typeof COLORS[number]
