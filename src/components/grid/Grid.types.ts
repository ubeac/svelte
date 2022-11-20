export const GRID_ALIGN_ITEMS = ['start', 'center', 'end', 'baseline', 'stretch'] as const
export type GridAlignItems = typeof GRID_ALIGN_ITEMS[number]

export const GRID_ALIGN_CONTENT = ['start', 'center', 'end', 'between', 'around', 'stretch'] as const
export type GridAlignContent = typeof GRID_ALIGN_CONTENT[number]

export const GRID_JUSTIFY = ['start', 'center', 'end', 'between', 'around'] as const
export type GridJustify = typeof GRID_JUSTIFY[number]
