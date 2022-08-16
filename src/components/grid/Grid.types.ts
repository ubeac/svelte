export const GRID_ALIGN_CONTENTS = [
	'start',
	'center',
	'end',
	'stretch',
	'between',
	'around',
	'evenly',
	'normal',
] as const
export type GridAlignContents = typeof GRID_ALIGN_CONTENTS[number]

export const GRID_ALIGN_ITEMS = ['start', 'center', 'end', 'stretch', 'normal'] as const
export type GridAlignItems = typeof GRID_ALIGN_ITEMS[number]

export const GRID_GUTTERS = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export type GridGutters = typeof GRID_GUTTERS[number]

export const GRID_JUSTIFY_CONTENTS = ['start', 'center', 'end', 'between', 'around', 'evenly', 'normal'] as const
export type GridJustifyContents = typeof GRID_JUSTIFY_CONTENTS[number]

export type GridReverse = boolean

export type GridVertical = boolean

export type GridWrap = boolean | 'reverse'
