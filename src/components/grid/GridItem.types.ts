
type Numbers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

export const GRID_ITEMS_ALIGN_SELFS = ['auto', 'stretch', 'start', 'center', 'end', 'default'] as const
export type GridItemAlignSelfs = typeof GRID_ITEMS_ALIGN_SELFS[number]

export const GRID_ITEMS_COLUMNS = ['auto', 'grow', 'hide', 'hide-up', 'hide-down', 'default'] as const
export type GridItemColumns = Numbers | typeof GRID_ITEMS_COLUMNS[number]

export type GridItemOffset = Numbers | undefined
export type GridItemOrder = Numbers | undefined
export type GridItemHide = boolean | undefined
