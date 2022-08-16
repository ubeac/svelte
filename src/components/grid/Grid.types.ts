export const GRID_ALIGN_CONTENTS = ['start', 'center', 'end', 'stretch', 'between', 'around', 'evenly', 'default'] as const
export type GridAlignContents = typeof GRID_ALIGN_CONTENTS[number]

export const GRID_ALIGN_ITEMS = ['start', 'center' ,'end' ,'stretch', 'default'] as const
export type GridAlignItems = typeof GRID_ALIGN_ITEMS[number]

export const GRID_GUTTERS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'none'] as const
export type GridGutters = typeof GRID_GUTTERS[number]

export const GRID_JUSTIFY_CONTENTS = ['start', 'center', 'end', 'between', 'around', 'evenly', 'default'] as const
export type GridJustifyContents = typeof GRID_JUSTIFY_CONTENTS[number]

export type GridReverse = boolean

export type GridVertical = boolean

export type GridWrap = boolean | 'reverse'
