export type BooleanTypes = boolean

export const COLOR_TYPES = [
	'primary',
	'secondary',
	'success',
	'danger',
	'warning',
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
	'black',
	'gray-100',
	'gray-200',
	'gray-300',
	'gray-400',
	'gray-500',
	'gray-600',
	'gray-700',
	'gray-800',
	'gray-900',
	'white',
] as const

export type ColorTypes = typeof COLOR_TYPES[number]

export const BACKGROUND_COLOR_TYPES = [
	'primary',
	'secondary',
	'success',
	'danger',
	'warning',
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
	'black',
	'gray-100',
	'gray-200',
	'gray-300',
	'gray-400',
	'gray-500',
	'gray-600',
	'gray-700',
	'gray-800',
	'gray-900',
	'white',
	'transparent',
] as const
export type BackgroundColorTypes = typeof BACKGROUND_COLOR_TYPES[number]

export const OPACITY_TYPES = ['10', '25', '50', '75'] as const
export type OpacityTypes = typeof OPACITY_TYPES[number]

export const BORDER_SIZE_VALUES = ['0', '1', '2', '3', '4', '5'] as const
export type BorderSizeValues = typeof BORDER_SIZE_VALUES[number] | boolean

export const BORDER_ROUND_SIZE_VALUES = ['0', '1', '2', '3'] as const
export type BorderRoundSizeValues = typeof BORDER_ROUND_SIZE_VALUES[number]

export const BORDER_RADIUS_TYPES = ['top', 'end', 'bottom', 'start', 'circle', 'pill'] as const
export type BorderRadiusTypes = typeof BORDER_RADIUS_TYPES[number] | boolean
