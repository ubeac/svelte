export const BUTTON_SHAPE = ['circle', 'default', 'link', 'round', 'tile'] as const
export type ButtonShape = typeof BUTTON_SHAPE[number]

export const BUTTON_Size = ['sm', 'md', 'lg'] as const
export type ButtonSize = typeof BUTTON_Size[number]
