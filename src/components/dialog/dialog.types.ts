export type DialogPlacements = 'top' | 'center'

const DIALOG_SIZES = ['sm', 'md', 'lg'] as const
export type DialogSizes = typeof DIALOG_SIZES[number]
