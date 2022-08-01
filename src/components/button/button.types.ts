export const BUTTON_SHAPES = ['default', 'round', 'tile', 'circle', 'link'] as const
export type ButtonShapes = typeof BUTTON_SHAPES[number]

export const BUTTON_SIZES = ['sm', 'md', 'lg'] as const
export type ButtonSizes = typeof BUTTON_SIZES[number]
